import * as types from './actionTypes';

export function addTaskActionCreator(task) {
  return {
    type: ADD_TASK,
    payload: task
  }
}

export function updateTaskActionCreator(taskName) {
  return {
    type: types.UPDATE_INPUT,
    payload: taskName
  }
}

export function deleteTaskActionCreator(taskIndex) {
  return {
    type: DELETE_TASK,
    payload: taskIndex
  }
}

export function markTaskActionCreator(taskIndex) {
  return {
    type: MARK_COMPLETED,
    payload: taskIndex
  }
}
