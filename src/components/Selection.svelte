<script>
    import anime from "animejs/lib/anime.es";

    export let data;

    function animateButton(e) {
        anime({
            targets: e.target,
            scale: [0.9, 1],
            duration: 300,
            easing: "linear"
        })
    }
</script>

<div class="aCirc w-[28rem] flex flex-col items-center justify-center mx-6">
    <div class="mt-3 mb-6 bg-gradient-to-b from-zinc-400 to-zinc-500 border-8 border-zinc-900 p-8 rounded-[50%] drop-shadow-lg">
        <a href="/{data[1]}">
            <button on:mouseenter={animateButton}><img class="w-72 h-72 drop-shadow-lg" src="/{data[2]}.png" alt="{data[2]}"></button>
        </a>
    </div>
</div>