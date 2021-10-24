<template>
  <div>子组件sum: </div>
</template>

<script lang="ts">
import {onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated} from "vue";

export default {
  name: "LifeCycleSample",
  props:['sum'],
  setup() {
    onBeforeMount(() => {
      console.log('---子组件onBeforeMount---')
    })
    onMounted(() => {
      console.log('---子组件onMounted---')
    })
    onBeforeUpdate(() => {
      console.log('---子组件onBeforeUpdate---')
    })
    onUpdated(() => {
      console.log('---子组件onUpdated---')
    })
    onBeforeUnmount(() => {
      console.log('---子组件onBeforeUnmount---')
    })
    onUnmounted(() => {
      console.log('---子组件onUnmounted---')
    })
  }
}
</script>

<style scoped>

</style>