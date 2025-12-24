<script setup lang="ts">
import { footerList } from './config'

function skip(url: string) {
  // 防止新窗口获取 window.opener（tabnabbing）
  window.open(url, '_blank', 'noopener,noreferrer')
}
</script>

<template>
  <div class="footer-container">
    <ul class="flex justify-center">
      <li
        v-for="item in footerList.data"
        :key="item.id"
        class="flex items-center gap-1 cursor-pointer"
        @click="skip(item.url)"
      >
        <svg-icon :name="item.icon" />
        <p>{{ item.name }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">

</style>
