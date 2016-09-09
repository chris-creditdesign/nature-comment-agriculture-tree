function buildParams() {
	var params = {};

	params.width = d3.select("#content").node().clientWidth;
	params.height = params.width * 0.8;

	if (params.width < 450) {
		params.height = params.width;
	}

	params.year = "agrd-1960";

	params.format = d3.format(",d");
	params.transition = d3.transition().duration(800);
	params.colourScale = d3.scaleOrdinal()
		.domain(["high income", "middle income", "low income"])
		.range(["#ee7183","#44b8c9","#8fc297"]);

	return params;
}
