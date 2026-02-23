<script lang="ts">
  interface Subject {
    name: string;
    slug: string;
    color: string;
    description: string;
  }

  export let subject: Subject;
</script>

<a
  href="/{subject.slug}"
  class="relative block h-full p-8 glass-dark rounded-3xl border border-white/5 overflow-hidden group hover:border-emerald-500/50 hover:-translate-y-2 transition-all duration-500"
>
  <!-- Background Gradient Glow -->
  <div
    class={`absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-gradient-to-br ${subject.color} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-500`}
  ></div>

  <div
    class="relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left h-full"
  >
    <div
      class={`w-14 h-14 mb-8 rounded-2xl flex items-center justify-center bg-gradient-to-br ${subject.color} shadow-lg shadow-black/50 group-hover:scale-110 transition-transform duration-500`}
    >
      <span class="text-white font-black text-xl italic uppercase">
        {subject.slug.substring(0, 2)}
      </span>
    </div>

    <h3
      class="text-2xl font-oswald font-black text-white mb-4 uppercase tracking-tight leading-none group-hover:text-emerald-400 transition-colors"
    >
      {subject.name}
    </h3>

    <p
      class="text-slate-500 text-sm font-medium mb-12 uppercase leading-relaxed group-hover:text-slate-400 transition-colors"
    >
      {subject.description}
    </p>

    <div class="mt-auto flex items-center gap-2 group/btn">
      <span
        class="text-xs font-black tracking-widest text-emerald-500 uppercase"
        >Otvoriť kapsulu</span
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
