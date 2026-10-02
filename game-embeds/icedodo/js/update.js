var update = {
	interval: null,
	init: function() {
		if (settings.frameRate === "fixed") {
			this.interval = setInterval(this.loop, 1000/60);
		} else if (settings.frameRate === "vsync") {
			engine.runRenderLoop(this.loop);
		}
		window.addEventListener("resize", function () {
			if (settings.map_id) {
				size.ingame();
			}
		});
	},
	set_fixed: function() {
		engine.stopRenderLoop(this.loop);
		this.interval = setInterval(this.loop, 1000/60);
	},
	set_vsync: function() {
		clearInterval(this.interval);
		engine.runRenderLoop(this.loop);
	},
	loop: function() {
		scene.render();
		update.new_frame();
		stats.update_fps();
	},
	new_frame: function() {
		if ((alive) && (!transitioning)) {
			try {
				stats.score += 1;
				$("#curr_time").html("TIME: " + stats.score);
				// render call
				this.player_move();
				map.render_update();
				map.section_update();
				flyjump.render_loop();
				// physics call
				if (stats.score % physics_call_rate == 0) {
					this.collision_check();
					map.physics_update();
					flyjump.compute_loop();
					this.update_overlay();
				}
			} catch(err) {
				
			}
		}
	},
	collision_check: function() {
		// if death
		if (player.position.y < -20) {
			change_state.die();
			screen.set_dialog("Fell To Death", "#e04c4f");
		}

		if (player.position.y > 80) {
			change_state.die();
			screen.set_dialog("Left the Orbit", "#e04c4f");
		}

		// if hit cone
		for (var i=0;i<maker.cone_count;i++) {
			let cone = cones[i];
			if (this.are_touching(player, cone, 0.5)) {
				change_state.die();
				screen.set_dialog("Died From Cone", "#e04c4f");
				break;
			}
		}

		// if hit ending
		for (var i=0;i<maker.ending_count;i++) {
			let ending = endings[i];
			if (this.are_touching(player, ending, 1.2)) { // previously 1.0
				change_state.win();
				break;
			}
		}
	},
	player_move: function() {
		// steer
		var action = 0;
		if (controls.right) {action += 1};
		if (controls.left) {action -= 1};
		if (controls.space) {flyjump.jump()};
		if ((speed !== default_speed) && (speed !== 0.2)) {
			player.physicsImpostor.setAngularVelocity(new BABYLON.Vector3(0,0,0));
			player.rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0,0,0),0);
		}
		rotation += action * steer;
		player.rotation.y = rotation;

		// move
		let vx = speed * Math.sin(rotation - 3.14);
		let vz = speed * Math.cos(rotation - 3.14);
		player.position.x += vx;
		player.position.z += vz;

		// light & camera
		let rotation_offsetted = rotation + cameraRightAngle;
		camera.position.x = player.position.x + Math.sin(rotation_offsetted) * cam_horizontal;
		camera.position.z = player.position.z + Math.cos(rotation_offsetted) * cam_horizontal;
		camera.position.y = player.position.y + cam_vertical;
		camera.rotation.y = 3.14 + rotation_offsetted;
		camera.rotation.x = cam_depression;
		light.position = camera.position;
	},
	are_touching: function(a, b, r) {
		let dz = a.position.z - b.position.z;
		if (Math.abs(dz) < r) {
			let dx = a.position.x - b.position.x;
			if (Math.abs(dx) < r) {
				let dy = a.position.y - b.position.y;
				if (Math.abs(dy) < r * 1.5) {
					return true;
				}
			}
		}
		return false;
	},
	set_gravity: function(val) {
		scene.gravity = new BABYLON.Vector3(0, val, 0);
		gravity = scene.gravity;
		scene.getPhysicsEngine().setGravity(scene.gravity);
		player.applyGravity = true;
	},
	update_overlay: function() {
		if (flyjump.can_jump == true) {
			$("#jump_enabled").show();
			$("#space_mobile_btn").css("opacity", 1.0);
			cape_wings.isVisible = true;
		} else {
			$("#jump_enabled").hide();
			$("#space_mobile_btn").css("opacity", 0.3);
			cape_wings.isVisible = false;
		}
		if (steer < 0) {
			$("#controls_reversed").show();
			cape_tail.isVisible = true;
		} else {
			$("#controls_reversed").hide();
			cape_tail.isVisible = false;
		}
	}
}