import { calcObj } from "../src/calculator";

test("calculator contains function for basic operation", () => {
	expect(calcObj.add(2, 2)).toBe(4);
	expect(calcObj.substract(3, 2)).toBe(1);
	expect(calcObj.divide(2, 2)).toBe(1);
	expect(calcObj.mutliply(3, 2)).toBe(6);
});
