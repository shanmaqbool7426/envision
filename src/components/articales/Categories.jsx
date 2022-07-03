import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCategories } from '../../redux/actions/actions'
import '../../assets/css/articles.css'
// import Slider from '../common/Slider'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Categories({ acccessToken, categories }) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCategories(acccessToken))
  }, [])

  return (
    <div className='container'>
      <Slider 
     className={ "slider variable-width"}
      dots={false}
      slidesToShow={7}
      slidesToScroll={2}
      autoplaySpeed={3000}
      >
        {Array.isArray(categories) && categories.map((category,index) => (
          <div className='single-category-outer' key={index}>
            <div className='single-category'>
              <div>
                <img className='category-logo' src={category.logo} alt='' />
              </div>
              <div className='eating_pillar_content'>{category.categoryName}</div>
            </div>
          </div>
        ))}
      </Slider>
     </div>

  )
}
