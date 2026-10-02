var popup = {
	already_clicked: false,
	in_game: false,
	cup_num: 3,
	init: function() {
		function skip_vault_and_search() {
			const num_cups = Object.keys(cup_info).length;
			const right_cutoff = 2;
			popup.cup_num = popup.mod(popup.cup_num, num_cups - right_cutoff);
			
		}
		$("#change_cup_left").click(function() {
			popup.cup_num -= 1;
			skip_vault_and_search();
			popup.display_cup();
		});
		$("#change_cup_right").click(function() {
			popup.cup_num += 1;
			skip_vault_and_search();
			popup.display_cup();
		});
		$("#play_cup").click(function() {
			if (testing_mode.active == true) {
				return;
			}
			const num_cups = Object.keys(cup_info).length;
			let cup_ind = popup.mod(popup.cup_num, num_cups);
			let cup_id = Object.keys(cup_info)[cup_ind];
			popup.click_cup(cup_id);
		});
		this.list_cups();
		$("#more_levels").click(function() {
			$("#cups_btn").click();
		});
		
		async function submit(e) {
			if (e.keyCode != 13) {
				return;
			}

			let search_query = $("#search_input").val().trim().toLowerCase();

			var matches = [];
			map_info.finder = [];
			$("#search_exception").html("...");

			for (let cup_id in map_info) {
				if ((cup_id == "finder") || (cup_id == "beginner")) {
					continue;
				}
				for (let map of map_info[cup_id]) {
					const name_match = (map.name.toLowerCase().includes(search_query));
					const id_match = map.id.toLowerCase().includes(search_query);

					if ((name_match)) { // || (id_match)
						matches.push(map);
					}
				}
			}

			if (matches.length == 0) {
				$("#search_exception").html("Not found!");
			} else if (matches.length > 20) {
				$("#search_exception").html("Too many matches!");
			} else {
				$("#search_exception").html("");
				map_info.finder = matches;
			}
			
			await scorekeeper.recompute();
			await popup.show();


		}

		$("#search_input").keyup(function(e) {
			submit(e);
		});
		$("#search_input").change(function() {
			submit({keyCode: 13});
		});



		// immediately open a specific map
		// on game load
		this.open_hash_map();
		this.open_test_map();
	},
	show: function() {
		this.hide();
		this.in_game = false;
		sync.get("cup_num", function(v) {
			if ((v != null) && (v >= 0) && (v < INF)) {
				popup.cup_num = v;
			} else {
				popup.cup_num = 0;
				// random cup
				// const num_cups = Object.keys(cup_info).length;
				// popup.cup_num = Math.floor(Math.random() * (num_cups - 3));
			}
			popup.display_cup();
		});
		ads.refresh();
		setTimeout(function() {
			$("#popup").css("visibility", "visible");
			$("#menu").css("visibility", "visible");
			$("#backtomenu2").hide();
			$("#fullscreen_btn").hide();
			$("#menu").show();
			$("#jump_enabled").hide();
			$("#controls_reversed").hide();

			transitioning = false;
	        parent.postMessage("hide","*");
	        size.popup();
	        $("#inner_loading").remove();
		}, 500);
	},
	hide: function() {
		$("#cups").html('');
		$("#jump_cont").html('');
		$("#popup").css("visibility", "hidden");
		this.already_clicked = false;
	},
	display_cup: function() {
		const num_cups = Object.keys(cup_info).length;
		let cup_ind = this.mod(this.cup_num, num_cups);
		let cup_id = Object.keys(cup_info)[cup_ind];
		if ((this.cup_num >= 0) && (this.cup_num < INF)) {
			sync.set("cup_num", this.cup_num);
		} else if (cup_info[cup_id] == null) {
			this.cup_num = 0;
			cup_ind = 0;
			cup_id = Object.keys(cup_info)[cup_ind];
		}

		$('#popup').scrollTop(0);
		$("#cup_name").html(cup_info[cup_id].name);
		$("#cup_img").attr("src", `assets/skins/${cup_id}_cup.png`);
		$("#maps").html("");

		console.log("Showing cup_id", cup_id);
		if (cup_id != "finder") {
			$(".search_on").hide();
			$(".search_off").show();
			$("#search_exception").hide();
		} else {
			$(".search_on").show();
			$(".search_off").hide();
			$("#search_exception").show();
		}
		
		// maps
		let maps = map_info[cup_id];
		for (var m=0;m<maps.length;m++) {
			let map = maps[m];
			var map_HTML = "<div class='map' id='"+cup_id+"_map_"+map.id+"'><h2 class='map_name'>"+map.name+"</h2></div>";
			
			if (testing_mode.active == false) {
				$("#maps").append(map_HTML);
			}
			popup.display_map(cup_id, map);
		}

		// stats
		if (cup_id != "finder") {
			$("#cup_percent").html(scorekeeper.per_cup[cup_id].percent+" %");
			$("#cup_weighted").html(scorekeeper.per_cup[cup_id].weighted+" pt");
		}
	},
	display_map: function(cup_id, map) {
		let map_exp = null;
		for (let row of scorekeeper.cups[cup_id]) {
			if (row.id == map.id) {
				map_exp = row.xp;
				break;
			}
		}
		popup.post_map(cup_id, map, map_exp);
	},
	post_map: function(cup_id, map, map_exp) {
		var add_class = "done_z";
		var desc_text = "Click to Play";
		if (map_exp == 1) {
			add_class = "done_a";
			desc_text = "COMPLETED";
		} else if (map_exp == 2) {
			add_class = "done_b";
			desc_text = "COMPLETED TWICE";
		} else if (map_exp > 2) {
			add_class = "done_c";
			desc_text = "COMPLETED "+ map_exp +" TIMES";
		}
		if (map_exp >= 1000) {
			add_class = "done_f";
		} else if (map_exp >= 100) {
			add_class = "done_e";
		} else if (map_exp >= 10) {
			add_class = "done_d";
		}
		var diff_text = "DIFFICULTY: " + map.diff;
		var map_contents_HTML = "<div class='map_desc'>"+diff_text+" - "+desc_text+"</div>";
		var elem = $("#"+cup_id+"_map_"+map.id);
		elem.append(map_contents_HTML);
		elem.addClass(add_class);
		map.exp = map_exp;
		elem.click(function() {
			popup.click_map(cup_id, map.id);
		});
	},
	click_cup: function(cup_id) {
		if (!transitioning) {
			let maps = map_info[cup_id];
			var min_ind = -1;
			var min_val = 1000000;
			for (var m=0;m<maps.length;m++) {
				let map = maps[m];
				let exp = map.exp;
				if (exp < min_val) {
					min_val = exp;
					min_ind = m;
				}
			}
			let map_id = maps[min_ind].id;
			this.click_map(cup_id, map_id);
		}
	},
	click_map: function(cup_id, map_id) {
		if (!transitioning) {
			cup_info[cup_id].map_seq = [];
			for (let map of map_info[cup_id]) {
				cup_info[cup_id].map_seq.push(map.id);
			}
			if (cup_id == null) {
				return;
			}
			if (map_id == null) {
				return;
			}
			let map_seq = cup_info[cup_id].map_seq;
			var map_ind = map_seq.indexOf(map_id);
			if (map_ind < 0) {
				return;
			}
			// set info
			settings.map_id = map_id;
			settings.map_seq = map_seq;
			settings.map_ind = map_ind;
			settings.cup_id = cup_id;
			this.in_game = true;
			// redirect
			if (!this.already_clicked) {
				this.already_clicked = true;
				this.hide();
				$("#menu").hide();
				$("#backtomenu2").show();
				$("#fullscreen_btn").show();
				transitioning = true;
				boot.init();
			}
		}
	},
	list_cups: function() {
		for (const cup_id in cup_info) {
			this.list_cup(cup_id);
		}
	},
	list_cup: function(cup_id) {
		$("#list_cups_title").text("Choose a Cup");
		var html = `<img class="cup_list_img" src="assets/skins/${cup_id}_cup.png" id="show_up_${cup_id}" cup_name="${cup_info[cup_id].name}">`;
		$("#list_cups").append(html);
		$(`#show_up_${cup_id}`).click(function() {
			var v = Object.keys(cup_info).indexOf(cup_id);
			if ((v >= 0) && (v < INF)) {
				popup.cup_num = v;
			}
			popup.display_cup();
			$("#play_tab_btn").click();
		});
		$(`#show_up_${cup_id}`).hover(function() {
			$("#list_cups_title").text($(this).attr("cup_name"));
		});
	},
	open_hash_map: function() {
		// when player clicks full screen button
		// in the extension.
		if (window.location.hash.length > 2) {
			function search(map_id) {
				var cup_ind = -1;
				for (let cup_id in cup_info) {
					cup_ind += 1;
					var maps = map_info[cup_id];
					var map_ind = -1;
					for (let map of maps) {
						map_ind += 1;
						if (map.id == map_id) {
							return {
								map_id: map.id,
								map_ind: map_ind,
								cup_id: cup_id,
								cup_ind: cup_ind
							}
						}
					}
				}
				return null;
			}
			
			const data = search(window.location.hash.substring(1));
			
			window.location.hash = "";

			if (data == null) return;

			const { map_id, map_ind, cup_id, cup_ind } = data;

			if (map_id == null) return;
			if (map_ind == null) return;
			if (cup_id == null) return;
			if (cup_ind == null) return;

			var interval = setInterval(function() {
				if (transitioning == false) {
					popup.click_map(cup_id, map_id);
					clearInterval(interval);
				}
			}, 250);
		}
	},
	open_test_map: function() {
		console.log("%c antetrig", "font-size: 30px");
		if (testing_mode.active == true) {
			console.log("%c trig", "font-size: 30px");
			testing_mode.init();
		}
	},
	mod: function(n, m) {
		return ((n % m) + m) % m;
	}
}


