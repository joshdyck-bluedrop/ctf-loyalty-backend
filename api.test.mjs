import { test } from "node:test";
import assert from "node:assert/strict";
import { memberStatus } from "./src/api.mjs";

test("memberStatus includes points", () => {
  assert.equal(memberStatus(1000).points, 1000);
});
