"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const app = common_vendor.ref(null);
    common_vendor.onMounted(() => {
      const pages = getCurrentPages();
      const currentPage = pages[pages.length - 1];
      const id = currentPage.options.id;
      app.value = {
        id,
        name: "技术评测元应用",
        scenario: "产品技术评估",
        technology: "AI分析模型",
        conditions: "需要完整的技术文档和测试数据",
        processing: "自动生成评测报告和建议",
        icon: "/static/app-icons/tech.png",
        pagePath: "pages/appPages/techEvaluation/index"
      };
      if (id === "2") {
        app.value = {
          id,
          name: "风险识别报告生成元应用",
          scenario: "项目风险评估",
          technology: "机器学习算法",
          conditions: "历史数据和当前项目信息",
          processing: "识别潜在风险并生成分析报告",
          icon: "/static/app-icons/risk.png",
          pagePath: "pages/appPages/riskIdentification/index"
        };
      }
    });
    const startApp = () => {
      if (app.value) {
        common_vendor.index.navigateTo({
          url: `/${app.value.pagePath}`
        });
      }
    };
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f;
      return {
        a: (_a = app.value) == null ? void 0 : _a.icon,
        b: common_vendor.t((_b = app.value) == null ? void 0 : _b.name),
        c: common_vendor.t((_c = app.value) == null ? void 0 : _c.scenario),
        d: common_vendor.t((_d = app.value) == null ? void 0 : _d.technology),
        e: common_vendor.t((_e = app.value) == null ? void 0 : _e.conditions),
        f: common_vendor.t((_f = app.value) == null ? void 0 : _f.processing),
        g: common_vendor.o(startApp)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a215564f"], ["__file", "C:/Users/MSI-NB/Desktop/FILE/YuFanWenShu/Computer Science/研/eblab/跨境贸易/元应用门户/MetaAPP/pages/appDetail/index.vue"]]);
wx.createPage(MiniProgramPage);
