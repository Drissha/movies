import getAllMovie from "@/lib/getAllMovie"
import Link from "next/link"
import Image from "next/image"


export default async function Home() {
  const movieData: Promise<Movie[]> = getAllMovie()

  const movies = await movieData
  return (
    <main className='container'>
      <div className="input-group text-center my-10">
        <h1 className='text-2xl font-bold mb-3'>Movie List</h1>
        <input type="text" name="search-input" id="search-input" placeholder="Search by Name...." className='rounded-l-lg p-2 text-black w-3/6' />
        <button type="button" id="search-btn" className='rounded-r-lg bg-sky-600 p-2'>Search</button>
      </div>
      <div className="grid grid-cols-4 gap-4 text-center">
      {movies.map(movie => {
      const images = `${movie.image}`
            return (
                <>
                  <div key={movie.id} className="my-5">
                      <img src={images} alt={"cover"} className="mx-auto"/>
                      <p className="my-5">{movie.title}</p>
                      <Link href={`./movies/${movie.id}`} className="rounded bg-sky-600 p-2">Selengkapnya</Link>
                  </div>
                </>
            )
        })}
      </div>
    </main>
  )
}
