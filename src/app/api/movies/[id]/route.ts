import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://6480b745f061e6ec4d49c101.mockapi.io/movies"

const API_KEY: string = process.env.DATA_API_KEY as string

export async function GET(request: Request) {
    const id = request.url.slice(request.url.lastIndexOf('/') + 1)
    const res = await fetch(`${DATA_SOURCE_URL}/${id}`)

    const movie: Movie = await res.json()

    if(!movie.id) return NextResponse.json({"massage": "movie not found"})

    return NextResponse.json(movie)
}

export async function DELETE(request : Request) {
    const id = request.url.slice(request.url.lastIndexOf('/') + 1)
    if (!id) return NextResponse.json({"massage" : "Movie Id Required"})
    
    await fetch(`${DATA_SOURCE_URL}/${id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    return NextResponse.json({"message":`Movie ${id} Deleted`})
}
