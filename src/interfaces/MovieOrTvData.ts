export interface MovieOrTvData {
    id: number,
    title: string,
    overview: string,
    genres: string[],
    vote_average: number,
    number_of_seasons?: number,
    poster_path: string,
    backdrop_path: string,
    type?: string
}