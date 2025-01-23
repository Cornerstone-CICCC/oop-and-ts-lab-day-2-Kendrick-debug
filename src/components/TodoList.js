import { Component } from "../common/Component.js";
import { TodoItem } from "./TodoItem.js";

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    this.updateList = this.updateList.bind(this);
    this.props.todoContext.subscribe(this.updateList);
    this.todoListElement = null;
  }

  updateList(todos) {
    this.state.todos = todos;
    this.todoListElement.innerHTML = "";
    this.state.todos.forEach((item) => {
      const todoItem = new TodoItem({
        todoContext: this.props.todoContext,
        todo: item,
      }).render();
      this.todoListElement.appendChild(todoItem);
    });
  }

  render() {
    this.todoListElement = document.createElement("ul");
    this.todoListElement.className = "todo-list";

    const todoListContainer = document.createElement("div");
    todoListContainer.className = "todo-list-container";
    todoListContainer.appendChild(this.todoListElement);

    return todoListContainer;
  }
}
