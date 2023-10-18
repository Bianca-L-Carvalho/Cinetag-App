import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext();
FavoritesContext.displayName = "Favorites";

export default function FavoritesProvider({ children }) {
  const [favorite, setFavorite] = useState([]);

  return (
    <FavoritesContext.Provider value={{ favorite, setFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavoriteContext() {
  const { favorite, setFavorite } = useContext(FavoritesContext);

  function addFavorite(newFavorite) {
    const isFavorite = favorite.some((item) => item.id === newFavorite.id);

    if (!isFavorite) {
      setFavorite((prevFavorite) => [...prevFavorite, newFavorite]);
    }
  }

  function removeFavorite(id) {
    setFavorite((prevFavorite) => prevFavorite.filter((item) => item.id !== id));
  }

  return {
    favorite,
    addFavorite,
    removeFavorite,
  };
}
