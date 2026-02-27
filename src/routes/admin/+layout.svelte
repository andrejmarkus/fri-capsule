<script lang="ts">
  import { onMount } from "svelte";
  import { auth } from "../../firebase";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { browser } from "$app/environment";
  import firebase from "firebase/compat/app";

  let loading = true;
  let user: firebase.User | null = null;
  let isAdmin = false;

  $: isLoginPage = $page.url.pathname.replace(/\/$/, "") === "/admin/login";

  onMount(() => {
    const unsubscribe = auth.onAuthStateChanged(async (u) => {
      user = u;
      isAdmin = false;

      if (u) {
        try {
          const token = await u.getIdTokenResult(true);
          isAdmin = token.claims.admin === true;
        } catch (error) {
          console.error("Failed to verify admin claim:", error);
        }
      }

      loading = false;

      if (!browser) return;
      if (!u && !isLoginPage) {
        goto("/admin/login");
        return;
      }
      if (u && !isAdmin && !isLoginPage) {
        await auth.signOut();
        goto("/admin/login?reason=admin");
        return;
      }
      if (u && isAdmin && isLoginPage) {
        goto("/admin");
      }
    });

    return unsubscribe;
  });

  async function logout() {
    await auth.signOut();
    goto("/admin/login");
  }
</script>

{#if loading}
  <div class="min-h-screen flex items-center justify-center text-white">
    <p class="text-xl font-bold animate-pulse">Overujem prístup...</p>
  </div>
{:else if (user && isAdmin) || isLoginPage}
  <div
    class="min-h-screen bg-slate-950 text-white relative fill-available overflow-x-hidden"
  >
    <!-- Shared Background Texture -->
    <div
      class="fixed inset-0 z-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"
    ></div>

    <div class="relative z-10 flex flex-col min-h-screen">
      {#if user && isAdmin}
        <nav
          class="bg-slate-950/80 border-b border-white/5 py-4 px-4 md:px-8 flex justify-between items-center sticky top-0 z-50 backdrop-blur-xl"
        >
          <div class="flex items-center gap-4">
            <a
              href="/"
              class="text-slate-500 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                ><path
                  d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                /><polyline points="9 22 9 12 15 12 15 22" /></svg
              >
            </a>
            <a
              href="/admin"
              class="text-emerald-500 font-black tracking-tighter text-xl font-oswald uppercase italic"
              >ADMIN <span class="text-white">PANEL</span></a
            >
          </div>
          <div class="flex items-center gap-3 md:gap-6">
            <span
              class="hidden sm:inline text-[10px] text-slate-500 font-black uppercase tracking-widest"
              >{user.email}</span
            >
            <button
              on:click={logout}
              class="text-[10px] font-black text-rose-500 border border-rose-500/20 px-3 py-1.5 rounded-lg hover:bg-rose-500 hover:text-white transition-all uppercase tracking-widest"
            >
              ODHLÁSIŤ
            </button>
          </div>
        </nav>
      {/if}

      <main class="flex-grow">
        <slot />
      </main>
    </div>
  </div>
{/if}
