export default function doesAnswerMeetCondition(
  answer,
  condType,
  condValue,
  inputType
) {
  let a, value;
  if (!inputType) {
    var inputType = "text"; // var used because function scope is needed
  }
  if (inputType === "number") {
    if (answer.toString().indexOf(".") !== -1) {
      a = parseFloat(answer);
    } else {
      a = parseInt(answer);
    }
    if (condValue.toString().indexOf(".") !== -1) {
      value = parseFloat(condValue);
    } else {
      value = parseInt(condValue);
    }
  } else {
    a = answer.toUpperCase();
    value = condValue.toUpperCase();
  }
  if (condType === "equals") {
    return a === value;
  } else if (condType === "less than") {
    return a < condValue;
  } else if (condType === "greater than") {
    return answer > condValue;
  }
}
