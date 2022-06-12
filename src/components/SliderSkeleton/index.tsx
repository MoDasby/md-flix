import {
  Box,
  Grid,
  Skeleton,
  SkeletonText,
  VStack,
  HStack
} from '@chakra-ui/react';

const SliderSkeleton = () => {
  return (

    <Box
      paddingTop="2rem"
      paddingLeft={{ base: "0", md: "25vw", lg: "18vw" }}
    >
      <HStack
        spacing={5}
        p={5}
      >
        <Skeleton
          width="50%"
          height="50px"
        />
      </HStack>
      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(6, 1fr)" }}
        gap="6"
        w="100%"
        p={5}
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <SkeletonContainer key={i} />
        ))}
      </Grid>
    </Box>
  )
}

const SkeletonContainer = () => {
  return (
    <VStack
      spacing={5}
    >

      <Skeleton
        h="200px"
        width="100%"
        rounded="lg"
      />

      <SkeletonText
        width="100%"
        noOfLines={2}
      />
    </VStack>
  )
}

export default SliderSkeleton;