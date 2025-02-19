<!-- <template>
  <view class="container">
    <text>技术评测应用页面</text>
  </view>
</template>

<script setup>
</script>

<style scoped>
.container {
  padding: 20rpx;
}
</style>  -->

<template>
  <view class="container">
    <!-- 直接显示输入输出区域 -->
    <view class="input-output-container">
      <!-- 输入区域 -->
      <view>
        <text class="section-title">{{ inputName }}</text>
        <view v-show="parameterType === 2">
          <button @tap="chooseFile" type="primary">
            选择数据文件
          </button>
          <view v-if="fileList.length > 0" class="file-item">
            <text>{{ fileList[0].name }}</text>
            <text @tap="removeFile" class="remove-btn">×</text>
          </view>
        </view>
        <textarea
          v-show="parameterType === 3"
          v-model="code"
          class="code-input"
        />
        <button class="submit-button" type="primary" @tap="onRequestSend">
          {{ submitButtonText }}
        </button>
      </view>
      <!-- 输出区域 -->
      <view>
        <text class="section-title">{{ outputName }}</text>
        <textarea
          v-model="response"
          class="output-box"
          placeholder=""
          :disabled="true"
        />
        <view class="image-box">
          {{ outputName }}可视化区域
        </view>
      </view>
    </view>
    <view class="footer">
      <button type="primary" @tap="handleGoBack">返回</button>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'

// 直接定义需要的数据，不再使用apiList
const inputName = ref('输入数据')
const outputName = ref('输出结果')
const parameterType = ref(3)
const submitButtonText = ref('开始评测')

const fileList = ref([])
const code = ref('')
const response = ref('')
const sending = ref(false)

const chooseFile = () => {
  uni.chooseFile({
    success: (res) => {
      const file = res.tempFiles[0]
      fileList.value = [{
        name: file.name,
        path: file.path
      }]
    }
  })
}

const removeFile = () => {
  fileList.value = []
}

const handleGoBack = () => {
  uni.navigateBack()
}

const onRequestSend = async () => {
  if (sending.value) return
  sending.value = true
  
  try {
    // 模拟请求
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    if (parameterType.value === 3) {
      try {
        JSON.parse(code.value)
      } catch (error) {
        uni.showToast({
          title: 'JSON 格式错误',
          icon: 'none'
        })
        return
      }
    }

    response.value = '模拟响应数据:\n{\n  "status": "success",\n  "message": "评测完成"\n}'
    uni.showToast({
      title: '请求成功',
      icon: 'success'
    })
  } catch (error) {
    response.value = error.message
    uni.showToast({
      title: '请求失败',
      icon: 'none'
    })
  } finally {
    sending.value = false
  }
}
</script>

<style scoped>
.container {
  padding: 40rpx 60rpx;  /* 增加整体左右内边距 */
  background-color: #fff;
  max-width: 1200rpx;    /* 限制最大宽度 */
  margin: 0 auto;        /* 居中显示 */
}

.input-output-container {
  margin: 20rpx 0;       /* 修改上下间距，移除左右间距 */
}

.section-title {
  font-size: 28rpx;
  font-weight: bold;
  color: #333;
  margin: 24rpx 0;       /* 修改为上下间距 */
  line-height: 60rpx;
}

.submit-button {
  width: 50%;
  margin: 32rpx auto;    /* 修改为上下间距，自动左右居中 */
  display: block;        /* 确保按钮居中 */
}

.code-input,
.output-box {
  width: 100%;
  min-height: 200rpx;
  padding: 24rpx;        /* 增加内边距 */
  background-color: #fff;
  border: 1rpx solid #d9d9d9;
  border-radius: 8rpx;
  font-size: 28rpx;
  box-sizing: border-box; /* 确保padding不会影响总宽度 */
}

.image-box {
  width: 100%;
  min-height: 300rpx;
  margin-top: 32rpx;
  padding: 32rpx;
  background-color: #f5f5f5;  /* 稍微调亮背景色 */
  border: 1rpx dashed #d9d9d9;
  border-radius: 8rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28rpx;
  color: #666;
  font-style: italic;
  box-sizing: border-box;
}

.file-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20rpx;        /* 增加内边距 */
  background-color: #f5f5f5;
  border-radius: 8rpx;
  margin: 16rpx 0;       /* 修改为上下间距 */
}

.remove-btn {
  color: #ff4d4f;
  font-size: 32rpx;
  padding: 0 20rpx;      /* 增加左右内边距 */
  cursor: pointer;
}

.footer {
  width: 100%;
  text-align: center;
  margin-top: 60rpx;     /* 增加与上方内容的间距 */
  padding-bottom: 40rpx; /* 增加底部间距 */
}
</style>
  