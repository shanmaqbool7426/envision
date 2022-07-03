import React, { useEffect, useState ,memo} from 'react'
import '../../assets/css/articles.css'
import attachment from '../../assets/images/article-attachment.png'
import happy from '../../assets/images/article-emoji-happy.png'
import message from '../../assets/images/article-message.png'
import note from '../../assets/images/article-note.png'
import voice from '../../assets/images/detail-article-voice.png'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { detailArticles } from '../../api/articls/detail'
import { Markup } from 'interweave'
import { dateFormater } from '../../utils'
import { RWebShare } from "react-web-share";
import Skeleton from '@mui/material/Skeleton';
import { addComments, getAllComments } from '../../api/comments/comments'
import Copyrigh from "../common/Copyright"
import Header from '../common/Header'

const ArticleDetail = () => {
  const [detail, setDetail] = useState({})
  const [comments, setComments] = useState([])
  const [toggle, setToggle] = useState(false)
  const [AddComments, setAddComments] = useState('')
  const [isLoading, setisLoading] = useState(false)
  const [isLoadingComment, setisLoadingComment] = useState(false)

  const userData = useSelector(state => state)
  const acccessToken = userData.userData?.userData?.data?.member?.apiToken
  const { id } = useParams()


  useEffect(() => {
    setisLoading(true);
    detailArticles(id, data => {
      setisLoading(false);
      setDetail(data)
    }, acccessToken
    )
    return () => {
      setisLoading(true);
      setDetail('')
    }
  }, [])

  useEffect(() => {
    setisLoadingComment(true)
    getAllComments(id, (data) => {
      setisLoadingComment(false)

      setComments(data)
    }, acccessToken)

  }, [toggle])

  const commentHandler = (e) => {
    e.preventDefault();
    setisLoadingComment(true)

    let payLoad = { articleID: detail.id, comment: AddComments, "createdDate": new Date, "commentImage": "", "taggedUsers": "string" }
    addComments(payLoad, (data) => {
    setisLoadingComment(true)
      setToggle(!toggle)
      setAddComments("")
    }, acccessToken)
  }

  return (
    <>
      <Header />
      <div className='container mb-30'>
        <div className='flex-between mt-30'>
          <div>
            <p className='back-articles'>
              <span className='detail-back-btn'>
                <Link to={`${process.env.PUBLIC_URL}/articles/list`}>
                  <i className='fa fa-arrow-left text-dark'></i>
                </Link>
              </span>
              {(isLoading && <Skeleton variant="rectangular" width={100}  className="rounded"/> )|| ("Articles")}
            </p>
          </div>
          {(isLoading && <Skeleton variant="rectangular" width={100}  className="rounded" /> )|| <div className='flex-between'>
            <div className='article-detail-genre'>
              <img src={detail.categoryIcon} alt='' style={{ width: '15px' }} />
              <span> {detail.categoryName}</span>
            </div>
            <div className='voice-icon'>
              <img src={voice} alt='' />
            </div>
          </div>}
        </div>

        <div className='mt-30'>
          <div className='detail-article-card'>
            {(isLoading && <Skeleton variant="rectangular" className="rounded"  height={40} style={{ margin: "10px" }} />) || <div className='flex-between mb-20'>
              <h2 className='detail-article-title'>{detail.title}</h2>
              <p className='detail-article-postdate'>
                <span></span>Posted {dateFormater(detail.publishedDate)}
              </p>
            </div>}
            {(isLoading && <Skeleton variant="rectangular" className="rounded"  height={400} /> )|| <img src={detail.imageUrl} className='detail-article-image' alt='' />}
            <div className='card-body'>
              <div className='flex-between'>
                {(isLoading && <Skeleton variant="rectangular" className="rounded"  width={200} height={40}/> )|| <div className='comments-like'>
                  <span> {detail.commentsCount} comments</span>
                  <span className='article-seperator'> </span>
                  <span> {detail.likesCount} likes</span>
                </div>
                }
                {(isLoading && <Skeleton variant="rectangular" className="rounded"  width={200}  height={40}/>) || <div>
                  <RWebShare
                    data={{
                      title: detail.title,
                      url: detail.shareLink,
                    }}
                    onClick={() => console.log("shared successfully!")}
                  >
                    <img className='attachment-img-share' src={attachment} alt='' />
                  </RWebShare>

                  <img className='attachment-imgs' src={happy} alt='' />
                  <img className='attachment-imgs' src={message} alt='' />
                  <img className='attachment-imgs' src={note} alt='' />
                </div>
                }
              </div>
              <br />
              <section className='article-content'>

                <Markup content={detail.description} />

              </section>
              <br />
              <hr />
              <br />
              {isLoadingComment && new Array(1, 2, 3, 4).map((item, index) => {
                return( 
                  <>
                <Skeleton variant="rectangular"  width={400} height={28} key={index} className="my-3 rounded" />
               <div className='d-flex'>
               <Skeleton variant="circular" className='mx-3 mt-2 ' width={40} height={40} />  
                <Skeleton variant="rectangular"  width={100} height={28} key={index} className="my-3 rounded" />
               </div>
                </>   )
              })}<section className='user-comments-sec--article'>
                <h4>{detail.commentsCount} Comments</h4>

                {!isLoadingComment && Array.isArray(comments) && comments.map(({ createdDate, memberName, description, memberAvatarUrl }, index) => {
                  return (
                    <div className='user-comment' key={index}>
                      <div className='user-dp--comment'>
                        <img
                          src={memberAvatarUrl}
                          alt=''
                        />
                      </div>
                      <div className='user-review--comment'>
                        <div className='user-name-date--comment'>
                          <h6>{memberName}</h6>
                          <p>{dateFormater(createdDate)}</p>
                        </div>
                        <p>{description} </p>
                        <div className='user-reply-like--comment'>
                          <span>Reply</span>
                          <span>Like</span>
                        </div>
                      </div>
                      <hr />
                    </div>
                  )
                })}
                <form onSubmit={commentHandler}>
                  <div className='d-flex align-items-center mt-3'>
                    <textarea className='comments-textarea' value={AddComments} onChange={(e) => setAddComments(e.target.value)}></textarea>
                    <input type="submit" value="Submit" className='comment-btn' />
                  </div>

                </form>
              </section>
            </div>
          </div>
        </div>
      </div>
      {/* ) } */}
      {/* <Header /> */}


      <Copyrigh />
    </>
  )
}

export default memo(ArticleDetail)
