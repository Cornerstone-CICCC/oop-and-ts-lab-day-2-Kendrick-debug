import { Component } from "../common/Component.js";

export class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleComplete = this.handleComplete.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleComplete() {
    this.props.todoContext.completeTodo(this.props.todo.id);
  }

  handleDelete() {
    this.props.todoContext.deleteTodo(this.props.todo.id);
  }

  render() {
    const { description, completed } = this.props.todo;
    const todoElement = document.createElement("li");
    todoElement.className = `todo-item ${completed ? "completed" : ""}`;
    todoElement.innerHTML = `
      <span>${description}</span>
      <div>
        <button class="complete-btn">Mark Complete</button>
        <button class="delete-btn">Delete</button>
      </div>
    `;

    todoElement
      .querySelector(".complete-btn")
      .addEventListener("click", this.handleComplete);
    todoElement
      .querySelector(".delete-btn")
      .addEventListener("click", this.handleDelete);

    return todoElement;
  }
}
