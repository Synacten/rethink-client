import { GETINITDATA } from './types';

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
