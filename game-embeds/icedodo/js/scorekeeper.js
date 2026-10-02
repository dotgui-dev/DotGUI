var scorekeeper = {
	overall: {},
	per_cup: {},
	cups: {},
	delta: {},
	recompute: async function() {
		this.overall = {};
		this.per_cup = {};
		this.cups = {};
		await this.get_delta();
		console.log("scorekeeper.delta", scorekeeper.delta);
		await this.extract();
		this.analyze();
		this.display();
		tabs.skin_init();
		leaderboard.recompute();
	},
	get_delta: async function() {
		return new Promise(function(resolve, reject) {
			sync.get("delta", function(delta) {
				try {
					if ((delta != null) && (JSON.parse(delta))) { // && (delta.map_delta)
						scorekeeper.delta = JSON.parse(delta);
					}
				} catch (err) {
					console.log("Error parsing scorekeeper delta.");
				}
				resolve();
			});
		});
	},
	display: function() {
		$("#records_overall").html("");
		$("#records_per_cup").html("");
		$("#records_overall").append(`<p>Dodo Sweat: ${this.overall.weighted} pt</p>`);
		$("#records_overall").append(`<p>Dodo Tears: ${this.overall.percent} %</p>`);
		for (let cup_id in this.cups) {
			if (cup_id == "vault") {
				continue;
			}
			if (cup_id == "finder") {
				continue;
			}
			let cup_name = cup_info[cup_id].name;
			$("#records_per_cup").append(`<tr><th>${cup_name}</th><th>${this.per_cup[cup_id].weighted} pt</th><th>${this.per_cup[cup_id].percent} %</th></tr>`);
		}
	},
	analyze: function() {
		var total_maps_sum = 0;
		var num_incompletes_sum = 0;
		var weighted_sum = 0;
		for (let cup_id in this.cups) {
			if (cup_id == "finder") {
				continue;
			}
			let total_maps = this.cups[cup_id].length;
			let num_incompletes = this.cups[cup_id].filter(v => v.xp == 0).length;
			var percent = Math.round((total_maps - num_incompletes) / total_maps * 100);
			var weighted = this.cups[cup_id].reduce((p, v, i) => p + v.xp * map_info[cup_id][i].diff, 0);
			
			this.per_cup[cup_id] = {
				percent: isNaN(percent) ? "?" : percent,
				weighted: weighted
			}
			
			if (cup_id != "beginner") {
				weighted_sum += weighted;
			}
			
			if (cup_id != "vault") {
				total_maps_sum += total_maps;
				num_incompletes_sum += num_incompletes;
			}
		}
		this.overall = {
			percent: Math.round((total_maps_sum - num_incompletes_sum) / total_maps_sum * 100 * 100) / 100,
			weighted: weighted_sum
		}
	},
	extract: async function() {
		var cup_ids = Object.keys(cup_info);
		this.cups = await cup_ids.reduce( async (previousPromise, cup_id, index) => {
			const accum = await previousPromise;
			const curr = await scorekeeper.cup_promise(cup_id);
			var obj = {};
			obj[cup_id] = curr;
			return {...accum, ...obj};
		}, Promise.resolve({}));
	},
	cup_promise: function(cup_id) {
		return new Promise((resolve, reject) => {
			var map_promises = [];
			for (const map of map_info[cup_id]) {
				map_promises.push(this.map_promise(map.id));
			}
			Promise.all(map_promises).then((values) => {
				// scorekeeper.cups[cup_id] = values;
				resolve(values);
			});
		});
	},
	map_promise: function(map_id) {
		return new Promise((resolve, reject) => {
			sync.get(map_id, function(data) {
				var map_exp = 0;
				if (data != null) map_exp = Number(data);
				if (deployment.is_chrome_ext) {
					let ls_num = localStorage.getItem(map_id);
					if (!isNaN(ls_num)) map_exp = Number(map_exp) + Number(ls_num);
				}
				sync.get(map_id+"-tim", function(data2) {
					var map_tim = INF;
					if (data2 != null) map_tim = Number(data2);
					map_tim = Math.min(map_tim, (scorekeeper.delta[map_id] || {time: INF})['time']);

					resolve({
						id: map_id,
						xp: map_exp + (scorekeeper.delta[map_id] || {xp:0})['xp'],
						time: map_tim
					});
				});
			});
		});
	}
}


