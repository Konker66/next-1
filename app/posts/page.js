import Link from 'next/link';

export default async function PostsPage() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 120,
        },
    });
    const posts = await response.json();
    console.log(posts);
    const postsJSX = posts.map((post) => {
        return (
            <Link href={`/posts/${post.id}`} style={{
                width: "70%"
            }}>
                <div style={{
                    width: "100%",
                    background: "white",
                    padding: "10px",
                    borderRadius: "10px",
                    color: "black",
                    marginTop: "20px",
                    // margin: "auto"
                }}>
                    <h1>
                        {post.title}
                    </h1>
                    <p>
                        {post.body}
                    </p>
                </div>
            </Link>
        )
    });

    return (
        <>
            <h1>posts</h1>
            <div>
                {postsJSX}
            </div>
        </>
    );
}