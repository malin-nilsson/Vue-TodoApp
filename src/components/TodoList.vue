<template>
  <div class="todo-content">
    <TodoHeader />
    <TodoListAdd @handleNewTodo="addTodo($event)" />
    <TodoSort
      :todos="todos"
      @handleSortByName="sortByName($event)"
      @handleSortByDate="sortByDate($event)"
    />
    <div v-for="todo in todos" :key="todo.id" class="todo-list">
      <TodoListItem
        :todo="todo"
        @handleRemovedTodo="removeTodo($event)"
        @handleToggle="toggleTodoStatus($event)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Todo } from "../models/Todo";
import { Options, Vue } from "vue-class-component";
import TodoListAdd from "./TodoListAdd.vue";
import TodoListItem from "./TodoListItem.vue";
import TodoSort from "./TodoSort.vue";
import TodoHeader from "./TodoHeader.vue";

@Options({
  components: {
    TodoListAdd,
    TodoListItem,
    TodoSort,
    TodoHeader,
  },
})
export default class TodoList extends Vue {
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
    this.todos = this.todos.sort((a, b) => a.task.localeCompare(b.task));
  }

  sortByDate(todos: Todo[]) {
    this.todos.sort(function (a, b) {
      return b.id - a.id;
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
  padding: 20px 0px;
}

.todo-list {
  padding: 20px 0px 0px;
  margin: 0px;
  width: 100%;
}
</style>