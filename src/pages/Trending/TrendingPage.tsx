import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Slider from "../../components/Slider";
import SliderSkeleton from "../../components/SliderSkeleton";
import SidebarItems from "../../enums/SidebarItems";
import { MovieOrTvData } from "../../interfaces/MovieOrTvData";
import Api from "../../services/api";

interface ITrendingPage {
  moviesTrending: MovieOrTvData[],
  topRatedMovies: MovieOrTvData[],
  popularMovies: MovieOrTvData[],
  TvTrending: MovieOrTvData[],
  topRatedTv: MovieOrTvData[],
  popularTv: MovieOrTvData[],
}

const TrendingPage = () => {

  const [data, setData] = useState<ITrendingPage>({
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
  }, [data, isLoading]);

  return (
    <>
      <Sidebar active={SidebarItems.Trending} />
      {
        isLoading ? <SliderSkeleton /> :
          <Slider
            sliderName="Filmes em alta"
            data={data.moviesTrending}
          />}
      {
        isLoading ? <SliderSkeleton /> :
          <Slider
            sliderName="Séries em alta"
            data={data.TvTrending}
          />}
      {
        isLoading ? <SliderSkeleton /> :
          <Slider
            sliderName="Filmes Bem Avaliados"
            data={data.topRatedMovies}
          />}
      {
        isLoading ? <SliderSkeleton /> :
          <Slider
            sliderName="Séries Bem Avaliadas"
            data={data.topRatedTv}
          />}
      {
        isLoading ? <SliderSkeleton /> :
          <Slider
            sliderName="Filmes Populares"
            data={data.popularMovies}
          />}
      {
        isLoading ? <SliderSkeleton /> :
          <Slider
            sliderName="Séries Populares"
            data={data.popularTv}
          />}
    </>
  )
}

export default TrendingPage;