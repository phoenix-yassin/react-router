import 'whatwg-fetch';
import {
  GET_GITHUB_INITIATE,
  GET_GITHUB_SUCCESS,
  GET_GITHUB_FAIL,
  CHAGE_USER_ID,
} from '../constants/actionTypes';

import {
  showSpinner,
  hideSpinner,
} from './uiActions';

export const getGithub = (userId = 'funchal') => (
  (dispatch) => {
    dispatch({ type: GET_GITHUB_INITIATE });
    dispatch(showSpinner());
    debugger;
   // userId = userId ? 'funchal' : userId;
    fetch(`https://api.github.com/users/${userId}`)
      .then(res =>{
      	if(res.ok){
		      return res.json()
	      }
	      return Promise.reject(new Error('not find users...'));
      	})
      .then((json) => {
        dispatch({ type: GET_GITHUB_SUCCESS, payload: { data: json } });
        dispatch(hideSpinner());
      })
      .catch((e) => {
	      dispatch({type: GET_GITHUB_FAIL});
	      console.log(e)
      });
  }
);
/*
fetch(`https://api.github.com/users/${userId}`)
	.then(response =>{ return response.json();} )
	.then((json) => {
		if(json.OK) {
			dispatch({ type: GET_GITHUB_SUCCESS, payload: { data: json } });
			dispatch(hideSpinner());
		}else{
			throw new Error('response false...');
		}
	})
	.catch(() => {
		dispatch(hideSpinner());
		dispatch({ type: GET_GITHUB_FAIL });
	}*/

export const changeUserId = text => ({ type: CHAGE_USER_ID, payload: { userId: text } });
