import { categories } from "../../../constants";
import FetchNews from "../../lib/FetchNews";
import NewsList from "../../NewsList";

type Props = {
  params: { category?: Category };
};

async function NewsCategory ({ params: { category } }: Props)  {
  const news: NewsResponse = await FetchNews(category);
  return (
    <div>
      <h1 className="headerTitle">{category}</h1>
      <NewsList news={news} />
    </div>
  );
};

export default NewsCategory;

export async function generateStaticParams() {

  return categories.map((category) => ({
    category: category,
  }));
}
