import {
  GETINITDATA,
  GETARTCILES,
  ISLOADING,
  GETONEARTICLE,
  ADDCRUMBS,
  REMOVECRUMBS,
} from '../actions/types';

const initialState = {
  dataInit: [],
  articles: [],
  currentArticle: [],
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
    case ADDCRUMBS:
      return {
        ...state,
      };
    case REMOVECRUMBS: {
      return {
        ...state,
        showCrumbs: !state.showCrumbs,
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
