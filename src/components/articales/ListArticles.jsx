import React  from 'react'
import { Link } from 'react-router-dom'
import time_circle from '../../assets/images/time-circle-icon.png'
import humanity_pillar from '../../assets/images/humanity-pillar.png'
import { dateFormater } from '../../utils'

const ListArticles = ({ article }) => {  
  return (
    <>
      <div className='article-item'>
        <Link to={`/detail-article/${article.id}`} >
          <div className='listing-card'>
            <img
              src={article.imageUrl}
              className='listing-article-img'
              alt=''
              width={30}
            />
            <div className='card-body'>
              <h5 className='article-listing-title'>{article.title}</h5>
              <div className='flex-between'>
                <div>
                  <img src={time_circle} alt='' />
                  <span className='article-listing-dt'> {dateFormater(article.articlePublishedDate)}</span>
                </div>
                <div>
                  <img src={humanity_pillar} alt='' />
                  <span className='article-listing-cn'> {article.categoryName}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}
export default ListArticles
