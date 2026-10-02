var testing_mode = {
    active: (["localhost", "fn.onionfist.com"].indexOf(window.location.hostname) >= 0),
    link: null,
    init: function() {
        let URL = window.location.href;

        function extract_vstr() {
            for (var v=1;v<20;v++) {
                if (URL.includes(`?v${v}=`)) {
                    var vstr = `?v${v}=`;
                    return vstr;
                }
            }
            return null;
        }

        function extract_map_link(vstr) {
            let q_string = URL.split(vstr)[1];
            let parent_domain = window.location.protocol + "//" + window.location.hostname;
            if (window.location.port !== "") parent_domain += ":"+window.location.port;
            let map_js_link = `${parent_domain}/icemaprun.js${vstr}${q_string}`;
            return map_js_link;
        }

        let vstr = extract_vstr();
        if (vstr == null) {
            this.active = false;
            return;
        }

        let link = extract_map_link(vstr);
        if (link == null) {
            this.active = false;
            return;
        }
        this.link = link;
        console.log("%c LINK", "color: red", link);

        var interval = setInterval(function() {
            if (transitioning == false) {
                testing_mode.begin();
                clearInterval(interval);
            }
        }, 250);
    },
    begin: function() {
        // set info
        settings.map_id = "test_map";
        settings.map_seq = ["test_map"];
        settings.map_ind = 0;
        settings.cup_id = "test_cup";
        popup.in_game = true;
        // redirect
        popup.hide();
        $("#menu").hide();
        $("#backtomenu2").show();
        $("#fullscreen_btn").show();
        transitioning = true;
        boot.init();
    }

}