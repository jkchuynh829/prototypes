import React from 'react';
import PropTypes from 'prop-types';

const Task = (props) => {
  return (
    <article>
      <span
        className={props.task.isDone ? 'strike' : null}
        data-id={props.task.description}
        onClick={props.onClickSpan}>
          {props.task.description}
      </span>
      <button
        data-id={`btn-${props.task.description}`}
        onClick={props.onClickButton}>
          X
      </button>
    </article>
  );
};

Task.propTypes = {
  task: PropTypes.object,
  onClickSpan: PropTypes.func,
  onClickButton: PropTypes.func
};

export default Task;
