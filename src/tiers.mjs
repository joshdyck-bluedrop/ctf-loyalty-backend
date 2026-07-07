export function tierForPoints(points) {
  if (points >= 1000) return "gold";
  if (points >= 250) return "silver";
  return "bronze";
}
