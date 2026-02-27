<script lang="ts">
  import { onMount } from "svelte";
  let scrolled = false;
  let mobileOpen = false;

  onMount(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 20;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
</script>

<nav
  class={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled
      ? "py-3 bg-slate-950/80 backdrop-blur-lg border-b border-white/5"
      : "py-5 bg-transparent"
  }`}
>
  <div class="max-w-7xl mx-auto px-6 flex justify-between items-center">
    <a href="/" class="flex items-center transition-transform hover:scale-105">
      <img src="/logo.png" alt="FRI CAPSULE Logo" class="h-10 w-auto" />
    </a>

    <div class="hidden md:flex items-center gap-8">
      <a
        href="/"
        class="text-sm font-semibold uppercase tracking-widest text-slate-400 hover:text-emerald-400 transition-colors"
        >Predmety</a
      >
      <a
        href="/report"
        class="text-sm font-semibold uppercase tracking-widest text-slate-400 hover:text-emerald-400 transition-colors"
        >Report</a
      >
      <div class="h-4 w-px bg-slate-800"></div>
      <a
        href="https://github.com/andrejmarkus/fri-capsule"
        class="text-sm font-bold bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg border border-white/10 transition-all"
        target="_blank">GITHUB</a
      >
    </div>

    <button
      type="button"
      aria-label="Toggle menu"
      aria-expanded={mobileOpen}
      on:click={() => (mobileOpen = !mobileOpen)}
      class={`md:hidden relative w-11 h-11 rounded-xl border transition-all duration-300 flex items-center justify-center ${
        mobileOpen
          ? "bg-emerald-500/15 border-emerald-400/40"
          : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
      }`}
    >
      <span
        class={`absolute w-5 h-0.5 rounded-full bg-slate-200 transition-all duration-300 ${
          mobileOpen ? "rotate-45" : "-translate-y-1.5"
        }`}
      ></span>
      <span
        class={`absolute w-5 h-0.5 rounded-full bg-slate-200 transition-all duration-300 ${
          mobileOpen ? "opacity-0 scale-75" : "opacity-100"
        }`}
      ></span>
      <span
        class={`absolute w-5 h-0.5 rounded-full bg-slate-200 transition-all duration-300 ${
          mobileOpen ? "-rotate-45" : "translate-y-1.5"
        }`}
      ></span>
    </button>
  </div>

  <div
    aria-hidden={!mobileOpen}
    class={`md:hidden px-6 overflow-hidden transition-all duration-300 ease-out ${
      mobileOpen
        ? "max-h-80 opacity-100 mt-4 pb-4"
        : "max-h-0 opacity-0 mt-0 pb-0 pointer-events-none"
    }`}
  >
    <div
      class={`rounded-2xl border border-emerald-500/20 bg-slate-900/95 p-4 flex flex-col gap-3 shadow-2xl shadow-emerald-900/20 relative overflow-hidden transition-all duration-300 ${
        mobileOpen ? "translate-y-0" : "-translate-y-2"
      }`}
    >
      <div class="absolute -top-10 -right-10 w-28 h-28 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>
      <a
        href="/"
        on:click={() => (mobileOpen = false)}
        class="text-xs font-semibold uppercase tracking-widest text-slate-300 hover:text-emerald-400 transition-colors px-2 py-2 rounded-lg hover:bg-white/5"
        >Predmety</a
      >
      <a
        href="/report"
        on:click={() => (mobileOpen = false)}
        class="text-xs font-semibold uppercase tracking-widest text-slate-300 hover:text-emerald-400 transition-colors px-2 py-2 rounded-lg hover:bg-white/5"
        >Report</a
      >
      <a
        href="https://github.com/andrejmarkus/fri-capsule"
        target="_blank"
        rel="noopener noreferrer"
        class="text-xs font-bold uppercase tracking-widest text-white bg-white/10 hover:bg-white/20 px-3 py-2 rounded-lg border border-white/10 transition-all text-center mt-1"
        >GitHub</a
      >
    </div>
  </div>
</nav>

<div class="h-20"></div>
