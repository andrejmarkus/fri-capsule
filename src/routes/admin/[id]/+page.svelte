<script lang="ts">
  import { dbSubjects } from "$lib/db/repository";
  import { Subject, Theme, Question, Answer } from "$lib/db/models";
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";

  $: currentId = $page.params.id;

  let subject: Subject | null = null;
  let loading = true;

  $: if (currentId) {
    loadSubject(currentId);
  }

  async function loadSubject(targetId: string) {
    loading = true;
    try {
      subject = await dbSubjects.findById(targetId);
    } catch (e) {
      console.error(e);
    } finally {
      loading = false;
    }
  }

  async function saveSubject() {
    if (!subject) return;
    try {
      subject.updatedAt = new Date();
      const newId = subject.id.toLowerCase().trim();

      // If full name is empty, just use the slug capitalized
      if (!subject.name) subject.name = newId.toUpperCase();

      // Stripping custom class instances to satisfy Firestore plain object requirement
      const plainSubject = JSON.parse(JSON.stringify(subject));

      if (newId !== currentId) {
        // ID has changed, we must create a new document and delete the old one
        if (
          !confirm(
            `Zmenil si ID z "${currentId}" na "${newId}". To zmení aj URL adresu predmetu. Pokračovať?`,
          )
        ) {
          return;
        }

        plainSubject.id = newId;
        await dbSubjects.create(plainSubject);
        if (currentId) await dbSubjects.delete(currentId);

        alert("ID predmetu zmenené!");
        // Navigation to the new URL
        goto(`/admin/${newId}`);
      } else {
        // Just a normal update
        await dbSubjects.update(plainSubject);
        alert("Predmet uložený!");
      }
    } catch (e: any) {
      console.error(e);
      alert("Chyba pri ukladaní: " + (e.message || "Unknown error"));
    }
  }

  async function deleteSubject() {
    if (!currentId || !confirm("Naozaj chceš zmazať celý predmet?")) return;
    try {
      await dbSubjects.delete(currentId);
      goto("/admin");
    } catch (e: any) {
      console.error(e);
      alert("Chyba pri mazaní: " + (e.message || "Unknown error"));
    }
  }

  async function addTheme() {
    if (!subject) return;
    const themeName = prompt("Meno novej témy:");
    if (!themeName) return;

    try {
      const newTheme = new Theme();
      newTheme.name = themeName;
      newTheme.questions = [];

      subject.themes = [...(subject.themes || []), newTheme];
      // Stripping custom class instances to satisfy Firestore plain object requirement
      const plainSubject = JSON.parse(JSON.stringify(subject));
      await dbSubjects.update(plainSubject);
      if (currentId) await loadSubject(currentId);
    } catch (e: any) {
      console.error(e);
      alert("Chyba: " + e.message);
    }
  }

  async function removeTheme(index: number) {
    if (
      !subject ||
      !confirm("Naozaj chceš zmazať túto tému aj so všetkými otázkami?")
    )
      return;
    try {
      subject.themes.splice(index, 1);
      subject.themes = [...subject.themes];
      // Stripping custom class instances to satisfy Firestore plain object requirement
      const plainSubject = JSON.parse(JSON.stringify(subject));
      await dbSubjects.update(plainSubject);
      if (currentId) await loadSubject(currentId);
    } catch (e: any) {
      console.error(e);
      alert("Chyba: " + e.message);
    }
  }
</script>

