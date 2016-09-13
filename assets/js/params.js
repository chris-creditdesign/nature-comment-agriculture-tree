function buildParams() {
	var params = {};

	params.width = d3.select("#content").node().clientWidth;
	params.height = params.width;

	params.year = "agrd-1960";
	params.defaultCountry = "All";
	params.country = params.defaultCountry;
	params.duration = 400;
	params.delay = 2;

	params.format = d3.format(",d");
	params.colourScale = d3.scaleOrdinal()
		.domain(["high income", "middle income", "low income"])
		.range(["#ee7183","#44b8c9","#8fc297"]);

	params.stratify = d3.stratify();

	params.treemap = d3.treemap()
		.size([params.width, params.height])
		.padding(1)
		.round(true);

	return params;
}
