import { analyzeArray } from "../src/analyzeArray";

describe("analyzeArray", () => {
	const result = analyzeArray([1, 8, 3, 4, 2, 6]);

	test("should return correct average", () => {
		expect(result.average).toEqual(4);
	});

	test("should return correct min", () => {
		expect(result.min).toEqual(1);
	});

	test("should return correct max", () => {
		expect(result.max).toEqual(8);
	});

	test("should return correct length", () => {
		expect(result.length).toEqual(6);
	});
});
