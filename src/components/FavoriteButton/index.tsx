import { Button, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiFillHeart } from 'react-icons/ai'

const FavoriteButton = ({ showId, showType }: { showId: string, showType: string }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  const color = useColorModeValue("#718096", "white");
  
  useEffect(() => {
    if (favorites.length === 0) {
      return;
    } else {
      const favorite = favorites.find((item: any) => item.id === showId && item.type === showType);
      if (favorite) {
        setIsFavorite(true);
      }
    }
  }, [favorites, showId, showType]);

  return (
    <Button
      bg="transparent"
      _hover={{
        bg: "transparent",
      }}
      _focus={{
        border: "none",
      }}
      onClick={() => {
        if (isFavorite) {
          const newFavorites = favorites.filter((show: { id: string, }) => show.id !== showId);
          localStorage.setItem("favorites", JSON.stringify(newFavorites));
          setIsFavorite(false);
        } else {
          localStorage.setItem("favorites", JSON.stringify([...favorites, { id: showId, type: showType }]));
          setIsFavorite(true);
        }
      }}
    >
      <AiFillHeart
        size={20}
        color={isFavorite ? "#C53030" : color}
      />
    </Button>
  )
}

export default FavoriteButton;