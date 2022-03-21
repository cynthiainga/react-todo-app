import { render } from "@testing-library/react";
import React from "react";
import styles from "./TodoItem.module.css";

function TodoItem(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  };
  handleEditing = () => {
    this.setState({
      editing: true,
    });
  };
  render() {
    const { completed, id, title } = props.todo;
    let viewMode = {};
    let editMode = {};
  
    if (this.state.editing) {
      viewMode.display = "none";
    } else {
      editMode.display = "none";
    }
    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={completed}
            onChange={() => props.handleChangeProps(id)}
          />
          <button onClick={() => props.deleteTodoProps(id)}>Delete</button>
          <span style={completed ? completedStyle : null}>{title}</span>
        </div>
        <input type="text" style={editMode} className={styles.textInput} />
      </li>
    );
  }
}

export default TodoItem;