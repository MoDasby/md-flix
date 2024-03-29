import {
  Image,
  SimpleGrid,
  VStack,
  HStack,
  Text,
} from '@chakra-ui/react';
import {
  FiBarChart2,
  FiFilm
} from 'react-icons/fi';
import { MovieOrTvData } from '../../interfaces/MovieOrTvData';
import FavoriteButton from '../FavoriteButton';

const Details = ({ data }: { data: MovieOrTvData }) => {
  return (
    <SimpleGrid
      columns={{ base: 1, lg: 2 }}
      spacing={8}
      marginLeft={{ base: "0", md: "20vw", lg: "15vw" }}
      placeItems={{ base: "center", lg: "start" }}
      overflow="hidden"
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        alt={data.title}
        objectFit="cover"
        objectPosition="center"
        h={{ base: "50vh", lg: "100vh" }}
        p={8}
      />

      <VStack
        spacing={8}
        p={8}
        w="100%"
      >
        <Text
          fontSize={{ base: "2rem", md: "3rem" }}
          fontWeight="bold"
          w="100%"
        >
          {`${data.title} (${data.release_year})`}
        </Text>
        <HStack spacing={8} w="100%">
          <HStack>
            <FiBarChart2
              size="20px"
            />
            <Text
              fontSize="md"
            >
              {data.vote_average}
            </Text>
          </HStack>
          <FavoriteButton
            showId={data.id.toString()}
            showType={`${data.type}`}
          />
          {
            data.type === "tv" &&
            <Text
              fontSize="1rem"
            >
              {`${data.number_of_seasons} Temporadas`}
            </Text>
          }
        </HStack>
        <HStack w="100%">
          <HStack>
            <FiFilm
              size="20px"
            />
            <Text
              fontSize="md"
            >
              {data.genres.join(', ')}
            </Text>
          </HStack>
        </HStack>
        <Text
          fontSize="md"
        >
          {data.overview}
        </Text>
      </VStack>
    </SimpleGrid >
  )
}

export default Details;