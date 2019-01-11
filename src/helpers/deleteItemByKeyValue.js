export default function(array, key) {
  const indexOfInputToBeDeleted = array.indexOf(
    ...array.filter(items => key === items.key)
  );
  return [
    ...array.slice(0, indexOfInputToBeDeleted),
    ...array.slice(indexOfInputToBeDeleted + 1, array.length)
  ];
}
