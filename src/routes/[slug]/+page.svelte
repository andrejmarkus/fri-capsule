<script>
    import { db } from "../../firebase";
    import { collection, getDocs } from "firebase/firestore";
    import TesterBox from "../../components/TesterBox.svelte";
    import TesterTheme from "../../components/TesterTheme.svelte";

    export let data;

    async function getData() {
        const docRef = collection(db, 'subjects');
        const docSnap = await getDocs(docRef);
        let res = []
        docSnap.forEach(d => {
            res.push(d.data());
        })

        return res[0];
    }
</script>

<section class="min-h-screen bg-gradient-to-b from-green-600 via-emerald-600 to-emerald-600 flex flex-col text-zinc-800 font-noto-sans">
    <div class="mt-16 h-full max-w-screen-xl w-full px-2 sm:px-0 mx-auto">
        {#await getData() then questions}
            <TesterBox>
                {#each questions[data.title] as d}
                    <TesterTheme name={d.name} questions={d.questions} />
                {/each}
            </TesterBox>
        {/await}
    </div>
</section>