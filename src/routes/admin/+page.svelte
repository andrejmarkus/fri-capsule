<script lang="ts">
  import { dbSubjects } from "$lib/db/repository";
  import { Subject } from "$lib/db/models";
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";

  let subjects: Subject[] = [];
  let loading = true;

  onMount(async () => {
    await refreshSubjects();
  });

  async function refreshSubjects() {
    loading = true;
    try {
      subjects = await dbSubjects.find();
    } catch (e) {
      console.error(e);
    } finally {
      loading = false;
    }
  }

  async function addSubject() {
    const rawId = prompt("Zadaj skratku/ID predmetu (napr. PIKS):");
    if (!rawId) return;

    try {
      const slug = rawId.toLowerCase().trim();

      const newSubject = new Subject();
      newSubject.id = slug; // This is the Firestore document ID and URL slug (LOWERCASE)
      newSubject.name = slug.toUpperCase(); // Default full name to uppercase ID
      newSubject.description = "Nová sekcia štúdia.";
      newSubject.color = "from-emerald-500 to-emerald-700";
      newSubject.themes = [];
      newSubject.updatedAt = new Date();

      // Stripping custom class instances to satisfy Firestore plain object requirement
      const plainSubject = JSON.parse(JSON.stringify(newSubject));
      await dbSubjects.create(plainSubject);

      // "Pro" UX: Auto-navigate to the new subject detail page
      goto(`/admin/${slug}`);
    } catch (e: any) {
      console.error(e);
      alert("Chyba pri vytváraní: " + (e.message || "Unknown error"));
    }
  }

  async function deleteSubject(id: string) {
    if (!confirm(`Naozaj chceš zmazať predmet ${id}?`)) return;
    await dbSubjects.delete(id);
    await refreshSubjects();
  }
</script>

<div class="max-w-7xl mx-auto p-4 md:p-8 pt-8 md:pt-16">
  <div
    class="flex flex-col sm:flex-row justify-between items-center gap-6 mb-12"
  >
    <div class="text-center sm:text-left">
      <h1
        class="text-4xl md:text-5xl font-black font-oswald text-white uppercase italic tracking-tighter mb-2"
      >
        SPRÁVA <span class="text-emerald-500">PREDMETOV</span>
      </h1>
      <p
        class="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]"
      >
        Digitálna študovňa FRI CAPSULE
      </p>
    </div>
    <button
      on:click={addSubject}
      class="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-sm transition-all shadow-xl shadow-emerald-900/40 w-full sm:w-auto transform hover:scale-[1.02] active:scale-[0.98]"
    >
      + PRIDAŤ PREDMET
    </button>
  </div>

  {#if loading}
    <div class="flex flex-col items-center justify-center py-24 gap-4">
      <div
        class="w-12 h-12 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin"
      ></div>
      <p
        class="text-[10px] text-slate-500 font-black tracking-widest uppercase animate-pulse"
      >
        Načítavam katalóg...
      </p>
    </div>
  {:else if subjects.length === 0}
    <div
      class="bg-slate-900/40 border border-white/5 rounded-3xl p-16 text-center backdrop-blur-sm"
    >
      <p class="text-slate-500 font-bold uppercase tracking-widest text-sm">
        Žiadne predmety neboli nájdené.
      </p>
    </div>
  {:else}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each subjects as subject}
        <div
          class="bg-slate-900/40 backdrop-blur-md p-8 rounded-3xl border border-white/5 flex flex-col justify-between group hover:border-emerald-500/30 transition-all duration-300"
        >
          <div>
            <div class="flex justify-between items-start mb-6">
              <div
                class="w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-xl shadow-emerald-950/50"
              >
                <span
                  class="text-white font-black text-xl italic uppercase font-oswald"
                  >{subject.id}</span
                >
              </div>
              <div
                class="px-3 py-1 bg-white/5 rounded-full border border-white/5"
              >
                <span
                  class="text-[9px] text-slate-500 font-black uppercase tracking-widest"
                  >{subject.themes?.length || 0} tém</span
                >
              </div>
            </div>
            <h2
              class="text-2xl font-black font-oswald text-white uppercase tracking-tight mb-2 group-hover:text-emerald-500 transition-colors uppercase leading-[0.9]"
            >
              {subject.name || subject.id}
            </h2>
            <p
              class="text-slate-400 text-sm font-medium leading-relaxed line-clamp-2 uppercase italic opacity-70 mb-8"
            >
              {subject.description || "Žiadny popis."}
            </p>
          </div>

          <div class="flex gap-3 pt-6 border-t border-white/5">
            <a
              href="/admin/{subject.id}"
              class="flex-grow bg-white/5 hover:bg-white/10 text-white px-4 py-3 rounded-xl transition text-[10px] font-black uppercase tracking-widest text-center"
            >
              UPRAVIŤ
            </a>
            <button
              on:click={() => deleteSubject(subject.id)}
              class="bg-rose-900/20 hover:bg-rose-600/20 text-rose-500 px-4 py-3 rounded-xl border border-rose-500/10 transition text-[10px] font-black uppercase tracking-widest"
            >
              ZMAZAŤ
            </button>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>
