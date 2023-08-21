import { Children } from "react"

export default function PostsLayout({Children}){
    return(
        <div>
            <h1>Este es el layout de los PostsLayout</h1>
            {Children}
        </div>
    )
}