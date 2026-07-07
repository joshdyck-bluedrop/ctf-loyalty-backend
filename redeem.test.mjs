import { test } from "node:test";
import assert from "node:assert/strict";
import { redeem } from "./src/redeem.mjs";

test("redeeming within balance returns the new balance", () => {
  assert.equal(redeem(100, 30), 70);
});

test("redeeming more than the balance is rejected", () => {
  assert.throws(() => redeem(50, 80), RangeError);
});
