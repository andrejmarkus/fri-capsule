<script>
  import TesterAnswer from "./TesterAnswer.svelte";

    export let number;
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

    // Answers Shuffle
    function fisherYates ( myArray ) {
        let i = myArray.length;
        if ( i == 0 ) return false;
        while ( --i ) {
            let j = Math.floor( Math.random() * ( i + 1 ) );
            let tempi = myArray[i];
            let tempj = myArray[j];
            myArray[i] = tempj;
            myArray[j] = tempi;
        }
    }
    fisherYates(answers);
</script>

<div class="bg-slate-100 rounded-lg shadow-sm my-3 py-2 mx-2 flex flex-col justify-center">
    <p class="px-4 font-semibold">{number}. {name}</p>
    {#each answers as a}
        <TesterAnswer name={a.answer} isCorrect={a.isCorrect} correctCount={correctCount} bind:answersSelected={answersSelected} bind:answersCorrect={answersCorrect} bind:isUsed={isUsed} bind:questionsGuessed={questionsGuessed} />
    {/each}
</div>