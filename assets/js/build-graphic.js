BuildWidget.prototype.buildGraphic = function() {
	this.svg = d3.select(this.target)
		.append("svg")
		.attr("width", this.params.width)
		.attr("height", this.params.height);

	this.svgBoxes = this.svg.append("g");
};