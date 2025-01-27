import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted'
    };
  };

  render() {
    const { id, title, completed } = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            checked={completed}
            onChange={this.props.markComplete.bind(this, id)}
          />{' '}
          {title}
          <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>
            x
          </button>
        </p>
      </div>
    );
  }
}

// PropTypes
TodoItem.propTypes = {
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

const btnStyle = {
  backgroundColor: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
};

export default TodoItem;
