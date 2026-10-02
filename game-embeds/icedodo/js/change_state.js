var change_state = {
	die: function() {
		if (alive) {
			alive = false;
			$("#screen").css("visibility", "visible");
			$(".mobile_btn").fadeOut();
			$("#restart_icon").show();
			$("#next_lvl_icon").hide();
			$("#play_again").hide();
			a.msg_del();
			
			audio.stop();
			audio.die();

			ads.death();
			if (settings.autoRestart === "on") {
				transitioning = true;
				setTimeout(function() {
					transitioning = false;
					$("#restart").click();
				}, 200);
			}
			// Leaderboard
			leaderboard.set_fps();
		}
	},
	spawn: function() {
		if (!alive) {
			stats.score = 0;
			flyjump.last_frame = 0;
			$("#screen").css("visibility", "hidden");
			$(".mobile_btn").fadeIn();
			$("#map_text").hide();

			// world
			player.rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0,0,0),0);
			player.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(0,0,0));
			player.physicsImpostor.setAngularVelocity(new BABYLON.Quaternion(0,1,0,0));
			player.position = new BABYLON.Vector3(map.spawn[0],map.spawn[1],map.spawn[2]);
			player.rotation = new BABYLON.Vector3(0,0,0);
			
			// play settings
			// radius = default_radius;
			// speed = default_speed;
			// steer = default_steer;
			// update.set_gravity(default_gravity);
			// a.t(0,1,0);
			// fov.set_mul2(1);
			cc.refresh();

			// current info
			rotation = 0;
			alive = true;

			// reset keys
			controls.left = false;
			controls.right = false;
			controls.space = false;
			
			// map-specific reset
			map.reset();
			audio.play();
		}
	}, 
	win: function() {
		if ((alive) && (!transitioning)) {
			transitioning = true;
			alive = false;

			audio.stop();
			audio.level_complete();
			// clear this map
			cleanup.run();
			let this_map_id = settings.map_id;
			// set speed record
			leaderboard.set_record();

			
			function show_end_screen() {
				screen.set_dialog("Map Complete", "#56e04c");
				$("#restart_text").html("NEXT LEVEL");
				$("#restart_icon").hide();
				$("#next_lvl_icon").show();
				$("#play_again").show();
				
				$("#screen").css("visibility", "visible");
				$(".mobile_btn").fadeOut();
				transitioning = false;
			}

			if (testing_mode.active == true) {
				show_end_screen();
				return;
			}

			sync.get(this_map_id, function(data) {
				var map_exp = 0;
				if ((data !== undefined) && (data !== null)) {
					map_exp = Number(data);
				}
				// add one exp.
				sync.set(this_map_id, Number(map_exp) + 1, function() {
					scorekeeper.recompute();
					// display UI
					show_end_screen();
				});
			});
		}
		
	}
}