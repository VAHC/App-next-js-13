import { ListOfPosts } from "./[id]/listOfPosts"

export default async function PostsPage ({params}) {
    return (
        <section>
            <ListOfPosts />
        </section>
    )
}