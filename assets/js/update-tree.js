BuildWidget.prototype.updateTree = function() {
	var self = this;

	function findData() {
		if (self.params.year === "agrd-1960") {
			return self.root1960;
		} else {
			return self.root2011;
		}
	}
	
	// JOIN new data with old elements
	this.boxes = this.svgBoxes.selectAll("rect")
		.data(findData(), function(d) {
			return d.id;
		});
	
	// EXIT old elements not present in the data
	this.boxes.exit()
		.transition(this.params.transition)
		.attr("x", 0)
		.attr("y", this.params.height)
		.remove();
	
	// UPDATE old elements present in new data
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
	
	
	this.boxes.enter()
		.append("rect")
		.attr("x", 0)
		.attr("y", 0)
		.attr("width", 0)
		.attr("height", 0)
		.attr("fill", function(d) {
				if (d.depth > 1) {
					return self.params.colourScale(d.parent.id);
				} else {
					return "#ffffff";
				}
		})
		.transition(this.params.transition)
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
};
