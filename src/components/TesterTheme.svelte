<script lang="ts">
  import IoIosArrowDown from "svelte-icons/io/IoIosArrowDown.svelte";
  import IoMdRefresh from "svelte-icons/io/IoMdRefresh.svelte";
  import TesterQuestion from "./TesterQuestion.svelte";
  import { slide } from "svelte/transition";
  import { progressStore } from "../lib/stores/progress";
  import type { ProgressState, ThemeProgress } from "../lib/stores/progress";

  export let subjectSlug = "";
  export let name = "";
  export let questions: any[] = [];

  let isClicked = false;
  $: questionsCount = questions.length;

  // Subscribe to progress store for this specific subject and theme
  $: themeProgress = ($progressStore as ProgressState)[subjectSlug]?.[name];
  $: questionsGuessed = themeProgress
    ? Object.values(themeProgress.questions).filter((q) => q.isCorrect).length
    : 0;

  // Stable sort of questions based on stored order
  $: sortedQuestions = (() => {
    if (!themeProgress?.order?.length) return questions;
    const orderMap = new Map((themeProgress.order || []).map((q, i) => [q, i]));
    return [...questions].sort((a, b) => {
      const indexA = orderMap.get(a.question) ?? 999;
      const indexB = orderMap.get(b.question) ?? 999;
      return indexA - indexB;
    });
  })();

  $: progress =
    questionsCount > 0 ? (questionsGuessed / questionsCount) * 100 : 0;

  $: hasAnyProgress =
    themeProgress &&
    (Object.keys(themeProgress.questions).length > 0 ||
      themeProgress.order.length > 0);

  // Manage question order and shuffling reactively
  // This ensures that when a theme is opened or reset, questions are shuffled if no order exists
  $: if (isClicked && !themeProgress?.order?.length) {
    // If there is any progress (questions answered), don't shuffle - preserve current order
    const hasProgress =
      themeProgress && Object.keys(themeProgress.questions).length > 0;

    if (!hasProgress) {
      fisherYates(questions);
    }

    // Save the current (shuffled or original) order for stability
    progressStore.saveOrder(
      subjectSlug,
      name,
      questions.map((q) => q.question),
    );
  }

  function onClick() {
    isClicked = !isClicked;
  }

  function resetThemeProgress(e: any) {
    if (e && e.stopPropagation) e.stopPropagation();
    if (confirm(`Naozaj chceš resetovať progres pre okruh "${name}"?`)) {
      progressStore.resetTheme(subjectSlug, name);
    }
  }

  function fisherYates(myArray: any[]) {
    let i = myArray.length;
    if (i == 0) return;
    while (--i) {
      let j = Math.floor(Math.random() * (i + 1));
      let tempi = myArray[i];
      let tempj = myArray[j];
      myArray[i] = tempj;
      myArray[j] = tempi;
    }
  }
</script>

<div class="w-full flex flex-col mb-6">
  <div
    role="button"
    tabindex="0"
    class={`group relative overflow-hidden flex flex-col w-full p-6 text-left rounded-[2rem] border transition-all duration-500 shadow-2xl cursor-pointer ${
      isClicked
        ? "bg-slate-900 border-white/20 ring-1 ring-white/10 sticky top-20 z-20"
        : "bg-slate-900/50 hover:bg-slate-900 border-white/5 hover:border-white/10"
    }`}
    on:click={onClick}
    on:keydown={(e) => e.key === "Enter" && onClick()}
  >
    <!-- Progress Bar Background track -->
    <div class="absolute bottom-0 left-0 w-full h-1 bg-white/5"></div>
    <!-- Progress Bar Fill -->
    <div
      class="absolute bottom-0 left-0 h-1 bg-emerald-500 transition-all duration-700 ease-out z-10"
      style={`width: ${progress}%`}
    ></div>

    <div class="flex justify-between items-center w-full z-10">
      <div class="flex flex-col">
        <span
          class="text-[10px] font-black tracking-widest text-slate-500 uppercase mb-2 group-hover:text-emerald-500 transition-colors"
          >Kapitola</span
        >
        <h2
          class="text-xl md:text-2xl font-oswald font-black text-white uppercase tracking-tight leading-none"
        >
          {name}
        </h2>
      </div>

      <div class="flex items-center gap-6">
        <div class="flex flex-col items-end">
          <span
            class="text-[10px] font-black tracking-widest text-slate-500 uppercase mb-1"
            >Pokrok</span
          >
          <span
            class={`text-sm font-black italic tracking-tighter ${questionsGuessed === questionsCount && questionsCount > 0 ? "text-emerald-400" : "text-slate-300"}`}
          >
            {questionsGuessed}
            <span class="text-slate-600 italic">/ {questionsCount}</span>
          </span>
        </div>

        {#if hasAnyProgress}
          <button
            class="w-8 h-8 rounded-full flex items-center justify-center border border-white/10 text-slate-500 hover:text-red-400 hover:bg-red-500/10 hover:border-red-500/20 transition-all duration-300 z-30"
            on:click={resetThemeProgress}
            title="Resetovať okruh"
          >
            <div class="w-4 h-4">
              <IoMdRefresh />
            </div>
          </button>
        {/if}

        <div
          class={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-500 ${isClicked ? "bg-white text-slate-900 border-white rotate-180" : "bg-transparent text-slate-400 border-white/10"}`}
        >
          <div class="w-5 h-5">
            <IoIosArrowDown />
          </div>
        </div>
      </div>
    </div>
  </div>

  {#if isClicked}
    <div
      class="mt-6 space-y-4 px-2 sm:px-4"
      transition:slide|local={{ duration: 400 }}
    >
      {#each sortedQuestions as q, i}
        <TesterQuestion
          number={i + 1}
          name={q.question}
          answers={q.answers}
          img={q.picture}
          {subjectSlug}
          themeName={name}
        />
      {/each}

      <div class="py-12 flex flex-col items-center">
        <div
          class="w-full max-w-sm glass-dark p-8 rounded-[2rem] border border-white/5 text-center shadow-inner"
        >
          <div
            class="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-6"
          >
            <span class="text-emerald-500 text-xl font-black"
              >{Math.round(progress)}%</span
            >
          </div>
          <p
            class="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-2"
          >
            Priebežný výsledok
          </p>
          <p
            class="text-4xl font-oswald font-black text-white italic tracking-tighter leading-none mb-6"
          >
            {questionsGuessed < questionsCount
              ? `${questionsGuessed} / ${questionsCount}`
              : "DOKONČENÉ!"}
            <span class="text-slate-600 ml-2">SÚHRN</span>
          </p>
          {#if questionsGuessed === questionsCount}
            <div
              class="px-6 py-3 bg-emerald-500 rounded-2xl text-white text-[10px] font-black tracking-widest uppercase shadow-2xl shadow-emerald-500/20 mb-4 animate-bounce"
            >
              Okruh Úspešne Zvládnutý 🎉
            </div>
          {:else}
            <p
              class="text-xs text-slate-500 font-medium uppercase tracking-widest leading-relaxed"
            >
              Pokračuj v odpovedaní na ďalšie otázky, kým nedosiahneš 100%
              úspešnosť.
            </p>
          {/if}
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  .sticky {
    backdrop-filter: blur(12px);
  }
</style>
