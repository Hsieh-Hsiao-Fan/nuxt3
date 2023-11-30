import { defineStore } from "pinia";
import axios from "axios";
axios.defaults.withCredentials = true;

export const useLogingStore = defineStore("login", () => {
  const router = useRouter();

  const error_message = ref({
    username: "",
    password: "",
  });

  const loginStatus = ref({
    status: false,
  });
  const userData = reactive({
    name: "",
    email: "",
    id: "",
  });

  const isLoading = ref(false);
  const handleLoading = () => (isLoading.value = !isLoading.value);

  /**
   * 登入，並把token存到cookie
   *
   * @param {String} email
   * @param {String} password
   * @returns
   */
  const sendLoginAuth = async ({ email, password }) => {
    if (isLoading.value) return;
    isLoading.value = true;
    await axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie", {
      crossDomain: true,
    });
    await axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/login",
      headers: {
        "X-XSRF-TOKEN": getCookieByName("XSRF-TOKEN"),
      },
      //API要求的資料
      data: {
        email: email,
        password: password,
      },
    }).then((response) => {
      var timestamp = new Date().getTime();

      const cookie = useCookie("token", {
        expires: new Date(timestamp + 600000),
      });
      cookie.value = response.data.token;

      const payload = {
        token: cookie.value,
      };

      getUserData(payload);

      alert("success");
      router.push({ path: "/" });
    });
  };

  const getCookieByName = (name) => {
    let value = parseCookie()[name];
    if (value) {
      value = decodeURIComponent(value);
    }
    return value;
  };

  const parseCookie = () => {
    let cookieObj = {};
    let cookieAry = document.cookie.split(";");
    let cookie;
    for (let i = 0, l = cookieAry.length; i < l; ++i) {
      cookie = cookieAry[i].trim();
      cookie = cookie.split("=");
      cookieObj[cookie[0]] = cookie[1];
    }

    return cookieObj;
  };

  /**
   * 註冊
   *
   * @param {String} username
   * @param {String} email
   * @param {String} password
   */
  const resister = async ({ username, email, password }) => {
    await axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie", {
      crossDomain: true,
    });

    const res = await axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/register",
      headers: {
        "X-XSRF-TOKEN": getCookieByName("XSRF-TOKEN"),
      },
      //API要求的資料
      data: {
        name: username,
        email: email,
        password: password,
      },
    }).then((response) => console.log());
  };

  /**
   * 用token取得使用者資料
   *
   * @param {String} token
   */
  const getUserData = async ({ token }) => {
    await axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie", {
      crossDomain: true,
    });
    let t;
    let loging = false;
    try {
      t = await axios({
        method: "get",
        url: "http://127.0.0.1:8000/api/user",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        loging = true;
        return response.data;
      });
    } catch (error) {}
    console.log("loging", loging);

    // if (loging) {
    loginStatus.value.status = true;
    userData.name = t.name;
    userData.email = t.email;
    userData.id = t.id;
    // }
  };

  const rmUserData = function () {
    loginStatus.value.status = false;
    userData.name = "";
    userData.email = "";
    userData.id = "";
  };

  return {
    isLoading,
    error_message,
    userData,
    loginStatus,
    handleLoading,
    sendLoginAuth,
    getUserData,
    resister,
    rmUserData,
  };
});
