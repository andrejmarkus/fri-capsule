<script>
    import IoIosArrowDown from 'svelte-icons/io/IoIosArrowDown.svelte';
    import IoIosArrowUp from 'svelte-icons/io/IoIosArrowUp.svelte';
    import TesterQuestion from './TesterQuestion.svelte';

    export let name = "";
    export let questions;

    let isClicked = false;
    let questionsCount = Object.keys(questions).length;
    let questionsGuessed = 0;

    function onClick() {
        if(isClicked) {
            isClicked = false;
        } else {
            isClicked = true;
            questionsGuessed = 0;
        }
    }

    // Questions Shuffle
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
    fisherYates(questions);
</script>

<div class="w-full flex flex-col">
    <div class="{isClicked ? 'sticky top-16' : ''} {questionsGuessed >= questionsCount ? 'bg-green-300' : 'bg-slate-200'} flex justify-between items-center py-2 px-4 my-2 rounded-md drop-shadow-sm">
        <p class="font-bold text-base sm:text-lg">{name}</p>
        <div class="flex items-center">
            <p class="text-md mx-4 font-bold bg-slate-300 px-2 py-1 rounded-md">{questionsGuessed}/{questionsCount}</p>
            <button class="w-6" on:click={onClick}>
                {#if !isClicked}
                    <IoIosArrowDown />
                {:else}
                    <IoIosArrowUp />
                {/if}
            </button>
        </div>
    </div>
    {#if isClicked}
        <div>
            {#each questions as q, i}
                <TesterQuestion number={i + 1} name={q.question} answers={q.answers} img={q.picture} bind:questionsGuessed={questionsGuessed}/>
            {/each}
            <p class="text-xl text-center py-5 font-bold">Tvoje skóre: {questionsGuessed}/{questionsCount}</p>
        </div>
    {/if}
</div>