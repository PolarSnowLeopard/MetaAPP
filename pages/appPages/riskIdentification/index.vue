<!-- <template>
  <view class="container">
    <text>风险识别报告生成应用页面</text>
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
    <view class="input-output-container">
      <!-- 输入区域 -->
      <view>
        <text class="section-title">跨境支付数据</text>
        <view class="button-container">
          <button class="upload-button" @tap="handleUpload">
            <text class="upload-icon">↑</text>
            选择数据文件
          </button>
          <!-- 添加隐藏的文件输入框 -->
          <input 
            type="file" 
            ref="fileInput"
            style="display: none;"
            @change="onFileChange"
          />
        </view>
        <view v-if="selectedFile" class="file-info">
          已选择文件：{{ selectedFile.name }}
        </view>
        <view class="button-container">
          <button class="submit-button" type="primary" @tap="handleSubmit">
            获取结果
          </button>
        </view>
      </view>
      <!-- 输出区域 -->
      <view>
        <text class="section-title">跨境支付风险评估报告</text>
        <view class="output-box">
          {{ analysisResult }}
        </view>
        <view class="image-box">
          跨境支付风险评估报告可视化区域
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'

const selectedFile = ref(null)
const analysisResult = ref('')

const handleUpload = () => {
  wx.chooseMessageFile({
    count: 1,
    type: 'file',
    success: (res) => {
      selectedFile.value = res.tempFiles[0]
      uni.showToast({
        title: '文件选择成功',
        icon: 'success'
      })
    },
    fail: (err) => {
      uni.showToast({
        title: '文件选择失败',
        icon: 'none'
      })
    }
  })
}

const handleSubmit = () => {
  if (!selectedFile.value) {
    uni.showToast({
      title: '请先选择文件',
      icon: 'none'
    })
    return
  }

  analysisResult.value = '基于图神经网络的跨境贸易支付监测模型的推理结果已经产生。模型在数据集上的表现如下：\n\n在100个节点中，有93个节点被判定为类别0，7个节点被判定为类别2。具体结果如下：\n\n- 类别0：节点1，节点2，节点3，节点4，节点9，节点10，节点11，节点12，节点13，节点14，节点15，节点16，节点17，节点\n18，节点19，节点20，节点21，节点22，节点23，节点24，节点25，节点26，节点27，节点28，节点29，节点30，节点31，节点\n32，节点33，节点34，节点35，节点36，节点37，节点38，节点39，节点40，节点41，节点42，节点43，节点44，节点45，节点\n46，节点47，节点48，节点49，节点50，节点51，节点52，节点53，节点54，节点55，节点56，节点57，节点58，节点59，节点\n60，节点61，节点62，节点63，节点65，节点66，节点67，节点68，节点69，节点70，节点71，节点72，节点73，节点74，节点\n75，节点76，节点77，节点78，节点79，节点80，节点81，节点82，节点83，节点84，节点85，节点86，节点87，节点88，节点\n89，节点90，节点91，节点92，节点93，节点94，节点95，节点96。\n\n- 类别2：节点0，节点5，节点6，节点7，节点8，节点64，节点97，节点98，节点99。\n\n总结，大多数节点（93%）被分类为类别0，而较小的部分（7%）被分类为类别2。这可能反映了在训练集中类别0的样本数量更多\n，模型在识别类别0的能力上表现得更好。同时，模型对于类别2的识别也有一定的能力。'

  uni.showToast({
    title: '分析完成',
    icon: 'success'
  })
}
</script>

<style scoped>
.container {
  padding: 20rpx 40rpx;
  background-color: #fff;
}

.input-output-container {
  margin: 20rpx 0;
}

.section-title {
  font-size: 32rpx;
  color: #333;
  margin: 20rpx 0;
  line-height: 1.5;
  display: block;
}

.button-container {
  display: flex;
  justify-content: center;
  width: 100%;
}

.file-info {
  text-align: center;
  color: #666;
  font-size: 26rpx;
  margin: 10rpx 0;
}

.upload-button {
  width: 280rpx;
  height: 70rpx;
  line-height: 70rpx;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 8rpx;
  background-color: #fff;
  color: #666;
  margin: 20rpx 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26rpx;
}

.upload-icon {
  margin-right: 10rpx;
}

.submit-button {
  width: 280rpx;
  height: 70rpx;
  line-height: 70rpx;
  margin: 20rpx 0;
  background-color: #1890ff;
  font-size: 26rpx;
}

.output-box {
  width: 100%;
  min-height: 160rpx;
  padding: 24rpx;
  background-color: #fff;
  border: 1rpx solid #ddd;
  border-radius: 8rpx;
  font-size: 28rpx;
  box-sizing: border-box;
  color: #666;
  white-space: pre-wrap;
}

.image-box {
  width: 100%;
  min-height: 300rpx;
  margin-top: 32rpx;
  padding: 32rpx;
  background-color: #f5f5f5;
  border: 1rpx dashed #ddd;
  border-radius: 8rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28rpx;
  color: #666;
  font-style: italic;
  box-sizing: border-box;
}
</style>
