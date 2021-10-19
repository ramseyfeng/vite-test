<template>
  <div class="card">
    <TodoHeader @add-todo="addTodo"></TodoHeader>
    <TodoTable :todos="todos"
               @update-todo="updateTodo"
               @delete-todo="deleteTodo"
               @update-todo-selection="updateTodoSelection"></TodoTable>
    <TodoFooter @delete-dones="deleteDones"></TodoFooter>
  </div>
</template>

<script setup lang="ts">
import {Todo} from "../../models/TodoList";
import TodoHeader from "./components/TodoHeader/index.vue"
import TodoTable from "./components/TodoTable/index.vue"

import {reactive, watch} from "vue";
import {nanoid} from "nanoid";
import {ElMessage} from "element-plus";

let storedTodos = JSON.parse(localStorage.getItem('SAMPLE_TODOS') || '[]');
let todos: Todo[] = reactive(storedTodos);

function addTodo(name) {
  if (todos.find(td => td.name === name)) {
    ElMessage.error(`已经有过一个"${name}"`);
    return;
  }
  todos.unshift({
    id: nanoid(),
    name,
    done: true
  })
}

function updateTodo(id: string, name: string) {
  const todo = todos.find(td => td.id === id);
  if (todo) {
    todo.name = name;
    todo.editMode = false;
  }
}

function updateTodoSelection(selection) {
  const ids = selection.map(sel => sel.id);
  todos.forEach(td => {
    if (td.done !== ids.includes(td.id)) {
      td.done = ids.includes(td.id);
    }
  });
}

function deleteTodo(id: string) {
  todos.splice(todos.findIndex(td => td.id === id), 1);
}

function deleteDones() {
  // Todo: Update needed
  todos = todos.filter(td => td.done === false);
  console.log(todos);
}

watch(todos, (pre, cur) => {
  localStorage.setItem('SAMPLE_TODOS', JSON.stringify(cur));
});

function tstMsg() {
  ElMessage.error('Oops, this is a error message.')
}

</script>

<style scoped>

</style>
