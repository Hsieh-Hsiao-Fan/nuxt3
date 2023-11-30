import { defineStore } from "pinia";
export default defineNuxtRouteMiddleware((to, from) => {
  console.log("Auth Middleware");
  const store = useLogingStore();
  const cookie = useCookie("token");

  console.log("cookie", cookie);

  if (cookie.value != undefined) {
    const payload = {
      token: cookie.value,
    };

    // store.getUserData(payload);
  } else {
    console.log("unlogin");

    store.rmUserData();
  }
});
