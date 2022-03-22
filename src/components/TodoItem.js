import { FaTrash } from 'react-icons/fa';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styles from './TodoItem.module.css';

const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };
  const {
    todo, handleChangeProps, deleteTodoProps, setUpdate,
  } = props;

  const { completed, id, title } = todo;

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => handleChangeProps(id)}
        />
        <span style={completed ? completedStyle : null}>{title}</span>
        <button
          type="button"
          className={styles.deleteBtn}
          onClick={() => deleteTodoProps(id)}
        >
          <FaTrash style={{ clor: 'orangered', fontSize: '16px' }} />
        </button>
      </div>
      <input
        type="text"
        style={editMode}
        placeholder="Edit A To-do..."
        className={styles.textInput}
        value={title}
        onChange={(e) => {
          setUpdate(e.target.value, id);
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.instanceOf(Object),
  setUpdate: PropTypes.func,
  deleteTodoProps: PropTypes.func,
  handleChangeProps: PropTypes.func,
};

TodoItem.defaultProps = {
  todo: {},
  setUpdate: null,
  deleteTodoProps: null,
  handleChangeProps: null,
};

export default TodoItem;
