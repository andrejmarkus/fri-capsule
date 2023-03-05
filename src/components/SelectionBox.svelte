<script>
    import Selection from "./Selection.svelte";
    import IoIosArrowDropleftCircle from 'svelte-icons/io/IoIosArrowDropleftCircle.svelte';
    import IoIosArrowDroprightCircle from 'svelte-icons/io/IoIosArrowDroprightCircle.svelte';
    import IoIosArrowDropdownCircle from 'svelte-icons/io/IoIosArrowDropdownCircle.svelte';
    import IoIosArrowDropupCircle from 'svelte-icons/io/IoIosArrowDropupCircle.svelte';

    import anime from "animejs/lib/anime.es";

    export let subjects = [
        ["Princípy IKS", "piks", "net"],
        ["Ekonomické a právne aspekty podnikania", "eapap", "eco"]
    ];

    let index = 0;

    function next() {
        animateNext();

        index++;
        if (index >= subjects.length) {
            index = 0;
        }
    }

    function previous() {
        animatePrevious();

        index--;
        if (index < 0) {
            index = subjects.length - 1;
        }
    }

    function animateButton(e) {
        anime({
            targets: e.target,
            rotate: [10, -10, 0],
            scale: [1.1, 1],
            duration: 300,
            easing: "linear"
        })
    }

    function animateNext() {
        anime({
            targets: ".aCirc",
            translateX: [-200, 200, 0],
            scale: [0, 0, 1],
            duration: 600,
            easing: "linear"
        })
    }

    function animatePrevious() {
        anime({
            targets: ".aCirc",
            translateX: [200, -200, 0],
            scale: [0, 0, 1],
            duration: 600,
            easing: "linear"
        })
    }
</script>

<div class="w-11/12 sm:w-4/5 h-1/2 sm:h-2/5 py-3 bg-gradient-to-b from-slate-200 to-slate-300 text-zinc-800 rounded-2xl drop-shadow-lg flex flex-col items-center justify-center gap-4 font-poppins">
    <div class="h-full w-full flex flex-col sm:flex-row sm:justify-center justify-between items-center">
        <button class="w-20 sm:w-36 text-zinc-800" on:click={previous} on:mouseenter={animateButton}><IoIosArrowDropleftCircle /></button>
        <Selection data={subjects[index]} />
        <button class="w-20 sm:w-36 text-zinc-800" on:click={next} on:mouseenter={animateButton}><IoIosArrowDroprightCircle /></button>
    </div>
</div>