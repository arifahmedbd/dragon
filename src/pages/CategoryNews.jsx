import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom"; // use react-router-dom
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [categorisedNews, setCategorisedNews] = useState([]);

  useEffect(() => {
    if (id === "0") {
      setCategorisedNews(data);
    } else if (id === "1") {
      const filteredNews = data.filter(news => news.others?.is_today_pick === true);
      setCategorisedNews(filteredNews);
    } else {
      const filteredNews = data.filter(news => news.category_id == id);
      setCategorisedNews(filteredNews);
    }
  }, [id, data]);

  return (
    <div>
      <h2>Category News found: {categorisedNews.length}</h2>
      <div className="grid grid-cols-1 gap-5">
        {categorisedNews.map((news, index) => (
         <NewsCard news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
