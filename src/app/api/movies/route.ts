import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://6480b745f061e6ec4d49c101.mockapi.io/movies"

const API_KEY: string = process.env.DATA_API_KEY as string

export async function GET() {
    const res = await fetch(DATA_SOURCE_URL)

    const movies: Movie[] = await res.json()
    return NextResponse.json(movies)
}

export async function POST(request : Request) {
    const { id, title, image, desc, releaseDate }: Movie = await request.json()
    if (!title || !image || !desc || !releaseDate) return NextResponse.json({"massage" : "missing Required data"})
    
    const res = await fetch(DATA_SOURCE_URL,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'API-KEY': API_KEY
        },
        body: JSON.stringify({
            id, title, image, desc, releaseDate
        })
    })
    return NextResponse.json({"message":`Movie added`})
}

export async function PUT(request : Request) {
    const { id, title, image, desc, releaseDate }: Movie = await request.json()
    if (!id || !title || !image || !desc || !releaseDate) return NextResponse.json({"massage" : "missing Required data"})
    
    const res = await fetch(`${DATA_SOURCE_URL}/${id}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'API-KEY': API_KEY
        },
        body: JSON.stringify({
            id, title, image, desc, releaseDate
        })
    })
    const updatedMovie: Movie[] = await res.json()
    return NextResponse.json({updatedMovie})
}