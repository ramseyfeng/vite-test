<template>
  <ul class="py-6 px-2">
    <TodoItem v-for="o in todos" :key="o.id" :item="o" class="my-1 py-2"></TodoItem>
  </ul>
</template>

<script setup lang="ts">
  import {PropType} from "vue";
  import {Todo} from "@/models/TodoList";

  defineProps({
    todos: Object as PropType<Todo[]>
  })
</script>

<style scoped>

</style>
