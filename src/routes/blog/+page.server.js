export async function load() {
    const allPostFiles = import.meta.glob('/src/lib/posts/*.md', { eager: true });
    let posts = [];

    for (const path in allPostFiles) {
        const file = allPostFiles[path];
        const slug = path.split('/').pop().replace('.md', '');
        if (file && typeof file === 'object' && 'metadata' in file) {
            posts.push({
                slug,
                ...file.metadata
            });
        }
    }

    // Ordenar por fecha descendente
    posts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    return { posts };
}