import { gql } from "graphql-request";
import SortNewsByImage from "./SortNewsByImage";

const FetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  // graph1l query

  const query = gql`
    query MyQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        countries: "gb"
        sort: "published_desc"
        keywords: $keywords
      ) {
        data {
          author
          category
          country
          description
          image
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;

  // fetch function with nextjs 13 caching
  

  const res = await fetch(
    "https://prairieview.stepzen.net/api/running-lightningbug/__graphql",
    {
      method: "POST",
      cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          access_key: process.env.MEDIASTACK_API_KEY,
          categories: category,
          keywords: keywords,
        },
      }),
    }
  );

  // const newsResponse = await res.json();
  const newsResponse = await res.json()
// console.log(newsResponse)



  // sort function by images vs not images present
  const news = SortNewsByImage(newsResponse.data.myQuery)
  // const news = await SortNewsByImage(newsResponse.data.myQuery);

  return news;
};

export default FetchNews;
