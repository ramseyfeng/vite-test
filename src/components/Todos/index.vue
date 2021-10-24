<template>
  <div class="card">
    <TodoHeader @add-todo="addTodo" @search-todo="searchTodo"></TodoHeader>
    <TodoTable :todos="todos" :searchText="searchText"
               @update-todo="updateTodo"
               @delete-todo="deleteTodo"
               @update-todo-selection="updateTodoSelection"></TodoTable>
    <TodoFooter @delete-dones="deleteDones"></TodoFooter>
  </div>
</template>

<script setup lang="ts">
import TodoHeader from "./components/TodoHeader/index.vue"
import TodoTable from "./components/TodoTable/index.vue"

import {computed, provide, reactive, ref, toRefs, watch} from "vue";
import {nanoid} from "nanoid";
import {ElMessage} from "element-plus";
import {Todo} from "@/models/TodoList";

/**
 * point: 在最外层套个state,避免todos整体替换无法检测的问题(e.g. todos = todos.filter(...))
 */
let state = reactive<{ todos: Todo[] }>({
  todos: []
});
state.todos = JSON.parse(localStorage.getItem('SAMPLE_TODOS') || '[]');

function addTodo(name: string) {
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
  console.log(state.todos);
}

let searchText = ref('');

function deleteTodo(id: string) {
  state.todos.splice(state.todos.findIndex(td => td.id === id), 1);
}

function searchTodo(value) {
  console.log(value);
  searchText.value = value
}

function deleteDones() {
  // Todo: Update needed
  state.todos = state.todos.filter(td => td.done === false);
}

watch(() => state.todos, (pre, cur) => {
  localStorage.setItem('SAMPLE_TODOS', JSON.stringify(cur));
}, {deep: true});

/**
 * points: toRefs可以减少页面对象访问层级
 */
const {todos} = toRefs(state);

console.log(todos);

/**
 * points: 在我们的例子中，如果我们想对祖先组件中的更改做出响应，
 * 我们需要为 provide 的 todoLength 分配一个组合式 API computed property
 * 或者传入一个ref/reactive的对象也可以?
 */
provide('todosState', {
  todosLength: computed(() => state.todos.filter(td => td.done).length)
})

</script>

<style scoped>

</style>
