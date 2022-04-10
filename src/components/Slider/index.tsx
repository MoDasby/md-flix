import '@fontsource/roboto';
import {
  Box,
  Flex,
  Button,
  Grid,
  Text,
  Image,
  HStack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter
} from '@chakra-ui/react';
import {
  FiBarChart2
} from 'react-icons/fi'
import SliderProps from "../../interfaces/SliderProps";
import { useState } from 'react';

const Slider = ({ sliderName, data, uriToRedirect }: SliderProps) => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedMovie, setSelectedMovie] = useState<
    {
      title: string,
      overview: string,
      poster_path: string,
    }
  >();

  return (
    <>
      <Box
        as='section'
        w="100%"
        paddingTop="2rem"
        paddingLeft={{ base: "15vw", md: "20vw", lg: "15vw" }}
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

          {
            uriToRedirect && (
              <Button
                as="a"
                href={uriToRedirect}
                variant='outline'
                size="sm"
              >
                Ver todos
              </Button>
            )
          }
        </Flex>

        <Grid
          templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(6, 1fr)' }}
          gap="6"
          p="5"
        >
          {data.map((movie, index) => (
            <Box
              key={index}
              as='a'
              cursor="pointer"
              position="relative"
              transition="all .3s ease-in-out"
              w={{ base: '150px' }}
              onClick={() => {
                setSelectedMovie(
                  {
                    title: movie.title,
                    overview: movie.overview,
                    poster_path: movie.poster_path
                  }
                );
                onOpen();
              }}
              _hover={{
                transform: "scale(1.05)",
              }}
            >
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                objectFit="cover"
                borderRadius="20px" />

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
                  {movie.title}
                </Text>

                <Flex
                  justify="space-between"
                  align="center"
                  w="100%"
                >
                  <Text
                    textOverflow="ellipsis"
                    overflow="hidden"
                    w="100%"
                  >
                    {movie.genres[0]}
                  </Text>

                  <HStack>
                    <FiBarChart2
                      size="25px" />

                    <Text
                      textOverflow="ellipsis"
                      overflow="hidden"
                      w="100%"
                    >
                      {movie.vote_average}
                    </Text>
                  </HStack>
                </Flex>
              </Flex>
            </Box>
          ))}
        </Grid>
      </Box>

      <Modal
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
                fontWeight="bold"
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
            <Button
              variant="solid"
            >
              Ver Mais
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Slider;