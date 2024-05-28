// src/utils/debounce.js
export const debounce = (func, wait) => {
  let timeout;
  const debouncedFunc = (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };

  debouncedFunc.cancel = () => {
    clearTimeout(timeout);
  };

  return debouncedFunc;
};