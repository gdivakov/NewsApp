import CONSTS from '../consts';
import {DATA_ENDPOINT} from '../config/configApp';

export const fetchStories = dispatch => {
  dispatch({type: CONSTS.FETCH_REQUEST});

  fetch(`${DATA_ENDPOINT}/topstories.json`, {method: 'GET'})
    .then(res => res.json())
    .then(result =>
      Promise.all(
        result.map(id =>
          fetch(`${DATA_ENDPOINT}/item/${id}.json`, {method: 'GET'})
          .then(res => res.json())
        )
      )
    )
    .then(res => {
      dispatch({type: CONSTS.FETCH_SUCCESS, payload: {data: res}});
    })
    .catch(err => {
      console.log(err);
      return dispatch({type: CONSTS.FETCH_ERROR});
    });
};
