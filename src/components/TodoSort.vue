<template>
  <div class="sort-button-box">
    Sort by
    <button class="sort-button" @click="sortByName">Name</button>
    <button class="sort-button">Date</button>
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

  sortByName() {
    this.$emit("handleSortByName", this.todos);
  }

  // sortByDate() {}
}
</script>

<style lang="scss" scoped>
@import "@/styles/mixins";
.lineThrough {
  text-decoration: line-through;
}
.sort-button-box {
  @include flex(row, flex-start, center, 14px);
}
.sort-button {
  @include flex(row, center, center);
  @include btn(3px, 0.9rem);
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