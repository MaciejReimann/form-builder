export default function findItemByPosition(inputs, position) {
  const found = inputs.find(item => item.position === position);
  return found
    ? found
    : inputs
        .map(input => findItemByPosition(input.subInputs, position))
        .find(array => array !== undefined);
}
