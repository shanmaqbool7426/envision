import { getAllArticls } from "../../api/articls/get.js";
import { detailArticles } from "../../api/articls/detail.js";
import { getAllCategories } from "../../api/categories.js";
import  {RECEIVE_ARTICLS, RECEIVE_LOGIN,RECEIVE_CATEGORIES, RECEIVE_ARTICLES_DETAILS}  from "../contstants/constants";
export const getLoginData = (userData) => {
    return {
      type: RECEIVE_LOGIN,
      userData: userData,
    };
  };    

  export const getArticles = (acccessToken,callback) => dispatch => {
    getAllArticls((articles) => {
        dispatch({
            type:RECEIVE_ARTICLS,
            articles:articles
        })
        callback(articles)
    },acccessToken);
}

  export const getArticleDetails = (id,acccessToken) => dispatch => {
    // console.log('hamza',acccessToken)
    detailArticles(id,(articles) => {
        dispatch({
            type:RECEIVE_ARTICLES_DETAILS,
            articles:articles
        })
    },acccessToken);
}

//// Get Categories

export const getCategories = (acccessToken) => dispatch => {
    getAllCategories((categories) => {
        dispatch( {
            type:RECEIVE_CATEGORIES,
            categories:categories
        });
    },acccessToken);
}

