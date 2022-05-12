<template>
  <div class="sort-button-box">
    <button class="sort-button">
      <span>Sort by </span>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          height="10px"
          color="#fff"
        >
          <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"
          />
        </svg>
      </span>
    </button>
  </div>
</template>

<script lang="ts">
import { Prop } from "vue-property-decorator";
import { Vue } from "vue-class-component";

export default class TodoSort extends Vue {
  @Prop() status = false;

  handleToggle(status: boolean) {
    console.log("hej");
    this.status != status;
  }
}
</script>

<style lang="scss">
.lineThrough {
  text-decoration: line-through;
}
.sort-button-box {
  display: flex;
  justify-content: flex-end;
}
.sort-button {
  background-color: white;
  border: 2px solid rgb(78, 51, 145);
  color: #000;
  font-size: 0.9rem;
  display: flex;
  flex-direction: row;
  gap: 10px;
}
</style>