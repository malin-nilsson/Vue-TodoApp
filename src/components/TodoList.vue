<template>
  <div class="todo-content">
    <TodoListAdd @handleNewTodo="addTodo($event)" />
    <TodoListItem
      v-for="todo in todos"
      :key="todo.id"
      :id="todo.id"
      :task="todo.task"
      :status="todo.done"
      @handleRemovedTodo="removeTodo($event)"
    />
  </div>
</template>

<script lang="ts">
import { Todo } from "../models/Todo";
import { Options, Vue } from "vue-class-component";
import TodoListAdd from "./TodoListAdd.vue";
import TodoListItem from "./TodoListItem.vue";

@Options({
  components: {
    TodoListAdd,
    TodoListItem,
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
}
</script>

<style lang="scss" scoped>
.todo-content {
  width: 80%;
}
</style>