<script>
    import FaFacebook from 'svelte-icons/fa/FaFacebook.svelte';
    import FaInstagram from 'svelte-icons/fa/FaInstagram.svelte';
    import FaTwitter from 'svelte-icons/fa/FaTwitter.svelte';
    import FaMapMarkerAlt from 'svelte-icons/fa/FaMapMarkerAlt.svelte'

</script>

<nav class=" bg-slate-200 w-full font-poppins text-gray-900 drop-shadow-md px-2 sm:px-0 absolute bottom-0">
    <div class="m-auto max-w-7xl h-14 flex justify-between items-center">
        <div class="flex gap-2 items-center">
            <p class=" w-4"><FaMapMarkerAlt /></p>
            <p class=" leading-4 text-sm">
                Karpatská 14<br>
                010 01 Žilina
            </p>
        </div>
        <ul class="gap-6 hidden sm:flex sm:items-center">
            <li class=" w-6 hover:opacity-90"><a href=""><FaFacebook /></a></li>
            <li class=" w-6 hover:opacity-90"><a href=""><FaInstagram /></a></li>
            <li class=" w-6 hover:opacity-90"><a href=""><FaTwitter /></a></li>
        </ul>
        <p class="bg-gradient-to-br from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 hover:drop-shadow-md px-7 py-2 rounded-md font-semibold text-slate-100"><a href="">Contact us</a></p>
    </div>
</nav>