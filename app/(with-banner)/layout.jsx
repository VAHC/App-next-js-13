export default function PostsLayout({children}){
    return(
        <div>
            <marquee style={{background: '#fff', color: 'purple'}}>El mejor fullstack del mundo mundial</marquee>
            {children}
        </div>
    )
}

// El layout lo que hace es mantener siempre el
// estado