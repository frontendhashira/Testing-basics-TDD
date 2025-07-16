import { caesarCipher } from "../src/caesarCipher";

describe("caesarCipher", () => {
	test("handles empty string input", () => {
		expect(caesarCipher("", 5)).toBe("");
	});

	test("preserves spaces and punctuation", () => {
		expect(caesarCipher("Hello, World!", 1)).toBe("Ifmmp, Xpsme!");
	});

	test("wraps around alphabet correctly", () => {
		expect(caesarCipher("xyz", 3)).toBe("abc");
	});

	test("maintains case sensitivity", () => {
		expect(caesarCipher("AbCdEf", 2)).toBe("CdEfGh");
	});

	test("handles large shift factors", () => {
		expect(caesarCipher("test", 27)).toBe("uftu");
	});

	test("handles negative shift factors", () => {
		expect(caesarCipher("abc", -1)).toBe("zab");
	});

	test("handles special characters and numbers", () => {
		expect(caesarCipher("Hello123!@#", 1)).toBe("Ifmmp123!@#");
	});

	test("handles multiple sentences", () => {
		expect(caesarCipher("Stop. Drop. Roll.", 2)).toBe("Uvqr. Ftqr. Tqnn.");
	});
});
