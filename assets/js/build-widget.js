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
};
