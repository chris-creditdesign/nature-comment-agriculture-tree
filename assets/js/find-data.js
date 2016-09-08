BuildWidget.prototype.findData = function() {
	if (this.params.year === "agrd-1960") {
		return this.root1960;
	} else {
		return this.root2011;
	}

};
