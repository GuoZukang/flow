<template>
  <van-tabs v-model:active="tabIndex" color="#E52D21">
    <van-tab v-for="(item, index) in tabMetas" :key="index" :title="item.title"></van-tab>
  </van-tabs>
  <view class="page-container">
    <view class="message-list" v-show="tabIndex === 0">
      <announcement></announcement>
    </view>
    <view class="message-list" v-show="tabIndex === 1">
      <notice></notice>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import announcement from './components/announcement.vue'
import notice from './components/notice.vue'

type tabMetasType = {
  title: string
  rendered: boolean
}

// Tab 标签页索引
const tabIndex = ref<number>(0)
const tabMetas = reactive<tabMetasType[]>([
  {
    title: '公告',
    rendered: true,
  },
  {
    title: '任务通知',
    rendered: false,
  },
])
</script>

<style scoped lang="scss">
.page-container {
  display: flex;
  flex-direction: column;
  /* #ifdef H5 */
  height: calc(100vh - 94rpx);
  /* #endif */
}

.message-list {
  flex: 1;
}
</style>
