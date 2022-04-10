import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Slider from "../../components/Slider";
import SliderSkeleton from "../../components/SliderSkeleton";
import MovieData from "../../interfaces/MovieData";
import TvData from "../../interfaces/TvData";
import Api from "../../services/api";

interface IHomePage {
  moviesTrending: MovieData[],
  topRatedMovies: MovieData[],
  popularMovies: MovieData[],
  TvTrending: TvData[],
  topRatedTv: TvData[],
  popularTv: TvData[],
}

const HomePage = () => {

  const [data, setData] = useState<IHomePage>({
    moviesTrending: [],
    topRatedMovies: [],
    popularMovies: [],
    TvTrending: [],
    topRatedTv: [],
    popularTv: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const getData = async () => {
      const moviesTrending = await Api.getMovies("/trending/movie/day", 1);
      const tvTrending = await Api.getTvShows("/trending/tv/day", 1);
      const topRatedMovies = await Api.getMovies("/movie/top_rated", 1);
      const topRatedTv = await Api.getTvShows("/tv/top_rated", 1);
      const popularMovies = await Api.getMovies("/movie/popular", 1);
      const popularTv = await Api.getTvShows("/tv/popular", 1);

      setData({
        ...data,
        moviesTrending: moviesTrending,
        topRatedMovies: topRatedMovies,
        popularMovies: popularMovies,
        TvTrending: tvTrending,
        topRatedTv: topRatedTv,
        popularTv: popularTv,

      });

      setIsLoading(false);
    }

    if (isLoading) {
      getData();
    }
  }, [data]);

  return (
    <>
      <Sidebar />
      {
        isLoading ? <SliderSkeleton /> :
          <Slider
            sliderName="Filmes em alta"
            data={data.moviesTrending}
            uriToRedirect="/all/movie"
          />}
      {
        isLoading ? <SliderSkeleton /> :
          <Slider
            sliderName="Séries em alta"
            data={data.TvTrending}
            uriToRedirect="/all/tv"
          />}
      {
        isLoading ? <SliderSkeleton /> :
          <Slider
            sliderName="Filmes Bem Avaliados"
            data={data.topRatedMovies}
            uriToRedirect="/all/movie"
          />}
      {
        isLoading ? <SliderSkeleton /> :
          <Slider
            sliderName="Séries Bem Avaliadas"
            data={data.topRatedTv}
            uriToRedirect="/all/tv"
          />}
      {
        isLoading ? <SliderSkeleton /> :
          <Slider
            sliderName="Filmes Populares"
            data={data.popularMovies}
            uriToRedirect="/all/movie"
          />}
      {
        isLoading ? <SliderSkeleton /> :
          <Slider
            sliderName="Séries Populares"
            data={data.popularTv}
            uriToRedirect="/all/tv"
          />}
    </>
  )
}

export default HomePage;