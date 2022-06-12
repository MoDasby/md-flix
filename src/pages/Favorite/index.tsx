import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Slider from "../../components/Slider";
import SliderSkeleton from "../../components/SliderSkeleton";
import SidebarItems from "../../enums/SidebarItems";
import { MovieOrTvData } from "../../interfaces/MovieOrTvData";
import Api from "../../services/api";

const FavoritePage = () => {
  document.title = "Seus Favoritos"

  const [data, setData] = useState<MovieOrTvData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

      if (favorites) {
        favorites.forEach(async (item: any) => {
          const response = item.type === "movie" ? await Api.getMovie(item.id) : await Api.getTvShow(item.id);
          setData(data => [...data, response]);
        });

        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    }

    if (isLoading) {
      getData();
    }
  }, [data, isLoading]);

  return (
    <>
      <Sidebar active={SidebarItems.Favorites} />
      {
        isLoading ? <SliderSkeleton /> :
          <Slider
            sliderName="Seus Favoritos"
            data={data}
          />
      }
    </>
  )
}

export default FavoritePage;