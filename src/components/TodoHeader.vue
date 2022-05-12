<template>
  <h1>Taskly.</h1>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class TodoHeader extends Vue {}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap");
h1 {
  font-size: 2rem;
  font-family: "DM Serif Display", serif;
}
</style>

