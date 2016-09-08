BuildWidget.prototype.buildTooltip = function() {
	var self = this;

	var top, left;

	this.svgBoxes.selectAll("rect")
		.on("mouseover", function(d) {
			top = d.y0 + ((d.y1 - d.y0) / 2);
			left = d.x0 + ((d.x1 - d.x0) / 2);

			var tooltipWidth = parseInt(d3.select("#widget-tooltip").node().getBoundingClientRect().width, 10);
			var tooltipHeight = parseInt(d3.select("#widget-tooltip").node().getBoundingClientRect().height, 10);
	
			if ( d.x0 > (self.params.width / 2) ) {
				left -= (tooltipWidth + 8);
				d3.select("#widget-tooltip").classed("tooltip-left", true);
				d3.select("#widget-tooltip").classed("tooltip-right", false);
			} else {
				left += 8;
				d3.select("#widget-tooltip").classed("tooltip-left", false);
				d3.select("#widget-tooltip").classed("tooltip-right", true);
			}

			d3.select("#widget-tooltip")
				.style("top",  (top - (tooltipHeight / 2)) + "px")
				.style("left", left + "px")
				.classed("hidden", false);

			d3.select("#agrd-country").text(d.id);
			d3.select("#agrd-value").text(parseFloat(d.value).toFixed(2));

			d3.select(this).attr("stroke-width", 2);
		})
		.on("mouseout", function(d) {
			self.hideTooltip();
			d3.select(this).attr("stroke-width", 0);
		});


};

BuildWidget.prototype.hideTooltip = function () {
	d3.select("#widget-tooltip").classed("hidden", true);
};

