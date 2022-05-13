<template>
  <div>
    <!-- IF TODO IS DONE -->
    <div v-if="todo.done" class="todo" @click="toggleStatus(todo.task)">
      <div class="todo-done">
        <div class="todo-done-checked">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 0 448 512"
          >
            <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"
            />
          </svg>
          <span>{{ todo.task }}</span>
        </div>
        <TodoRemove :title="todo.task" @removeTodo="removeTodo($event)" />
      </div>
    </div>

    <!-- IF TODO IS NOT DONE -->
    <div v-else class="todo" @click="toggleStatus(todo.task)">
      <div class="todo-not-done">
        <span>{{ todo.task }}</span>
        <TodoRemove :title="todo.task" @removeTodo="removeTodo($event)" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Todo } from "@/models/Todo";
import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import TodoRemove from "./TodoRemove.vue";

@Options({
  components: {
    TodoRemove,
  },
})
export default class TodoItem extends Vue {
  @Prop() todo!: Todo;
  @Prop() todos!: Todo[];

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

.todo {
  @include flex(row, space-between, center, 0);
  font-size: 1rem;
  list-style: none;
  border: 1px solid #000;
  margin: 3px 0px;
  padding: 0;

  &:hover {
    background-color: rgb(129, 101, 187, 0.3);
  }

  @include tablet-and-up {
    font-size: 1.1rem;
  }

  .todo-done {
    @include flex(row, space-between, center, 0);
    text-decoration: line-through;
    padding: 11px;
    background-color: rgb(129, 101, 187, 0.3);
    width: 100%;
    margin: 0;
  }

  .todo-done-checked {
    @include flex(row, center, center, 10px);
  }

  .todo-not-done {
    @include flex(row, space-between, center, 0);
    padding: 11px;
    background-color: #fff;
    width: 100%;
    margin: 0;

    &:hover {
      background-color: rgb(129, 101, 187, 0.3);
    }
  }
}
</style>