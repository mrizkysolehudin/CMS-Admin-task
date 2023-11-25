export const formatDate = (date, detail = {}) => {
	if (!date) return;

	let { includeTime = false, withDot = false, month = "short" } = detail;

	const newDate = new Date(date);

	const options = {
		year: "numeric",
		month: month,
		day: "numeric",
		hour: includeTime ? "numeric" : undefined,
		minute: includeTime ? "numeric" : undefined,
	};

	if (includeTime) {
		return newDate.toLocaleDateString("in-GB", options).split(",").join("");
	}

	let formattedNewDate = newDate.toLocaleDateString("in-GB", options);
	if (withDot) {
		return formattedNewDate.replace(/(\s\w+)$/, ".$1");
	}

	return formattedNewDate;
};
