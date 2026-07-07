import { test } from "node:test";
import assert from "node:assert/strict";
import { tierForPoints } from "./src/tiers.mjs";

test("1000 points reaches Gold", () => {
  assert.equal(tierForPoints(1000), "gold");
});

test("250 points is Silver", () => {
  assert.equal(tierForPoints(250), "silver");
});
