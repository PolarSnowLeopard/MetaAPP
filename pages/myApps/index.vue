<template>
  <view class="container">
    <view class="app-list">
      <view 
        v-for="app in apps" 
        :key="app.id" 
        class="app-item"
        @tap="openApp(app)"
      >
        <image :src="app.icon" class="app-icon"></image>
        <view class="app-info">
          <view class="app-name">{{ app.name }}</view>
          <view class="app-detail">
            <text class="label">场景：</text>
            <text>{{ app.scenario }}</text>
          </view>
          <view class="app-detail">
            <text class="label">技术：</text>
            <text>{{ app.technology }}</text>
          </view>
          <view class="app-detail">
            <text class="label">条件：</text>
            <text>{{ app.conditions }}</text>
          </view>
          <view class="app-detail">
            <text class="label">处理：</text>
            <text>{{ app.processing }}</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'

const apps = ref([
  {
    id: 1,
    name: '技术评测元应用', 
    scenario: '产品技术评估',
    technology: 'AI分析模型',
    conditions: '需要完整的技术文档和测试数据',
    processing: '自动生成评测报告和建议',
    icon: '/static/app-icons/tech.png'
  },
  {
    id: 2,
    name: '风险识别报告生成元应用',
    scenario: '项目风险评估',
    technology: '机器学习算法',
    conditions: '历史数据和当前项目信息',
    processing: '识别潜在风险并生成分析报告',
    icon: '/static/app-icons/risk.png'
  }
])

const openApp = (app) => {
  uni.navigateTo({
    url: `/pages/appDetail/index?id=${app.id}`
  })
}
</script>

<style scoped>
.container {
  padding: 20rpx;
  background-color: #f5f5f5;
}

.app-list {
  width: 100%;
}

.app-item {
  display: flex;
  padding: 30rpx;
  margin-bottom: 20rpx;
  background-color: #ffffff;
  border-radius: 12rpx;
  box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.05);
}

.app-icon {
  width: 120rpx;
  height: 120rpx;
  border-radius: 12rpx;
  margin-right: 30rpx;
}

.app-info {
  flex: 1;
}

.app-name {
  font-size: 32rpx;
  color: #333;
  font-weight: bold;
  margin-bottom: 16rpx;
}

.app-detail {
  font-size: 26rpx;
  color: #666;
  margin-bottom: 8rpx;
  line-height: 1.5;
}

.label {
  color: #2979ff;
  margin-right: 10rpx;
}
</style> 