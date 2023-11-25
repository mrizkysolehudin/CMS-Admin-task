export const formatDate = (date, includeTime = true) => {
	if (!date) return;

	const newDate = new Date(date);

	const options = {
		year: "numeric",
		month: "short",
		day: "numeric",
		hour: includeTime ? "numeric" : undefined,
		minute: includeTime ? "numeric" : undefined,
	};

	if (includeTime) {
		return newDate.toLocaleDateString("in-GB", options).split(",").join("");
	}

	return newDate.toLocaleDateString("in-GB", options).replace(/(\s\w+)$/, ".$1");
};
