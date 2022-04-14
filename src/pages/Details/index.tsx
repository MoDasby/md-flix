import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Details from "../../components/Details";
import DetailsSkeleton from "../../components/DetailsSkeleton";
import Sidebar from "../../components/Sidebar";
import SidebarItems from "../../enums/SidebarItems";
import { MovieOrTvData } from "../../interfaces/MovieOrTvData";
import Api from "../../services/api";

const DetailsPage = () => {
  const { id, type } = useParams();
  const [data, setData] = useState<MovieOrTvData>({
    id: 0,
    title: '',
    overview: '',
    poster_path: '',
    backdrop_path: '',
    genres: [],
    vote_average: 0
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      if (type === "movie") {
        const response = await Api.getMovie(id);
        setIsLoading(false);
        setData(response);
      } else if (type === "tv") {
        const response = await Api.getTvShow(id);
        setIsLoading(false);
        setData(response);
      }
    }

    if (isLoading) {
      getData();
    }
  }, [data, id, isLoading, type]);


  return (
    <>
      <Sidebar active={SidebarItems.None}  />
      {
        isLoading ? <DetailsSkeleton /> : <Details data={data} />
      }
    </>
  )
}

export default DetailsPage;