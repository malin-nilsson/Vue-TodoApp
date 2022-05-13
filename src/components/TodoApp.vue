<template>
  <div class="todo-content">
    <TodoHeader />
    <TodoAdd @handleNewTodo="addTodo($event)" />
    <TodoSort
      :todos="todos"
      @handleSortByName="sortByName($event)"
      @handleSortByDate="sortByDate($event)"
      @handleSortByDone="sortByDone($event)"
      @handleSortByNotDone="sortByNotDone($event)"
    />
    <TransitionGroup name="list" tag="ul">
      <li v-for="todo in todos" :key="todo.id" class="todo-box">
        <TodoItem
          :todo="todo"
          :todos="todos"
          @handleRemovedTodo="removeTodo($event)"
          @handleToggle="toggleTodoStatus($event)"
        />
      </li>
    </TransitionGroup>
  </div>
</template>

<script lang="ts">
import { Todo } from "../models/Todo";
import { Options, Vue } from "vue-class-component";
import TodoAdd from "./TodoAdd.vue";
import TodoItem from "./TodoItem.vue";
import TodoSort from "./TodoSort.vue";
import TodoHeader from "./TodoHeader.vue";

@Options({
  components: {
    TodoHeader,
    TodoAdd,
    TodoSort,
    TodoItem,
  },
})
export default class TodoApp extends Vue {
  todos: Todo[] = [];

  mounted() {
    this.getLocalStorage();
  }

  addTodo(todo: string) {
    this.todos.push(new Todo(todo));
    this.setLocalStorage();
  }

  removeTodo(task: string) {
    let index = this.todos.findIndex((todo) => todo.task === task);
    this.todos.splice(index, 1);
    this.setLocalStorage();
  }

  toggleTodoStatus(task: string) {
    let todo = this.todos.find((todo) => todo.task === task);
    if (todo) {
      todo.done = !todo.done;
      this.setLocalStorage();
    }
  }

  sortByName(todos: Todo[]) {
    todos.sort((a, b) => a.task.localeCompare(b.task));
  }

  sortByDate(todos: Todo[]) {
    todos.sort(function (a, b) {
      return b.id - a.id;
    });
  }

  sortByDone(todos: Todo[]) {
    todos.sort((x, y) => {
      return x.done === y.done ? 0 : x.done ? -1 : 1;
    });
  }

  sortByNotDone(todos: Todo[]) {
    todos.sort((x, y) => {
      return x.done === y.done ? 0 : x.done ? 1 : -1;
    });
  }

  setLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  getLocalStorage() {
    let listFromLocalStorage = localStorage.getItem("todos");
    if (!listFromLocalStorage) {
      this.setLocalStorage();
    } else {
      this.todos = JSON.parse(listFromLocalStorage);
    }
  }
}
</script>

<style lang="scss" scoped>
.todo-content {
  width: 80%;
  padding: 10px 0px;
}
.todo-box {
  padding: 20px 0px 0px;
  margin: 0px;
  width: 100%;
}

ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>