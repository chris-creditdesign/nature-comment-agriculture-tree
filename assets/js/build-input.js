BuildWidget.prototype.buildInput = function() {
	var self = this;
	this.radioYear = d3.selectAll("#agrd-year input[name=year]");

	this.radioYear.on("change", function() {
		self.params.year = this.value;
		self.updateTree();
		self.updateText();
	});
};