import { test } from "node:test";
import assert from "node:assert/strict";
import { memberStatus } from "./src/api.mjs";

test("memberStatus exposes the balance", () => {
  assert.equal(memberStatus(1000).balance, 1000);
});
