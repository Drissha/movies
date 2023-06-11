
export default async function getAllMovie() {
    const res = await fetch('http://localhost:3000/api/movies')
    if (!res.ok) throw new Error('failed to fetch data')
    return res.json()
}