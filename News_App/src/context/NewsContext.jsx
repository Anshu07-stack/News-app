import { createContext, useContext, useState } from "react";
import apiInstance from "../config/axios";

const NewsContext = createContext();

const NewsContextProvider = ({ children }) => {

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNews = async (url = "/everything?q=india") => {
    setLoading(true);

    try {
      const response = await apiInstance.get(
        `${url}&apiKey=${import.meta.env.VITE_API_KEY}`
      );

      setLoading(false)

      return response.data;
    } 
    catch (error) {
      setLoading(false)

      console.log(error);
    }
  };

  const value = {
    news,
    setNews, 
    fetchNews,
    loading
  };

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;

};

const UseNewsContext = () => {
  return useContext(NewsContext);
};

export { NewsContextProvider, UseNewsContext };
