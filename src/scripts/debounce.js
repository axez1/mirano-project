export const debounce = (fn, msec) => {
  let idTimeout;

  return () => {
    clearInterval(idTimeout);
    idTimeout = setTimeout(fn, msec);
  }
}