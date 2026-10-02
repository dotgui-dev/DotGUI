var loader = {
	init: function () {
		return new Promise(resolve => {
            if (testing_mode.active == false) {
    			const map_id = settings.map_id;
                const map_src = "maps/" + map_id + ".js";
    			this.load_map(map_src, response => resolve(response));
            } else {
                const map_src = testing_mode.link;
                this.load_map(map_src, response => resolve(response));
            }
		});
	},
    load_map: function(map_js, callback) {
        this.loadScript(map_js, function() {
            setTimeout(function() {
                callback("done");
            }, 200);
        });
    },
    loadScript: function(url, callback) {
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        script.onreadystatechange = callback;
        script.onload = callback;
        head.appendChild(script);
    }
}