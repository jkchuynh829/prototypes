import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import TodoHeader from '../components/TodoHeader';
import TodoList from '../components/TodoList';

class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onSubmitInput = this.onSubmitInput.bind(this);
    this.onClickSpan = this.onClickSpan.bind(this);
    this.onClickButton = this.onClickButton.bind(this);
    this.state = {
      tasks: [],
      taskName: ''
    }
  }

  onChangeInput(e) {
    this.setState({ taskName: e.target.value });
  }

  onSubmitInput(e) {
    e.preventDefault();

    if (this.state.taskName) {
      const task = {
        description: this.state.taskName,
        isDone: false,
        createdAt: (new Date()).toISOString()
      };

      this.setState({
        tasks: [...this.state.tasks, task],
        taskName: ''
      });
    }
  }

  onClickSpan(e) {
    this.state.tasks.forEach((task, i) => {
      if (task.description === e.target.getAttribute('data-id')) {
        const newTasksArray = this.state.tasks.slice(0);
        newTasksArray[i].isDone = !task.isDone;
        this.setState({ tasks: newTasksArray })
      }
    });
  }

  onClickButton(e) {
    this.state.tasks.forEach((task, i) => {
      if (`btn-${task.description}` === e.target.getAttribute('data-id')) {
        const newTasksArray = this.state.tasks.slice(0);
        newTasksArray.splice(i, 1)
        this.setState({ tasks: newTasksArray });
      }
    });
  }

  render() {
    return (
      <div>
        <TodoHeader
          taskName={this.state.taskName}
          onChangeInput={this.onChangeInput}
          onSubmitInput={this.onSubmitInput} />
        <TodoList
          tasks={this.state.tasks}
          onClickSpan={this.onClickSpan}
          onClickButton={this.onClickButton} />
      </div>
    );
  }
}

TodoContainer.propTypes = {

};

export default TodoContainer;