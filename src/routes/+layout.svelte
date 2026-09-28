<script>
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<Header />
<main>
    <slot />
</main>
<Footer />

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        font-family: "Akt", sans-serif, system-ui;
        background-color: #ffffff;
        color: #2a2829;
    }
    :global(h1, h2, h3, h4) {
        color: #2a2829;
        margin-bottom: 0.5rem;
    }
    :global(p, span, li) {
        color: #2a2829;
    }
    :global(a) {
        color: #0c325a;
        text-decoration: none;
    }
    :global(.btn) {
        display: inline-block;
        background-color: #0c325a;
        color: #ffffff;
        padding: 0.75rem 1.5rem;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-weight: bold;
        text-align: center;
    }
    :global(.btn:hover) {
        opacity: 0.9;
    }
    :global(img) {
        max-width: 100%;
        height: auto;
        border-radius: 4px;
    }
    main {
        padding-top: 70px; /*por el header fijo */
        min-height: calc(100vh - 200px);
    }
</style>
