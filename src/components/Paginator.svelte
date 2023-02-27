<script>
  export let totalPages = 500;
  export let currentPage = 1;
  export let onPageChange;
  
  const MAX_PAGES = 10; // maximum number of pages to display at a time
  let pageRangeStart = 1;
  let pageRangeEnd = Math.min(totalPages, MAX_PAGES);
  
  function handlePageClick(page) {
    if (page <= 1) {
      currentPage = 1;
    } else if (page > totalPages) {
      currentPage = totalPages;
    } else {
      currentPage = page;
    }
    onPageChange(currentPage);
    
    // Update page range start and end based on the new current page
    pageRangeStart = Math.max(1, currentPage - Math.floor(MAX_PAGES / 2));
    pageRangeEnd = Math.min(totalPages, pageRangeStart + MAX_PAGES - 1);
  }
  
  function prevPageRange() {
    pageRangeStart = Math.max(1, pageRangeStart - MAX_PAGES);
    pageRangeEnd = Math.min(totalPages, pageRangeEnd - MAX_PAGES);
  }
  
  function nextPageRange() {
    pageRangeStart = Math.min(totalPages - MAX_PAGES + 1, pageRangeStart + MAX_PAGES);
    pageRangeEnd = Math.min(totalPages, pageRangeEnd + MAX_PAGES);
  }
  
  // Initialize page range based on current page
  pageRangeStart = Math.max(1, currentPage - Math.floor(MAX_PAGES / 2));
  pageRangeEnd = Math.min(totalPages, pageRangeStart + MAX_PAGES - 1);
  
  $: buttonDisabledPrev = currentPage === 1;
  $: buttonDisabledNext = currentPage === totalPages;
  
</script>

<div class="paginator">
  <div>
    <button on:click={() => handlePageClick(1)} disabled={buttonDisabledPrev}>First</button>
    <button on:click={() => handlePageClick(currentPage - 1)} disabled={buttonDisabledPrev}>Previous</button>
    <button on:click={() => handlePageClick(currentPage + 1)} disabled={buttonDisabledNext}>Next</button>
    <button on:click={() => handlePageClick(totalPages) } disabled={buttonDisabledNext}>Last</button>
  </div>
  <ul class="paginatorList">
    {#if pageRangeStart > 1}
      <li class="page">
        <button on:click={() => prevPageRange()}>{'<<'}</button>
      </li>
    {/if}
    {#each Array.from({length: pageRangeEnd - pageRangeStart + 1}, (_, i) => i + pageRangeStart) as page}
      <li class="page {currentPage === page ? 'active' : ''}">
        <button on:click={() => handlePageClick(page)}>{page}</button>
      </li>
    {/each}
    {#if pageRangeEnd < totalPages}
      <li class="page">
        <button on:click={() => nextPageRange()}>{'>>'}</button>
      </li>
    {/if}
  </ul>
</div>


<style>
  ul {
    list-style: none;
  }
  
  .paginator {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
  }
  
  .paginatorList{
    display: flex;
    flex-wrap: wrap;
  }
  
  .page {
    margin: 0 .5rem .5rem;
  }
  
button{
    border: 1px solid;
    transition: all .5s linear;
  }
  
  button:hover:enabled{
    border: 1px solid red;
    background-color: rgb(212 141 141 / 50%);
  }

.page.active button {
    background-color: cadetblue;
    font-weight: bold;
  }
</style>