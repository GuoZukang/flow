<template>
  <view class="my">
    <view class="bg">
      <img :src="Iusers.avatar" alt="" style="width: 140rpx" />
      <view class="name">{{ Iusers.name }}</view>
      <view class="id">司机编号：{{ Iusers.number }}</view>
      <view class="phone">手机号：{{ Iusers.phone }}</view>
    </view>
    <view class="month">
      <view style="margin: 26rpx 0; color: #818181">- 本月任务 -</view>
      <view style="display: flex; justify-content: space-around">
        <view>
          <view class="num">{{ task.completedAmounts }}</view>
          <view>任务总量</view>
        </view>
        <view>
          <view class="num">{{ task.taskAmounts }}</view>
          <view>完成任务量</view>
        </view>
        <view>
          <view class="num">{{ task.transportMileage }}</view>
          <view>运输量(km)</view>
        </view>
      </view>
    </view>
    <view class="list">
      <view class="ulist" @click="gotruck">
        <view>车辆信息</view>
        <view><van-icon name="arrow" size="18" /></view>
      </view>
      <view class="ulist task" @click="gotasks">
        <view>任务数据</view>
        <view><van-icon name="arrow" size="18" /></view>
      </view>
      <view class="ulist" @click="goset">
        <view>系统设置</view>
        <view><van-icon name="arrow" size="18" /></view>
      </view>
    </view>
  </view>
</template>
<script lang="ts" setup>
import { users } from '../../api/users'
import { taskReport } from '../../api/taskReport'
import { ref } from 'vue'
const Iusers = ref<any>({})
const task = ref<any>({})
users().then((res: any) => {
  Iusers.value = res.data
})
taskReport({ month: '07', year: '2022' }).then((res: any) => {
  task.value = res.data
})

const gotruck = () => {
  uni.navigateTo({
    url: '/pages/truck/truck',
  })
}
const gotasks = () => {
  uni.navigateTo({
    url: '/pages/tasks/tasks',
  })
}
const goset = () => {
  uni.navigateTo({
    url: '/pages/set/set',
  })
}
</script>
<style>
.my {
  width: 100vw;
  height: calc(100vh - 100rpx);
  background-color: #f5f5f5;
}
.bg {
  width: 100%;
  height: 584rpx;
  background-image: url(../../static/images/profile-bg@2x.png);
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50rpx;
  color: #fff;
  .name {
    font-size: 18px;
    font-weight: 600;
    margin: 20rpx 0;
  }
  .id {
    margin: 10rpx 0;
  }
}
.month {
  width: 95%;
  height: 268rpx;
  background-color: #fff;
  text-align: center;
  border-radius: 10px;
  position: fixed;
  top: 230px;
  left: 20rpx;
}
.num {
  font-size: 18px;
  font-weight: 600;
  margin: 26rpx 0;
}
.list {
  width: 95%;
  height: 360rpx;
  background-color: #fff;
  border-radius: 10px;
  margin: auto;
  margin-top: 130rpx;
  padding: 20px;
  .ulist {
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    font-weight: 550;
  }
  .task {
    margin: 70rpx 0;
  }
}
</style>
