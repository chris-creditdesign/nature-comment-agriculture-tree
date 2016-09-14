(function() {
	var init = function($) {

		$(".outerwrapper").css("display","block");
		$(".status-message").css("display","none");

		/* Load D3 */
		$.getScript("//d3js.org/d3.v4.min.js", function() {

			var width = $(window).width();
			var didResize = false;

			var params = buildParams();
			var widget = new BuildWidget("#agrd-chart", params, data);
			widget.build();

			$( window ).resize(function() {
				if($(window).width() != width){ 
					width = $(window).width();
					didResize = true;

					/* Throttle the resize */
					setTimeout(function () {
						if (didResize) {
							widget.destroy();
							widget.params = buildParams();
							widget.build();
							
							didResize = false;
						}
					}, 60);

				}
			});

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
