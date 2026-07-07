export function tierForPoints(points) {
  if (points >= 5000) return "gold";
  if (points >= 250) return "silver";
  return "bronze";
}
