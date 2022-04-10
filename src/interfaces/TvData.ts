import MovieData from './MovieData';

interface TvData extends MovieData {
    number_of_seasons: number,
}

export default TvData;