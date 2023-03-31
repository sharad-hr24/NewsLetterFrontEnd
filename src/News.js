import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsCard from "./NewsCard";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=8a3a7eb5776044a9bb9e32d2afca4b14"
      );
      setNews(response.data.articles);
    };
    fetchData();
  }, []);

  return (
    <div style={{ margin : '4%'}}>
      <h1>News</h1>
      <div style={{ width: '100%', display: 'flex',flexWrap: "wrap", justifyContent: 'space-between', alignItems: 'center', flex: 1}}>
        {news.map((article) => (
           <NewsCard article= {article}  />
        ))}
      </div>
    </div>
  );
};

export default News;
