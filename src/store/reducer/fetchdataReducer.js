import {FETCHDATA} from '../action/type';

const initialState = {
  DataList: [],
  isloading: false,
};
export default function (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case FETCHDATA:
      return {
        ...state,
        DataList: payload.DataList,
        isloading: true,
      };
    default:
      return state;
  }
}
