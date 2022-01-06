<template>
  更新primitive value
  <el-input type="text" v-model="plainValue"></el-input>
  <el-button @click="updateVal">Update</el-button>
  <el-divider></el-divider>
  双向绑定更新reactive value
  <el-input type="text" v-model="welcome"></el-input>
  <el-input type="text" v-model="welcome"></el-input>
</template>

<script setup lang="ts">
import {reactive, ref, toRefs} from "vue";

let plainValue = ref('c');

let data = reactive({
  welcome: 'hi'
});

let refObj = ref({a: {c: 'k'}});

console.log(plainValue)

function updateVal() {
  plainValue.value = plainValue.value + 'a'; //页面中不需要.value
}

const {welcome} = toRefs(data)

</script>

<style scoped>

</style>
