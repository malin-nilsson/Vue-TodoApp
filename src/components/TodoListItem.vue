<template>
  <div class="todo-list">
    <div class="todo-list-item">
      <span>{{ task }}</span>
      <span class="remove-wrapper" @click="getRemovedTodo(key)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          height="20px"
        >
          <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
          />
        </svg>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

export default class TodoListItem extends Vue {
  @Prop() task!: string;
  @Prop() key!: number;

  getRemovedTodo(id: number) {
    this.$emit("removeTodo", id);
  }
}
</script>

<style lang="scss">
.todo-list {
  padding: 20px 0px 0px;
  margin: 0px;
  width: 100%;

  .todo-list-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 13px;
    font-size: 1.2rem;
    list-style: none;
    border: 1px solid #000;
    margin: 3px 0px;

    &:hover {
      background-color: rgb(108, 66, 154, 0.5);
    }
  }

  .remove-wrapper {
    display: flex;
  }

  svg:hover {
    cursor: pointer;
  }
}
</style>