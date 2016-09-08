BuildWidget.prototype.updateText = function() {
	var self = this;

	/* JOIN */
	this.text = this.svgText.selectAll("text")
		.data(this.findData(), function(d) {
			return d.id;
		});
	
	/* EXIT */
	this.text.exit()
		.remove();
	
	/* UPDATE */
	this.text.transition(this.params.transition)
		.attr("x", function(d) {
			return d.x0;
		})
		.attr("y", function(d) {
			return d.y0;
		})
		.attr("opacity", function(d) {
			var textWidth = d3.select(this).node().getBBox().width;
			var textHeight = d3.select(this).node().getBBox().height;
			var boxWidth = d.x1 - d.x0;
			var boxHeight = d.y1 - d.y0;

			if (textWidth >= boxWidth || textHeight >= boxHeight) {
				return 0;
			} else {
				return 1;
			}
		});
	
	/* ENTER */
	this.text.enter()
		.append("text")
		.text(function (d) {
			return d.id;
		})
		.attr("x", function(d) {
			return d.x0;
		})
		.attr("y", function(d) {
			return d.y0;
		})
		.attr("dy", "1em")
		.attr("dx", "0.3em")
		.attr("opacity", 0)
		.transition(this.params.transition)
		.attr("opacity", function(d) {
			var textWidth = d3.select(this).node().getBBox().width;
			var textHeight = d3.select(this).node().getBBox().height;
			var boxWidth = d.x1 - d.x0;
			var boxHeight = d.y1 - d.y0;

			if (textWidth >= boxWidth || textHeight >= boxHeight) {
				return 0;
			} else {
				return 1;
			}
		});
};