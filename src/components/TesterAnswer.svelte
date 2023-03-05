<script>
    export let name;
    export let isCorrect;
    export let isUsed;
    export let questionsGuessed;

    let isClicked = false;

    function onClick() {
        if(!isUsed) {
            if(isCorrect) {
                questionsGuessed++;
            }

            isUsed = true;
            isClicked = true;
        }
    }
</script>

<div>
    <button class="w-full text-left px-4 py-1" on:click={onClick}>
        {#if isCorrect && isUsed}
            <p class=" bg-green-300 px-3 py-1 rounded-md">{name}</p>
        {:else if !isCorrect && isClicked}
            <p class=" bg-red-300 px-3 py-1 rounded-md">{name}</p>  
        {:else}
            <p class=" bg-slate-300 px-3 py-1 rounded-md">{name}</p>
        {/if}
    </button>
</div>