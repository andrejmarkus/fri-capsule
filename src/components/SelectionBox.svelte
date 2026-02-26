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
