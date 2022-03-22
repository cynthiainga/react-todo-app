import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = (props) => {
  const {
    todos, handleChangeProps, deleteTodoProps, setUpdate,
  } = props;

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={handleChangeProps}
          deleteTodoProps={deleteTodoProps}
          setUpdate={setUpdate}
        />
      ))}
    </ul>
  );
};

TodosList.propTypes = {
  todos: PropTypes.instanceOf(Object),
  handleChangeProps: PropTypes.func,
  deleteTodoProps: PropTypes.func,
  setUpdate: PropTypes.func,
};

TodosList.defaultProps = {
  todos: [],
  handleChangeProps: null,
  deleteTodoProps: null,
  setUpdate: null,
};

export default TodosList;
