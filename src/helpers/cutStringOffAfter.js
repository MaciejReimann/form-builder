export default function cutStringOffAfter(str, char) {
  let charPosition;
  if (str.indexOf(char) === -1) {
    return str;
  } else {
    charPosition =
      str.length -
      str
        .split("")
        .reverse()
        .indexOf(char);
  }
  return str
    .split("")
    .slice(0, charPosition - 1)
    .join("");
}
