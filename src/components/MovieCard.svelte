<script>
  import Preloader from '../common/Preloader.svelte';
  
  export let movie;
</script>

<div class="movie-card">
  <Preloader/>
  <a sveltekit:prefetch sveltekit:noscroll href={`/movie/${movie.id}`}>
    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}>
    <div class="description">
      <h2>{movie.title}</h2>
      <p>{movie.release_date}</p>
    </div>
  </a>
</div>


<style>
  .movie-card {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 1rem;
  }
  
  a {
    display: block;
    height: 85%;
    margin-bottom: 1rem;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
    margin-bottom: 1rem;
    transition: all .8s linear;
  }
  
  .movie-card:hover img {
    transform: scale(1.05);
  }
  
  h2 {
    font-size: .9rem;
    margin-bottom: .5rem;
    transition: all .8s linear;
  }
  
  p {
    font-size: .7rem;
    transition: all .8s linear;
  }
  
  h2:hover,
  p:hover {
    opacity: .6;
  }

</style>