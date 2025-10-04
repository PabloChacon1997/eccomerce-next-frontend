export function calcDiscounterPrice(price, dicount) {
  if (!dicount) return price;
  const dicountAmount = (price * dicount)/100;
  const finalPrice = price -dicountAmount;
  return finalPrice;
}