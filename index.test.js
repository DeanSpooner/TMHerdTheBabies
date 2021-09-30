const { expect } = require("@jest/globals");
const { parentChildString } = require("./index.js");

describe("Puts the parent first", () => {
  it("returns a string with capital then lower-case", () => {
    const origString = "aA";
    expect(parentChildString(origString)).toBe("Aa");
  });
  it("returns a string that has different letters with capitals followed by its lower-case", () => {
    const origString = "aBA";
    const origStringABC = "bbaBccAC";
    expect(parentChildString(origString)).toBe("AaB");
    expect(parentChildString(origStringABC)).toBe("AaBbbCcc");
  });
  it("returns a string that has different letters with capitals followed by its lower-case, including multiple same capital letters", () => {
    const origString = "aBABA";
    const origStringABC = "bCCbaBcAcABaaBCC";
    expect(parentChildString(origString)).toBe("AAaBB");
    expect(parentChildString(origStringABC)).toBe("AAaaaBBBbbCCCCcc");
  });
});
