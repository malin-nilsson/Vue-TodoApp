<template>
  <div v-if="todo.done" class="todo-list-box" @click="toggleStatus(todo.task)">
    <div class="todo-done">
      <span>{{ todo.task }}</span>
      <TodoListRemove :title="todo.task" @removeTodo="removeTodo($event)" />
    </div>
  </div>
  <div v-else class="todo-list-box" @click="toggleStatus(todo.task)">
    <div class="todo-not-done">
      <span>{{ todo.task }}</span>
      <TodoListRemove :title="todo.task" @removeTodo="removeTodo($event)" />
    </div>
  </div>
</template>

<script lang="ts">
import { Todo } from "@/models/Todo";
import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import TodoListRemove from "./TodoListRemove.vue";

@Options({
  components: {
    TodoListRemove,
  },
})
export default class TodoListItem extends Vue {
  @Prop() todo!: Todo;

  removeTodo(todo: string) {
    this.$emit("handleRemovedTodo", todo);
  }

  toggleStatus(todo: string) {
    this.$emit("handleToggle", todo);
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/mixins";
.todo-list-box {
  @include flex(row, space-between, center, 0);
  font-size: 1rem;
  list-style: none;
  border: 1px solid #000;
  margin: 3px 0px;

  &:hover {
    background-color: rgb(129, 101, 187, 0.6);
  }

  @include tablet-and-up {
    font-size: 1.2rem;
  }

  .todo-done {
    @include flex(row, space-between, center, 0);
    text-decoration: line-through;
    padding: 13px;
    background-color: rgb(129, 101, 187, 0.6);
    width: 100%;
  }

  .todo-not-done {
    @include flex(row, space-between, center, 0);
    padding: 13px;
    background-color: #fff;
    width: 100%;

    &:hover {
      background-color: rgb(129, 101, 187, 0.6);
    }
  }
}
</style>