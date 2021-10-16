<template>
  <div class="card">
    <TodoHeader @add-todo="addTodo"></TodoHeader>
    <div class="p-6">
      <ul>
        <TodoItem v-for="o in todos" :key="o.id" :item="o" class="my-1 py-2"></TodoItem>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {Todo} from "../../models/TodoList";
  import TodoItem from "./components/TodoItem/index.vue";
  import TodoHeader from "./components/TodoHeader/index.vue"
  import {reactive, ref} from "vue";
  import {nanoid} from "nanoid";

  const todos: Todo[] = reactive([])

  function addTodo(name) {
    todos.unshift({
      id: nanoid(),
      name,
      done: false
    })
  }

</script>

<style scoped>

</style>
