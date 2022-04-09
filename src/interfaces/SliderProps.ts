interface MovieData {
    title: string,
    backdrop_path: string,
    poster_path: string,
    rating: number,
    genre: string,
    overview: string,
}

interface TvData extends MovieData {
    seasons: number,
}

interface SliderProps {
    sliderName: string,
    movies: MovieData[] | TvData[],
}

export default SliderProps;