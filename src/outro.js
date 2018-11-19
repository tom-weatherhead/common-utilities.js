	// CommonJS, AMD, script tag
	if (typeof exports !== "undefined") {
		module.exports = getDateTimeString;
	} else if (typeof define === "function" && define.amd) {
		define(() => {
			return getDateTimeString;
		});
	} else {
		global.getDateTimeString = getDateTimeString;
	}
}(typeof window !== "undefined" ? window : global));
