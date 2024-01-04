<template>
  <view class="truck">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in imgArr" :key="index">
        <img :src="item.url" alt="" style="width: 100%" />
      </van-swipe-item>
    </van-swipe>
    <view class="list">
      <view class="ulist">
        <view class="txt">车辆编号</view>
        <view>{{ info.id }}</view>
      </view>
      <view class="ulist">
        <view class="txt">车辆号牌</view>
        <view>{{ info.licensePlate }}</view>
      </view>
      <view class="ulist">
        <view class="txt">车型</view>
        <view>{{ info.truckType }}</view>
      </view>
      <view class="ulist">
        <view class="txt">所属机构</view>
        <view>{{ info.currentOrganName }}</view>
      </view>
      <view class="ulist">
        <view class="txt">载重</view>
        <view>{{ info.allowableLoad }}</view>
      </view>
    </view>
  </view>
</template>
<script lang="ts" setup>
import { truck } from '../../api/truck'
import { ref } from 'vue'
const info = ref<any>({})
const imgArr = ref<any>([])
truck().then((res: any) => {
  info.value = res.data
  imgArr.value = res.data.pictureList
})
</script>
<style>
.truck {
  width: 100vw;
  height: calc(100vh - 88rpx);
  background-color: #f5f5f5;
}
.list {
  width: 95%;
  height: 402rpx;
  background-color: #fff;
  border-radius: 10px;
  margin: 30rpx auto;
  padding: 20px;
  .ulist {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25rpx;
    .txt {
      color: #818181;
      font-size: 18px;
    }
  }
}
</style>
