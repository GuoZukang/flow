<template>
  <view class="login">
    <view v-if="flag">
      <view class="top">
        <view style="font-size: 24px; font-weight: 600">手机号登录</view>
        <view
          style="font-size: 16px; font-weight: 500; line-height: 31.33px; color: #ef4f3f"
          @click="flag = false"
          >账号登录></view
        >
      </view>
      <van-form @submit="onSubmit">
        <van-cell-group inset style="margin: 0">
          <van-field
            v-model="form.phone"
            placeholder="请输入手机号"
            :rules="[{ required: true, message: '请输入手机号' }]"
            style="padding: 10px 0"
          />
          <van-field
            v-model="form.key"
            center
            clearable
            placeholder="请输入验证码"
            :rules="[{ required: true, message: '请输入验证码' }]"
            style="padding: 10px 0"
          >
            <template #button> 获取验证码 </template>
          </van-field>
        </van-cell-group>
        <div style="margin: 16px">
          <van-button
            round
            block
            type="primary"
            native-type="submit"
            style="background-color: #ef4f3f; border: 0; margin-top: 70rpx"
          >
            登录
          </van-button>
        </div>
      </van-form>
    </view>
    <view v-else>
      <view class="top">
        <view style="font-size: 24px; font-weight: 600">账号登录</view>
        <view
          style="font-size: 16px; font-weight: 500; line-height: 31.33px; color: #ef4f3f"
          @click="flag = true"
          >手机号登录></view
        >
      </view>
      <van-form @submit="onSubmit1">
        <van-cell-group inset style="margin: 0">
          <van-field
            v-model="form1.account"
            placeholder="请输入账号"
            :rules="[{ required: true, message: '请输入账号' }]"
            style="padding: 10px 0"
          />
          <van-field
            v-model="form1.password"
            placeholder="请输入密码"
            :rules="[{ required: true, message: '请输入密码' }]"
            style="padding: 10px 0"
          />
        </van-cell-group>
        <div style="margin: 16px">
          <van-button
            round
            block
            type="primary"
            native-type="submit"
            style="background-color: #ef4f3f; border: 0; margin-top: 70rpx"
          >
            登录
          </van-button>
        </div>
      </van-form>
    </view>
  </view>
</template>
<script lang="ts" setup>
import { login } from '@/api/login'
import { ref } from 'vue'
import { useUserStore } from '../../stores/user'
import { showSuccessToast, showFailToast } from 'vant'
const store = useUserStore()
const flag = ref(true)
const form = ref({
  phone: '',
  key: '',
})
const form1 = ref({
  account: 'yang123',
  password: '123456',
})

const onSubmit = () => {}
const onSubmit1 = () => {
  login(form1.value).then((res: any) => {
    if (res.code == 200) {
      uni.switchTab({
        url: '/pages/task/task',
      })
      showSuccessToast('登录成功')
      store.token = res.data
    } else {
      showFailToast(res.msg)
    }
  })
}
</script>
<style>
.login {
  width: 100vw;
  height: calc(100vh - 88rpx);
  padding: 0 66rpx;
}
.top {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 50rpx 0;
}
</style>
