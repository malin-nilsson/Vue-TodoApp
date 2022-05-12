<template>
  <div class="todo-wrapper">
    <TodoApp />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TodoApp from "./components/TodoApp.vue";

@Options({
  components: {
    TodoApp,
  },
})
export default class App extends Vue {}
</script>


<style lang="scss">
@import "./styles/mixins";

body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  @include flex(column, flex-start, center, 0);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: url("./assets/hero-bg.svg");
  background-position: center;
  background-size: cover;
  height: 100vh;
  padding: 0px;
}

.todo-wrapper {
  @include flex(column, flex-start, center, 0);
  width: 90%;
  height: 80vh;
  margin: 60px auto;
  background-color: #fff;
  border-radius: 20px;
  color: #000;
  padding: 10px 0px;
  overflow-y: scroll;

  @include tablet-and-up {
    width: 70%;
  }

  @include desktop-and-up {
    width: 40%;
  }
}
</style>

