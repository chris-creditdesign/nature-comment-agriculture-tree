BuildWidget.prototype.updateTree = function() {
	var self = this;

	/* JOIN */
	this.boxes = this.svgBoxes.selectAll("rect")
		.data(this.findData(), function(d) {
			return d.id;
		});
	
	/* EXIT */
	this.boxes.exit()
		.remove();
	
	/* UPDATE */
	this.boxes.transition(this.params.transition)
		.attr("x", function(d) {
			return d.x0;
		})
		.attr("y", function(d) {
			return d.y0;
		})
		.attr("width", function(d) {
			return d.x1 - d.x0;
		})
		.attr("height", function(d) {
			return d.y1 - d.y0;
		});
	
	/* ENTER */
	this.boxes.enter()
		.append("rect")
		.attr("fill", function(d) {
				if (d.depth > 1) {
					return self.params.colourScale(d.parent.id);
				} else {
					return "#ffffff";
				}
		})
		.attr("x", function(d) {
			return d.x0;
		})
		.attr("y", function(d) {
			return d.y0;
		})
		.attr("width", function(d) {
			return d.x1 - d.x0;
		})
		.attr("height", function(d) {
			return d.y1 - d.y0;
		})
		.attr("stroke", "#666")
		.attr("stroke-width", 0)
		.attr("opacity", 0) 
		.transition(this.params.transition)
		.attr("opacity", 1);
 
};













