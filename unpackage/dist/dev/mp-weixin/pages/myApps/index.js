"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const apps = common_vendor.ref([
      {
        id: 1,
        name: "技术评测元应用",
        scenario: "产品技术评估",
        technology: "AI分析模型",
        conditions: "需要完整的技术文档和测试数据",
        processing: "自动生成评测报告和建议",
        icon: "/static/app-icons/tech.png"
      },
      {
        id: 2,
        name: "风险识别报告生成元应用",
        scenario: "项目风险评估",
        technology: "机器学习算法",
        conditions: "历史数据和当前项目信息",
        processing: "识别潜在风险并生成分析报告",
        icon: "/static/app-icons/risk.png"
      }
    ]);
    const openApp = (app) => {
      common_vendor.index.navigateTo({
        url: `/pages/appDetail/index?id=${app.id}`
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(apps.value, (app, k0, i0) => {
          return {
            a: app.icon,
            b: common_vendor.t(app.name),
            c: common_vendor.t(app.scenario),
            d: common_vendor.t(app.technology),
            e: common_vendor.t(app.conditions),
            f: common_vendor.t(app.processing),
            g: app.id,
            h: common_vendor.o(($event) => openApp(app), app.id)
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-136f5073"], ["__file", "C:/Users/MSI-NB/Desktop/FILE/YuFanWenShu/Computer Science/研/eblab/跨境贸易/元应用门户/MetaAPP/pages/myApps/index.vue"]]);
wx.createPage(MiniProgramPage);
