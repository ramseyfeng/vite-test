<template>
  <div class="flex justify-between">
    <div class="flex w-1/3">
      <el-input class="mr-2" v-model="newTodo.name" ref="inputRef" @keypress.enter="!disableBtn && $emit('addTodo', newTodo.name)"/>
      <el-button type="primary" @click="$emit('addTodo', newTodo.name)" :disabled="disableBtn">添加</el-button>
    </div>
    <div class="w-1/3">
      <el-input v-model="searchText" placeholder="查找" @keyup="search"></el-input>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, reactive, ref} from "vue";

const searchText = ref('');
const emits = defineEmits(['addTodo', 'searchTodo'])

// const inputRef = ref();
//
// onMounted(() => {
//   inputRef.value.focus();
// });

let newTodo = reactive({
  name: ''
});

const disableBtn = computed(() => {
  return newTodo.name.trim() === '';
});

function search() {
  emits('searchTodo', searchText.value);
}
</script>

<style scoped>

</style>