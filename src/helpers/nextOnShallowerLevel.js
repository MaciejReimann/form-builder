import getStringPartAfterChar from "./getStringPartAfterChar";
import getStringPartBeforeChar from "./getStringPartBeforeChar";

const getStringPartBeforeLastPoint = str => getStringPartBeforeChar(str, ".");
const getStringPartAfterLastPoint = str => getStringPartAfterChar(str, ".");

export default function(str) {
  if (str.indexOf(".") === -1) {
    return "";
  }
  const levelUp = getStringPartBeforeLastPoint(str);
  const baseLevelUp = getStringPartBeforeLastPoint(levelUp);
  const valueLevelUp = parseInt(getStringPartAfterLastPoint(levelUp)) + 1;
  return isNaN(valueLevelUp)
    ? `${parseInt(baseLevelUp) + 1}`
    : `${baseLevelUp}.${valueLevelUp}`;
}
