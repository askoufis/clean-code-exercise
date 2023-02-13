import { it, describe, expect } from "vitest";
describe("transform", () => {
  it("should prepend and append the most common letter and the length of string n times, where n is the length of the string", () => {
    const input = ["the", "quick", "brown", "fox"];
    const result = transform(input);
    expect(result).toEqual([
      "333tttthettt333",
      "55555qqqqqquickqqqqq55555",
      "55555bbbbbbrownbbbbb55555",
      "333ffffoxfff333",
    ]);
  });
});
import { findPoplrLtr, transform } from "./transform";
describe("findPoplrLtr", () => {
  it("should find the most popular letter in a word", () => {
    const cases: Array<[string, string]> = [
      ["aaaaa", "a"],
      ["foo", "o"],
      ["aabbcc", "a"],
      ["beer", "e"],
      ["traffic", "f"],
      ["12fej2190vdsznfda3789sdafhjesauifod", "f"],
      ["", ""],
    ];
    // TODO: This should probably use it.each
    cases.forEach((c) => {
      const result = findPoplrLtr(c[0]);
      expect(result).toEqual(c[1]);
    });
  });
});
