<script setup>
definePageMeta({
  middleware: ["auth"],
});

import { useLogingStore } from "@/stores/login";

const store = useLogingStore();
const user = ref({
  username: "mike",
  email: "fan@gmail.com",
  password: "A2$765432191",
});

/**
 * 登入
 */
const sandLogin = () => {
  const payload = {
    email: user.value.email,
    password: user.value.password,
  };
  store.sendLoginAuth(payload);
};

/**
 * 註冊
 */
const resister = () => {
  const payload = {
    username: user.value.username,
    email: user.value.email,
    password: user.value.password,
  };
  store.resister(payload);
};
</script>
<template>
  <div class="login_box">
    <div class="center">
      <div class="input_box">
        <p>NAME</p>
        <input
          type="text"
          placeholder="輸入使用者名稱"
          v-model="user.username"
        />
        <p v-if="store.error_message.username" class="error">
          {{ store.error_message.username }}
        </p>
      </div>
      <div class="input_box mb-20">
        <p>PASSWORD</p>
        <input type="password" placeholder="輸入密碼" v-model="user.password" />
        <p v-if="store.error_message.password" class="error">
          {{ store.error_message.password }}
        </p>
      </div>
      <button class="btn" @click="sandLogin">登入</button>
      <button class="btn" @click="resister">註冊</button>
    </div>
  </div>
</template>
