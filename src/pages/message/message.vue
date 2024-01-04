<template>
  <van-tabs v-model:active="active" color="#E52D21">
    <van-tab title="公告"> </van-tab>
    <van-tab title="任务通知"></van-tab>
  </van-tabs>
  <scroll-view
    class="scroll-view"
    scroll-y
    @refresherrefresh="onScrollViewRefresh"
    @scrolltolower="onScrollToLower"
    :refresher-triggered="isTriggered"
    refresher-enabled
    refresher-background="#f5f5f5"
  >
    <view class="message">
      <view class="read">
        <img src="../../static/icon_yidu.png" alt="" style="width: 32rpx; height: 32rpx" />
        <view>全部已读</view>
      </view>
      <view class="list">
        <view class="ulist" v-for="(item, index) in msgArr" :key="index">
          <view class="txt">{{ item.title }}</view>
          <view>{{ item.created }}</view>
        </view>
      </view>
    </view>
  </scroll-view>
</template>
<script lang="ts" setup>
import { onLoad } from '@dcloudio/uni-app'
import { msgApi } from '@/api/message'
import { ref } from 'vue'
import { useMessageList } from '@/hooks/useMessage'
const { page, isTriggered, hasMore, messageList, getMessageList } = useMessageList(200)
const active = ref(0)
const query = ref({
  contentType: 200,
  page: 1,
  pageSize: 10,
})
const msgArr = ref<any>([])

msgApi(query.value).then((res: any) => {
  msgArr.value = res.data.items
})
// 下拉刷新
const onScrollViewRefresh = async () => {
  // 将下拉刷新的状态重置为true
  isTriggered.value = true

  // 将页码重置为第一页
  page.value = 1

  // 重新请求数据
  await getMessageList()

  // 将下拉刷新的状态重置为false
  isTriggered.value = false
}

// 上拉加载
const onScrollToLower = () => {
  // 如果没有数据,则不进行请求数据
  console.log('hasMore', hasMore.value)
  if (!hasMore.value) return
  // 继续请求数据
  getMessageList()
}

// 初始化加载
onLoad(() => {
  getMessageList()
})
</script>
<style>
.message {
  width: 100vw;
  height: calc(100vh - 188rpx);
  background-color: #f5f5f5;
}
.read {
  width: 160rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 48rpx 34rpx;
}
.list {
  width: 100%;
  height: 364rpx;
  background-color: #fff;
  overflow: hidden;
  .ulist {
    display: flex;
    justify-content: space-between;
    padding: 0 40rpx;
    margin: 25rpx 0;
    .txt {
      width: 55%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
