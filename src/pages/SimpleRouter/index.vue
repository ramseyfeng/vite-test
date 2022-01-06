<template>
  <div>
    <router-link to="/home/knowledge/simple-router/test1">Test1</router-link>
    <router-link to="/home/knowledge/simple-router/test6">Test6</router-link>
  </div>
  <hr>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <!--      <keep-alive>-->
      <component :is="Component"></component>
      <!--      </keep-alive>-->
    </transition>
  </router-view>
</template>
<script lang="ts">
</script>
<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-active {
  opacity: 0;
}
</style>