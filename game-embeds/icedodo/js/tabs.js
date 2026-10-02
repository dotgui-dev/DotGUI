var tabs = {
	items: ["about", "settings", "skins", "ranks", "cups"],
	unlocked_skins: [],
	init: function() {
		for (var i=0;i<this.items.length;i++) {
			let item = this.items[i];
			this.handle_click(item);
		}

		$("#play_tab_btn").css("color", "#ffffff");
		$("#play_tab_btn").click(function() {
			$("#play_tab_btn").css("color", "#ffffff");
			for (var i=0;i<tabs.items.length;i++) {
				let item = tabs.items[i];
				$(`#${item}_tab`).hide();
				$(`#${item}_btn`).css("color", "#999999");
			}
			$("#cups_btn").css("color", "#ffffff");
		});
		this.settings_init();
	},
	handle_click: function(item) {
		$("#"+item+"_btn").click(function() {
			tabs.show_item(item);
			if (item == "notifs") {
				notifs.focus();
			}
		});
	},
	show_item: function(item) {
		// all others
		$(".tab").hide();
		$(".btn").css("color", "#999999");
		$("#cups_btn").css("color", "#ffffff");
		
		// selected
		$("#"+item+"_tab").css("visibility", "visible");
		$("#"+item+"_tab").css("z-index", "35");
		$("#"+item+"_btn").css("color", "#ffffff");
		$("#"+item+"_tab").show();
	},
	item_init: function(item) {
		let save_id = item.save_id;
		let options = item.options;
		let standard = item.standard;
		let onclick = item.onclick;
		const reset_styling = function(curr_val) {
			for (var z=0;z<options.length;z++) {
				let option = options[z];
				let elem_id = "#" + save_id + "_" + option;
				if (curr_val === option) {
					$(elem_id).css("background", "var(--red_dark)");
				} else {
					$(elem_id).css("background", "black");
				}
			}
		}
		sync.get(save_id, function(curr_val) {
			if ((curr_val === null) || (curr_val === undefined)) {
				sync.set(save_id, standard, function() {});
				curr_val = standard;
			}
			settings[save_id] = curr_val;
			reset_styling(curr_val);
		});
		for (var z=0;z<options.length;z++) {
			let option = options[z];
			let elem_id = "#" + save_id + "_" + option;
			$(elem_id).click(function() {
				settings[save_id] = option;
				sync.set(save_id, option, function() {
					reset_styling(option);
					if (onclick !== null) onclick(option);
				});
			});
		}

	},
	settings_init: function() {
		var items = [
			{
				save_id: "musicEnabled",
				options: ["on", "off"],
				standard: "on",
				onclick: null
			},
			{
				save_id: "autoRestart",
				options: ["on", "off"],
				standard: "off",
				onclick: null
			},
			{
				save_id: "fovLevel",
				options: ["x1", "x2", "x3"],
				standard: "x1",
				onclick: function(option) {
					fov.set_mul1(option);
				}
			},
			{
				save_id: "frameRate",
				options: ["fixed", "vsync"],
				standard: "vsync",
				onclick: function(option) {
					if (option === "fixed") {
						update.set_fixed();
					} else if (option === "vsync") {
						update.set_vsync();
					}
				}
			},
			{
				save_id: "platformTexture",
				options: ["bright", "dark"],
				standard: "bright",
				onclick: function(option) {
					if (option === "bright") {
			            decorations.materials.platform = decorations.bright;
			            maker.init();
			        } else if (option === "dark") {
			            decorations.materials.platform = decorations.dark;
			            maker.init();
			        }
				}
			}
		];

		for (var i=0;i<items.length;i++) {
			let item = items[i];
			this.item_init(item);
		}
		
		if (deployment.is_chrome_ext) {
			$("#res_row").remove();
		} else {
			var standard = "600p";
			if (controls.mobile_enabled == true) {
				standard = "400p";
			}
			//  else if (deployment.is_chrome_ext == false) {
			// 	standard = "900p";
			// }
			this.item_init({
				save_id: "screenRes",
				options: ["400p", "600p", "900p"],
				standard: standard,
				onclick: function(option) {
					size.set(option);
				}
			})
		}
			
	},
	skin_init: function() {
		this.unlocked_skins = [];
		$("#unlocked_skins").html("");
		$("#locked_skins").html("");

		for (let skin_id in skin_info) {
			let keys = skin_info[skin_id].keys;
			var obj = scorekeeper[keys[0]];
			if (keys.length > 1) obj = obj[keys[1]];
			if (keys.length > 2) obj = obj[keys[2]];
			if (Number(obj) >= Number(skin_info[skin_id].val)) {
				this.unlocked_skins.push(skin_id);
				skin_info[skin_id].unlocked = true;
			}
		}

		for (const skin_id in skin_info) {
			let skin_txt = skin_info[skin_id].txt;
			if ((skin_txt == null) && (skin_info[skin_id].keys[0] == "per_cup")) {
				var unit = (skin_info[skin_id].keys[2] == "percent") ? "%" : "pt"
				skin_txt = skin_info[skin_id].val + " " + unit + " " + skin_info[skin_id].keys[1];
			}
			var HTML = `<div class="skinItem" id="skinName_${skin_id}"><img class="skin_img" src="assets/skins/${skin_id}.png"><div class="skin_txt">${skin_txt}</div></div>`;
			if (skin_info[skin_id].unlocked) {
				$("#unlocked_skins").append(HTML);
			} else {
				$("#locked_skins").append(HTML);
			}
		}

		this.item_init({
			save_id: "skinName",
			options: tabs.unlocked_skins,
			standard: "dodo",
			onclick: function(option) {
				decorations.decorate_player(player, option);
			}
		});
	}
}

