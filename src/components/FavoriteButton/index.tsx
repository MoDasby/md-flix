import { Button, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiFillHeart } from 'react-icons/ai'

const FavoriteButton = ({ showId }: { showId: string }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  const color = useColorModeValue("#718096", "white")

  useEffect(() => {
    if (favorites.includes(showId)) {
      setIsFavorite(true);
    }
  }, [favorites, showId]);

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
          const newFavorites = favorites.filter((id: string) => id !== showId);
          localStorage.setItem("favorites", JSON.stringify(newFavorites));
          setIsFavorite(false);
        } else {
          localStorage.setItem("favorites", JSON.stringify([...favorites, showId]));
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