import * as types from './../actions/actionTypes';

const initialState = {
  tasks: [],
  taskName: '',
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_INPUT:
      return { taskName: action.description }
    default:
      return state;
  }
}

export default todoReducer;
