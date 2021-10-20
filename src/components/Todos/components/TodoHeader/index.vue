<template>
  <div class="flex justify-between">
    <div class="flex w-1/3">
      <el-input class="mr-2" v-model="newTodo.name" ref="inputRef" @keypress.enter="$emit('addTodo', newTodo.name)"/>
      <el-button type="primary" @click="$emit('addTodo', newTodo.name)">添加</el-button>
    </div>
    <div class="w-1/3">
      <el-input v-model="search" placeholder="查找"></el-input>
    </div>
  </div>
</template>

<script setup lang="ts">
import {reactive} from "vue";

defineEmits(['addTodo'])

// const inputRef = ref();
//
// onMounted(() => {
//   inputRef.value.focus();
// });

let newTodo = reactive({
  name: null
});
</script>

<style scoped>

</style>