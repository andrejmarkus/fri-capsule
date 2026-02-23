<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let name: string;
  export let isCorrect: boolean;
  export let isUsed: boolean;
  export let isClicked: boolean = false;

  function onClick() {
    if (!isUsed && !isClicked) {
      dispatch("clicked", { name, isCorrect });
    }
  }

  $: state = isUsed
    ? isCorrect
      ? "correct"
      : isClicked
        ? "incorrect"
        : "neutral"
    : isClicked
      ? isCorrect
        ? "clicked-correct"
        : "clicked-incorrect"
      : "default";

  $: classes = {
    correct:
      "bg-emerald-500 text-white border-emerald-400 shadow-lg shadow-emerald-500/20",
    incorrect:
      "bg-red-500 text-white border-red-400 shadow-lg shadow-red-500/20",
    neutral: "bg-white/5 text-slate-600 border-white/5 opacity-40",
    "clicked-correct": "bg-emerald-500 text-white border-emerald-400",
    "clicked-incorrect": "bg-red-500 text-white border-red-400",
    default:
      "bg-white/5 text-slate-400 border-white/5 hover:border-white/20 hover:bg-white/10",
  }[state];
</script>

<button
  class={`relative flex items-center w-full p-4 rounded-2xl border transition-all duration-300 group ${classes}`}
  on:click={onClick}
  disabled={isUsed || isClicked}
>
  <div
    class={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mr-4 border transition-all ${
      isClicked ? "bg-white/20 border-white/40" : "bg-black/20 border-white/5"
    }`}
  >
    {#if state === "correct" || state === "clicked-correct"}
      <svg
        class="w-4 h-4 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
          d="M5 13l4 4L19 7"
        ></path></svg
      >
    {:else if state === "incorrect" || state === "clicked-incorrect"}
      <svg
        class="w-4 h-4 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
          d="M6 18L18 6M6 6l12 12"
        ></path></svg
      >
    {:else}
      <div
        class="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:scale-[1.5] transition-transform"
      ></div>
    {/if}
  </div>

  <span
    class="text-xs md:text-sm font-black tracking-widest uppercase text-left leading-tight italic"
  >
    {name}
  </span>

  {#if state === "default"}
    <div class="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
      <span
        class="text-[9px] font-black tracking-[0.2em] text-emerald-500 uppercase"
        >Input</span
      >
    </div>
  {/if}
</button>
