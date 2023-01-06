import React from "react";
import { categories } from "../constants";
import FetchNews from "./lib/FetchNews";
import NewsList from "./NewsList";

const HomePage = async () => {
  const news: NewsResponse = await FetchNews(categories.join(","));
  console.log(news)

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
};

export default HomePage;
