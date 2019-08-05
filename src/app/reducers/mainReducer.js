import {
  GETINITDATA,
  GETARTCILES,
  ISLOADING,
  GETONEARTICLE,
} from '../actions/types';

const initialState = {
  dataInit: [],
  articles: [],
  currentArticle: [],
  isLoading: false,
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
    case GETONEARTICLE:
      return {
        ...state,
        currentArticle: action.payload,
      };
    case ISLOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    default:
      return {
        ...state,
      };
  }
}
