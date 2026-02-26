<script lang="ts">
  import { dbSubjects } from "$lib/db/repository";
  import { Subject, Theme, Question, Answer } from "$lib/db/models";
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";

  const { id, themeIdx } = $page.params;
  const themeIndex = parseInt(themeIdx);

  let subject: Subject | null = null;
  let loading = true;

  onMount(async () => {
    await loadSubject();
  });

  async function loadSubject() {
    loading = true;
    try {
      subject = await dbSubjects.findById(id);
    } catch (e) {
      console.error(e);
    } finally {
      loading = false;
    }
  }

  async function save() {
    if (!subject) return;
    try {
      // Stripping custom class instances to satisfy Firestore plain object requirement
      const plainSubject = JSON.parse(JSON.stringify(subject));
      await dbSubjects.update(plainSubject);
      alert("Uložené!");
    } catch (e: any) {
      console.error(e);
      alert("Chyba pri ukladaní: " + (e.message || "Unknown error"));
    }
  }

  function addQuestion() {
    if (!subject || !subject.themes[themeIndex]) return;
    const newQuestion = new Question();
    newQuestion.question = "Nová otázka";
    newQuestion.answers = [
      { answer: "Správna odpoveď", isCorrect: true },
      { answer: "Nesprávna odpoveď", isCorrect: false },
    ];
    subject.themes[themeIndex].questions = [
      ...(subject.themes[themeIndex].questions || []),
      newQuestion,
    ];
    subject = subject; // trigger reactivity
  }

  function addAnswer(qIdx: number) {
    if (!subject) return;
    const newAnswer = new Answer();
    newAnswer.answer = "";
    newAnswer.isCorrect = false;
    subject.themes[themeIndex].questions[qIdx].answers = [
      ...(subject.themes[themeIndex].questions[qIdx].answers || []),
      newAnswer,
    ];
    subject = subject;
  }

  function removeQuestion(qIdx: number) {
    if (!subject || !confirm("Zmazať otázku?")) return;
    subject.themes[themeIndex].questions.splice(qIdx, 1);
    subject.themes[themeIndex].questions = [
      ...subject.themes[themeIndex].questions,
    ];
    subject = subject;
  }

  function removeAnswer(qIdx: number, aIdx: number) {
    if (!subject) return;
    subject.themes[themeIndex].questions[qIdx].answers.splice(aIdx, 1);
    subject.themes[themeIndex].questions[qIdx].answers = [
      ...subject.themes[themeIndex].questions[qIdx].answers,
    ];
    subject = subject;
  }
</script>

