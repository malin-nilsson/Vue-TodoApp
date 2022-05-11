<template>
  <div class="input-wrapper">
    <input
      type="text"
      v-model="todoInput"
      @keypress.enter="getTodoInput(todoInput)"
      placeholder="Add new task..."
    />
    <button @click="getTodoInput(todoInput)">Add</button>
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
button {
  padding: 10px 15px;
  background-color: rgb(78, 51, 145);
  color: #fff;
  border: none;
  font-size: 1.1rem;
  border-radius: 5px;
  cursor: pointer;
}

.input-wrapper {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 0 auto;
  padding: 30px 0px 10px;
}

input {
  width: 100%;
  padding: 10px 0px;
  font-size: 1.1rem;
  border: none;
  border-bottom: 2px solid #000;
}

input:focus {
  outline: none;
  border: none;
  border-bottom: 2px solid #000;
}
</style>
