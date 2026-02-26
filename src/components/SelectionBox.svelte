<script lang="ts">
  import Selection from "./Selection.svelte";
  import { fly } from "svelte/transition";
  import { onMount } from "svelte";
  import { dbSubjects } from "../lib/db/repository";

  interface Subject {
    name: string;
    slug: string;
    color: string;
    description: string;
    totalQuestions: number;
  }

  export let subjects: Subject[] = [];
  let loading = true;

  onMount(async () => {
    try {
      const dbList = await dbSubjects.find();
      if (dbList.length > 0) {
        subjects = dbList.map((s) => {
          const totalQuestions =
            s.themes?.reduce((acc, t) => acc + (t.questions?.length || 0), 0) ||
            0;

          return {
            name: s.name || s.id.toUpperCase(),
            slug: s.id,
            color: s.color || "from-slate-500 to-slate-700",
            description: s.description || "",
            totalQuestions,
          };
        });
      } else {
        // Default fallback if DB is empty - now with estimated question counts for progress display
        subjects = [
          {
            name: "Princípy IKS",
            slug: "piks",
            color: "from-blue-500 to-blue-700",
            description:
              "Sieťové technológie, protokoly a systémová architektúra.",
            totalQuestions: 156,
          },
          {
            name: "Ekonomické a právne aspekty podnikania",
            slug: "eapap",
            color: "from-emerald-500 to-emerald-700",
            description:
              "Ekonomické a právne základy podnikateľského prostredia.",
            totalQuestions: 121,
          },
          {
            name: "Základy Ekonómie",
            slug: "zet",
            color: "from-indigo-500 to-indigo-700",
            description:
              "Analýza trhu, spotrebiteľského správania a makroekonómie.",
            totalQuestions: 88,
          },
          {
            name: "Algoritmická Teória Grafov",
            slug: "atg",
            color: "from-rose-500 to-rose-700",
            description: "Štruktúry grafov, algoritmy a ich aplikácie v praxi.",
            totalQuestions: 94,
          },
        ];
      }
    } catch (e) {
      console.error("Failed to fetch subjects:", e);
    } finally {
      loading = false;
    }
  });
</script>

<div
  class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl px-4"
>
  {#if !loading}
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
