<template>
  <li class="my-1 py-2">{{ 'List item ' + item?.name }}</li>
</template>

<script setup lang="ts">
  import {Todo} from "../../../../models/TodoList"
  import {PropType} from "vue";
  defineProps({
    item: Object as PropType<Todo>
  })
</script>

<style scoped>

</style>