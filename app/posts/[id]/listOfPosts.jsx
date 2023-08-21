import { LikeButton } from "./likeButton"
import Link from "next/link"

const fetchPosts = () => {
    console.log('FETCHING POSTS!!!!!')
    console.log('🙀')
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 60
        } 
    })
    .then(res => res.json())
}
export async function ListOfPosts () {
    const posts = await fetchPosts()

    return posts.slice(0, 5).map(post => (
                <article key={post.id}>
                    <Link href={`/posts/${post.id}`}>
                        <h2 style={{color: '#09f'}}>{post.title}</h2>
                        <p>{post.body}</p>
                        <LikeButton id={post.id} />
                    </Link>
                </article>
            ))
}