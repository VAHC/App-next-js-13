'use client' // indica que este componente necesita utilizar el cliente
             // por lo tanto, no será de servidor

import { useState } from "react"

export function LikeButton ({id}) {
    const [liked, setLiked] = useState(false)
    
    return(
        <button onClick={() => setLiked(!liked)}>
            {liked ? '❤' : '🤍'}
        </button>
    )
}