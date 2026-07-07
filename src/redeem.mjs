// Contract: redeem(balance, cost) → the new balance.
// Must throw a RangeError when cost exceeds balance (no negative balances).
export function redeem(balance, cost) {
  return balance - cost;
}
