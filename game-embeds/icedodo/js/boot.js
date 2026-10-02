var boot = {
    finished: false,
    preload: async function() {
        // persistent
        await deployment.init();
        await sync.init();
        await guardian.init();
        await tabs.init();
        await sleep(120);
        await start.init();
        await decorations.init();
        await maker.init();
        await leaderboard.init();
        await scorekeeper.recompute();
        await news.init();
        await popup.init();
        await popup.show();
        await start.create_scene();
        await cc.set_default();
        await fov.init();
        await update.init();
        await decorations.add_particle_system();
        await controls.init();
        await ads.init();
        this.finished = true;
    },
    init: async function() {
        console.log("INITED");
        await flyjump.init();
        await cc.hard_reset();
        await loader.init();
        await map.init();
        await audio.init();
        await cc.refresh()
        await change_state.spawn();
        await screen.init();
        await size.ingame();
        await leaderboard.speedrun_on_open_map();
        await map.post();
        transitioning = false;
    }
}

$('document').ready(function(){
    boot.preload();
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
