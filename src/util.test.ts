import { randomString, replaceAt } from "./util.ts";
import { expect, test } from "vitest";

const runTests = () => {
  for (const idx of [-1, 1, 2, 10, 11, 12, 20]) {
    const len = 11;
    const str = randomString(len, "Aa0");

    test("replaceAt works", () => {
      expect(replaceAt(str, idx, "*").charAt(idx)).toEqual(idx >= len || idx < 0 ? "" : "*");
    });
  }

  for (let i = 1; i <= 10; i++) {
    const re = new RegExp(`([A-Z]|[a-z]|[0-9]){${i}}`);
    test("check random strings", () => {
      expect(randomString(i, "Aa0")).toMatch(re);
    });
  }
};

runTests();
