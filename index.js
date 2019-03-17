class Formatter {
	static capitalize(string) {
		return string[0].toUpperCase() + string.slice(1);
	}
	static sanitize(string) {
		return string.replace(/[^A-Za-z0-9 '-]/g, '');
	}

	static titleize(string) {
		let skip = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ];
		let result = [];
		let split = string.split(' ');
		for (let i = 0; i < split.length; i++) {
			if (i == 0) {
				result.push(this.capitalize(split[i]));
			} else {
				if (skip.includes(split[i])) {
					result.push(split[i]);
				} else {
					result.push(this.capitalize(split[i]));
				}
			}
		}
		return result.join(' ');
	}
}
