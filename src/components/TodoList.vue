<template>
  <div class="todo-content">
    <TodoListAdd @addTodo="handleNewTodo($event)" />
    <TodoListItem
      v-for="(todo, i) in todos"
      :key="i"
      :task="todo.task"
      :status="todo.done"
      @removeTodo="handleRemovedTodo($event)"
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

  handleNewTodo(todo: string) {
    this.todos.push(new Todo(todo));
    console.log(this.todos);
  }

  handleRemovedTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
</script>

<style lang="scss" scoped>
.todo-content {
  width: 80%;
}
</style>