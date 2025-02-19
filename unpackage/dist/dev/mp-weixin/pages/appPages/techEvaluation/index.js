"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const inputName = common_vendor.ref("输入数据");
    const outputName = common_vendor.ref("输出结果");
    const parameterType = common_vendor.ref(3);
    const submitButtonText = common_vendor.ref("开始评测");
    const fileList = common_vendor.ref([]);
    const code = common_vendor.ref("");
    const response = common_vendor.ref("");
    const sending = common_vendor.ref(false);
    const chooseFile = () => {
      common_vendor.index.chooseFile({
        success: (res) => {
          const file = res.tempFiles[0];
          fileList.value = [{
            name: file.name,
            path: file.path
          }];
        }
      });
    };
    const removeFile = () => {
      fileList.value = [];
    };
    const handleGoBack = () => {
      common_vendor.index.navigateBack();
    };
    const onRequestSend = async () => {
      if (sending.value)
        return;
      sending.value = true;
      try {
        await new Promise((resolve) => setTimeout(resolve, 1e3));
        if (parameterType.value === 3) {
          try {
            JSON.parse(code.value);
          } catch (error) {
            common_vendor.index.showToast({
              title: "JSON 格式错误",
              icon: "none"
            });
            return;
          }
        }
        response.value = '模拟响应数据:\n{\n  "status": "success",\n  "message": "评测完成"\n}';
        common_vendor.index.showToast({
          title: "请求成功",
          icon: "success"
        });
      } catch (error) {
        response.value = error.message;
        common_vendor.index.showToast({
          title: "请求失败",
          icon: "none"
        });
      } finally {
        sending.value = false;
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(inputName.value),
        b: common_vendor.o(chooseFile),
        c: fileList.value.length > 0
      }, fileList.value.length > 0 ? {
        d: common_vendor.t(fileList.value[0].name),
        e: common_vendor.o(removeFile)
      } : {}, {
        f: parameterType.value === 2,
        g: parameterType.value === 3,
        h: code.value,
        i: common_vendor.o(($event) => code.value = $event.detail.value),
        j: common_vendor.t(submitButtonText.value),
        k: common_vendor.o(onRequestSend),
        l: common_vendor.t(outputName.value),
        m: response.value,
        n: common_vendor.o(($event) => response.value = $event.detail.value),
        o: common_vendor.t(outputName.value),
        p: common_vendor.o(handleGoBack)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-32ee01ff"], ["__file", "C:/Users/MSI-NB/Desktop/FILE/YuFanWenShu/Computer Science/研/eblab/跨境贸易/元应用门户/MetaAPP/pages/appPages/techEvaluation/index.vue"]]);
wx.createPage(MiniProgramPage);
