<template>
  <!-- INPUT WRAPPER FOR ADDING TODO -->
  <div class="input-box">
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

export default class TodoAdd extends Vue {
  todoInput = "";

  getTodoInput(todo: string) {
    if (this.todoInput === "") {
      alert("You forgot to add a todo!");
    } else {
      this.$emit("handleNewTodo", todo);
      this.todoInput = "";
    }
  }
}
</script>

<style lang="scss">
@import "@/styles/mixins";

.btn {
  @include btn();
  transition: background-color 0.1s ease-in-out;

  &:hover {
    background-color: rgb(129, 101, 187, 0.6);
    color: #000;
  }

  @include tablet-and-up {
    padding: 12px 25px;
  }
}

.input-box {
  @include flex(row, center, center, 10px);
  width: 100%;
  margin: 0 auto;
  padding: 10px 0px 30px;
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
