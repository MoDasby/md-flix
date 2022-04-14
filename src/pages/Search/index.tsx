import { Input, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Slider from "../../components/Slider";
import SliderSkeleton from "../../components/SliderSkeleton";
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
      <Sidebar />
      <Box
        w="80vw"
        display="flex"
        alignItems="center"
        paddingLeft={{ base: "15vw", md: "20vw" }}
        p={10}
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
          console.log(isLoading),
          isLoading === true ? (
            <SliderSkeleton />
          ) : (
            <Slider sliderName="Resultados" data={data} />

          )
        )
      }
    </>
  )
}

export default SearchPage;