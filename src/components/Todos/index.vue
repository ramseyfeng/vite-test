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
import TodoHeader from "./components/TodoHeader/index.vue"
import TodoTable from "./components/TodoTable/index.vue"

import {onMounted, reactive, toRefs, watch} from "vue";
import {nanoid} from "nanoid";
import {ElMessage} from "element-plus";
import {Todo} from "@/models/TodoList";

onMounted(() => {
  state.todos = JSON.parse(localStorage.getItem('SAMPLE_TODOS') || '[]');
})

/**
 * point: 在最外层套个state,避免todos整体替换无法检测的问题(e.g. todos = todos.filter(...))
 */
let state = reactive<{ todos: Todo[] }>({
  todos: []
});

function addTodo(name) {
  if (state.todos.find(td => td.name === name)) {
    ElMessage.error(`已经有过一个"${name}"`);
    return;
  }
  state.todos.unshift({
    id: nanoid(),
    name,
    done: false
  })
}

function updateTodo(id: string, name: string) {
  const todo = state.todos.find(td => td.id === id);
  if (todo) {
    todo.name = name;
    todo.editMode = false;
  }
}

function updateTodoSelection(selection) {
  const ids = selection.map(sel => sel.id);
  state.todos.forEach(td => {
    if (td.done !== ids.includes(td.id)) {
      td.done = ids.includes(td.id);
    }
  });
}

function deleteTodo(id: string) {
  state.todos.splice(state.todos.findIndex(td => td.id === id), 1);
}

function deleteDones() {
  // Todo: Update needed
  state.todos = state.todos.filter(td => td.done === false);
}

watch(() => state.todos, (pre, cur) => {
  localStorage.setItem('SAMPLE_TODOS', JSON.stringify(cur));
}, {deep: true});

function tstMsg() {
  ElMessage.error('Oops, this is a error message.')
}

/**
 * points: toRefs可以减少页面对象访问层级
  */
const {todos} = toRefs(state);

</script>

<style scoped>

</style>
