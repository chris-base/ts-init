import { randomString } from "./randomString.js";
import { expect, test } from "vitest";

const runTests = () => {
  for (let i = 1; i <= 100; i++) {
    const re = new RegExp(`([A-Z]|[a-z]|[0-9]){${i}}`);
    test("check random strings", () => {
      expect(randomString(i, "Aa0")).toMatch(re);
    });
  }
};

runTests();
