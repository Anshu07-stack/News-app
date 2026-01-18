import { UseNewsContext } from "../context/NewsContext";
import Wrapper from "./Wrapper";

const Category = ({ ClassName }) => {

  const {news , setNews,fetchNews} = UseNewsContext()
  const category = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  const HandleTopics = async (e) => {
    const selectCategory = e.target.value;
    const data = await fetchNews(`/everything?q=${selectCategory}`);
    setNews(data.articles);
    // console.log(news)

  };

  return (
    <div className={`${ClassName}`}>
      <Wrapper>
        <div
          className={`max-w-full w-fit m-auto flex overflow-x-auto px-4 scrollbar-none gap-5`}
        >
          {category.map((category, index) => {
            return (
              <button
                onClick={HandleTopics}
                 value={category}
                key={index}
                className="btn btn-primary"
              >
                {category}
              </button>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default Category;
