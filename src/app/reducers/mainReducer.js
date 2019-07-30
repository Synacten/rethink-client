import {
  GETINITDATA,
  GETARTCILES,
} from '../actions/types';

const initialState = {
  dataInit: [],
  articles: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GETINITDATA:
      return {
        ...state,
        dataInit: action.payload,
      };
    case GETARTCILES:
      return {
        ...state,
        articles: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
}
