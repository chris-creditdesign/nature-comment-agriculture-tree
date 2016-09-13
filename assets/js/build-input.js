BuildWidget.prototype.buildInput = function() {
	var self = this;

	var countryNames = [];

	this.root1960.forEach(function(element, index, array) {
		if (element.data.agrd1960 > 2 && element.data.agrd2011 > 2) {
			countryNames.push(element.id);
		}
	});

	countryNames.sort().unshift(this.params.defaultCountry);

	this.radioYear = d3.selectAll("#agrd-year input[name=year]");

	this.radioYear.on("change", function() {
		self.params.year = this.value;
		self.updateTree();
		self.updateText();
	});

	this.countrySelect = d3.select("#agrd-country-select");

	this.countrySelect.selectAll("option")
		.data(countryNames)
		.enter()
		.append("option")
			.attr("value", function(d) {
				return d;
			})
			.text(function(d) {
				return d;
			});

	this.countrySelect.on("change", function() {
		self.params.country = this.value;
		self.updateTree();
	});
};
