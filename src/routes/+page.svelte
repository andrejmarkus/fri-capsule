<script lang="ts">
  import SelectionBox from "../components/SelectionBox.svelte";
  import { onMount } from "svelte";
  import { fly, fade } from "svelte/transition";

  let mounted = false;
  onMount(() => {
    mounted = true;
  });
</script>

<svelte:head>
  <title>FRI CAPSULE | Digitálne Štúdium</title>
</svelte:head>

<section
  class="min-h-screen relative overflow-hidden bg-slate-950 flex flex-col items-center"
>
  <!-- Grid Background Texture -->
  <div
    class="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"
  ></div>

  <!-- Hero Section -->
  <div
    class="relative z-10 w-full max-w-7xl px-6 pt-32 pb-16 flex flex-col items-center text-center"
  >
    <div
      class="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 shadow-sm animate-pulse"
    >
      <div class="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
      <span
        class="text-[10px] font-bold tracking-widest text-emerald-400 uppercase"
        >Aplikácia pripravená na štúdium</span
      >
    </div>

    {#if mounted}
      <h1
        class="hero-heading text-5xl md:text-8xl font-black font-oswald tracking-tighter text-white leading-[0.9] mb-8 uppercase drop-shadow-2xl"
      >
        <span
          class="inline-block"
          in:fly={{ y: 30, duration: 1000, delay: 100 }}>Digitálna</span
        ><br />
        <span
          class="inline-block text-emerald-500"
          in:fly={{ y: 30, duration: 1000, delay: 200 }}>Študovňa</span
        >
      </h1>

      <p
        class="hero-sub-p text-slate-400 max-w-xl text-lg md:text-xl font-medium tracking-tight mb-16 uppercase leading-relaxed"
        in:fly={{ y: 20, duration: 800, delay: 500 }}
      >
        Ovládni technológie, teóriu grafov a základy biznisu s interaktívnymi
        kapsulami navrhnutými pre študentov FRI.
      </p>

      <div
        class="selection-grid w-full"
        in:fly={{ y: 30, duration: 1000, delay: 800 }}
      >
        <SelectionBox />
      </div>
    {/if}
  </div>

  <!-- Decorative Elements -->
  <div
    class="absolute -top-[10%] -left-[5%] w-1/3 h-[50%] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none"
  ></div>
  <div
    class="absolute top-[20%] -right-[5%] w-1/4 h-[40%] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"
  ></div>
</section>

<style>
  :global(body) {
    background-color: #020617; /* slate-950 */
  }
</style>
