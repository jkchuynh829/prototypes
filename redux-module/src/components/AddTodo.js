import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { connect } from 'react-redux';
import { updateTaskActionCreator } from '../actions/todoActions';
import { bindActionCreators } from 'redux';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.onKeyPressgeInput = this.onKeyPressgeInput.bind(this);
  }

  onKeyPressgeInput(e) {
    return this.props.updateTaskActionCreator(e.target.value);
  }

  render() {
    return (
      <div>
        <form>
          <input value={this.props.taskName} onKeyPress={this.onKeyPressgeInput} />
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ todo: { taskName } }) => {
  return { taskName }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updateTaskActionCreator }, dispatch);
}

AddTodo.propTypes = {
  taskName: PropTypes.string,
  onChangeInput: PropTypes.func,
  onSubmitInput: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);