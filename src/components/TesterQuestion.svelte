<script>
  import TesterAnswer from "./TesterAnswer.svelte";

    export let name = "";
    export let answers;
    export let questionsGuessed;

    let answersCorrect = 0;
    let isUsed = false;

    let answersSelected = 0;
    let correctCount = 0;
    answers.forEach(element => {
        if (element.isCorrect) {
            correctCount++;
        }
    });
</script>

<div class="bg-slate-100 to-slate-200 rounded-lg shadow-sm my-3 py-2 mx-2 flex flex-col justify-center">
    <p class="px-4 font-semibold">{name}</p>
    {#each answers as a}
        <TesterAnswer name={a.answer} isCorrect={a.isCorrect} correctCount={correctCount} bind:answersSelected={answersSelected} bind:answersCorrect={answersCorrect} bind:isUsed={isUsed} bind:questionsGuessed={questionsGuessed} />
    {/each}
</div>