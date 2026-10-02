console.log("V0.104");
var min_ad_separation = 4; // minutes
var min_deaths_till_ad = 50; // deaths

var ads = {
	first: true,
	has_chrx: false,
	deaths_till_ad: min_deaths_till_ad,
	last_ad_played_time: Date.now(),
	init: function() {

		$("#alert").css("z-index", 1000);
		$("#alert").hide();

		$("#alert_close").click(function() {
			$("#alert").hide();
		});

		if (deployment.is_chrome_ext == true) {
			return;
		}

		var chrx_ids = ["jhidcpailhmpjpbdbhceiaeeggkalgmd", "dfbgcgacmhnidfcfnhhphhijkbmfcbkg"];
		if ((window.chrome) && (chrome.runtime)) {
			for (const chrx_id of chrx_ids) {
				chrome.runtime.sendMessage(chrx_id, {code: "ping"}, function(response) {
					console.log("ads.has_chrx = true");
					ads.has_chrx = true;
					min_ad_separation *= 2;
					min_deaths_till_ad *= 2;
				});
			}
		} else {
			console.log("no runtime, maybe due to localhost.");
		}

		var aiptag_defined = false;
		if (aiptag) {
			if (aiptag.cmd) {
				if (aiptag.cmd.player) {
					aiptag_defined = true;
				}
			}
		}
		if (!aiptag_defined) {
			console.log("Preroll init failed");
			return;
		}
		console.log("Preroll init success");

		aiptag.cmd.player.push(function() {
			aiptag.adplayer = new aipPlayer({
				AD_WIDTH: 960,
				AD_HEIGHT: 540,
				AD_DISPLAY: 'fullscreen', //default, fullscreen, center, fill
				LOADING_TEXT: 'loading advertisement',
				PREROLL_ELEM: function(){return document.getElementById('preroll')},
				AIP_COMPLETE: function (evt)  {
					/*******************
					 ***** WARNING *****
					 *******************
					 Please do not remove the PREROLL_ELEM
					 from the page, it will be hidden automaticly.
					 If you do want to remove it use the AIP_REMOVE callback.
					*/
					// alert("Preroll Ad Completed: " + evt);
				},
				AIP_REMOVE: function ()  {
					// Here it's save to remove the PREROLL_ELEM from the page if you want. But it's not recommend.
				}
			});
		});


	},
	refresh: function() {
		if (deployment.is_chrome_ext == true) {
			return;
		}

		if (($("#ad_left").length == 1) && ($("#ad_right").length == 1)) {
			if (ads.first) {
				ads.first = false;
			} else {
				if (aiptag) {
					if (aiptag.cmd) {
						if (aiptag.cmd.display) {
							aiptag.cmd.display.push(function() {
								aipDisplayTag.display('onionfist-com_300x600_3');
							});
							aiptag.cmd.display.push(function() {
								aipDisplayTag.display('onionfist-com_300x600_4');
							});
						}
					}
				}
			}
			const mid_width = window.innerWidth - 300*2;
			if (mid_width < 350) {
				$("#ad_left").hide();
				$("#ad_right").hide();
			} else {
				$("#ad_left").show();
				$("#ad_right").show();
			}
		}
	},
	death: function() {
		if (deployment.is_chrome_ext == true) {
			return;
		}

		console.log("ads.Death call.");

		const elapsed_time = Date.now() - this.last_ad_played_time;

		if (this.deaths_till_ad > 0) {
			this.deaths_till_ad -= 1;
		} else if (elapsed_time > min_ad_separation * 60 * 1000) {

			// auto restart
			if (settings.autoRestart === "on") {
				settings.autoRestart = "off";
				setTimeout(function() {
					settings.autoRestart = "on";
				}, 1000);
			}

			// play
			this.preroll();

			// info
			this.deaths_till_ad = min_deaths_till_ad;
			this.last_ad_played_time = Date.now();
		}
	},
	preroll: function() {
		// requirements
		if (deployment.is_chrome_ext == true) {
			return;
		}
		var aiptag_defined = false;
		if (aiptag) {
			if (aiptag.cmd) {
				if (aiptag.cmd.player) {
					aiptag_defined = true;
				}
			}
		}
		if (!aiptag_defined) {
			return;
		}

		console.log("Pre-roll ready");

		//check if the adslib is loaded correctly or blocked by adblockers etc.
		if (typeof aiptag.adplayer !== 'undefined') {
			aiptag.cmd.player.push(function() { aiptag.adplayer.startPreRoll(); });
		} else {
			//Adlib didnt load this could be due to an adblocker, timeout etc.
			//Please add your script here that starts the content, this usually is the same script as added in AIP_COMPLETE or AIP_REMOVE.
			$("#alert").show();

		}
	}
}