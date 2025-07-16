export const analyzeArray = (array) => {
	const avg = array.reduce((prev, curr) => prev + curr, 0) / array.length;
	const min = Math.min(...array);
	const max = Math.max(...array);
	const lenth = array.length;
	return { average: avg, min: min, max: max, length: lenth };
};

console.log(analyzeArray([1, 8, 3, 4, 2, 6]));