<div class="max-w-7xl mx-auto p-4 md:p-8 pt-8 md:pt-16">
  <div class="mb-12">
    <a
      href="/admin"
      class="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-emerald-500 transition-colors"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-4 h-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"><path d="m15 18-6-6 6-6" /></svg
      >
      Späť na zoznam
    </a>
  </div>

  {#if loading}
    <div
      class="flex flex-col items-center justify-center py-24 gap-4 text-white"
    >
      <div
        class="w-12 h-12 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin"
      ></div>
      <p
        class="text-[10px] text-slate-500 font-black tracking-widest uppercase italic animate-pulse"
      >
        Prebúdzam dáta...
      </p>
    </div>
  {:else if !subject}
    <div
      class="bg-slate-900/40 p-16 rounded-3xl border border-white/5 text-center"
    >
      <p class="text-slate-500 font-black uppercase tracking-[0.2em] italic">
        Predmet s ID {currentId} nebol nájdený.
      </p>
    </div>
  {:else}
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-start">
      <!-- Edit Metadata Section -->
      <div
        class="bg-slate-900/40 backdrop-blur-md p-8 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden h-fit"
      >
        <!-- Top Accent Gradient -->
        <div
          class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-indigo-600 opacity-50"
        ></div>

        <h1
          class="text-4xl md:text-5xl font-black font-oswald text-white uppercase italic tracking-tighter mb-8 leading-[0.9]"
        >
          NASTAVENIA <span class="text-emerald-500 text-6xl block mt-2"
            >{subject.id.toUpperCase()}</span
          >
        </h1>

        <div class="space-y-6">
          <div class="space-y-2">
            <label
              class="block text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]"
              for="id">ID / URL Slug</label
            >
            <input
              id="id"
              bind:value={subject.id}
              class="w-full bg-slate-950 border border-white/5 rounded-2xl p-4 text-white font-black italic tracking-tighter text-2xl uppercase focus:border-emerald-500/40 outline-none transition-all"
              placeholder="piks"
            />
            <p
              class="text-[9px] text-slate-600 font-bold uppercase tracking-widest leading-relaxed"
            >
              Pozor: Zmena ID zmení URL adresu a znefunkční existujúce linky.
            </p>
          </div>

          <div class="space-y-2">
            <label
              class="block text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]"
              for="name">Zobrazovaný názov</label
            >
            <input
              id="name"
              bind:value={subject.name}
              class="w-full bg-slate-950 border border-white/5 rounded-2xl p-4 text-white font-medium focus:border-emerald-500/40 outline-none transition-all uppercase tracking-tight"
              placeholder="CELÝ NÁZOV"
            />
          </div>

          <div class="space-y-2">
            <label
              class="block text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]"
              for="description">Popis predmetu</label
            >
            <textarea
              id="description"
              bind:value={subject.description}
              class="w-full bg-slate-950 border border-white/5 rounded-2xl p-4 text-white text-sm font-medium focus:border-emerald-500/40 outline-none transition-all uppercase italic"
              rows="3"
              placeholder="NA ČO SA ŠTUDENT PRIPRAVÍ?"
            />
          </div>

          <div class="space-y-2">
            <label
              class="block text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]"
              for="color">Farba Gradientu (Tailwind)</label
            >
            <input
              id="color"
              bind:value={subject.color}
              class="w-full bg-slate-950 border border-white/5 rounded-2xl p-4 text-emerald-500 font-black tracking-widest text-xs font-mono focus:border-emerald-500/40 outline-none transition-all"
              placeholder="from-emerald-500 to-emerald-700"
            />
          </div>

          <div class="h-px bg-white/5 my-8"></div>

          <button
            on:click={deleteSubject}
            class="bg-rose-900/10 hover:bg-rose-600/20 text-rose-500 border border-rose-500/20 px-8 py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all w-full mb-4"
          >
            ZMAZAŤ CELÝ PREDMET
          </button>

          <button
            on:click={saveSubject}
            class="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-xl shadow-emerald-900/40 w-full transform hover:scale-[1.02] active:scale-[0.98]"
          >
            ULOŽIŤ ZMENY
          </button>
        </div>
      </div>

      <!-- Themes Management Section -->
      <div class="lg:col-span-2 space-y-8 h-fit">
        <div
          class="flex flex-col sm:flex-row justify-between items-center bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-white/5 gap-4"
        >
          <div>
            <h2
              class="text-3xl font-black font-oswald uppercase italic text-white tracking-tighter leading-none"
            >
              KATALÓG <span class="text-emerald-500 text-4xl">TÉM</span>
            </h2>
            <p
              class="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mt-2"
            >
              Spravuj okruhy otázok pre tento predmet
            </p>
          </div>
          <button
            on:click={addTheme}
            class="bg-white/10 hover:bg-emerald-500 text-white px-6 py-4 rounded-2xl transition-all font-black text-xs uppercase tracking-widest w-full sm:w-auto shadow-xl"
          >
            + PRIDAŤ TÉMU
          </button>
        </div>

        <div class="grid gap-4">
          {#each subject.themes || [] as theme, i}
            <div
              class="bg-slate-900/40 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6 group hover:border-emerald-500/20 transition-all duration-300"
            >
              <div class="flex items-center gap-6 text-center sm:text-left">
                <div
                  class="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center"
                >
                  <span
                    class="text-emerald-500 font-black italic uppercase font-oswald text-xl"
                    >{i + 1}</span
                  >
                </div>
                <div>
                  <h3
                    class="text-2xl font-black font-oswald text-white uppercase italic tracking-tighter leading-none mb-2"
                  >
                    {theme.name}
                  </h3>
                  <div
                    class="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 rounded-full"
                  >
                    <div
                      class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"
                    ></div>
                    <span
                      class="text-[10px] text-emerald-500 font-black uppercase tracking-widest"
                      >{theme.questions?.length || 0} OTÁZOK</span
                    >
                  </div>
                </div>
              </div>
              <div class="flex gap-3 w-full sm:w-auto mt-4 sm:mt-0">
                <a
                  href="/admin/{currentId}/themes/{i}"
                  class="flex-grow sm:flex-grow-0 bg-emerald-600/10 hover:bg-emerald-500 text-emerald-500 hover:text-white px-6 py-4 rounded-xl transition-all text-[10px] font-black uppercase tracking-widest text-center border border-emerald-500/20 shadow-lg"
                >
                  UPRAVIŤ OTÁZKY
                </a>
                <button
                  on:click={() => removeTheme(i)}
                  class="bg-rose-900/10 hover:bg-rose-600/20 text-rose-500 px-4 py-4 rounded-xl border border-rose-500/20 transition-all text-[10px] font-black uppercase tracking-widest"
                >
                  ZMAZAŤ
                </button>
              </div>
            </div>
          {/each}

          {#if !subject.themes?.length}
            <div
              class="py-12 text-center border-2 border-dashed border-white/5 rounded-3xl"
            >
              <p
                class="text-slate-600 font-black uppercase tracking-[0.2em] text-[10px]"
              >
                Tento predmet momentálne nemá žiadne témy.
              </p>
            </div>
          {/if}
        </div>
      </div>
    </div>
  {/if}
</div>
