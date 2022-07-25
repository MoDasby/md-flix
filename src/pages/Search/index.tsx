import { Input, Box, HStack, Select, Text, Badge } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Slider from "../../components/Slider";
import SliderSkeleton from "../../components/SliderSkeleton";
import SidebarItems from "../../enums/SidebarItems";
import { MovieOrTvData } from "../../interfaces/MovieOrTvData";
import Api from "../../services/api";
import genres from '../../utils/genres'

const SearchPage = () => {
  document.title = "Pesquisar - Md-Flix";
  const [data, setData] = useState<MovieOrTvData[]>([]);
  const [search, setSearch] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean | undefined>(undefined);
  const [selectedFilter, setSelectedFilter] = useState<string | undefined>(undefined);

  const selectRef = React.useRef<HTMLSelectElement>(null)

  useEffect(() => {
    setIsLoading(true);

    async function getData() {
      const response = selectedFilter ? await Api.getSearch(search, 1, selectedFilter) : await Api.getSearch(search, 1);
      setIsLoading(false);
      setData(response);
      document.title = `Resultados para ${search} - Md-Flix`;
    }

    if (search.length > 0) {
      getData();
    }
  }, [search, selectedFilter])

  return (
    <>
      <Sidebar active={SidebarItems.Search} />
      <Box
        w="100vw"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        paddingTop="4rem"
        paddingLeft={{ base: "0", md: "25vw", lg: "20vw" }}
      >
        <Input
          placeholder="Pesquisar..."
          w="90%"
          m="1rem"
          _focus={{
            borderColor: "purple.500",
            borderWidth: "2px"
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <HStack
         w="90%"
         m="1rem"
        >
          <Text>Gêneros: </Text>
          <Select 
            placeholder="Todos"
            variant="filled"
            ref={selectRef}
            onChange={e => setSelectedFilter(e.target.value)} 
            w="200px"
          >
            {
              genres.map(e => (
                <option key={e.id} value={e.name} >{e.name}</option>
              ))
            }
          </Select>

          {
            selectedFilter && 
            <HStack>
              <Text>Filtrando por</Text> 
              <Badge>{selectedFilter}</Badge>
            </HStack>
          }
        </HStack>
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