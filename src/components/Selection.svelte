<script lang="ts">
  import { progressStore } from "../lib/stores/progress";

  interface Subject {
    name: string;
    slug: string;
    color: string;
    description: string;
    totalQuestions: number;
  }

  export let subject: Subject;

  $: subjectProgress =
    $progressStore[subject.slug] ||
    $progressStore[subject.slug.toLowerCase()] ||
    {};
  $: correctCount = Object.values(subjectProgress).reduce((acc, theme) => {
    const questions = theme.questions || {};
    return (
      acc + Object.values(questions).filter((q) => q && q.isCorrect).length
    );
  }, 0);
  $: percentage =
    subject.totalQuestions > 0
      ? Math.round((correctCount / subject.totalQuestions) * 100)
      : 0;

  $: fontSize =
    subject.slug.length > 4
      ? "text-sm"
      : subject.slug.length > 3
        ? "text-base"
        : "text-xl";
</script>

<a
  href="/{subject.slug}"
  class="relative block h-full p-8 glass-dark rounded-3xl border border-white/5 overflow-hidden group hover:border-emerald-500/50 hover:-translate-y-2 transition-all duration-500"
>
  <!-- Progress Bar (Top) -->
  <div class="absolute top-0 left-0 w-full h-1.5 bg-white/5">
    <div
      class="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-1000"
      style="width: {Math.max(2, Math.min(100, percentage))}%"
    ></div>
  </div>

  <!-- Background Gradient Glow -->
  <div
    class={`absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-gradient-to-br ${subject.color} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-500`}
  ></div>

  <div
    class="relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left h-full"
  >
    <div class="w-full flex justify-between items-start mb-8 gap-4">
      <div
        class={`shrink-0 w-14 h-14 px-2 rounded-2xl flex items-center justify-center bg-gradient-to-br ${subject.color} shadow-lg shadow-black/50 group-hover:scale-110 transition-transform duration-500`}
      >
        <span
          class={`text-white font-black ${fontSize} italic uppercase font-oswald leading-none text-center break-all`}
        >
          {subject.slug.toUpperCase()}
        </span>
      </div>

      <div
        class="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full shadow-lg backdrop-blur-md"
      >
        <span
          class="text-xs text-emerald-500 font-black uppercase tracking-tighter"
        >
          {subject.totalQuestions > 0 ? `${percentage}%` : "0%"}
        </span>
      </div>
    </div>

    <h3
      class="text-2xl font-oswald font-black text-white mb-4 uppercase tracking-tight leading-none group-hover:text-emerald-400 transition-colors"
    >
      {subject.name}
    </h3>

    <p
      class="text-slate-500 text-sm font-medium mb-12 uppercase leading-relaxed group-hover:text-slate-400 transition-colors line-clamp-2"
    >
      {subject.description}
    </p>

    <div class="mt-auto flex items-center gap-2 group/btn">
      <span
        class="text-xs font-black tracking-widest text-emerald-500 uppercase"
        >{percentage === 100 ? "Zopakovať kapsulu" : "Otvoriť kapsulu"}</span
      >
      <svg
        class="w-4 h-4 text-emerald-500 group-hover/btn:translate-x-1 transition-transform"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2.5"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </div>
  </div>
</a>

<style>
  .glass-dark {
    background: rgba(15, 23, 42, 0.4);
    backdrop-filter: blur(20px);
  }
</style>
