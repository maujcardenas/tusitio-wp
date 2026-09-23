export async function load({ params }) {
    const post = await import(`../../../lib/posts/${params.slug}.md`);
    const content = post.default;

    return {
        content,
        ...post.metadata
    };
}