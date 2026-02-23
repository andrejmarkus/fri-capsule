<script lang="ts">
  import Selection from "./Selection.svelte";
  import { fly } from "svelte/transition";
  import { onMount } from "svelte";

  interface Subject {
    name: string;
    slug: string;
    color: string;
    description: string;
  }

  export let subjects: Subject[] = [
    {
      name: "Princípy IKS",
      slug: "piks",
      color: "from-blue-500 to-blue-700",
      description: "Sieťové technológie, protokoly a systémová architektúra.",
    },
    {
      name: "Podnikanie",
      slug: "eapap",
      color: "from-emerald-500 to-emerald-700",
      description: "Ekonomické a právne základy podnikateľského prostredia.",
    },
    {
      name: "Základy Ekonómie",
      slug: "zet",
      color: "from-indigo-500 to-indigo-700",
      description: "Analýza trhu, spotrebiteľského správania a makroekonómie.",
    },
    {
      name: "Algoritmická Teória",
      slug: "atg",
      color: "from-rose-500 to-rose-700",
      description: "Štruktúry grafov, algoritmy a ich aplikácie v praxi.",
    },
  ];

  let mounted = false;
  onMount(() => {
    mounted = true;
  });
</script>

<div
  class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl px-4"
>
  {#if mounted}
    {#each subjects as subject, i}
      <div
        class="subject-card group h-full"
        in:fly={{ y: 20, duration: 800, delay: 600 + i * 100, opacity: 0 }}
      >
        <Selection {subject} />
      </div>
    {/each}
  {/if}
</div>

<style>
  .subject-card {
    transition-property: transform, opacity;
  }
</style>
