<template>
  <div class="todo-wrapper">
    <TodoList />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TodoList from "./components/TodoList.vue";

@Options({
  components: {
    TodoList,
  },
})
export default class App extends Vue {}
</script>


<style lang="scss">
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  background-image: url("./assets/hero-bg.svg");
  background-position: center;
  background-size: cover;
  height: 100vh;
  padding: 0px;
}

.todo-wrapper {
  width: 40%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 60px auto;
  background-color: #fff;
  border-radius: 20px;
  color: #000;
  padding: 10px 0px;
  overflow-y: scroll;
}
</style>

