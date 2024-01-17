<template>
  <view class="detail">
    <view class="box">
      <view class="list">
        <view>基本信息</view>
        <van-icon name="plus" color="#EF4F3F" size="20" />
      </view>
      <view>
        <view class="msg">
          <view class="left">
            <view class="start">起</view>
            <view class="vertical-line"></view>
            <view class="stop">止</view>
          </view>
          <view class="right">
            <view style="margin-bottom: 70rpx">{{ detailArr.startAddress }}</view>
            <view>{{ detailArr.endAddress }}</view>
          </view>
        </view>
        <hr />
        <view class="btm">
          <view style="color: #818181">任务编号</view>
          <view>{{ detailArr.startAgencyId }}</view>
        </view>
        <view class="btm">
          <view style="color: #818181">联系人</view>
          <view>{{ detailArr.startHandoverName }}</view>
        </view>
        <view class="btm">
          <view style="color: #818181">联系电话</view>
          <view>{{ detailArr.startHandoverPhone }}</view>
        </view>
        <view class="btm">
          <view style="color: #818181">提货时间</view>
          <view>{{ detailArr.planDepartureTime }}</view>
        </view>
        <view class="btm">
          <view style="color: #818181">预计送达时间</view>
          <view>{{ detailArr.planArrivalTime }}</view>
        </view>
      </view>
    </view>
    <view style="height: 140rpx">
      <view class="bottom">
        <view class="btn1">延迟提货</view>
        <view class="btn2">提货</view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { detailApi } from '../../api/detail'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
const detailArr = ref<any>({})

onLoad((option) => {
  detailApi(option.id).then((res: any) => {
    detailArr.value = res.data
    console.log(res)
  })
})
</script>

<style lang="scss" scoped>
.detail {
  width: 100vw;
  min-height: calc(100vh - 88rpx);
  background-color: #f5f5f5;
  overflow: hidden;
}
.box {
  width: 90%;
  padding: 30rpx;
  background-color: #fff;
  border-radius: 10px;
  margin: 40rpx auto;
  .list {
    display: flex;
    justify-content: space-between;
  }
  .msg {
    margin: 40rpx 0;
    display: flex;
    justify-content: space-between;
    .left {
      width: 40rpx;
      .vertical-line {
        width: 1px;
        height: 40rpx;
        border-left: 1px dotted #000;
        margin: 10rpx auto;
      }
      .start,
      .stop {
        width: 44rpx;
        height: 44rpx;
        background-color: #2a2929;
        color: #fff;
        border-radius: 50%;
        text-align: center;
        line-height: 44rpx;
      }
      .stop {
        background-color: #ef4f3f;
      }
    }
    .right {
      width: 530rpx;
      color: #818181;
    }
  }
  .btm {
    margin-top: 40rpx;
    display: flex;
    justify-content: space-between;
  }
}
.bottom {
  width: 100%;
  height: 140rpx;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .btn1,
  .btn2 {
    width: 250rpx;
    height: 100rpx;
    background-color: #e6e6e6;
    text-align: center;
    line-height: 100rpx;
    border-radius: 50rpx;
    font-weight: 550;
  }
  .btn2 {
    width: 414rpx;
    background-color: #fadcd9;
    color: #fff;
  }
}
</style>
