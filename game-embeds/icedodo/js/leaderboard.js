var leaderboard = {
	unique: "",
	init: function() {
		this.get_unique(function() {});

		$("#name_error").hide();

		sync.get("NAME", function(myname) {
			console.log("Got name", myname);
			$("#mem_name").val(myname);
		});

		$("#mem_name").on('change keyup paste', function() {
			let new_name = $("#mem_name").val().trim();
			console.log("new_name", new_name);
			if (leaderboard.check_valid_name(new_name)) {
				sync.set("NAME", new_name, function() {
					console.log("saved new_name", new_name);
					leaderboard.recompute();
				});
			}
		});
	},
	recompute: function() {

		var dodo_score = 0;
		var total_wins = 0;
		var maps_beaten = 0;
		var url_seq = "";

		var last_save = {};
		
		for (let cup_id in cup_info) {
			if (cup_id == "finder") {
				continue;
			}
			if (cup_id == "beginner") {
				continue;
			}
			
			let num_maps_in_cup = map_info[cup_id].length;
			for (let i=0;i<num_maps_in_cup;i++) {
				var map = {
					...map_info[cup_id][i],
					...scorekeeper.cups[cup_id][i]
				}
				// reduce
				map.xp -= (scorekeeper.delta[map.id] || {xp:0})['xp'];
				if (map.xp == 0) continue;

				// update
				dodo_score += map.xp * map.diff;
				total_wins += map.xp;
				maps_beaten += 1;
				url_seq += `${map.id}=${map.xp}&${map.diff}&${map.time},`;

				// last save
				last_save[map.id] = map.xp;
			}
		};
		url_seq = url_seq.substring(0, url_seq.length - 1);

		url_seq += "@dds="+dodo_score;
		url_seq += ",beat="+maps_beaten;
		url_seq += ",nam=" + $("#mem_name").val().trim();
		url_seq += ",uni="+this.unique;
		
		if (deployment.is_chrome_ext) {
			url_seq += ",ver=" + chrome.runtime.getManifest().version;
		} else {
			url_seq += ",ver=" + "web";
		}

		var hash = btoa(url_seq);

		//
		var checksum = 0;
		for (var i=0;i<hash.length;i++) {
		    checksum += hash.charCodeAt(i) * i * String(i).charCodeAt(0);
		}
		function pad(num) {
		    return ("00"+num).substr(("00"+num).length - 2);
		}
		hash = String(pad(String(checksum).length)) + String(checksum) + hash;

		link = "https://onionfist.com/icesave#v3" + hash;
		// link = "http://localhost:5000/icesave#v3" + hash;
		$("#leaderboard_button").attr("href", link);

		
		function on_click_start() {
			sync.set("last_save", JSON.stringify(last_save), () => {});
		}

		$("#leaderboard_button").on("mousedown", on_click_start);
		$("#leaderboard_button").on("touchstart", on_click_start);
	},
	get_unique: function(callback) {
		sync.get("UNIQUE3", function(data) {
			// Get storage data
			if ((data !== undefined) && (data !== null)) {
				leaderboard.unique = data;
				callback();
			} else {
				leaderboard.unique = Math.floor(Math.random() * Math.floor(Math.random() * Date.now()) * 99);
				sync.set("UNIQUE3", leaderboard.unique, callback);
			}
		});
	},
	set_record() {
		const map_id = settings.map_id;
		const new_score = stats.score;
		// map_score is the frame count upon completion.
		const save_as = map_id + "-tim";
		sync.get(save_as, function(curr_score) {
			if (curr_score) {} else {curr_score = INF};
			
			curr_score = Math.min(curr_score, (scorekeeper.delta[map_id] || {time: INF})['time'])

			if (Number(new_score) < Number(curr_score)) {
				sync.set(save_as, new_score, function() {
					if (curr_score < INF) {
						$("#speedrun_best").text("Your Previous Best Speedrun time: "+curr_score);
					}
					$("#speedrun_now").text("Your New Best Speedrun time: "+new_score );
				});
			} else {
				$("#speedrun_best").text("Your Best Speedrun time: "+curr_score);
				$("#speedrun_now").text("Your Recent Speedrun time: "+new_score );
			}
		});
		// TODO: scorekeeper recompute.
	},
	set_fps() {
		const map_id = settings.map_id;
		const new_fps = stats.fps;
		// map_score is the frame count upon completion.
		const save_as = map_id + "-fps";
		sync.set(save_as, new_fps, function() {
			console.log("Fps", map_id, new_fps);
		});
	},
	check_valid_name(name) {
		function char_check(data, accept) {
			const allowed_chars = accept.split("");
			const data_chars = data.split("");
			for (var i=0;i<data_chars.length;i++) {
				let data_char = data_chars[i];
				if ((allowed_chars.indexOf(data_char) >= 0) == false) {
					return false;
				}
			}
			return true;
		}
		function is_okay_name(data) {
			return char_check(data, "._ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890");
		}
		if (!is_okay_name(name)) {
			$("#name_error").show();
			$("#leaderboard_button").hide();
		} else {
			$("#name_error").hide();
			$("#leaderboard_button").show();
		}
		return is_okay_name(name);
	},
	speedrun_on_open_map() {
		$("#curr_time").html("");
		$("#best_time").html("");
		$("#speedrun_now").text("");
		$("#speedrun_best").text("");

		if (settings.map_id) {
			const key = settings.map_id + "-tim";
			sync.get(key, function(curr_highscore) {

				var highscore = INF;
				if (curr_highscore != null) highscore = curr_highscore;
				highscore = Math.min(highscore, (scorekeeper.delta[settings.map_id] || {time: INF})['time']);
				
				if (highscore < INF) {
					console.log("TRIGGERED");
					$("#best_time").html("BEST: " + highscore);
					$("#speedrun_best").text("Your Best Speedrun time: "+highscore);
				}
			});
		}
	}
}

