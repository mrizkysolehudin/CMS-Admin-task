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

	let formattedNewDate = newDate.toLocaleDateString("in-IN", options);
	if (includeTime) {
		formattedNewDate = newDate
			.toLocaleDateString("in-IN", options)
			.replace(/,/g, "")
			.replace(/\./g, ":");
	}

	if (withDot) {
		formattedNewDate = newDate
			.toLocaleDateString("in-IN", options)
			.replace(/(\s\w+)$/, ".$1");
	}

	return formattedNewDate;
};
