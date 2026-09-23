<script>
    export let data;
</script>

<article
    class="layout-container"
    style="padding-top: 2rem; padding-bottom: 4rem;"
>
    <header style="margin-bottom: 2rem;">
        <span style="color: #002E52; font-weight: bold;">{data.category}</span>
        <h1 style="margin: 0.5rem 0;">{data.title}</h1>
        <p>Última edición: {data.date}</p>
        <img
            src={data.image}
            alt={data.title}
            style="width: 100%; max-height: 400px; object-fit: cover; margin-top: 1rem;"
        />
    </header>

    <div class="markdown-content">
        <svelte:component this={data.content} />
    </div>

    <div style="margin-top: 3rem;">
        <a href="/blog" class="btn">← Volver al Blog</a>
    </div>
</article>

<style>
    .layout-container {
        max-width: 800px;
        margin: 0 auto;
        padding: 0 2rem;
    }
    .markdown-content :global(h2),
    .markdown-content :global(h3) {
        margin-top: 2rem;
        color: #18181b;
    }
    .markdown-content :global(p) {
        line-height: 1.6;
        color: #71717a;
    }
    .markdown-content :global(ul),
    .markdown-content :global(ol) {
        color: #71717a;
        padding-left: 1.5rem;
    }
</style>
