import { Component } from "../common/Component.js";
import { AddTodo } from "./AddTodo.js";
import { TodoList } from "./TodoList.js";
import { TodoContext } from "../contexts/TodoContext.js"; // Add this import

export class App extends Component {
  constructor(props) {
    super(props);
    this.todoContext = new TodoContext();
  }

  render() {
    const container = document.createElement("div");
    container.className = "container";
    container.innerHTML = `
      <h1>My To Dos</h1>
      <div id="wrapper-add"></div>
      <div id="wrapper-todos"></div>
    `;

    const add = new AddTodo({ todoContext: this.todoContext }).render();
    const todos = new TodoList({ todoContext: this.todoContext }).render();

    container.querySelector("#wrapper-add").appendChild(add);
    container.querySelector("#wrapper-todos").appendChild(todos);

    return container;
  }
}
