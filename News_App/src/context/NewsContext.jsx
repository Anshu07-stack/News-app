import { createContext, useContext, useState } from "react";
import apiInstance from "../config/axios";

const NewsContext = createContext();


const NewsContextProvider = ({ children }) => {
    const [news, setNews] = useState([]);

    const fetchNews = async (url="/everything?q=india") => {
       try {
            const response = await api.get(`${url}&apiKey=${import.meta.env.VITE_API_KEY}`)
            setLoading(false);
            return response.data;
        } catch (error) {
            console.log(error);
        
        }
    }
    
    const value = {
        news,
        setNews,
        fetchNews 
    }
    return (
        <NewsContext.Provider value={value} >
            {children}
        </NewsContext.Provider>
    )
}

const UseNewsContext = () => {
    return useContext(NewsContext)
}

export { NewsContextProvider, UseNewsContext }