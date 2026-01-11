import React from 'react'
import Wrapper from './Wrapper'

const Category = ({ ClassName }) => {
  const Category = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']
  return (
    <div className={`${ClassName}`}>
      <Wrapper>
        <div className={`max-w-full w-fit m-auto flex overflow-x-auto px-4 scrollbar-none gap-5`}>
          {Category.map((category, index) => {
            return (
              <button key={index} className="btn btn-primary">
                {category}
              </button>
            )
          })}

        </div>
      </Wrapper>
    </div>
  )
}

export default Category
