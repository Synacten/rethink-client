import {
  GETINITDATA,
  GETARTCILES,
  ISLOADING,
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


export const dataLoad = () => async (dispatch) => {
  dispatch({
    type: ISLOADING,
  });
};
