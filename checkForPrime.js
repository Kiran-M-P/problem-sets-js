export default function checkForPrime(x) {
  for (let i = 2; i <= x / 2; i++) {
    if (x % i === 0) {
      return false;
    }
  }
  if (x < 2) {
    return false;
  }
  return true;
}
