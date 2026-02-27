<script lang="ts">
  import { browser } from "$app/environment";

  export let error: Error;
  export let status: number;

  $: isNotFound = status === 404;
  $: title = isNotFound ? "Stránka Nenájdená" : "Ups, Niečo Sa Pokazilo";
  $: subtitle = isNotFound
    ? "Táto stránka neexistuje alebo bola presunutá."
    : "Nastal neočakávaný problém. Skúste to prosím znova.";
</script>

<svelte:head>
  <title>{status} | {title} | FRI CAPSULE</title>
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<section class="min-h-[70vh] flex items-center justify-center px-6 py-16 relative overflow-hidden">
  <div class="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>

  <div class="relative z-10 w-full max-w-3xl glass-dark border border-white/10 rounded-[2.5rem] p-8 md:p-12 text-center shadow-2xl">
    <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/20 mb-8">
      <span class="w-2 h-2 rounded-full bg-rose-400 animate-pulse"></span>
      <span class="text-[10px] font-black tracking-widest text-rose-300 uppercase">Error {status}</span>
    </div>

    <h1 class="text-4xl md:text-6xl font-black font-oswald tracking-tighter text-white uppercase leading-[0.95]">
      {title}
    </h1>

    <p class="mt-4 text-slate-400 font-bold text-xs md:text-sm uppercase tracking-widest leading-relaxed">
      {subtitle}
    </p>

    {#if !isNotFound && error?.message}
      <p class="mt-6 text-slate-500 text-xs font-medium tracking-wide">
        {error.message}
      </p>
    {/if}

    <div class="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
      <a href="/" class="btn-primary text-xs uppercase tracking-widest">Späť Na Domov</a>
      {#if browser}
        <button
          class="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold transition-all duration-300 text-xs uppercase tracking-widest"
          on:click={() => history.back()}
        >
          Predchádzajúca Stránka
        </button>
      {/if}
    </div>
  </div>

  <div class="absolute -top-[10%] -left-[5%] w-1/3 h-[50%] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none"></div>
  <div class="absolute bottom-[5%] -right-[5%] w-1/3 h-[40%] bg-rose-600/10 rounded-full blur-[120px] pointer-events-none"></div>
</section>
