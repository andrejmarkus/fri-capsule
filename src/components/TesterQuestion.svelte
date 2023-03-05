<script>
  import TesterAnswer from "./TesterAnswer.svelte";

    export let name = "";
    export let answers;
    export let questionsGuessed;

    let isUsed = false;
</script>

<div class="bg-slate-100 rounded-md my-2 py-2 mx-2 flex flex-col justify-center">
    <p class="px-4">{name}</p>
    {#each answers as a}
        <TesterAnswer name={a.answer} isCorrect={a.isCorrect} bind:isUsed={isUsed} bind:questionsGuessed={questionsGuessed} />
    {/each}
</div>