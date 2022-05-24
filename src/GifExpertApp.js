import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  let [categories, setCategories] = useState([""]);

  /*  const click = () => {
    setCategories([...categories, "Death Note"]);
  }; */

  return (
    <Fragment>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} categories={categories} />
      <hr />
      <ol>
        {categories.map((category, idx) => {
          return <GifGrid key={category} category={category} />;
        })}
      </ol>
    </Fragment>
  );
}; /*  */

/*
 *SI DESEAMOS IMPRIMIR EN PANTALLA UNA LISTA O ALGO POR EL ESTILO
 *NO SE PUEDE RECORRER CON BUCLES PUESTO QUE REACT POR DEFECTCO
 *SABE QUE EL FOR NO RETORNA NADA, ENTONCES SE DEBEN USAR FUNCIONES
 *QUE RETORNEN. */

/*
 *SI DESEO HACER QUE UNA LISTA SE ACTUALICE EN TIEMPO REAL NO SE PUEDE
 *MANEJAR ACCEDIENDO AL ARRAY HAY QUE USAR UN HOOK */
