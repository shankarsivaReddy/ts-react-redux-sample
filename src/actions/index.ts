import axios from 'axios';
import { Dispatch } from 'redux';

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchToDo = () => async (dispatch: Dispatch) => {
  const response = await axios.get(url);

  dispatch({ type: 'FETCH_TODOS', payload: response.data });
};