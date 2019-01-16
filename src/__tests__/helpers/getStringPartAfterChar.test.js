import getStringPartAfterChar from "../../helpers/getStringPartAfterChar";

describe("Test strings consisting of numerical values interspersed with a '.' ", () => {
  it("Returns the second part of string cut on the last occurence of the char parameter given", () => {
    expect(getStringPartAfterChar("1", ".")).toEqual("");
    expect(getStringPartAfterChar("1.2", ".")).toEqual("2");
    expect(getStringPartAfterChar("1.2.3", ".")).toEqual("3");
    expect(getStringPartAfterChar("1.2.31", ".")).toEqual("31");
  });

  it("Returns an empty string if there's no character after char parameter given", () => {
    expect(getStringPartAfterChar("1.")).toEqual("");
  });

  it("Returns an empty string if no char parameter given", () => {
    expect(getStringPartAfterChar("a string")).toEqual("");
  });

  it("Returns an empty string if the char parameter given can't be found in the string", () => {
    expect(getStringPartAfterChar("a string", ".")).toEqual("");
    expect(getStringPartAfterChar("1", ".")).toEqual("");
  });
});
