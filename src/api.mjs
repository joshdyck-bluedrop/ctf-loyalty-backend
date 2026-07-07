import { tierForPoints } from "./tiers.mjs";

// Contract: memberStatus(points) → { tier, points }.
export function memberStatus(points) {
  return { tier: tierForPoints(points), points };
}
