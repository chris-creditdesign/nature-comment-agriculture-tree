(function() {
	var init = function($)	{
		/*	Load D3 */
		$.getScript("//d3js.org/d3.v4.min.js", function() {
			console.log(d3);
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