<script>
    export let stories = [];
</script>

<section>
    <h2>Nuestros Casos de Éxito</h2>
    <div class="grid-2">
        {#each stories as story}
            <div class="card">
                <img src={story.image} alt={story.alt} />
                <div class="card-body">
                    <h3 class="card-title">{story.title}</h3>
                    <p>{story.description}</p>
                </div>
            </div>
        {/each}
    </div>
</section>

<style>
    .grid-2 {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
    }

    .card {
        background-color: #f8fafc;
        border: 1px solid #2a2829;
        border-radius: 12px;
        overflow: hidden;
    }

    .card-body {
        padding: 1.5rem;
    }

    .card-title {
        color: #000000;
    }
</style>
