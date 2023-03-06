<script>
    export let name;
    export let isCorrect;
    export let correctCount;
    export let answersSelected;
    export let answersCorrect;
    export let isUsed;
    export let questionsGuessed;
    
    let isClicked = false;

    function onClick() {
        if(!isUsed) {
            isClicked = true;
            answersSelected++;

            if(isCorrect) {
                answersCorrect++;
            }

            if(answersSelected >= correctCount) {
                isUsed = true;
                
            }
            if(answersCorrect >= correctCount) {
                console.log(answersCorrect, correctCount)
                questionsGuessed++;
            }
        }
    }
</script>

<div>
    <button class="w-full text-left px-4 py-1" on:click={onClick}>
        {#if isCorrect && isClicked}
            <p class="bg-green-300 shadow-inner px-3 py-1 rounded-md">{name}</p>
        {:else if !isCorrect && isClicked}
            <p class="bg-red-300 shadow-inner px-3 py-1 rounded-md">{name}</p>  
        {:else}
            {#if isUsed}
                <p class="bg-slate-200 shadow-sm px-3 py-1 rounded-md">{name}</p>
            {:else}
                <p class="bg-slate-200 hover:bg-slate-300 hover:shadow-inner shadow-sm px-3 py-1 rounded-md">{name}</p>
            {/if}
        {/if}
    </button>
</div>