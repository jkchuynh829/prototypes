import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

const TodoList = (props) => {
  return (
    <div>
      {props.tasks.map(task => {
        return (
          <Task
            key={task.description}
            task={task}
            onClickSpan={props.onClickSpan}
            onClickButton={props.onClickButton} />
        );
      })}
    </div>
  );
};

TodoList.propTypes = {
  tasks: PropTypes.array,
  onClickSpan: PropTypes.func,
  onClickButton: PropTypes.func
};

export default TodoList;