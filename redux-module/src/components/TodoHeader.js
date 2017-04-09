import React from 'react';
import PropTypes from 'prop-types';
import AddTodo from './AddTodo';

const TodoHeader = (props) => {
  return (
    <header>
      <h1>Todo List</h1>
      <AddTodo
        taskName={props.taskName}
        onChangeInput={props.onChangeInput}
        onSubmitInput={props.onSubmitInput} />
    </header>
  );
};

TodoHeader.propTypes = {
  taskName: PropTypes.string,
  onChangeInput: PropTypes.func,
  onSubmitInput: PropTypes.func
};

export default TodoHeader;
