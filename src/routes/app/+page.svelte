<script>
    import Navigation from "../../components/Navigation.svelte";
    import { db } from "../../firebase";
    import { collection, getDocs } from "firebase/firestore";
  import { null_to_empty } from "svelte/internal";
  import TesterBox from "../../components/TesterBox.svelte";
  import TesterTheme from "../../components/TesterTheme.svelte";

    let data;

    async function getData() {
        const docRef = collection(db, 'subjects');
        const docSnap = await getDocs(docRef);
        let res = []
        docSnap.forEach(d => {
            res.push(d.data());
        })

        return res;
    }

    // getData().then(d => {
    //     data = d[0];
    //     console.log(data);
    // })
</script>

<Navigation />
<section class="min-h-screen bg-gradient-to-b from-green-600 via-emerald-600 to-emerald-600 flex flex-col text-zinc-800">
    <div class="mt-16 h-full max-w-screen-xl w-full px-2 sm:px-0 mx-auto">
        {#await getData() then data}
            <TesterBox>
                {#each data[0].net as d}
                    <TesterTheme name={d.name} questions={d.questions} />
                {/each}
            </TesterBox>
        {/await}
    </div>
</section>