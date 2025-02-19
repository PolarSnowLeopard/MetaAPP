"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const selectedFile = common_vendor.ref(null);
    const analysisResult = common_vendor.ref("");
    const handleUpload = () => {
      common_vendor.wx$1.chooseMessageFile({
        count: 1,
        type: "file",
        success: (res) => {
          selectedFile.value = res.tempFiles[0];
          common_vendor.index.showToast({
            title: "文件选择成功",
            icon: "success"
          });
        },
        fail: (err) => {
          common_vendor.index.showToast({
            title: "文件选择失败",
            icon: "none"
          });
        }
      });
    };
    const handleSubmit = () => {
      if (!selectedFile.value) {
        common_vendor.index.showToast({
          title: "请先选择文件",
          icon: "none"
        });
        return;
      }
      analysisResult.value = "基于图神经网络的跨境贸易支付监测模型的推理结果已经产生。模型在数据集上的表现如下：\n\n在100个节点中，有93个节点被判定为类别0，7个节点被判定为类别2。具体结果如下：\n\n- 类别0：节点1，节点2，节点3，节点4，节点9，节点10，节点11，节点12，节点13，节点14，节点15，节点16，节点17，节点\n18，节点19，节点20，节点21，节点22，节点23，节点24，节点25，节点26，节点27，节点28，节点29，节点30，节点31，节点\n32，节点33，节点34，节点35，节点36，节点37，节点38，节点39，节点40，节点41，节点42，节点43，节点44，节点45，节点\n46，节点47，节点48，节点49，节点50，节点51，节点52，节点53，节点54，节点55，节点56，节点57，节点58，节点59，节点\n60，节点61，节点62，节点63，节点65，节点66，节点67，节点68，节点69，节点70，节点71，节点72，节点73，节点74，节点\n75，节点76，节点77，节点78，节点79，节点80，节点81，节点82，节点83，节点84，节点85，节点86，节点87，节点88，节点\n89，节点90，节点91，节点92，节点93，节点94，节点95，节点96。\n\n- 类别2：节点0，节点5，节点6，节点7，节点8，节点64，节点97，节点98，节点99。\n\n总结，大多数节点（93%）被分类为类别0，而较小的部分（7%）被分类为类别2。这可能反映了在训练集中类别0的样本数量更多\n，模型在识别类别0的能力上表现得更好。同时，模型对于类别2的识别也有一定的能力。";
      common_vendor.index.showToast({
        title: "分析完成",
        icon: "success"
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(handleUpload),
        b: common_vendor.o((...args) => _ctx.onFileChange && _ctx.onFileChange(...args)),
        c: selectedFile.value
      }, selectedFile.value ? {
        d: common_vendor.t(selectedFile.value.name)
      } : {}, {
        e: common_vendor.o(handleSubmit),
        f: common_vendor.t(analysisResult.value)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-46bd7cd9"], ["__file", "C:/Users/MSI-NB/Desktop/FILE/YuFanWenShu/Computer Science/研/eblab/跨境贸易/元应用门户/MetaAPP/pages/appPages/riskIdentification/index.vue"]]);
wx.createPage(MiniProgramPage);
