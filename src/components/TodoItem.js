/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styles from './TodoItem.module.css';

const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);
  const { todo } = props;
  const { completed, id, title } = todo;
  const { item, checkbox, textInput } = styles;

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const handleEditing = () => { setEditing(true); };

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  return (
    <li className={item}>
      <div onDoubleClick={handleEditing} style={viewMode}>

        <input
          className={checkbox}
          type="checkbox"
          checked={completed}
          onChange={() => props.handleChangeProps(id)}
        />

        <span style={completed ? completedStyle : null}>
          {title}
        </span>

        <button type="button" onClick={() => props.deleteTodoProps(id)}>
          Delete
        </button>

      </div>
      <input
        type="text"
        className={textInput}
        style={editMode}
        value={title}
        onChange={(e) => {
          props.setUpdate(e.target.value, id);
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

export default TodoItem;
