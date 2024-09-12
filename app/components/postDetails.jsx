export default async function PostDetailsPage({ params }) {
    const postId = params.postId

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        next: {
            revalidate: 120,
        },
    });
    const post = await response.json();
    
    return (
        <div>
            <h1>hello</h1>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
}