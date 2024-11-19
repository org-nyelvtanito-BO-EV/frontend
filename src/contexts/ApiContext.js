import { createContext, useEffect, useState } from "react";
import { myAxios } from "./MyAxios";

export const ApiContext = createContext("");

export const ApiProvider = ({ children }) => {
  const [valaszok, setValaszok] = useState([]);

  const getAdat = async (vegpont) => {
    try {
      const response = await myAxios.get(vegpont);
      setValaszok(response.data);
    } catch (err) {
      console.log("Hiba történt az adatok lekérésekor");
    } finally {
    }
  };

  /* asszinkron hívások kezelése useEffect hook */
  useEffect(() => {
    getAdat("/answers");
  }, []);

  return (
    <ApiContext.Provider value={{ valaszok }}>
      {children}
    </ApiContext.Provider>
  );
};
