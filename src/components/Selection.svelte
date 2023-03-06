<script>
    import anime from "animejs/lib/anime.es";

    export let data;

    function animateButton(e) {
        anime({
            targets: e.target,
            scale: [0.9, 1.1, 1],
            duration: 500,
            easing: "linear"
        })
    }
</script>

<div class="aCirc flex flex-col items-center justify-center mx-0 sm:mx-20 font-oswald font-bold">
    <a href="/{data[1]}">
        <button on:mouseenter={animateButton}>
            <p class="text-zinc-800 text-2xl lg:text-6xl sm:text-4xl w-full drop-shadow-[0.15rem_0.15rem_0.15rem_rgba(0,0,0,0.5)] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">{data[0]}</p>
            <img class="opacity-30 h-52 w-52 sm:h-72 sm:w-72 lg:h-96 lg:w-96" src="/{data[1]}.png" alt="{data[1]}">
        </button>
    </a>
</div>