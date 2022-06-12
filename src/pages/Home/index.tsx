import { useEffect, useState } from "react";
import SliderSkeleton from "../../components/SliderSkeleton";
import { MovieOrTvData } from "../../interfaces/MovieOrTvData";
import Api from "../../services/api";
import Slider from "../../components/Slider";
import Sidebar from "../../components/Sidebar";
import SidebarItems from "../../enums/SidebarItems";

const HomePage = () => {
  document.title = "Home";
  
  const [data, setData] = useState<{
    movies: MovieOrTvData[];
    tv: MovieOrTvData[];
  }>(
    {
      movies: [],
      tv: [],
    }
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const movies = await Api.getMovies("/trending/movie/week", 1, true);
      const tvShows = await Api.getTvShows("/trending/tv/week", 1, true);

      setData({
        movies,
        tv: tvShows,
      });

      setIsLoading(false);
    }

    if (isLoading) {
      getData();
    }
  }, [data, isLoading]);

  return (
    <>
      <Sidebar active={SidebarItems.Home} />
      {isLoading ? (
        <SliderSkeleton />
      ) : (
        <Slider
          sliderName="Filmes"
          data={data.movies}
        />
      )}

      {isLoading ? (
        <SliderSkeleton />
      ) : (
        <Slider
          sliderName="Séries"
          data={data.tv}
        />
      )}
    </>

  )
}

export default HomePage;