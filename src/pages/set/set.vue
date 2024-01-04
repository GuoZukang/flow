<template>
  <view class="set">
    <view class="list">
      <view v-for="(item, index) in arr" class="ulist" :key="index">
        <view class="txt">{{ item }}</view>
        <view><van-icon name="arrow" size="20" /></view>
      </view>
    </view>
    <button class="btn" @click="quit">退出</button>
  </view>
</template>
<script lang="ts" setup>
import { uni } from '@dcloudio/uni-h5'
import { showConfirmDialog } from 'vant'
import { ref } from 'vue'
const arr = ref<any>(['换绑手机', '修改密码', '消息通知设置', '修改密码', '清理缓存'])

const quit = () => {
  showConfirmDialog({
    title: '',
    message: '确定要退出登录？',
    confirmButtonColor: '#EF4F3F',
    confirmButtonText: '退出',
  })
    .then(() => {
      localStorage.removeItem('user')
      uni.navigateTo({
        url: '/',
      })
    })
    .catch(() => {
      // on cancel
    })
}
</script>
<style>
.set {
  width: 100vw;
  height: calc(100vh - 88rpx);
  background-color: #f5f5f5;
  overflow: hidden;
}
.list {
  width: 95%;
  height: 600rpx;
  background-color: #fff;
  margin: auto;
  padding: 20px;
  margin-top: 40rpx;
  border-radius: 10px;
  .ulist {
    display: flex;
    justify-content: space-between;
    margin-bottom: 70rpx;
    .txt {
      font-size: 19px;
    }
  }
}
.btn {
  width: 95%;
  margin: auto;
  margin-top: 80rpx;
  background-color: #fff;
}
</style>
