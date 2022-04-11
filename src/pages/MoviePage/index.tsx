import { useParams } from "react-router-dom";
import Details from "../../components/Details";
import Sidebar from "../../components/Sidebar";

const MoviePage = () => {
  const { id, type } = useParams();

  return (
    <>
      <Sidebar />
      <Details
        id={id}
        type={type}
      />
    </>
  )
}

export default MoviePage;