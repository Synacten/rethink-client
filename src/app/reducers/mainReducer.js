import {
  GETINITDATA,
  GETARTCILES,
  ISLOADING,
  GETONEARTICLE,
  ADDCRUMBS,
  SHOWCRUMBS,
  ARTICLEBYCATEGORY,
} from '../actions/types';

const initialState = {
  dataInit: [],
  articles: [],
  currentArticle: [],
  articlesByCategory: [],
  isLoading: false,
  showCrumbs: false,
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
    case ARTICLEBYCATEGORY:
      return {
        ...state,
        articlesByCategory: action.payload,

      };
    case ADDCRUMBS:
      return {
        ...state,
      };
    case SHOWCRUMBS: {
      return {
        ...state,
        showCrumbs: action.payload,
      };
    }
    case ISLOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    default:
      return state;
  }
}
