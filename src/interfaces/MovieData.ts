interface MovieData {
    id: number,
    title: string,
    backdrop_path: string,
    poster_path: string,
    vote_average: number,
    genres: string[],
    overview: string,
}

export default MovieData;