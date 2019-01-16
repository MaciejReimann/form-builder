import getStringPartBeforeChar from "../../helpers/getStringPartBeforeChar";

describe("Test strings consisting of numerical values interspersed with a '.' ", () => {
  it("Returns the first part of string cut on the last occurence of the char parameter given", () => {
    expect(getStringPartBeforeChar("1", ".")).toEqual("1");
    expect(getStringPartBeforeChar("1.2", ".")).toEqual("1");
    expect(getStringPartBeforeChar("1.2.3", ".")).toEqual("1.2");
    expect(getStringPartBeforeChar("1.23.31", ".")).toEqual("1.23");
  });

  it("Returns an empty string if there's no character before char parameter given", () => {
    expect(getStringPartBeforeChar(".1", ".")).toEqual("");
  });

  it("Returns the same string if no char parameter given", () => {
    expect(getStringPartBeforeChar("1.2")).toEqual("1.2");
  });

  it("Returns the same string if the char parameter given can't be found in the string", () => {
    expect(getStringPartBeforeChar("1.2", "@")).toEqual("1.2");
  });
});
