import { defineStore } from "pinia";

export const useHomeStore = defineStore("home", () => {
  const objects = reactive({ arr: [] });
  const isFetch = ref(false);

  const setObjectData = (data) => {
    objects.arr = data;
  };

  const addVote = async (type) => {
    if (isFetch.value) return;
    isFetch.value = true;
    try {
      const data = await $fetch("https://vue-lessons-api.vercel.app/vote/add", {
        method: "POST",
        body: { type },
      });
      //TBH回寫store.status
    } catch (error) {
      alert("異常");
    } finally {
      isFetch.value = false;
    }
  };

  return {
    objects,
    isFetch,
    setObjectData,
    addVote,
  };
});
