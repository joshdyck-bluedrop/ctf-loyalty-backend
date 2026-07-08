import { tierForPoints } from "./tiers.mjs";

// Contract: memberStatus(points) → { tier, balance }.
export function memberStatus(points) {
  return { tier: tierForPoints(points), points };
}
