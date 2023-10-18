import { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Title from "../../components/Title";
import styles from "./Home.module.css"

export default function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    fetch("https://my-json-server.typicode.com/Bianca-L-Carvalho/cinetag-api/videos")
    .then(response => response.json())
    .then(data => {
      setVideos(data)
    })
  }, [])

  return (
    <>
      <Banner image="BannerHome"/>
      <Title>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Title>
      <section className={styles.container}>
        {
            videos.map((video) =>{
            return <Card {...video} key={video.id} />}
            )
        }
      </section>
    </>
  );
}
