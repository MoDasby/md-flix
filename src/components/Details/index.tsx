import {
  Image,
  SimpleGrid,
  VStack,
  HStack,
  Text,
} from '@chakra-ui/react';
import {
  FiBarChart2
} from 'react-icons/fi';
import { MovieOrTvData } from '../../interfaces/MovieOrTvData';

const Details = ({ data }: { data: MovieOrTvData }) => {

  return (
    <SimpleGrid
      columns={{ base: 1, lg: 2 }}
      spacing={8}
      marginLeft={{ base: "15vw", md: "20vw", lg: "15vw" }}
      placeItems={{ base: "center", lg: "start" }}
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
      >
        <Text
          fontSize={{ base: "2rem", md: "3rem" }}
          fontWeight="bold"
        >
          {data.title}
        </Text>
        <HStack spacing={8}>
          {
            data.type === "tv" &&
            <Text
              fontSize="1rem"
            >
              {`${data.number_of_seasons} Temporadas`}
            </Text>
          }
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
          <Text
            fontSize="md"
          >
            {data.genres.join(', ')}
          </Text>
        </HStack>
        <Text
          fontSize="md"
          fontWeight="bold"
        >
          {data.overview}
        </Text>
      </VStack>
    </SimpleGrid >
  )
}

export default Details;