import React from 'react';
import PropTypes from 'prop-types'; 


const AddTodo = (props) => (
  <div>
    <form onSubmit={props.onSubmitInput}>
      <input
        value={props.taskName}
        onChange={props.onChangeInput} />
    </form>
  </div>
);

AddTodo.propTypes = {
  taskName: PropTypes.string,
  onChangeInput: PropTypes.func,
  onSubmitInput: PropTypes.func
};

export default AddTodo;