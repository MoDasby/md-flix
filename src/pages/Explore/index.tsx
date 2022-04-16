import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Slider from "../../components/Slider";
import SliderSkeleton from "../../components/SliderSkeleton";
import SidebarItems from "../../enums/SidebarItems";
import { MovieOrTvData } from "../../interfaces/MovieOrTvData";
import Api from "../../services/api";

const ExplorePage = () => {
  document.title = "Explorar - Md-Flix";
  const [data, setData] = useState<
    {
      movies: MovieOrTvData[];
      tv: MovieOrTvData[];
    }
  >(
    {
      movies: [],
      tv: []
    }
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const movies = await Api.getMovies("/discover/movie", 1, true);
      const tv = await Api.getTvShows("/discover/tv", 1, true);

      setIsLoading(false);
      setData({
        movies: movies,
        tv: tv
      });
    }

    getData();
  }, [data]);

  return (
    <>
      <Sidebar active={SidebarItems.Explore} />
      {
        isLoading ? (
          <SliderSkeleton />
        ) : (
          <Slider sliderName="Explorar Filmes" data={data.movies} />
        )
      }

      {
        isLoading ? (
          <SliderSkeleton />
        ) : (
          <Slider sliderName="Explorar Séries" data={data.tv} />
        )
      }
    </>
  )
}

export default ExplorePage;