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
</script>

<div class="w-full flex flex-col">
    <div class="flex justify-between bg-slate-200 to-slate-300 py-2 px-4 my-2 rounded-md drop-shadow-sm">
        <p class="font-bold">{name}</p>
        <div class="flex items-center">
            <p class="text-sm mx-4 font-bold">{questionsGuessed}/{questionsCount}</p>
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
            {#each questions as q}
                <TesterQuestion name={q.question} answers={q.answers} bind:questionsGuessed={questionsGuessed}/>
            {/each}
            <p class="text-xl text-center py-5 font-bold">Tvoje skóre: {questionsGuessed}/{questionsCount}</p>
        </div>
    {/if}
</div>