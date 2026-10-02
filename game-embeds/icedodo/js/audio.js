var audio = {
	init: function() {
		if (testing_mode.active == false) {
			const song_src = "assets/music/" + cup_info[settings.cup_id].song;
			this.load(song_src);
		}
	},
	load: function(song) {
		var audio = $("#audio")[0];
	    $("#audiosource").attr("src", song);
	    audio.load();
	},
	play: function() {
		if (settings.musicEnabled === "on") {
		    var audio = $("#audio")[0];
	    	audio.oncanplaythrough = audio.play();
	    	audio.currentTime = 0;
	    }
	},
	stop: function() {
		if (settings.musicEnabled === "on") {
			document.getElementById('audio').pause();
		}
	},
	level_complete: function() {
		if (settings.musicEnabled === "on") {
			var audio_player = $("#sound_level_complete")[0];
			audio_player.oncanplaythrough = audio_player.play();
			audio_player.currentTime = 0;
		}
	},
	die: function() {
		if (settings.musicEnabled === "on") {
			var audio_player = $("#sound_die")[0];
			audio_player.oncanplaythrough = audio_player.play();
			audio_player.currentTime = 0;
		}
	}
}
