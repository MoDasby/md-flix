import {
  Image,
  SimpleGrid,
  VStack,
  Text,
  HStack
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import {
  FiBarChart2
} from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import MovieData from '../../interfaces/MovieData';
import TvData from '../../interfaces/TvData';
import Api from '../../services/api';

const Details = ({ id, type }: { id: string | undefined, type: string | undefined }) => {
  const [data, setData] = useState<MovieData | TvData>({
    id: 0,
    title: '',
    overview: '',
    poster_path: '',
    backdrop_path: '',
    genres: [],
    vote_average: 0,
  });

  useEffect(() => {
    async function getData() {
      if (type === "movie") {
        const response = await Api.getMovie(id);
        console.log(response)
        setData(response);
      }
    }

    getData();
  }, [data])

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      spacing={8}
      marginLeft={{ base: "15vw", md: "20vw", lg: "15vw" }}
      p={1}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        alt={data.title}
        objectFit="cover"
        objectPosition="center"
        h="100vh"
        p={8}
      />

      <VStack
        spacing={8}
        p={8}
      >
        <Text
          fontSize={{ base: "2rem", md: "3rem" }}
          fontWeight="bold"
        >
          {data.title}
        </Text>
        <HStack spacing={8}>
          <HStack>
            <FiBarChart2
              size="20px"
            />
            <Text fontSize="md" fontWeight="bold">{data.vote_average}</Text>
          </HStack>
          <Text fontSize="md" fontWeight="bold">{data.genres.join(', ')}</Text>
        </HStack>
        <Text fontSize="md" fontWeight="bold">{data.overview}</Text>

      </VStack>
    </SimpleGrid >
  )
}

export default Details;