import cutStringAfter from "../../helpers/cutStringAfter";

it("returns the same string if no char parameter given", () => {
  expect(cutStringAfter("a string")).toEqual("a string");
});
