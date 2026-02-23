<script>
  import "../app.css";
  import Navigation from "../components/Navigation.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<div class="min-h-screen flex flex-col bg-slate-950">
  <Navigation />
  <main class="flex-grow">
    <slot />
  </main>
  <Footer />
</div>