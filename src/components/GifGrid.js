import React, { useEffect, useState } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  /*
   *EL USESTATE PERMITE CAMBIAR EL ESTADO DE UN COMPONENTE
   * LO QUE MUCHAS VECES NO QUEREMOS
   * COMO SOLUCION PODEMOS USAR EL USEEFFECT QUE PERMITE REALIZAR
   * O NO CODIGO DE MANERA CONDICIONADA*/
  /*
   *El USEEFFECT RECIBE UNA FUNCIOON DONDE SE INDICA EL CODIGO A EJECUTAR
   *SEGUIDO DE UN ARRAY CON LAS DEPENDECNIAS, SI EL ARRAY ESTA VACIO, ESE
   *CODIGO SE EJECUTA UNA SOLA VEZ
   */
  /*  const [images, setImages] = useState([]);
  useEffect(() => {
    getGifs();
  }, []); */
  const { data: imgs, loading } = useFetchGifs(category);
  /*
   *PARA REEEMPLAZAR LOS ESPACIOS EN BLANCO Y OTROS CARACTERES
   *USAMOS ENCODEURI, PARA LA BUSQUEDA */
  /*   const getGifs = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
      category
    )}&limit=10&api_key=BT7jFjV0XE8BHwIt8gJM4RxqornnZybZ`;
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();
    const gif = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
      };
    });

    setImages(gif);
  }; */
  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {loading ? <p>Loading</p> : null}

        {imgs.map((img) => {
          return <GifGridItem {...img} />;
        })}
      </div>
    </>
  );
};
