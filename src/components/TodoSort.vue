<template>
  <!-- SORT BUTTONS -->
  <div class="sort-button-box">
    Sort
    <button class="sort-button" @click="sortByName(todos)">
      Alphabetically
    </button>
    <button class="sort-button" @click="sortByDate(todos)">Created</button>
    <button class="sort-button" @click="sortByDone(todos)">Done</button>
    <button class="sort-button" @click="sortByNotDone(todos)">Not done</button>
  </div>
</template>

<script lang="ts">
import { Prop } from "vue-property-decorator";
import { Vue } from "vue-class-component";
import { Todo } from "@/models/Todo";

export default class TodoSort extends Vue {
  @Prop() status = false;
  @Prop() todos!: Todo[];

  handleToggle(status: boolean) {
    this.status != status;
  }

  sortByName(todos: Todo[]) {
    this.$emit("handleSortByName", todos);
  }

  sortByDate(todos: Todo[]) {
    this.$emit("handleSortByDate", todos);
  }

  sortByDone(todos: Todo[]) {
    this.$emit("handleSortByDone", todos);
  }

  sortByNotDone(todos: Todo[]) {
    this.$emit("handleSortByNotDone", todos);
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/mixins";

.sort-button-box {
  @include flex(row, flex-start, center, 14px);
  flex-wrap: wrap;

  @include tablet-and-up {
    flex-wrap: nowrap;
  }
}
.sort-button {
  @include flex(row, center, center);
  @include btn(3px, 0.8rem);
  background-color: #fff;
  border: 2px solid rgb(78, 51, 145);
  color: #000;
  padding: 5px 10px;

  &:hover {
    background-color: rgb(78, 51, 145);
    border: 2px solid #fff;
    color: #fff;
  }
}
</style>