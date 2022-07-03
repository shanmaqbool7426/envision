import React, { useEffect, useState ,memo} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getArticles } from '../../redux/actions/actions'
import Header from '../common/Header'
import Copyright from '../common/Copyright'
import Categories from './Categories'
import ListArticles from './ListArticles'
import '../../assets/css/articles.css'
import Skeleton from '@mui/material/Skeleton';

const Articales = () => {
  const userData = useSelector(state => state)
  const articles = useSelector(state => state.articles.articles)
  const categories = useSelector(state => state.categories.categories)
  const [isLoading, setisLoading] = useState(false)
  const dispatch = useDispatch()
  const acccessToken = userData.userData?.userData?.data?.member?.apiToken
  useEffect(() => {
    setisLoading(true)
    dispatch(getArticles(acccessToken, (data) => {
      setisLoading(false)
    }))
  }, [])
  return (
    <>
      <Header />
      <Categories acccessToken={acccessToken} categories={categories} />
      <div className='articles-container custom-container'>
        {articles && articles.length === 0 && isLoading && new Array(1, 2, 3, 4, 5, 6, 7, 8).map((item, index) => {
          return <Skeleton variant="rectangular" width={450} height={218} key={index} className="my-3" />
        })}
        {Array.isArray(articles) &&
          articles.map((article, index) => {
            return <ListArticles article={article} key={index} />
          })}
      </div>
      <Copyright />
    </>
  )
}


export default memo(Articales)
