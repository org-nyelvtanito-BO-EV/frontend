import { createContext, useEffect, useState } from "react";
import { myAxios } from "./MyAxios";

export const ApiContext = createContext("");

export const ApiProvider = ({ children }) => {

  const getAdat = async (vegpont) => {
    try {
      const response = await myAxios.get(vegpont);
      setTermekLista(response.data);
    } catch (err) {
      console.log("Hiba történt az adatok lekérésekor");
    } finally {
    }
  };

  /* asszinkron hívások kezelése useEffect hook */
  useEffect(() => {
    getAdat("/answers");
    getAdat("/excercises");
  }, []);
};
