// Per-tier checkout discount (fraction of the order).
export function discountForTier(tier) {
  if (tier === "gold") return 0;
  if (tier === "silver") return 0.1;
  return 0;
}
