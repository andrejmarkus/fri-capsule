<script lang="ts">
  import { fly } from "svelte/transition";
  import { dbReports } from "../../lib/db/repository";
  import { Report } from "../../lib/db/models";

  let name = "";
  let email = "";
  let message = "";
  let type = "feedback";
  let submitted = false;
  let loading = false;

  async function handleSubmit() {
    loading = true;
    try {
      await dbReports.create(
        new Report({
          name,
          email,
          message,
          type,
          createdAt: new Date(),
        }),
      );

      submitted = true;
      name = "";
      email = "";
      message = "";
    } catch (error) {
      console.error("Chyba pri odosielaní reportu:", error);
      alert("Nepodarilo sa odoslať report. Skúste to prosím neskôr.");
    } finally {
      loading = false;
    }
  }
</script>

<svelte:head>
  <title>Nahlásenie Chyby / Spätná Väzba | FRI CAPSULE</title>
  <meta
    name="description"
    content="Pomôž nám vylepšiť FRI Capsule. Nahlás chybu v otázkach alebo nám pošli svoj nápad na zlepšenie."
  />
</svelte:head>

<section
  class="min-h-screen bg-slate-950 flex flex-col items-center pt-32 pb-20 relative overflow-hidden"
>
  <!-- Grid Background -->
  <div
    class="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"
  ></div>

  <div class="relative z-10 w-full max-w-3xl px-6 flex flex-col items-center">
    <header class="text-center mb-16" in:fly={{ y: -20, duration: 800 }}>
      <div
        class="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20"
      >
        <div class="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
        <span
          class="text-[10px] font-black tracking-widest text-emerald-400 uppercase"
          >Spätná väzba</span
        >
      </div>
      <h1
        class="text-4xl md:text-6xl font-black font-oswald text-white uppercase tracking-tighter"
      >
        Našli ste <span class="text-emerald-500">Chybu?</span>
      </h1>
      <p
        class="mt-4 text-slate-500 font-bold text-sm tracking-widest uppercase max-w-lg mx-auto leading-relaxed"
      >
        Pomôžte nám vylepšiť vedomostné kapsuly nahlásením chýb v otázkach alebo
        návrhom nových funkcií.
      </p>
    </header>

    {#if submitted}
      <div
        class="w-full glass-dark p-12 rounded-[2.5rem] border border-emerald-500/30 text-center shadow-2xl shadow-emerald-500/10"
        in:fly={{ y: 20, duration: 600 }}
      >
        <div
          class="w-20 h-20 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-8"
        >
          <svg
            class="w-10 h-10 text-emerald-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            ></path>
          </svg>
        </div>
        <h2
          class="text-3xl font-oswald font-black text-white uppercase tracking-tighter mb-4"
        >
          Ďakujeme!
        </h2>
        <p class="text-slate-400 font-medium uppercase tracking-widest text-sm">
          Vaša správa bola úspešne odoslaná do systému.
        </p>
        <button
          class="mt-10 btn-primary text-xs tracking-widest uppercase"
          on:click={() => (submitted = false)}
        >
          Poslať ďalšiu
        </button>
      </div>
    {:else}
      <form
        on:submit|preventDefault={handleSubmit}
        class="w-full glass-dark p-8 md:p-12 rounded-[2.5rem] border border-white/5 shadow-2xl"
        in:fly={{ y: 20, duration: 800, delay: 200 }}
      >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div class="flex flex-col gap-2">
            <label
              for="name"
              class="text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase ml-4"
              >Vaše meno</label
            >
            <input
              id="name"
              type="text"
              bind:value={name}
              required
              placeholder="Napr. Ján Mrkva"
              class="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-700 focus:outline-none focus:border-emerald-500/50 transition-all"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label
              for="email"
              class="text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase ml-4"
              >E-mail</label
            >
            <input
              id="email"
              type="email"
              bind:value={email}
              required
              placeholder="jan@example.com"
              class="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-700 focus:outline-none focus:border-emerald-500/50 transition-all"
            />
          </div>
        </div>

        <div class="flex flex-col gap-4 mb-8">
          <span
            class="text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase ml-4"
            >Typ hlásenia</span
          >
          <div class="flex flex-wrap gap-4">
            <button
              type="button"
              on:click={() => (type = "bug")}
              class={`flex items-center gap-3 px-6 py-3 rounded-xl border transition-all ${
                type === "bug"
                  ? "bg-emerald-500 text-white border-emerald-400"
                  : "bg-white/5 text-slate-400 border-white/5 hover:border-white/10"
              }`}
            >
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8V4m0 0a2 2 0 100-4 2 2 0 000 4zm0 16v-4m0 0a2 2 0 100-4 2 2 0 000 4zm-8-8H0m4 0a2 2 0 100-4 2 2 0 000 4zm16 0h4m-4 0a2 2 0 100-4 2 2 0 000 4z"
                ></path>
              </svg>
              <span class="text-xs font-black uppercase tracking-widest"
                >Chyba v otázke</span
              >
            </button>
            <button
              type="button"
              on:click={() => (type = "feedback")}
              class={`flex items-center gap-3 px-6 py-3 rounded-xl border transition-all ${
                type === "feedback"
                  ? "bg-emerald-500 text-white border-emerald-400"
                  : "bg-white/5 text-slate-400 border-white/5 hover:border-white/10"
              }`}
            >
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                ></path>
              </svg>
              <span class="text-xs font-black uppercase tracking-widest"
                >Návrh / Feedback</span
              >
            </button>
          </div>
        </div>

        <div class="flex flex-col gap-2 mb-10">
          <label
            for="message"
            class="text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase ml-4"
            >Vaša správa</label
          >
          <textarea
            id="message"
            bind:value={message}
            required
            placeholder="Popíšte nám, čo máte na srdci..."
            rows="5"
            class="w-full bg-slate-900/50 border border-white/10 rounded-[2rem] px-6 py-4 text-white placeholder:text-slate-700 focus:outline-none focus:border-emerald-500/50 transition-all resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          class={`w-full btn-primary flex items-center justify-center gap-4 group ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {#if loading}
            <div
              class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"
            ></div>
            <span class="uppercase tracking-[0.2em] text-sm italic font-black"
              >Odosielam...</span
            >
          {:else}
            <span class="uppercase tracking-[0.2em] text-sm italic font-black"
              >Odoslať Report</span
            >
            <svg
              class="w-[18px] h-[18px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              ></path>
            </svg>
          {/if}
        </button>
      </form>
    {/if}
  </div>

  <!-- Background Accents -->
  <div
    class="absolute top-[20%] left-0 w-1/3 h-1/2 bg-emerald-600/5 blur-[120px] pointer-events-none"
  ></div>
  <div
    class="absolute bottom-0 right-0 w-1/4 h-1/3 bg-blue-600/5 blur-[100px] pointer-events-none"
  ></div>
</section>

<style>
  textarea {
    min-height: 150px;
  }
</style>
