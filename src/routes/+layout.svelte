<script>
  /** @type {import('./$types').LayoutData} */
  export let data;
  data; // mark as used
  import "../app.css";
  import Navigation from "../components/Navigation.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<svelte:head>
  <meta name="theme-color" content="#020617" />
  <meta property="og:site_name" content="FRI Capsule" />
</svelte:head>

<div class="min-h-screen flex flex-col bg-slate-950">
  <Navigation />
  <main class="flex-grow">
    <slot />
  </main>
  <Footer />
</div>
