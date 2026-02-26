<script lang="ts">
  import { auth } from "../../../firebase";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";

  let email = "";
  let password = "";
  let error = "";
  let loading = false;

  async function login() {
    loading = true;
    error = "";
    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      if (result.user) {
        // Redirekt zabezpečí layout, ale pre istotu ho voláme aj tu
        goto("/admin", { replaceState: true });
      }
    } catch (e: any) {
      console.error(e);
      error = "Nesprávny email alebo heslo.";
    } finally {
      loading = false;
    }
  }
</script>

<div class="min-h-screen bg-slate-950 flex items-center justify-center p-6">
  <div
    class="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-10 shadow-2xl relative overflow-hidden"
  >
    <!-- Accent line -->
    <div
      class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-indigo-600"
    ></div>

    <div class="text-center mb-10">
      <h1
        class="text-3xl font-black text-white uppercase tracking-tighter mb-2 italic"
      >
        ADMIN PRÍSTUP
      </h1>
      <p
        class="text-slate-500 text-xs font-bold uppercase tracking-widest leading-relaxed"
      >
        Použite svoje administrátorské prihlasovacie údaje.
      </p>
    </div>

    {#if error}
      <div
        class="bg-rose-900/50 border border-rose-500/20 text-rose-300 p-4 rounded-xl text-xs font-bold mb-8 animate-shake"
      >
        {error}
      </div>
    {/if}

    <form on:submit|preventDefault={login} class="space-y-6">
      <div class="space-y-2">
        <label
          for="email"
          class="block text-slate-500 text-[10px] uppercase font-black tracking-widest"
          >Email</label
        >
        <input
          id="email"
          type="email"
          bind:value={email}
          required
          class="w-full bg-slate-950 border border-slate-700 rounded-xl p-4 text-white font-medium focus:border-emerald-500/50 transition-colors"
          placeholder="admin@example.com"
        />
      </div>

      <div class="space-y-2">
        <label
          for="password"
          class="block text-slate-500 text-[10px] uppercase font-black tracking-widest"
          >Heslo</label
        >
        <input
          id="password"
          type="password"
          bind:value={password}
          required
          class="w-full bg-slate-950 border border-slate-700 rounded-xl p-4 text-white font-medium focus:border-emerald-500/50 transition-colors"
          placeholder="••••••••"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        class="w-full bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold transition shadow-lg shadow-emerald-900/40 uppercase tracking-widest text-sm transform hover:scale-[1.02] active:scale-[0.98]"
      >
        {loading ? "PRIHLASUJEM..." : "PRIHLÁSIŤ SA"}
      </button>
    </form>

    <div class="mt-12 text-center">
      <p class="text-slate-700 text-[9px] font-bold uppercase tracking-widest">
        Nezabudnite povoliť Email/Password metodúd v Firebase konzole.
      </p>
    </div>
  </div>
</div>

<style>
  @keyframes shake {
    0%,
    100% {
      transform: translateX(0);
    }
    10%,
    30%,
    50%,
    70%,
    90% {
      transform: translateX(-2px);
    }
    20%,
    40%,
    60%,
    80% {
      transform: translateX(2px);
    }
  }
  .animate-shake {
    animation: shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }
</style>
