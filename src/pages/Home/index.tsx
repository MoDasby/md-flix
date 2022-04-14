import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SliderSkeleton from "../../components/SliderSkeleton";
import { MovieOrTvData } from "../../interfaces/MovieOrTvData";
import Api from "../../services/api";
import Slider from "../../components/Slider";
import Sidebar from "../../components/Sidebar";
import SidebarItems from "../../enums/SidebarItems";

const HomePage = () => {
  const { type = "movie" } = useParams();
  const [data, setData] = useState<{
    movies: MovieOrTvData[];
    tv: MovieOrTvData[];
  }>(
    {
      movies: [],
      tv: [],
    }
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const movies = await Api.getMovies("/trending/movie/day", 1, true);
      const tvShows = await Api.getTvShows("/trending/tv/day", 1, true);

      setData({
        movies,
        tv: tvShows,
      });
    }

    getData();
    setLoading(false);
  }, [data]);

  return (
    <>
      <Sidebar active={SidebarItems.Home} />
      {loading ? (
        <SliderSkeleton />
      ) : (
        <Slider
          sliderName="Filmes"
          data={data.movies}
        />
      )}

      {loading ? (
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