<script>
    export let data;

    let searchQuery = "";
    let selectedCategory = "Todas";

    // Extraer categorías únicas
    $: categories = [
        "Todas",
        ...new Set(data.posts.map((post) => post.category)),
    ];

    // Filtrar reactivamente
    $: filteredPosts = data.posts.filter((post) => {
        const matchQuery =
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchCategory =
            selectedCategory === "Todas" || post.category === selectedCategory;
        return matchQuery && matchCategory;
    });
</script>

<div class="layout-container" style="padding-top: 2rem;">
    <h1>Educación y Aprendizaje</h1>

    <div
        class="filters card card-body"
        style="margin-bottom: 2rem; display: flex; gap: 1rem; flex-wrap: wrap;"
    >
        <input
            type="text"
            placeholder="Buscar palabras clave..."
            bind:value={searchQuery}
            class="input-field"
            style="flex: 1; min-width: 200px;"
        />
        <select
            bind:value={selectedCategory}
            class="input-field"
            style="width: auto;"
        >
            {#each categories as cat}
                <option value={cat}>{cat}</option>
            {/each}
        </select>
    </div>

    <div class="grid-3">
        {#each filteredPosts as post}
            <a
                href={`/blog/${post.slug}`}
                class="card"
                style="text-decoration: none;"
            >
                <img src={post.image} alt={post.title} />
                <div class="card-body">
                    <span style="font-size: 0.8rem; color: #002E52;"
                        >{post.category} - {post.date}</span
                    >
                    <h3 style="color: #18181B; margin: 0.5rem 0;">
                        {post.title}
                    </h3>
                    <p style="color: #71717A; font-size: 0.9rem;">
                        {post.description}
                    </p>
                </div>
            </a>
        {/each}
    </div>
</div>

<style>
    .layout-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
    }
    .grid-3 {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        margin-bottom: 4rem;
    }
    .card {
        background-color: #f8f3f2;
        border: 1px solid #71717a;
        border-radius: 12px;
        overflow: hidden;
        display: block;
    }
    .card:hover {
        border-color: #002e52;
    }
    .card-body {
        padding: 1.5rem;
    }
    .input-field {
        padding: 0.5rem;
        border: 1px solid #71717a;
        border-radius: 4px;
    }
</style>
