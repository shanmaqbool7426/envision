import * as ENV from '../config';
export const DOMAIN_URL_L = ENV.DOMAIN_URL_L;
export const DOMAIN_URL_N = ENV.DOMAIN_URL_N;
// export const CLIENT_REGISTER = `${ENV.API_URL}${ENV.VERSION}/client/signup`;
export const CLIENT_SIGNIN = `${ENV.DOMAIN_URL_L}/api/Members/Authenticate`;
export const CLIENT_SIGNUP = `${ENV.DOMAIN_URL_L}/api/Members/OldMember`;
export const ARTICLES=`${ENV.DOMAIN_URL_N}/api/ELM/GetAllArticlesByCategory?category=2&type=1`;
// export const ARTICLES = `${ENV.DOMAIN_URL_N}/api/ELM/GetAllLatestCategoryArticles?type=2&categoryType=elm`
export const ARTICLES_DETAIL=`${ENV.DOMAIN_URL_N}/api/ELM/GetArticleDetails?articleId=id`;
export const CATEGORIES=`${ENV.DOMAIN_URL_N}/api/ELM/GetAllLatestCategoryArticles`;
export const SOCIAL_LOGIN="https://api.envisionwellapp.io/api/Members/SocialMediaSignup"
//comments
export const GET_COOMENTS=`${ENV.DOMAIN_URL_N}/api/ELM/GetArticleComments?articleId=id&pageIndex=0`;
export const ADD_COOMENTS=`${ENV.DOMAIN_URL_N}/api/ELM/AddCommentOnArticle`;

