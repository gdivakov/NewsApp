import CONSTS from '../consts';

const initState = {
  loadingActive: true,
};

const app = (state = initState, {type, payload}) => {
  switch (type) {
    case CONSTS.FETCH_REQUEST:
      return {
        ...state,
        loadingActive: true,
      };
    case CONSTS.FETCH_SUCCESS:
      return {
        ...state,
        loadingActive: false,
      };
    case CONSTS.FETCH_ERROR:
      return {
        ...state,
        loadingActive: false,
      };
    default:
      return state;
  }
};

export default app;
