import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SliderSkeleton from "../../components/SliderSkeleton";
import { MovieOrTvData } from "../../interfaces/MovieOrTvData";
import Api from "../../services/api";
import Slider from "../../components/Slider";
import Sidebar from "../../components/Sidebar";
import SidebarItems from "../../enums/SidebarItems";

const AllPage = () => {
  const { type = "movie" } = useParams();
  const [data, setData] = useState<MovieOrTvData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async (type: string) => {
      if (type === "movie") {
        const movies = await Api.getMovies("/discover/movie", 1, true);
        setData(movies);
      } else {
        const tvShows = await Api.getTvShows("/discover/tv", 1, true);
        setData(tvShows);
      }
    }

    getData(type);
    setLoading(false);
  }, [type]);

  return (
    <>
    <Sidebar active={SidebarItems.None} />
      {loading ? (
        <SliderSkeleton />
      ) : (
        <Slider
          sliderName={type === "movie" ? "Filmes" : "Séries"}
          data={data}
        />
      )}
    </>

  )
}

export default AllPage;