
export default async function getMoviePosts(id : string) {
    const res = await fetch(`http://localhost:3000/api/movies/${id}`)
    if (!res.ok) throw new Error('failed to fetch data')
    return res.json()
}