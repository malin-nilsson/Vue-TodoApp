<template>
  <div class="todo-content">
    <TodoSort />
    <TodoListAdd @handleNewTodo="addTodo($event)" />
    <div v-for="todo in todos" :key="todo.id" class="todo-list">
      <TodoListItem
        :todo="todo"
        @handleRemovedTodo="removeTodo($event)"
        @handleToggle="toggleTodo($event)"
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

@Options({
  components: {
    TodoListAdd,
    TodoListItem,
    TodoSort,
  },
})
export default class TodoList extends Vue {
  todos: Todo[] = [];

  addTodo(todo: string) {
    this.todos.push(new Todo(todo));
  }

  removeTodo(task: string) {
    let index = this.todos.findIndex((todo) => todo.task === task);
    this.todos.splice(index, 1);
  }

  toggleTodo(task: string) {
    let todo = this.todos.find((todo) => todo.task === task);
    if (todo) {
      todo.done = !todo.done;
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