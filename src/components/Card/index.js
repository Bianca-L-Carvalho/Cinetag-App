import { Link } from "react-router-dom";
import { useFavoriteContext } from "../Contexts/Favorites";
import styles from "./Card.module.css";
import favoriteIcon from "./favorite.png";
import unfavoriteIcon from "./unfavorite.png"

export default function Card({ id, titulo, capa }) {
  const { favorite, addFavorite, removeFavorite } = useFavoriteContext();
  const isFavorite = favorite.some((fav) => fav.id === id);
  const icon = !isFavorite ? favoriteIcon : unfavoriteIcon;

  const toggleFavorite = () => {
    if (isFavorite) {
      // Se já for favorito, vamos desfavoritar
      removeFavorite(id);
    } else {
      // Se não for favorito, vamos favoritar
      addFavorite({ id, titulo, capa });
    }
  };

  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`videos/${id}`}> 
      <img src={capa} alt={titulo} className={styles.coverImage} />
      <h2>{titulo}</h2>
      </Link>

      <img
        src={icon}
        alt="Favoritar Filme"
        className={styles.favorite}
        onClick={toggleFavorite}
      />
    </div>
  );
}
