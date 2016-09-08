(function() {
	var init = function($)	{
		var params, widget;

		/*	Load D3 */
		$.getScript("//d3js.org/d3.v4.min.js", function() {

			params = buildParams();
			widget = new BuildWidget("#agrd-chart", params, data);
			widget.build();

			console.log(widget);

		}); 
	};

	setTimeout(function() {
		if (typeof jQuery !== 'undefined'){
			init(jQuery);
		} else {
			setTimeout(arguments.callee, 60);
		}
	}, 60);
})();