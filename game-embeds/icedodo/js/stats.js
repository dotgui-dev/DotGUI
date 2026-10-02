var stats = {
	score: 0,
	fps: 50,
	key_time: 0,
	changed_to_fixed: false,
	update_fps: function() {
		// Calculate FPS
		let fps_now = Number(engine.getFps());
		this.fps += 0.1;
		if (this.fps > fps_now) this.fps = fps_now;

		// For 144 fps monitors
		if (!this.changed_to_fixed) {
			if (this.fps > 70) {
				console.log("AUTO FIX");
				this.changed_to_fixed = true;
				update.set_fixed();
				sync.set("frameRate", "fixed");
			}
		}
	}
}