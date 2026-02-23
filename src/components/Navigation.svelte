<script lang="ts">
  import { onMount } from "svelte";
  let scrolled = false;

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
      class="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5 px-0.5"
    >
      <div class="w-full h-0.5 bg-slate-300 rounded-full"></div>
      <div class="w-full h-0.5 bg-slate-300 rounded-full"></div>
      <div class="w-full h-0.5 bg-slate-300 rounded-full"></div>
    </button>
  </div>
</nav>

<div class="h-20"></div>
