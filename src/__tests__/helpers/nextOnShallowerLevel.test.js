import nextOnShallowerLevel from "../../helpers/nextOnShallowerLevel";

describe("Test strings consisting of numerical values interspersed with a '.' ", () => {
  it("Returns the string with the numerical value after last '.' cut off and the numerical value which is before that increased by one ", () => {
    expect(nextOnShallowerLevel("0.1")).toEqual("1");
    expect(nextOnShallowerLevel("0.1.1")).toEqual("0.2");
    expect(nextOnShallowerLevel("0.9.1")).toEqual("0.10");
  });
  it("Returns an empty string if no '.' is present ", () => {
    expect(nextOnShallowerLevel("0")).toEqual("");
    expect(nextOnShallowerLevel("1")).toEqual("");
    expect(nextOnShallowerLevel("abc")).toEqual("");
  });
});
