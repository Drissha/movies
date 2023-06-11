import Image from "next/image"

type Props ={
    promise : Promise<Post[]>
}

export default async function MoviePosts({promise}:Props) {
    const posts = await promise

    const content = posts.map(post =>{
        return(
            <article key={post.id}>
                <h2>{post.title}</h2>
                <img src={`${post.image}`} alt={"cover"}/>
                <p>{post.desc}</p>
            </article>
        )
    }
    )
    console.log("id");
    
    return content
}