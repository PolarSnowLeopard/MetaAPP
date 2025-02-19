"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/myApps/index.js";
  "./pages/market/index.js";
  "./pages/profile/index.js";
  "./pages/appDetail/index.js";
  "./pages/appPages/techEvaluation/index.js";
  "./pages/appPages/riskIdentification/index.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/MSI-NB/Desktop/FILE/YuFanWenShu/Computer Science/研/eblab/跨境贸易/元应用门户/MetaAPP/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