<div class="max-w-7xl mx-auto p-4 md:p-8 pt-8 md:pt-16 text-white pb-32">
  <div class="mb-12">
    <a
      href="/admin/{id}"
      class="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-emerald-500 transition-colors bg-white/5 px-4 py-2 rounded-xl border border-white/5"
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
      Späť na predmet
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
  {:else if !subject || !subject.themes[themeIndex]}
    <div
      class="bg-slate-900/40 p-16 rounded-3xl border border-white/5 text-center"
    >
      <p
        class="text-slate-500 font-black uppercase tracking-[0.2em] italic text-sm"
      >
        Téma nebola nájdená.
      </p>
    </div>
  {:else}
    <div
      class="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12"
    >
      <div class="flex-grow">
        <h1
          class="text-4xl md:text-6xl font-black font-oswald text-white uppercase italic tracking-tighter leading-none mb-4"
        >
          TÉMA: <span class="text-emerald-500"
            >{subject.themes[themeIndex].name}</span
          >
        </h1>
        <div class="flex flex-wrap gap-4">
          <span
            class="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-400"
            >PRÍSLUŠNOSŤ: {subject.id.toUpperCase()}</span
          >
          <span
            class="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-[10px] font-black uppercase tracking-widest text-emerald-500"
            >CELKOM {subject.themes[themeIndex].questions?.length || 0} OTÁZOK</span
          >
        </div>
      </div>
      <div class="flex gap-4 w-full lg:w-auto">
        <button
          on:click={save}
          class="flex-grow lg:flex-grow-0 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-xl shadow-emerald-900/40 transform hover:scale-[1.05] active:scale-[0.95]"
        >
          ULOŽIŤ VŠETKO
        </button>
      </div>
    </div>

    <!-- Questions List -->
    <div class="grid gap-8">
      {#each subject.themes[themeIndex].questions || [] as q, qIdx}
        <div
          class="bg-slate-900/40 backdrop-blur-md p-6 md:p-10 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden group hover:border-emerald-500/20 transition-all duration-300"
        >
          <!-- Side Accent Glow -->
          <div class="absolute inset-y-0 left-0 w-1 bg-emerald-500/20"></div>

          <div
            class="flex flex-col sm:flex-row justify-between items-start gap-6 mb-10"
          >
            <div class="flex-grow w-full">
              <label
                class="block text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-4"
              >
                <span
                  class="w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center font-oswald text-lg italic tracking-tight"
                  >{qIdx + 1}</span
                >
                TEXT OTÁZKY
              </label>
              <textarea
                bind:value={q.question}
                class="w-full bg-slate-950/50 border border-white/5 rounded-2xl p-6 text-white font-bold text-lg focus:border-emerald-500/40 outline-none transition-all placeholder:text-slate-800"
                rows="2"
                placeholder="Sem napíš znenie otázky..."
              />
            </div>
            <button
              on:click={() => removeQuestion(qIdx)}
              class="w-full sm:w-auto bg-rose-900/10 hover:bg-rose-600 text-rose-500 hover:text-white px-6 py-4 rounded-xl border border-rose-500/20 transition-all text-[10px] font-black uppercase tracking-widest whitespace-nowrap"
            >
              ODSTRÁNIŤ OTÁZKU
            </button>
          </div>

          <!-- Answers Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            {#each q.answers || [] as a, aIdx}
              <div
                class="flex flex-col gap-3 p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/[0.07] transition-colors relative group/answer"
              >
                <div class="flex justify-between items-center px-1">
                  <label
                    class="text-[9px] text-slate-500 font-black uppercase tracking-widest"
                    >Odpoveď {aIdx + 1}</label
                  >
                  <div class="flex items-center gap-3">
                    <span
                      class="text-[9px] font-black uppercase tracking-widest {a.isCorrect
                        ? 'text-emerald-500'
                        : 'text-slate-600'}">Správna?</span
                    >
                    <input
                      type="checkbox"
                      bind:checked={a.isCorrect}
                      class="w-4 h-4 accent-emerald-500 cursor-pointer"
                    />
                  </div>
                </div>
                <div class="flex gap-2">
                  <textarea
                    bind:value={a.answer}
                    class="flex-grow bg-slate-950/80 border border-white/5 rounded-xl p-4 text-white text-sm focus:border-emerald-500/40 outline-none transition-all placeholder:text-slate-800"
                    rows="2"
                    placeholder="Text odpovede..."
                  />
                  <button
                    on:click={() => removeAnswer(qIdx, aIdx)}
                    class="px-3 bg-rose-900/10 hover:bg-rose-500/20 text-rose-500 rounded-xl transition-all border border-rose-500/10"
                    title="Odstrániť odpoveď"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      ><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg
                    >
                  </button>
                </div>
              </div>
            {/each}

            <!-- Add Answer Placeholder -->
            <button
              on:click={() => addAnswer(qIdx)}
              class="flex items-center justify-center p-6 border-2 border-dashed border-white/5 rounded-3xl hover:border-emerald-500/30 transition-all text-slate-500 hover:text-emerald-500 group/add"
            >
              <div class="flex items-center gap-3">
                <span
                  class="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center font-bold"
                  >+</span
                >
                <span class="text-[10px] font-black uppercase tracking-widest"
                  >PRIDAŤ ODPOVEĎ</span
                >
              </div>
            </button>
          </div>
        </div>
      {/each}
    </div>

    <!-- Floating Action Button at Bottom -->
    <div
      class="fixed bottom-8 left-1/2 -translate-x-1/2 w-full max-w-sm px-4 z-40"
    >
      <button
        on:click={addQuestion}
        class="w-full bg-slate-900/90 hover:bg-emerald-600 text-white p-6 rounded-full shadow-2xl shadow-black border-4 border-slate-950 font-black uppercase tracking-widest text-sm transform hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-4 backdrop-blur-xl"
      >
        <span class="text-2xl">+</span> PRIDAŤ NOVÚ OTÁZKU
      </button>
    </div>
  {/if}
</div>
