<script context="module">
    export async function load({fetch, params}) {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=d5c35e51c81488b19da7c1f572507a3d&language=en-US&query=${params.id}&page=1&include_adult=false`

        const res = await fetch(url)
        const data = await res.json();
        console.log(data)
        if (res.ok) {
            return {
                props: {searchedMovie: data.results}
            }
        }
    };
</script>

<script>
    import MovieCard from "../../components/MovieCard.svelte";

    export let searchedMovie
</script>

<div class="search-movies">
    {#each searchedMovie as movie}
        <MovieCard {movie}/>
    {/each}
</div>

<style>
    .search-movies {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(15.6rem, 1fr));
        grid-column-gap: 1rem;
        grid-row-gap: 2rem;
    }
</style>

