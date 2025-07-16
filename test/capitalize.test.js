import { capitalize } from "../src/capitalize";

test("capitalize first word", () => {
	expect(capitalize("word")).toBe("Word");
});
