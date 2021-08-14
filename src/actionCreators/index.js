import api from '../api';
import { GET_DATA, ADD_NEW } from './types';

export const fetchData = () => async dispatch => {
    const response = await api.get("/users");

    dispatch({ type: GET_DATA, payload: response.data});
}

export const addUser = (data) => async dispatch => {
    api.post("/users",data)
    .then( userdata => 
        dispatch({
            type: ADD_NEW,
            payload: userdata
        })
    ).then( response => {
        console.log(response);
    })
    .catch( error => {
        console.log(error);
    });
}