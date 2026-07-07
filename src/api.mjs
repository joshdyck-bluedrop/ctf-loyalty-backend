import { tierForPoints } from "./tiers.mjs";

// Contract: memberStatus(points) → { tier, points }.
export function memberStatus(points) {
  return { level: tierForPoints(points), points };
}
