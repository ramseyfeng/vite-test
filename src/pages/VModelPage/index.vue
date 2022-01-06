<template>
  <div class="text-gray-600">
    <div>功能有点类似于Angular的实现ControlValueAccessor，可以给自定义组件双向绑定model</div>
    <div>默认情况下，组件上的 v-model 使用 [modelValue] 作为 prop 和 update:[modelValue] 作为事件。<br>我们可以通过向 v-model 传递参数来修改这些名称：</div>
    <div>如例： 子组件将需要一个 <strong>title</strong> prop 并发出 <strong>update:title</strong> 要同步的事件：</div>
    <div class="bg-gray-300">&lt;MyComponent v-model:title="customTitle"&gt;&lt;/MyComponent&gt;</div>
    <div class="py-2">
      Parent: <input class="border border-solid border-green-600" v-model="customTitle">
    </div>
    <MyComponent v-model:title="customTitle"></MyComponent>
    <hr>
    <MyComputedComponent v-model:title="customTitle"></MyComputedComponent>
  </div>
</template>

<script>
import MyComponent from "./components/MyComponent";
import {ref} from "vue";
import MyComputedComponent from "./components/MyComputedComponent";
export default {
  name: "VModelPage",
  components: {MyComputedComponent, MyComponent},
  setup() {
    const customTitle = ref('');
    return {
      customTitle
    }
  }
}
</script>

<style scoped>

</style>