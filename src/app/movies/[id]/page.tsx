import getMovie from "@/lib/getMovie"
import getMoviePosts from "@/lib/getMoviePosts"
import { Suspense } from "react"
import MoviePosts from "./components/MoviePost"

type Params = {
    params: {
        id: string
    }
}

export default async function MoviePage({params:{id}}:Params) {
    const movieData : Promise<Movie> = getMovie(id)
    const moviePostData : Promise<Post[]> = getMoviePosts(id)
    // const [movie, moviePosts] = await Promise.all([movieData,moviePostData])
    const movie = await movieData
    return(
        <>
            <img src={movie.image} alt={"cover"} />
            <h1>{movie.title}</h1>
            <p>{movie.desc}</p>
            <p>{movie.releaseDate}</p>
            
        </>
    )
}