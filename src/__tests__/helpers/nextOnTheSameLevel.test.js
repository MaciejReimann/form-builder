import nextOnTheSameLevel from "../../helpers/nextOnTheSameLevel";

describe("Test strings consisting of numerical values interspersed with a '.' ", () => {
  it("Returns the string with the numerical value after last '.' increased by '1' ", () => {
    expect(nextOnTheSameLevel("0.1")).toEqual("0.2");
    expect(nextOnTheSameLevel("0.1.1")).toEqual("0.1.2");
    expect(nextOnTheSameLevel("0.1.9")).toEqual("0.1.10");
  });
  it("Returns the string with the numerical value increased by '1' if no '.' is present ", () => {
    expect(nextOnTheSameLevel("0")).toEqual("1");
    expect(nextOnTheSameLevel("1")).toEqual("2");
    expect(nextOnTheSameLevel("9")).toEqual("10");
  });
});
