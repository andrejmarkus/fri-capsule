<script>
    import Navigation from "../components/Navigation.svelte";
    import SelectionBox from "../components/SelectionBox.svelte";
</script>

<Navigation />
<section class="h-screen bg-gradient-to-b from-green-600 via-emerald-600 to-emerald-600">
    <div class="h-full md:max-w-screen-xl sm:max-w-screen-md mx-auto flex flex-col justify-center items-center">
        <p class="mb-8 text-slate-200 drop-shadow-lg font-oswald font-bold text-4xl sm:text-7xl lg:text-8xl text-center">VYBER SI PREDMET</p>
        <SelectionBox />
    </div>
</section>