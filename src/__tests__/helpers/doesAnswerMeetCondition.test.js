import doesAnswerMeetCondition from "../../helpers/doesAnswerMeetCondition";

describe("Test all valid inputs for type text", () => {
  it("Is truthy if answer equals condValue and falsy if not", () => {
    expect(
      doesAnswerMeetCondition("abc", "equals", "abc", "text")
    ).toBeTruthy();
    expect(
      doesAnswerMeetCondition("abc", "equals", "abcd", "text")
    ).toBeFalsy();
  });

  it("Is truthy if answer equals condValue and falsy if not, case insensitive", () => {
    expect(
      doesAnswerMeetCondition("abc", "equals", "aBc", "text")
    ).toBeTruthy();
    expect(
      doesAnswerMeetCondition("ABC", "equals", "aBc", "text")
    ).toBeTruthy();
  });

  it("Is truthy if answer equals condValue and falsy if not, case insensitive, no inputtype given", () => {
    expect(doesAnswerMeetCondition("abc", "equals", "aBc")).toBeTruthy();
    expect(doesAnswerMeetCondition("ABC", "equals", "aBc")).toBeTruthy();
  });

  it("Is falsy for empty value", () => {
    expect(doesAnswerMeetCondition("ABC", "equals", "")).toBeFalsy();
  });
});

describe("Test all valid inputs for type number", () => {
  it("Truthy if answer equals condValue", () => {
    expect(doesAnswerMeetCondition("1", "equals", "1", "number")).toBeTruthy();
    expect(doesAnswerMeetCondition("1", "equals", 1, "number")).toBeTruthy();
    expect(doesAnswerMeetCondition(1, "equals", 1, "number")).toBeTruthy();
    expect(doesAnswerMeetCondition(1, "equals", "1", "number")).toBeTruthy();
  });

  it("Truthy if answer greater than condValue", () => {
    expect(
      doesAnswerMeetCondition("1.5", "greater than", "1", "number")
    ).toBeTruthy();
    expect(
      doesAnswerMeetCondition("2", "greater than", 1.5, "number")
    ).toBeTruthy();
    expect(
      doesAnswerMeetCondition(2.5, "greater than", "1.5", "number")
    ).toBeTruthy();
  });

  it("Falsy if answer not greater than condValue", () => {
    expect(
      doesAnswerMeetCondition("0.5", "greater than", "1", "number")
    ).toBeFalsy();
    expect(
      doesAnswerMeetCondition(".98", "greater than", 1.5, "number")
    ).toBeFalsy();
    expect(
      doesAnswerMeetCondition("-89.5", "greater than", "1.5", "number")
    ).toBeFalsy();
  });

  it("Truthy if answer less than condValue", () => {
    expect(
      doesAnswerMeetCondition("1.5", "less than", "1.9", "number")
    ).toBeTruthy();
    expect(
      doesAnswerMeetCondition("2", "less than", 3.5, "number")
    ).toBeTruthy();
    expect(
      doesAnswerMeetCondition(0.1, "less than", "1.5", "number")
    ).toBeTruthy();
  });

  it("Falsy if answer not less than condValue", () => {
    expect(
      doesAnswerMeetCondition("1.95", "less than", "1.9", "number")
    ).toBeFalsy();
    expect(
      doesAnswerMeetCondition("21", "less than", 3.5, "number")
    ).toBeFalsy();
    expect(
      doesAnswerMeetCondition(0.1, "less than", "0", "number")
    ).toBeFalsy();
  });
});
