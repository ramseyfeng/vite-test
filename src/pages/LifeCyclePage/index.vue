<template>
  <div class="flex-col flex items-start">
    <div class="bg-gray-100 flex flex-col">
      <div class="py-2">
        <button @click="sumRef++" class="mr-1 bg-yellow-600">sumRef +1</button>
      </div>
      <div class="py-1">
        <span class="bg-green-600 p-2">普通Html中sumRef： {{ sumRef }}</span>
      </div>
    </div>
    <hr class="w-full my-6">
    <div class="bg-red-100 flex flex-col">
      <div class="font-bold">点击button并不触发update hooks，奇怪</div>
      <blockquote>https://github.com/vuejs/vue-next/issues/4686</blockquote>
      <div class="bg-red-200">This is expected behavior in Vue 3 since the parent component in this case did not update, which is a form of optimization.
        A workaround here is using the @vnode-updated="updateRefs" event on a container element inside the slot instead. - Evan You</div>
      <div class="py-2">
        <button @click="sumEl++" class="mr-1 bg-yellow-600">element plus中 sum +1</button>
      </div>
      <div class="py-1">
        <el-tag class="p-2" type="warning">el-tag中的sum: {{ sumEl }}</el-tag>
      </div>
    </div>
    <hr class="w-full my-6">
    <div>
      <div v-for="(lh, index) in newHooks" :key="index">{{ index }}------{{ lh }}</div>
      <div v-for="(lh, index) in arr" :key="index">{{ index }}------{{ lh }}</div>
      <div>c</div>
    </div>
    <hr class="w-full my-6">
    <button @click="sum++" class="mr-1 bg-yellow-600">sum + 1</button>{{sum}}
    <LifeCycleSample :sum="sum"></LifeCycleSample>
    <div>hooks {{ newHooks.length }}</div>
  </div>
</template>

<script>

import {
  onUnmounted,
  onBeforeUnmount,
  onUpdated,
  onBeforeUpdate,
  onMounted,
  ref,
  onBeforeMount,
  reactive,
  toRefs, computed
} from "vue";
import LifeCycleSample from "./components/LifeCycleSample";

export default {
  name: "LifeCyclePage",
  components: {LifeCycleSample},
  setup() {
    const sumRef = ref(0);
    const sumEl = ref(0);
    const state = reactive({
      sum: 0,
      arr: []
    });
    console.log('setup');
    function addSum() {
      state.sum = state.sum + 1;
    }

    function addList() {
      state.arr.unshift('a');
    }

    const hooks = [];
    console.log('---父组件setup---')

    //通过组合式API的形式去使用生命周期钩子
    onBeforeMount(() => {
      console.log('---父组件onBeforeMount---')
      hooks.push('---父组件onBeforeMount---');
    })
    onMounted(() => {
      console.log('---父组件onMounted---')
    })
    onBeforeUpdate(() => {
      console.log('---父组件onBeforeUpdate---')
    })
    onUpdated(() => {
      console.log('---父组件onUpdated---')
      // hooks.push('---父组件onUpdated---')
    })
    onBeforeUnmount(() => {
      console.log('---父组件onBeforeUnmount---')
    })
    onUnmounted(() => {
      console.log('---父组件onUnmounted---')
    })

    const newHooks = computed(() => hooks);
    //返回一个对象（常用）
    return {
      ...toRefs(state),
      newHooks,
      addSum,
      addList,
      sumRef,
      sumEl
    }
  }
}
</script>

<style scoped>

</style>