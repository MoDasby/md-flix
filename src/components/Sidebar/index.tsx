import '@fontsource/roboto';
import '@fontsource/rubik';
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiSun,
  FiMoon
} from 'react-icons/fi';
import { useState } from 'react';
import SidebarItemProps from '../../interfaces/SidebarItemProps';

enum SidebarItems {
  Home = "home",
  Trending = "trending",
  Explore = "explore",

}


const Sidebar = () => {

  const [activeKey, setActiveKey] = useState<SidebarItems>(SidebarItems.Home);
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Stack
      as="aside"
      h="100vh"
      w={{base: "15vw", md: "20vw", lg: "15vw"}}
      bg={useColorModeValue("gray.100", "blackAlpha.200")}
      spacing="2rem"
    >
      <Flex
        as="header"
        w="100%"
        justify="space-between"
        align="center"
        p="2"
      >
        <Heading
          as="h1"
          fontSize={{ base: ".8rem", md: "2rem" }}
          fontFamily="Rubik"
        >
          Md-Flix
        </Heading>

        <Button
          bg="transparent"
          onClick={toggleColorMode}
          transition="0.3s"
          position={{ base: "absolute", md: "relative" }}
          right="0"
          _focus={{ outline: "none" }}
          _hover={{ bg: "none" }}
        >
          <Icon
            as={colorMode === "light" ? FiSun : FiMoon}
          />
        </Button>
      </Flex>

      <Box>
        <SidebarItem
          icon={FiHome}
          text="Home"
          active={activeKey === SidebarItems.Home}
          onClick={() => {
            setActiveKey(SidebarItems.Home)
          }}
        />
        <SidebarItem
          icon={FiTrendingUp}
          text="Em Alta"
          active={activeKey === SidebarItems.Trending}
          onClick={() => {
            setActiveKey(SidebarItems.Trending)
          }}
        />
        <SidebarItem
          icon={FiCompass}
          text="Explorar"
          active={activeKey === SidebarItems.Explore}
          onClick={() => {
            setActiveKey(SidebarItems.Explore)
          }}
        />
      </Box>
    </Stack>
  )
}

const SidebarItem = ({ icon, text, active, onClick }: SidebarItemProps) => {
  return (
    <Flex
      w="100%"
      p="2"
      align="center"
      fontFamily="Roboto"
      cursor="pointer"
      transition="0.3s"
      onClick={onClick}
    >
      <Icon
        as={icon}
        marginRight="1rem"
        marginLeft="1rem"
        {...(active ? { color: "purple.500" } : { color: "gray.600" })}
      />
      <Text
        {...(active ? {} : { color: "gray.600" })}
        display={{ base: "none", md: "block" }}
        letterSpacing=".2rem"
      >
        {text}
      </Text>

      {
        active &&
        <Box
          h="20px"
          w="5px"
          borderRightRadius="5px"
          bg="purple.700"
          pos="absolute"
          left="0"
        >
        </Box>
      }
    </Flex>
  )
}

export default Sidebar;
