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
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        background-color: #f3f6f4;
        color: #18181b;
    }
    :global(h1, h2, h3, h4) {
        color: #18181b;
        margin-bottom: 0.5rem;
    }
    :global(p, span, li) {
        color: #71717a;
    }
    :global(a) {
        color: #002e52;
        text-decoration: none;
    }
    :global(.btn) {
        display: inline-block;
        background-color: #002e52;
        color: #ffffff; /* Se usa el color de fondo para cumplir el límite de 5 colores */
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
        /* padding-top: 70px; Compensa el header fijo */
        min-height: calc(100vh - 200px);
    }
</style>
