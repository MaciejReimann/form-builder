export default (prevObj, nextObj) => {
  return Object.values(prevObj).some(
    (value, i) => value !== Object.values(nextObj)[i]
  );
};
