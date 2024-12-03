import { createContext, useEffect, useState } from "react";
import { myAxios } from "./MyAxios";

export const ApiContext = createContext("");

export const ApiProvider = ({ children }) => {
  const [kerdesek, setKerdesek] = useState([]);
  const [valaszok, setValaszok] = useState([]);

  const getAdat = async (vegpont, asyFgv) => {
    try {
      const response = await myAxios.get(vegpont);
      asyFgv([...response.data]);
    } catch (err) {
      console.log("Hiba");
    }
  };

  //aszinkron hivások kezelése useEffect hook
  useEffect(() => {
    getAdat("/exercises", setKerdesek);
  }, []);

  return (
    <ApiContext.Provider value={{ kerdesek, valaszok, getAdat, setValaszok }}>
      {children}
    </ApiContext.Provider>
  );
};
