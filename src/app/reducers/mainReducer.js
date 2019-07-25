import {
  GETINITDATA,
} from '../actions/types';

const initialState = {
  dataInit: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GETINITDATA:
      return {
        ...state,
        dataInit: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
}
