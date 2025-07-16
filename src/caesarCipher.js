export const caesarCipher = (text, shift) => {
	const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
	let cipherText = "";
	const regex = /[A-Z]/;

	for (const char of text) {
		if (alphabet.includes(char.toLowerCase())) {
			const idx = alphabet.indexOf(char.toLowerCase());
			const newChar = alphabet[(idx + shift + 26) % 26];

			cipherText += regex.test(char) ? newChar.toUpperCase() : newChar;
		} else {
			cipherText += char;
		}
	}

	return cipherText;
};

caesarCipher("abc", -1);
