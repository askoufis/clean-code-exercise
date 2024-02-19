import { it, describe, expect } from "vitest";
import { printTicket } from "./index.js";
describe("printTicket", () => {
  it("should return the correct ticket text for AU, Today, and Economy", () => {
    const result = printTicket("AU", "Today", "Economy");
    expect(result).toBe(
      "Country: Australia, Departure Date: Today, Price: 150",
    );
  });
  it("should return the correct ticket text for NZ, Tomorrow, and Business", () => {
    const result = printTicket("NZ", "Tomorrow", "Business");
    expect(result).toBe(
      "$ - Country: New Zealand, Departure Date: Tomorrow, Price: 360 - $",
    );
  });
  it("should return the correct ticket text for FR, Next Week, and First Class", () => {
    const result = printTicket("FR", "Next Week", "First Class");
    expect(result).toBe(
      "$$$ - Country: France, Departure Date: Next Week, Price: 1100 - $$$",
    );
  });
});
