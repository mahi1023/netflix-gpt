
export const LOGO_URL ="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png";

export const USER_AVATAR = "https://avatars.githubusercontent.com/u/89977699?v=4";

export const BACKGROUND_IMG ="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const API_Options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+process.env. REACT_APP_TMDB_API_KEY 
    }
}

export const Img_CDN_URL ="https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANGUAGES = [{
  identifier:"en_US",
  language:"English"
},
{
  identifier:"hindi",
  language:"Hindi"
},{
  identifier:"spanish",
  language:"Spanish"
}];

// platform api key
export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
