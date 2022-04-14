import { Input, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Slider from "../../components/Slider";
import SliderSkeleton from "../../components/SliderSkeleton";
import SidebarItems from "../../enums/SidebarItems";
import { MovieOrTvData } from "../../interfaces/MovieOrTvData";
import Api from "../../services/api";

const SearchPage = () => {
  const [data, setData] = useState<MovieOrTvData[]>([]);
  const [search, setSearch] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    setIsLoading(true);

    async function getData() {
      const response = await Api.getSearch(search, 1);
      setIsLoading(false);
      setData(response);
    }

    if (search.length > 0) {
      getData();
    }
  }, [search])

  return (
    <>
      <Sidebar active={SidebarItems.Search} />
      <Box
        w="90vw"
        display="flex"
        alignItems="center"
        paddingTop="4rem"
        paddingLeft={{ base: "20vw", md: "25vw", lg: "20vw" }}
      >
        <Input
          placeholder="Pesquisar..."
          w="100%"
          _focus={{
            borderColor: "purple.500",
            borderWidth: "2px"
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Box>

      {
        search.length > 0 && (
          isLoading === true ? (
            <SliderSkeleton />
          ) : (
            <Slider sliderName={`Resultados para ${search}`} data={data} />
          )
        )
      }
    </>
  )
}

export default SearchPage;