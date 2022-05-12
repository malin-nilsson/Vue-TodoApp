<template>
  <div class="input-wrapper">
    <input
      type="text"
      v-model="todoInput"
      @keypress.enter="getTodoInput(todoInput)"
      placeholder="Add new task..."
    />
    <button class="btn" @click="getTodoInput(todoInput)">Add</button>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class TodoListAdd extends Vue {
  todoInput = "";

  getTodoInput(todo: string) {
    this.$emit("handleNewTodo", todo);
    this.todoInput = "";
  }
}
</script>

<style lang="scss">
@import "@/styles/mixins";

.btn {
  @include btn();
}

.input-wrapper {
  @include flex(row, center, center, 10px);
  width: 100%;
  margin: 0 auto;
  padding: 30px 0px 10px;
}

input {
  width: 100%;
  padding: 10px 0px;
  font-size: 1rem;
  border: none;
  border-bottom: 2px solid #000;

  @include tablet-and-up {
    font-size: 1.1rem;
  }
}

input:focus {
  outline: none;
  border: none;
  border-bottom: 2px solid #000;
}
</style>
