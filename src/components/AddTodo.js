import { Component } from "../common/Component.js";

export class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo() {
    const input = document.getElementById("todo-input");
    const description = input.value.trim();
    if (description) {
      this.props.todoContext.addTodo(description);
      input.value = "";
    }
  }

  render() {
    const addElement = document.createElement("div");
    addElement.className = "add-todo";
    addElement.innerHTML = `
      <input type="text" id="todo-input" placeholder="Enter task details...">
      <button id="todo-add-btn">Add To Do</button>
    `;

    addElement
      .querySelector("#todo-add-btn")
      .addEventListener("click", this.handleAddTodo);

    return addElement;
  }
}
