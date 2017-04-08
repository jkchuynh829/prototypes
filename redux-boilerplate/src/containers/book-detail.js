import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.activeBook) {
      return <h3>Please select a book.</h3>
    }

    return (
      <div>
        <h3>Book Description:</h3>
        <p>Title: { this.props.activeBook.title }</p>
        <p>Pages: { this.props.activeBook.pages }</p>
      </div>
    );
  };
}

const mapStateToProps = ({ activeBook }) =>  {
  return {
    activeBook
  }
};

export default connect(mapStateToProps)(BookDetail);


