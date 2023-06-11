type Movie = {
    map(arg0: (movie: any) => React.JSX.Element): React.ReactNode
    id : number,
    image : string,
    title : string,
    desc : string,
    releaseDate : string
}

type Post = {
    id : number,
    image : string,
    title : string,
    desc : string,
    releaseDate : string
}