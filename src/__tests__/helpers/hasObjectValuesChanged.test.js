import hasObjectValuesChanged from "../../helpers/hasObjectValuesChanged";

describe("Comparing two objects", () => {
  const objectBefore = {
    counter: 1,
    color: "red"
  };
  const objecAfter_1 = {
    counter: 2,
    color: "red"
  };
  const objecAfter_2 = {
    counter: 1,
    color: "blue"
  };
  const objecAfter_3 = {
    counter: 1,
    color: {
      top: "red",
      bottom: "blue"
    }
  };

  it("Returns false if objects' values are equal", () => {
    expect(hasObjectValuesChanged(objectBefore, objectBefore)).toBeFalsy();
  });
  it("Returns true if objects' values are not equal", () => {
    expect(hasObjectValuesChanged(objectBefore, objecAfter_1)).toBeTruthy();
  });
  it("Returns true if objects' values are not equal", () => {
    expect(hasObjectValuesChanged(objectBefore, objecAfter_2)).toBeTruthy();
  });
  it("Returns true if objects' values are not equal", () => {
    expect(hasObjectValuesChanged(objectBefore, objecAfter_3)).toBeTruthy();
  });
});
