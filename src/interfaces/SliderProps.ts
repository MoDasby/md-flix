import MovieData from "./MovieData";
import TvData from "./TvData";

interface SliderProps {
    sliderName: string,
    data: MovieData[] | TvData[],
    uriToRedirect?: string,
}

export default SliderProps;