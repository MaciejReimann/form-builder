import cutStringOffAfter from "../../helpers/cutStringOffAfter";

describe("Test strings consisting of numerical values interspersed with a '.' ", () => {
  it("Returns the second part of string cut on the last occurence of the char parameter given", () => {
    expect(cutStringOffAfter("0.1.1", ".")).toEqual("0.1");
    expect(cutStringOffAfter("0.1.2.3", ".")).toEqual("0.1.2");
    expect(cutStringOffAfter("0.1.2.3456", ".")).toEqual("0.1.2");
  });

  it("Returns an empty string if there's no character before char parameter given", () => {
    expect(cutStringOffAfter(".1", ".")).toEqual("");
  });

  it("Returns the same string if no char parameter given", () => {
    expect(cutStringOffAfter("a string")).toEqual("a string");
  });

  it("Returns the same string if the char parameter given can't be found in the string", () => {
    expect(cutStringOffAfter("a string", ".")).toEqual("a string");
  });
});
