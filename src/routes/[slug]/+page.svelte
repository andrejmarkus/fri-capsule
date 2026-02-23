<script lang="ts">
  import { db } from "../../firebase";
  import { collection, getDocs, query, limit } from "firebase/firestore";
  import TesterBox from "../../components/TesterBox.svelte";
  import TesterTheme from "../../components/TesterTheme.svelte";
  import type { PageData } from "./$types";
  import { fly } from "svelte/transition";

  export let data: PageData;

  async function getData() {
    const subjectsCol = collection(db, "subjects");
    const q = query(subjectsCol, limit(1));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) return null;

    const subjectsDoc = querySnapshot.docs[0].data();
    return subjectsDoc[data.slug] || [];
  }
</script>

<svelte:head>
  <title>{data.slug.toUpperCase()} | Kapitoly | FRI CAPSULE</title>
</svelte:head>

<section
  class="min-h-screen bg-slate-950 flex flex-col items-center pb-20 relative overflow-hidden"
>
  <!-- Grid Background Texture -->
  <div
    class="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"
  ></div>

  <div class="relative z-10 w-full max-w-5xl px-4 flex flex-col items-center">
    <!-- Header / Breadcrumb -->
    <div class="mt-24 mb-12 text-center" in:fly={{ y: -20, duration: 800 }}>
      <div class="inline-flex items-center gap-2 mb-4">
        <a
          href="/"
          class="text-[10px] font-black tracking-[0.2em] text-emerald-500 hover:text-emerald-400 transition-colors uppercase"
          >Domov</a
        >
        <span class="text-slate-700 text-[10px]">/</span>
        <span
          class="text-slate-500 text-[10px] font-black tracking-[0.2em] uppercase"
          >{data.slug}</span
        >
      </div>
      <h1
        class="text-4xl md:text-6xl font-black font-oswald text-white uppercase tracking-tighter"
      >
        Študijná <span class="text-emerald-500">Kapsula</span>
      </h1>
      <p
        class="mt-4 text-slate-500 font-bold text-sm tracking-widest uppercase"
      >
        Vyber si okruh a začni testovanie
      </p>
    </div>

    <div class="w-full">
      {#await getData()}
        <div class="flex flex-col items-center justify-center py-20 gap-4">
          <div
            class="w-12 h-12 border-4 border-slate-800 border-t-emerald-500 rounded-full animate-spin"
          ></div>
          <p
            class="text-slate-500 text-xs font-black tracking-[0.2em] uppercase"
          >
            Pripravujem dáta...
          </p>
        </div>
      {:then themes}
        {#if themes && themes.length > 0}
          <TesterBox>
            {#each themes as theme, i}
              <div in:fly={{ y: 20, duration: 600, delay: 100 * i }}>
                <TesterTheme name={theme.name} questions={theme.questions} />
              </div>
            {/each}
          </TesterBox>
        {:else}
          <div
            class="glass-dark p-12 rounded-3xl text-center border border-white/5 my-20"
            in:fly={{ y: 20, duration: 600 }}
          >
            <p class="text-slate-400 font-bold uppercase tracking-widest">
              Žiadne okruhy nie sú k dispozícii.
            </p>
            <a
              href="/"
              class="mt-8 inline-block btn-primary text-xs uppercase tracking-widest"
              >Návrat domov</a
            >
          </div>
        {/if}
      {:catch error}
        <div
          class="glass-dark p-12 rounded-3xl border border-red-500/20 text-center my-20"
        >
          <p class="text-red-400 font-bold uppercase tracking-widest">
            Vyskytla sa chyba: {error.message}
          </p>
        </div>
      {/await}
    </div>
  </div>

  <!-- Background Accents -->
  <div
    class="absolute top-0 right-0 w-1/3 h-1/2 bg-emerald-600/5 blur-[120px] pointer-events-none"
  ></div>
  <div
    class="absolute bottom-0 left-0 w-1/4 h-1/3 bg-blue-600/5 blur-[100px] pointer-events-none"
  ></div>
</section>
