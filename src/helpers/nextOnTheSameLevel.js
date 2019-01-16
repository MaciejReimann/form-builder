import getStringPartAfterChar from "./getStringPartAfterChar";
import getStringPartBeforeChar from "./getStringPartBeforeChar";

const getStringPartBeforeLastPoint = str => getStringPartBeforeChar(str, ".");
const getStringPartAfterLastPoint = str => getStringPartAfterChar(str, ".");

export default function(str) {
  const base = getStringPartBeforeLastPoint(str);
  const value = parseInt(getStringPartAfterLastPoint(str)) + 1;
  return isNaN(value) ? `${parseInt(base) + 1}` : `${base}.${value}`;
}
