<script>
    import '../app.css';
    import Nav from "../components/Nav.svelte";
    import Preloader from "../common/Preloader.svelte";


</script>

<svelte:head>
    <title>Movie DB</title>
</svelte:head>


<Preloader/>

<Nav/>
<main>
    <slot/>
</main>


<style>
    main {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        width: 100%;
        max-width: 1024px;
        margin: 0 auto;
        box-sizing: border-box;
    }

</style>
