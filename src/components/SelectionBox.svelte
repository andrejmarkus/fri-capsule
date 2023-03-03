<script>
    import Selection from "./Selection.svelte";
    import IoIosArrowDropleftCircle from 'svelte-icons/io/IoIosArrowDropleftCircle.svelte';
    import IoIosArrowDroprightCircle from 'svelte-icons/io/IoIosArrowDroprightCircle.svelte';

    import anime from "animejs/lib/anime.es";

    export let subjects = [
        ["Pricipy IKS", "piks", "net"],
        ["Ekonomicke a pravne aspekty podnikania", "eapap", "eco"]
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

<div class="w-3/5 py-3 bg-gradient-to-br from-zinc-200 bg-slate-300 text-zinc-900 rounded-md drop-shadow-lg flex flex-col items-center gap-4 font-poppins">
    <p class="font-bold text-4xl drop-shadow-md">{subjects[index][0]}</p>
    <hr class="w-1/3 border-zinc-300 border-t-[0.2rem] rounded-md">
    <div class="flex justify-center items-center">
        <button class="w-24 text-zinc-700" on:click={previous} on:mouseenter={animateButton}><IoIosArrowDropleftCircle /></button>
        <Selection data={subjects[index]} />
        <button class="w-24 text-zinc-700" on:click={next} on:mouseenter={animateButton}><IoIosArrowDroprightCircle /></button>
    </div>
</div>