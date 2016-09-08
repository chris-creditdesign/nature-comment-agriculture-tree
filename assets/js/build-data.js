BuildWidget.prototype.buildData = function() {
	var stratify = d3.stratify();

	var treemap = d3.treemap()
		.size([this.params.width, this.params.height])
		.padding(2)
		.round(true);

	function growTree(data, year) {
		var root = stratify(data)
			.sum(function(d) {
				if (year === "1960") {
					return d.agrd1960;
				} else if (year === "2011") {
					return d.agrd2011;
				} else {
					return d.agrd1960;
				}
			})
			.sort({
				sort: function(a, b) {
					return b.height - a.height || b.agrd1960 - a.agrd1960 || b.agrd2011 - a.agrd2011;
				}
			});
		
			return treemap(root).leaves();
	}

	this.root1960 = growTree(this.data, "1960");
	this.root2011 = growTree(this.data, "2011");
};
