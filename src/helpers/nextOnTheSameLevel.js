export default function(str) {
  const pointPosition =
    str.length -
    str
      .split("")
      .reverse()
      .indexOf(".");
  if (pointPosition > str.length) {
    return (parseInt(str) + 1).toString();
  } else {
    const lastNumericValue = parseInt(
      str
        .split("")
        .slice(pointPosition, str.length)
        .join("")
    );
    return str
      .split("")
      .slice(0, pointPosition)
      .join("")
      .concat(lastNumericValue + 1);
  }
}
