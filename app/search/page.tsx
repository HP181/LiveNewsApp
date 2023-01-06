import FetchNews from "../lib/FetchNews";
import NewsList from "../NewsList";

type Props = {
  searchParams?: { term: string };
};

const SearchPage = async ({ searchParams }: Props) => {
  const news: NewsResponse = await FetchNews(
    "general",
    searchParams?.term,
    true
  );
  return (
    <div>
      <h1 className="headerTitle">Search Results For: {searchParams?.term}</h1>
      <NewsList news={news} />
    </div>
  );
};

export default SearchPage;
