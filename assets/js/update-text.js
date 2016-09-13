BuildWidget.prototype.updateText = function() {
	var self = this;
	var dy = 12;
	var dx = 3;

	function showHideText(d, that) {
		var textWidth = d3.select(that).node().getBBox().width;
		var textHeight = d3.select(that).node().getBBox().height;
		var boxWidth = d.x1 - d.x0 - dx;
		var boxHeight = d.y1 - d.y0 - dy;

		if (textWidth >= boxWidth || textHeight >= boxHeight) {
			return 0;
		} else {
			return 1;
		}
	}

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
			var that = this;
			return showHideText(d, that);
		});
	
	/* ENTER */
	this.text.enter()
		.append("text")
		.text(function (d) {
			return d.id;
		})
		.attr("fill", "#ffffff")
		.attr("font-size","0.8em")
		.style("text-transform", "uppercase")
		.attr("x", function(d) {
			return d.x0;
		})
		.attr("y", function(d) {
			return d.y0;
		})
		.attr("dy", dy + "px")
		.attr("dx", dx + "px")
		.attr("pointer-events", "none")
		.attr("opacity", function(d) {
			var that = this;
			return showHideText(d, that);
		});
};
