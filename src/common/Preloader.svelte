<script>
    export let isPageLoaded = false;

    export const pageLoaded = () => {
        isPageLoaded = true
    }

</script>
{#if !isPageLoaded}
    <div class="preloader-container" use:pageLoaded>
        <div></div>
    </div>
{/if}

<style>

    .preloader-container {
        position: fixed;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        display: grid;
        place-content: center;
    }

    .preloader-container::after {
        position: absolute;
        content: "";
        display: block;
        background-color: rgba(47, 53, 59, .5);
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }

    .preloader-container > div {
        height: 10rem;
        width: 10rem;
        border-radius: 50%;
        border-top: 5px solid rgb(255, 255, 255);
        animation: is-loading 1s linear infinite;
        z-index: 2;
    }

    @keyframes is-loading {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }

</style>
