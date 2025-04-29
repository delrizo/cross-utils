export const spread = (price1: number, price2: number, digits = 2) =>
    Number((Math.abs((price1 - price2) / ((price1 + price2) / 2)) * 100).toFixed(digits))
