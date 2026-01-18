import { useEffect } from 'react'
import Wrapper from '../components/Wrapper'
import { UseNewsContext } from '../context/NewsContext'
import Loader from '../components/Loader';

const News = ({ ClassName }) => {
  const { news, setNews, fetchNews ,loading} = UseNewsContext();
  

  useEffect(() => {
    (async () => {
      const data = await fetchNews();
      setNews(data.articles);
    })()
  }, [])
  if(loading) return <Loader/> 
  return (
    <Wrapper>
      <div className={
        `grid 
         grid-cols-1
         px-2
         sm:grid-cols-2
         md:grid-cols-3
         lg:grid-cols-4
         gap-6 max- ${ClassName}`
        
        }>

        {news.map((newsDetails, index) => {
           if(!newsDetails?.urlToImage) return null;
          return (
            <NewsCard key={index} details={newsDetails} />
          )
        })}

      </div>
    </Wrapper>
  )
}
const NewsCard = ({ details }) => {

  return (
    <div className="card bg-base-300 shadow-sm">
      <figure className="h-45 overflow-hidden">
        <img
          src={details?.urlToImage ||  "/no-image.png"}
          alt="news"
          className="h-full w-full object-cover"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title line-clamp-2">{details?.title}</h2>
        <p className='line-clamp-3'>{details.description}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => window.open(details?.url)}
            className="btn  badge-outline mt-2">
            Read More...
          </button>
        </div>
      </div>
    </div>
  )
}
export default News
