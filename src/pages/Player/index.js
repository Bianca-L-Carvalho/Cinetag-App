import { useParams } from "react-router-dom";
import Banner from "../../components/Banner";
import Title from "../../components/Title";
import styles from "./Player.module.css";
import NotFound from "../NotFound";
import { useEffect, useState } from "react";

export default function Player() {
  const [video, setVideo] = useState(null);
  const parameters = useParams();
  console.log("Parâmetro id:", parameters.id);

  useEffect(() => {
    console.log("useEffect foi chamado.");
    if (parameters.id) {
      fetch(`https://my-json-server.typicode.com/Bianca-L-Carvalho/cinetag-api/videos?id=${parameters.id}`)
        .then(response => {
          if (!response.ok) {
            throw new Error("Erro na API");
          }
          
          return response.json();
        })
        .then(data => {
          console.log("Dados do vídeo:", data); // Adicione esta linha
          if (Array.isArray(data) && data.length > 0) {
            setVideo(data[0]);
          } else {
            throw new Error("Vídeo não encontrado");
          }
        })
        .catch(error => {
          console.error("Erro na API:", error);
        });
    }
  }, [parameters.id]);

  if (!video) {
    return <NotFound />;
  }

  return (
    <>
      <Banner image="BannerPlayer" />
      <Title>
        <h1>Player</h1>
      </Title>
      <section className={styles.container}>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title={video.titulo}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </section>
    </>
  );
}
