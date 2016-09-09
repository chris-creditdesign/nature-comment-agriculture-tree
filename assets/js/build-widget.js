function BuildWidget (target, params, data) {
	this.target = target;
	this.params = params;
	this.data = data;
}

BuildWidget.prototype.build = function() {
	this.buildData();
	this.buildGraphic();
	this.updateTree();
	this.updateText();
	this.buildInput();
	this.buildTooltip();
};

BuildWidget.prototype.destroy = function(first_argument) {
	this.svg.remove();

	d3.select("#agrd-year input[name=year]#agrd1960").property("checked",true);
	d3.select("#agrd-year input[name=year]#agrd2011").property("checked",false);
};
