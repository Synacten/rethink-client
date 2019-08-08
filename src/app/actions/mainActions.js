import {
  GETINITDATA,
  GETARTCILES,
  ISLOADING,
  GETONEARTICLE,
  ADDCRUMBS,
  SHOWCRUMBS,
  ARTICLEBYCATEGORY,
} from './types';

export const getInitial = () => async (dispatch) => {
  const data = await fetch('http://localhost:2700/cathegory');
  if (data.status === 200) {
    const json = await data.json();
    dispatch({
      type: GETINITDATA,
      payload: json,
    });
  } else {
    dispatch({
      type: GETINITDATA,
      payload: [],
    });
  }
};

export const getArticles = () => async (dispatch) => {
  const data = await fetch('http://localhost:2700/articles');
  if (data.status === 200) {
    const json = await data.json();
    dispatch({
      type: GETARTCILES,
      payload: json,
    });
  } else {
    dispatch({
      type: GETARTCILES,
      payload: [],
    });
  }
};

export const getOneArticle = ({ link }) => async (dispatch) => {
  const data = await fetch(`http://localhost:2700/article/${link}`);
  if (data.status === 200) {
    const json = await data.json();
    dispatch({
      type: GETONEARTICLE,
      payload: json,
    });
  } else {
    dispatch({
      type: GETONEARTICLE,
      payload: [],
    });
  }
};


export const addCrumbs = ({ id, category }) => async (dispatch) => {
  dispatch({
    type: ADDCRUMBS,
    payload: (function current() { return { id, heading: category }; }()),
  });
};

export const showCrumbs = status => (dispatch) => {
  dispatch({
    type: SHOWCRUMBS,
    payload: status,
  });
};


export const dataLoad = () => async (dispatch) => {
  dispatch({
    type: ISLOADING,
  });
};

export const getArticleByCategories = categoryName => async (dispatch) => {
  const data = await fetch(`http://localhost:2700/category/${categoryName}`);
  if (data.status === 200) {
    const json = await data.json();
    console.log(json);
    dispatch({
      type: ARTICLEBYCATEGORY,
      payload: json,
    });
  } else {
    dispatch({
      type: ARTICLEBYCATEGORY,
      payload: [],
    });
  }
};
