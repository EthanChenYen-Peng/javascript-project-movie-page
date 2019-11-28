const debounce = (func, delay = AUTOCOMPLETE_LATENCY) => {
  let timeoutID;
  return (...args) => {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
    timeoutID = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};
