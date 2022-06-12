import '@fontsource/roboto';
import {
  Box,
  Flex,
  Grid,
  Text,
  Image,
  HStack,
} from '@chakra-ui/react';
import {
  FiBarChart2
} from 'react-icons/fi';
import SliderProps from "../../interfaces/SliderProps";
import { Link } from 'react-router-dom';
import FavoriteButton from '../FavoriteButton';
import { MovieOrTvData } from '../../interfaces/MovieOrTvData';

const Slider = ({ sliderName, data }: SliderProps) => {

  return (
    <>
      <Box
        as='section'
        w="100%"
        paddingTop="2rem"
        paddingLeft={{ base: "0", md: "20vw", lg: "15vw" }}
      >
        <Flex
          as='header'
          justify='space-between'
          align='center'
          p={5}
        >
          <Text
            fontSize={{ base: '1rem', md: '1.5rem' }}
            fontWeight='bold'
          >
            {sliderName}
          </Text>

        </Flex>

        <Grid
          templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(6, 1fr)' }}
          gap="6"
          p="5"
        >
          {
            data.map((item: MovieOrTvData) => (
              <Box
                key={item.id}
                as='a'
                cursor="pointer"
                position="relative"
                transition="all .3s ease-in-out"
                w={{ base: '150px' }}
                _hover={{
                  transform: "scale(1.05)",
                }}
              >
                <Link
                  to={item.type === 'movie' ? `/details/movie/${item.id}` : `/details/tv/${item.id}`}
                >
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt={item.title}
                    objectFit="cover"
                    borderRadius="20px"
                  />
                </Link>
                <Flex
                  bottom="0"
                  left="0"
                  right="0"
                  p="5"
                  align="center"
                  direction="column"
                  w="100%"
                  h="50%"
                  borderRadius="20px"
                  fontSize={{ base: ".8rem", md: "1rem", lg: "1rem" }}
                >
                  <Text
                    fontWeight="bold"
                    fontFamily="Roboto"
                    letterSpacing=".5px"
                    textOverflow="ellipsis"
                    overflow="hidden"
                    w="100%"
                  >
                    {item.title}
                  </Text>
                  <Text
                    textOverflow="ellipsis"
                    overflow="hidden"
                    w="100%"
                  >
                    {item.genres.filter(g => g !== "")[0]}
                  </Text>
                  <Flex
                    justify="space-between"
                    align="center"
                    w="100%"
                  >
                    <HStack>
                      <FiBarChart2
                        size="25px"
                      />
                      <Text
                        textOverflow="ellipsis"
                        overflow="hidden"
                        w="100%"
                      >
                        {`${item.vote_average}`}
                      </Text>
                    </HStack>
                    <FavoriteButton showId={item.id.toString()} showType={item.type || ""} />
                  </Flex>
                </Flex>
              </Box>
            ))
          }
        </Grid>
      </Box>

      {/* <Modal
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
        isCentered
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <ModalCloseButton />
          </ModalHeader>

          <ModalBody>
            <Flex
              direction="column"
              align="center"
              justify="space-around"
            >
              <Text
                fontSize={{ base: "1.5rem", md: "2rem", lg: "2rem" }}
                fontWeight="bold"
                p={5}
              >
                {selectedMovie?.title}
              </Text>

              <Image
                src={`https://image.tmdb.org/t/p/w500${selectedMovie?.poster_path}`}
                alt={selectedMovie?.title}
                objectFit="cover"
                borderRadius="20px"
                h="200px"
              />

              <Text
                fontSize={{ base: ".8rem", md: "1rem", lg: "1rem" }}
                letterSpacing=".5px"
                textOverflow="ellipsis"
                overflow="hidden"
                w="100%"
                marginTop="2rem"
              >
                {selectedMovie?.overview}
              </Text>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Link
              to={`/details/${selectedMovie?.type}/${selectedMovie?.id}`}
            >
              <Button
                variant="solid"
              >
                Ver Mais
              </Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
    </>
  )
}

export default Slider;