BuildWidget.prototype.buildData = function() {
	var self = this;

	function growTree(data, year) {
		var root = self.params.stratify(data)
			.sum(function(d) {
				if (year === "1960") {
					return d.agrd1960;
				} else if (year === "2011") {
					return d.agrd2011;
				} else {
					return d.agrd1960;
				}
			});
		
			return self.params.treemap(root).leaves();
	}

	this.root1960 = growTree(this.data, "1960");
	this.root2011 = growTree(this.data, "2011");
};
