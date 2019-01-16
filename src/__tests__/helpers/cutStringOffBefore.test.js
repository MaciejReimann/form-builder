import cutStringOffBefore from "../../helpers/cutStringOffBefore";

describe("Test strings consisting of numerical values interspersed with a '.' ", () => {
  it("Returns the first part of string cut on the last occurence of the char parameter given", () => {
    expect(cutStringOffBefore("1", ".")).toEqual("1");
    expect(cutStringOffBefore("1.2", ".")).toEqual("2");
    expect(cutStringOffBefore("1.2.3", ".")).toEqual("3");
    expect(cutStringOffBefore("1.2.31", ".")).toEqual("31");
  });
  it("Returns an empty string if there's no character after char parameter given", () => {
    expect(cutStringOffBefore("1.")).toEqual("1.");
  });

  it("Returns the same string if no char parameter given", () => {
    expect(cutStringOffBefore("1.2")).toEqual("1.2");
  });

  it("Returns the same string if the char parameter given can't be found in the string", () => {
    expect(cutStringOffBefore("1.2", "@")).toEqual("1.2");
  });
});
