<script>
  import SearchMovies from '../components/SearchMovies.svelte';
  import {onMount} from 'svelte';
  
  export let popular;
  export let total;
  
  import {fly} from 'svelte/transition';
  import Paginator from '../components/Paginator.svelte';
  import PopularMovies from '../components/PopularMovies.svelte';
  import Preloader from '../common/Preloader.svelte';
  
  let currentPage = 1;
  let pageActive = currentPage;
  
  const updatePageActive = () => {
    pageActive = currentPage;
    // Update URL with page number
    history.pushState({}, '', `/?page=${pageActive}`);
  };
  
  const loadPopularMovies = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d5c35e51c81488b19da7c1f572507a3d&language=en-US&page=${pageActive}`);
    const data = await res.json();
    if (res.ok) {
      popular = data.results;
      total = data.total_pages;
    }
  };
  
  const onPageChange = async (page) => {
    currentPage = page;
    updatePageActive();
    await loadPopularMovies();
  };
  
  onMount(() => {
    // Load page number from URL (if any)
    const urlParams = new URLSearchParams(window.location.search);
    const pageNumber = urlParams.get('page');
    if (pageNumber) {
      currentPage = parseInt(pageNumber, 10);
      pageActive = currentPage;
    }
    loadPopularMovies();
  });
  
  $: {
    loadPopularMovies();
  }
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app"/>
</svelte:head>

<section in:fly={{y: 50, duration: 500}} out:fly={{duration: 500}}>
  <SearchMovies/>
  <Preloader/>
  {#if popular}
    <PopularMovies {popular}/>
    <Paginator {total} onPageChange={onPageChange}/>
  {/if}
</section>









