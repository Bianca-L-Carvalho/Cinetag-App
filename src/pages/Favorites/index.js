import Banner from "../../components/Banner";
import Title from "../../components/Title";
import styles from "./Favorites.module.css";
import Card from "../../components/Card";
import { useFavoriteContext } from "../../components/Contexts/Favorites";

export default function Favorites() {
  const {favorite} = useFavoriteContext()
  return (
    <>
      <Banner image="BannerFavoritos" />
      <Title>
        <h1>Meus favoritos</h1>
      </Title>
      <section className={styles.container}>
        {
            favorite.map((fav) => {
            return <Card {...fav} key={fav.id} />}
            )
        }
      </section>
    </>
  );
}
