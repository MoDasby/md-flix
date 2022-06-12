import {
  HStack,
  SimpleGrid, 
  Skeleton, 
  SkeletonText, 
  VStack,
} from "@chakra-ui/react";

const DetailsSkeleton = () => {
  return (
    <SimpleGrid
      columns={{ base: 1, lg: 2 }}
      spacing={8}
      marginLeft={{ base: "0", md: "20vw", lg: "15vw" }}
      p={1}
      placeItems="center"
    >
      <Skeleton
        h={{ base: "50vh", lg: "100vh" }}
        w="40vw"
        p={8}
      />

      <VStack
        spacing={8}
        p={8}
      >
        <SkeletonText
          w="30vw"
          noOfLines={2}
        />

        <HStack>
          <SkeletonText
            w="10"
            noOfLines={1}
          />
          <SkeletonText 
            w="10vw"
            noOfLines={1}
          />
          <SkeletonText
            w="10vw"
            noOfLines={1}
          />
        </HStack>

        <SkeletonText 
          w="30vw"
          noOfLines={5}
        />
      </VStack>
      
    </SimpleGrid>
  )
}

export default DetailsSkeleton;