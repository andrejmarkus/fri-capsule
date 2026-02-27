<script lang="ts">
  import TesterAnswer from "./TesterAnswer.svelte";
  import { fly } from "svelte/transition";
  import { progressStore } from "../lib/stores/progress";
  import type { ProgressState } from "../lib/stores/progress";
  import type { Answer } from "../lib/db/models";

  export let number: number;
  export let id = "";
  export let name = "";
  export let answers: Answer[] = [];
  export let img: string | undefined;
  export let subjectSlug = "";
  export let themeName = "";

  $: themeData = ($progressStore as ProgressState)[subjectSlug]?.[themeName];
  $: questionKey = id || name;
  $: storedState = themeData?.questions?.[questionKey];

  let answersCorrect = 0;
  let isUsed = false;
  let answersSelected = 0;
  let selectedHistory: string[] = []; // Store names of selected answers
  let displayAnswers: Answer[] = [];

  $: if (storedState && !isUsed) {
    isUsed = storedState.isUsed;
    selectedHistory = storedState.selected || [];
    // Recalculate counts based on stored history
    const correctAnswers = answers
      .filter((a) => a.isCorrect)
      .map((a) => a.id || a.answer);
    answersSelected = selectedHistory.length;
    answersCorrect = selectedHistory.filter((sh) =>
      correctAnswers.includes(sh),
    ).length;
  } else if (!storedState && isUsed) {
    // If progress was reset
    isUsed = false;
    answersCorrect = 0;
    answersSelected = 0;
    selectedHistory = [];
  }

  $: correctCount = answers.filter((a) => a.isCorrect).length;

  function onAnswerClicked(answerName: string, isCorrect: boolean) {
    if (isUsed) return;

    if (!selectedHistory.includes(answerName)) {
      selectedHistory = [...selectedHistory, answerName];
      answersSelected++;
      if (isCorrect) answersCorrect++;
    }

    if (answersSelected >= correctCount) {
      isUsed = true;
      progressStore.saveQuestionState(subjectSlug, themeName, questionKey, {
        selected: selectedHistory,
        isUsed: true,
        isCorrect: answersCorrect === correctCount,
      });
    }
  }

  function fisherYates<T>(myArray: T[]) {
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

  $: if (
    answers &&
    answers.length > 0 &&
    !isUsed &&
    !storedState &&
    answersSelected === 0
  ) {
    const cloned = [...answers];
    fisherYates(cloned);
    displayAnswers = cloned;
  } else {
    displayAnswers = answers;
  }
</script>

<div
  class={`relative overflow-hidden glass-dark rounded-[2.5rem] border transition-all duration-500 ${
    isUsed && answersCorrect === correctCount
      ? "border-emerald-500/30"
      : "border-white/5"
  }`}
  transition:fly|local={{ y: 20, duration: 400 }}
>
  <!-- Background Accents within card -->
  {#if isUsed && answersCorrect === correctCount}
    <div
      class="absolute -top-[10%] -right-[10%] w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"
    ></div>
  {:else if isUsed && answersCorrect !== correctCount}
    <div
      class="absolute -top-[10%] -right-[10%] w-32 h-32 bg-red-500/5 rounded-full blur-2xl pointer-events-none"
    ></div>
  {/if}

  <div class="p-8 md:p-10">
    <div class="flex flex-col md:flex-row gap-6 md:items-start mb-8">
      <div
        class="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 border border-white/5 text-slate-500 font-black text-xs italic tracking-tighter"
      >
        Q{number < 10 ? "0" + number : number}
      </div>

      <div class="flex flex-col flex-1">
        <h3
          class="text-xl md:text-2xl font-oswald font-black text-white leading-[1.2] uppercase tracking-tight"
        >
          {name}
        </h3>
        <div class="flex gap-4 mt-3">
          <span
            class="text-[10px] font-black tracking-widest text-slate-600 uppercase"
            >Multi-Input</span
          >
          <span
            class="text-[10px] font-black tracking-widest text-emerald-500/60 uppercase"
            >{correctCount} Správne Možnosti</span
          >
        </div>
      </div>
    </div>

    {#if img}
      <div
        class="mb-10 rounded-3xl border border-white/10 overflow-hidden bg-white p-4 flex justify-center shadow-lg group transition-all"
      >
        <img
          class="max-w-full h-auto max-h-[450px] object-contain group-hover:scale-[1.02] transition-transform duration-500"
          src={img}
          alt="Question diagram"
        />
      </div>
    {/if}

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      {#each displayAnswers as a, idx (a.id || `${idx}:${a.answer}`)}
        {@const answerValue = a.id || a.answer}
        {@const isSelected = selectedHistory.includes(answerValue)}
        <TesterAnswer
          name={a.answer}
          isCorrect={a.isCorrect}
          {isUsed}
          isClicked={isSelected}
          on:clicked={() => onAnswerClicked(answerValue, a.isCorrect)}
        />
      {/each}
    </div>

    {#if isUsed}
      <div
        class="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <div class="flex items-center gap-4">
          <div
            class={`w-2 h-2 rounded-full ${answersCorrect === correctCount ? "bg-emerald-500 animate-pulse" : "bg-red-500"}`}
          ></div>
          <span
            class="text-[11px] font-black tracking-widest text-slate-500 uppercase"
            >Výsledok: {answersCorrect} / {correctCount}</span
          >
        </div>

        {#if answersCorrect === correctCount}
          <div
            class="flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full"
          >
            <span
              class="text-emerald-400 text-[10px] font-black tracking-widest uppercase"
              >Bezchybne</span
            >
            <svg
              class="w-3.5 h-3.5 text-emerald-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              ><path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path></svg
            >
          </div>
        {:else}
          <div
            class="flex items-center gap-2 px-4 py-1.5 bg-red-500/10 border border-red-500/20 rounded-full"
          >
            <span
              class="text-red-400 text-[10px] font-black tracking-widest uppercase"
              >Skús Znova nabudúce</span
            >
          </div>
        {/if}
      </div>
    {/if}
  </div>
</div>
