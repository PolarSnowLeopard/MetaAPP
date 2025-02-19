<template>
  <view class="container">
    <view class="header">
      <image :src="app?.icon" class="app-icon"></image>
      <view class="app-title">{{ app?.name }}</view>
    </view>
    
    <view class="content">
      <view class="info-item">
        <text class="label">场景：</text>
        <text class="value">{{ app?.scenario }}</text>
      </view>
      <view class="info-item">
        <text class="label">技术：</text>
        <text class="value">{{ app?.technology }}</text>
      </view>
      <view class="info-item">
        <text class="label">条件：</text>
        <text class="value">{{ app?.conditions }}</text>
      </view>
      <view class="info-item">
        <text class="label">处理：</text>
        <text class="value">{{ app?.processing }}</text>
      </view>
    </view>

    <view class="action">
      <button class="start-btn" type="primary" @tap="startApp">启动应用</button>
    </view>
  </view>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const app = ref(null)

onMounted(() => {
  const pages = getCurrentPages()
  const currentPage = pages[pages.length - 1]
  const id = currentPage.options.id
  
  // 这里应该根据id从服务器获取详细数据
  // 这里暂时使用模拟数据
  app.value = {
    id: id,
    name: '技术评测元应用',
    scenario: '产品技术评估',
    technology: 'AI分析模型',
    conditions: '需要完整的技术文档和测试数据',
    processing: '自动生成评测报告和建议',
    icon: '/static/app-icons/tech.png',
    pagePath: 'pages/appPages/techEvaluation/index'
  }

  // 如果是风险识别应用，更新数据
  if (id === '2') {
    app.value = {
      id: id,
      name: '风险识别报告生成元应用',
      scenario: '项目风险评估',
      technology: '机器学习算法',
      conditions: '历史数据和当前项目信息',
      processing: '识别潜在风险并生成分析报告',
      icon: '/static/app-icons/risk.png',
      pagePath: 'pages/appPages/riskIdentification/index'
    }
  }
})

const startApp = () => {
  // 根据应用ID跳转到对应页面
  if (app.value) {
    uni.navigateTo({
      url: `/${app.value.pagePath}`
    })
  }
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  background-color: #f5f5f5;
}

.header {
  background-color: #fff;
  padding: 40rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1rpx solid #eee;
}

.app-icon {
  width: 120rpx;
  height: 120rpx;
  border-radius: 20rpx;
  margin-bottom: 20rpx;
}

.app-title {
  font-size: 36rpx;
  font-weight: bold;
  color: #333;
}

.content {
  background-color: #fff;
  margin-top: 20rpx;
  padding: 30rpx;
}

.info-item {
  margin-bottom: 20rpx;
  line-height: 1.6;
}

.label {
  color: #2979ff;
  font-size: 28rpx;
  margin-right: 20rpx;
}

.value {
  color: #333;
  font-size: 28rpx;
}

.action {
  padding: 30rpx;
  margin-top: 20rpx;
}

.start-btn {
  background-color: #2979ff;
  color: #fff;
}
</style> 