<template>
  <div class="todo-list">
    <div class="todo-list-item">
      <span>{{ task }}</span>
      <TodoListRemove :title="task" @removeTodo="removeTodo($event)" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import TodoListRemove from "./TodoListRemove.vue";

@Options({
  components: {
    TodoListRemove,
  },
})
export default class TodoListItem extends Vue {
  @Prop() task!: string;
  @Prop() id!: number;

  removeTodo(todo: string) {
    this.$emit("handleRemovedTodo", todo);
  }
}
</script>

<style lang="scss" scoped>
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
      background-color: rgb(129, 101, 187, 0.6);
    }
  }
}
</style>