import * as ElementPlus from "element-plus/dist/index.full";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ElementPlus);
});
