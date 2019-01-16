import nextOnDeeperLevel from "../../helpers/nextOnDeeperLevel";

describe("Test strings consisting of numerical values interspersed with a '.' ", () => {
  it("Returns the string with the '.1' at the end", () => {
    expect(nextOnDeeperLevel("")).toEqual("0.1");
    expect(nextOnDeeperLevel("0")).toEqual("0.1");
    expect(nextOnDeeperLevel("0.1")).toEqual("0.1.1");
    expect(nextOnDeeperLevel("0.1.1")).toEqual("0.1.1.1");
    expect(nextOnDeeperLevel("0.1.9")).toEqual("0.1.9.1");
  });
});
