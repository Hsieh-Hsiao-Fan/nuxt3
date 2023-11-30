export const useAddCount = () => {
  const count = ref(10);

  const addCount = () => {
    count.value++;
  };
  return {
    count,
    addCount,
  };
};
