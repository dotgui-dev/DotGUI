var size = {
	w: 800,
	h: 600,
	popup: function() {
		if (deployment.is_chrome_ext) {
			$("body").css("width", "340px");
			$("body").css("height", "600px");
		} else {
			// $("#cup").css("width", "340px");
			// $(".map").css("width", "340px");
			// $(".tab").css("padding-left", "calc(50% - 230px)");
			// $(".tab").css("padding-right", "calc(50% - 230px)");
			$("body").css("width", "100%");
			$("body").css("height", "100%");
		}
	},
	ingame: function() {
		if (deployment.is_chrome_ext) {
			if (popup.in_game) {
				$("body").css("width", "800px");
				$("body").css("height", "600px");	
			}
			engine.resize();
		} else {
			// scale down for performance
			const doc_h = window.innerHeight;
			const doc_w = window.innerWidth;
	   		var scale_factor = 1;
	   		if (doc_h / doc_w > this.h / this.w) { // compare slope
	   			scale_factor = Math.min(doc_h, this.h) / doc_h;
	   		} else {
	   			scale_factor = Math.min(doc_w, this.w) / doc_w;
	   		}
	   		const tar_h = doc_h * scale_factor;
	   		const tar_w = doc_w * scale_factor;

	   		// apply
	   		$("body").css("width", "100%");
			$("body").css("height", "100%");
	   		engine.setSize(tar_w, tar_h);
		}
	},
	set: function(option) {
		this.h = Number(option.slice(0, -1));
		const ratio = 4 / 3;
		this.w = Math.round(this.h * ratio)
	}
}