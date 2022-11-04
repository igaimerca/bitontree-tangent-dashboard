import { FETCH_ALL, CREATE } from '../../constants/actionTypes';

import * as api from '../api/index.js';

export const getUsers = () => async (dispatch) => {
  try {
    const data = api.fetchUsers();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createUser = (user) => async (dispatch) => {
  try {
    const data = api.createUser(user);

    dispatch({ type: CREATE, payload: data });
    return "User saved successfully";
  } catch (error) {
    console.log(error.message);
  }
};

