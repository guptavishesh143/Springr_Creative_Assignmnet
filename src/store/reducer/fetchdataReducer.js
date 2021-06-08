import {FETCHDATA} from '../action/type';

const initialState = {
  DataList: [],
  isloading: false,
};
export default function (state = initialState, action) {
  const {type, payload} = action;
  console.log('comsolimg action', action);
  switch (type) {
    case FETCHDATA:
      return {
        ...state,
        DataList: payload.DataList,
        isloading: false,
      };
    default:
      return state;
  }
}
