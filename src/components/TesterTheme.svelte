<script lang="ts">
    import IoIosArrowDown from 'svelte-icons/io/IoIosArrowDown.svelte';
    import IoIosArrowUp from 'svelte-icons/io/IoIosArrowUp.svelte';
    import TesterQuestion from './TesterQuestion.svelte';
    import { slide } from 'svelte/transition';

    export let name = "";
    export let questions: any[] = [];

    let isClicked = false;
    let questionsCount = questions.length;
    let questionsGuessed = 0;

    $: progress = questionsCount > 0 ? (questionsGuessed / questionsCount) * 100 : 0;

    function onClick() {
        isClicked = !isClicked;
        if (isClicked) {
            questionsGuessed = 0;
            fisherYates(questions);
        }
    }

    function fisherYates(myArray: any[]) {
        let i = myArray.length;
        if (i == 0) return;
        while (--i) {
            let j = Math.floor(Math.random() * (i + 1));
            let tempi = myArray[i];
            let tempj = myArray[j];
            myArray[i] = tempj;
            myArray[j] = tempi;
        }
    }
</script>

<div class="w-full flex flex-col mb-6">
    <button 
        class={`group relative overflow-hidden flex flex-col w-full p-6 text-left rounded-[2rem] border transition-all duration-500 shadow-2xl ${
            isClicked 
                ? 'bg-slate-900 border-white/20 ring-1 ring-white/10 sticky top-20 z-20' 
                : 'bg-slate-900/50 hover:bg-slate-900 border-white/5 hover:border-white/10'
        }`}
        on:click={onClick}
    >
        <!-- Progress Bar Background track -->
        <div class="absolute bottom-0 left-0 w-full h-1 bg-white/5"></div>
        <!-- Progress Bar Fill -->
        <div 
            class="absolute bottom-0 left-0 h-1 bg-emerald-500 transition-all duration-700 ease-out z-10"
            style={`width: ${progress}%`}
        ></div>

        <div class="flex justify-between items-center w-full z-10">
            <div class="flex flex-col">
                <span class="text-[10px] font-black tracking-widest text-slate-500 uppercase mb-2 group-hover:text-emerald-500 transition-colors">Kapitola</span>
                <h2 class="text-xl md:text-2xl font-oswald font-black text-white uppercase tracking-tight leading-none">
                    {name}
                </h2>
            </div>
            
            <div class="flex items-center gap-6">
                <div class="flex flex-col items-end">
                    <span class="text-[10px] font-black tracking-widest text-slate-500 uppercase mb-1">Pokrok</span>
                    <span class={`text-sm font-black italic tracking-tighter ${questionsGuessed === questionsCount && questionsCount > 0 ? 'text-emerald-400' : 'text-slate-300'}`}>
                        {questionsGuessed} <span class="text-slate-600 italic">/ {questionsCount}</span>
                    </span>
                </div>
                
                <div class={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-500 ${isClicked ? 'bg-white text-slate-900 border-white rotate-180' : 'bg-transparent text-slate-400 border-white/10'}`}>
                    <IoIosArrowDown />
                </div>
            </div>
        </div>
    </button>
    
    {#if isClicked}
        <div 
            class="mt-6 space-y-4 px-2 sm:px-4"
            transition:slide|local={{ duration: 400 }}
        >
            {#each questions as q, i}
                <TesterQuestion 
                    number={i + 1} 
                    name={q.question} 
                    answers={q.answers} 
                    img={q.picture} 
                    bind:questionsGuessed={questionsGuessed}
                />
            {/each}
            
            <div class="py-12 flex flex-col items-center">
                <div class="w-full max-w-sm glass-dark p-8 rounded-[2rem] border border-white/5 text-center shadow-inner">
                    <div class="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                        <span class="text-emerald-500 text-xl font-black">{Math.round(progress)}%</span>
                    </div>
                    <p class="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">Priebežný výsledok</p>
                    <p class="text-4xl font-oswald font-black text-white italic tracking-tighter leading-none mb-6">
                        {questionsGuessed} <span class="text-slate-600">SÚHRN</span>
                    </p>
                    {#if questionsGuessed === questionsCount}
                        <div class="px-4 py-2 bg-emerald-500 rounded-full text-white text-[10px] font-black tracking-widest uppercase shadow-lg shadow-emerald-500/20">
                            Excelentný Výsledok 🎉
                        </div>
                    {/if}
                </div>
            </div>
        </div>
    {/if}
</div>

<style>
    .sticky {
        backdrop-filter: blur(12px);
    }
</style>