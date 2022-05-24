import { useState } from "react";

export const AddCategory = ({ setCategories, categories }) => {
  const [inputValue, setInputValue] = useState("");
  const texto = (e) => {
    let texto = e.target.value;
    setInputValue(texto);
    return texto;
  };
  const enter = (e) => {
    /*
     *E.PREVENTDEFAULT: RECORDAR QUE PREVIENE LA ACCION POR
     *DEFECTO AL REALIZAR UNA ACCION */
    e.preventDefault();
    if (inputValue.trim().length >= 2) {
      setCategories([inputValue, ...categories]);
      setInputValue("");
    }
  };

  return (
    <>
      <form onSubmit={enter}>
        <input onChange={texto} type="text" value={inputValue} />
      </form>
    </>
  );
};
