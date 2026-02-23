<script>
  import FaFacebook from "svelte-icons/fa/FaFacebook.svelte";
  import FaInstagram from "svelte-icons/fa/FaInstagram.svelte";
  import FaTwitter from "svelte-icons/fa/FaTwitter.svelte";
  import FaMapMarkerAlt from "svelte-icons/fa/FaMapMarkerAlt.svelte";
</script>

<footer
  class="bg-slate-950 text-white py-16 px-6 border-t border-white/5 relative overflow-hidden"
>
  <!-- Subtle background accent to match overall theme -->
  <div
    class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"
  ></div>
  <div
    class="absolute -bottom-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"
  ></div>

  <div
    class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 relative z-10"
  >
    <div
      class="flex flex-col items-center md:items-start text-center md:text-left"
    >
      <div class="flex items-center gap-3 mb-4">
        <img
          src="/logo.png"
          alt="FRI CAPSULE Logo"
          class="h-8 w-auto opacity-80"
        />
      </div>
      <p
        class="text-slate-500 text-xs font-bold max-w-xs leading-relaxed uppercase tracking-widest"
      >
        Digitálna vedomostná platforma pre uľahčenie štúdia na Fakulte riadenia
        a informatiky.
      </p>
    </div>

    <div class="flex gap-12 sm:gap-16">
      <div class="text-center md:text-left">
        <p
          class="text-slate-400 font-black text-[10px] uppercase tracking-[0.2em] mb-4"
        >
          Zdrojové kódy
        </p>
        <a
          href="https://github.com/andrejmarkus/fri-capsule"
          target="_blank"
          rel="noopener noreferrer"
          class="text-emerald-500/80 hover:text-emerald-400 transition-colors uppercase text-xs font-black tracking-widest"
          >GitHub Repo</a
        >
      </div>
      <div class="text-center md:text-left">
        <p
          class="text-slate-400 font-black text-[10px] uppercase tracking-[0.2em] mb-4"
        >
          Autor projektu
        </p>
        <span
          class="text-slate-200 text-xs font-black tracking-widest uppercase"
          >Andrej & Róbert</span
        >
      </div>
    </div>
  </div>

  <div
    class="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-center text-slate-600 text-[10px] font-black tracking-[0.3em] uppercase"
  >
    &copy; {new Date().getFullYear()} FRI CAPSULE. VŠETKY PRÁVA VYHRADENÉ.
  </div>
</footer>
