import CONSTS from '../consts';

const initState = {
  data: [],
};

const stories = (state = initState, {type, payload}) => {
  switch (type) {
    case CONSTS.FETCH_SUCCESS:
      return {
        ...state,
        data: payload.data,
      };
    default:
      return state;
  }
};

export default stories;
