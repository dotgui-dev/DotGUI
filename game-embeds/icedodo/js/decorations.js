var decorations = {
    materials: {},
    idno: 0,
    init: function() {
        // GENERAL
        this.materials.invis = this.rgba_mat(0,0,0,0);
        this.materials.ending = this.rgba_mat(36, 252, 3, 0.5);
        this.materials.player = this.rgba_mat(255, 255, 255,1.0);;

        // PLATFORM
        this.bright = new BABYLON.StandardMaterial("brightmat", scene);
        this.bright.diffuseTexture = new BABYLON.Texture("assets/textures/bright.png", scene);
        this.bright.diffuseTexture.uScale = this.bright.diffuseTexture.vScale = 1.0;
        this.bright.backFaceCulling = true; // false;
        this.bright.freeze();

        this.dark = new BABYLON.StandardMaterial("darkmat", scene);
        this.dark.diffuseTexture = new BABYLON.Texture("assets/textures/dark.png", scene);
        this.dark.diffuseTexture.uScale = this.dark.diffuseTexture.vScale = 1.0;
        this.dark.backFaceCulling = true; // false;
        this.dark.freeze();

        if (settings.platformTexture === "dark") {
            this.materials.plat0 = this.dark;
        } else {
            this.materials.plat0 = this.bright;
        }

        this.materials.plat1 = new BABYLON.StandardMaterial("plat1", scene);
        this.materials.plat1.diffuseTexture = new BABYLON.Texture("assets/textures/pm1.png", scene);
        this.materials.plat1.diffuseTexture.uScale = this.bright.diffuseTexture.vScale = 1.0;
        this.materials.plat1.backFaceCulling = false;
        this.materials.plat1.freeze();

        this.materials.plat2 = new BABYLON.StandardMaterial("plat2", scene);
        this.materials.plat2.diffuseTexture = new BABYLON.Texture("assets/textures/pm2.png", scene);
        this.materials.plat2.diffuseTexture.uScale = this.bright.diffuseTexture.vScale = 1.0;
        this.materials.plat2.backFaceCulling = false;
        this.materials.plat2.freeze();

        this.materials.plat3 = this.rgba_mat(0, 0, 255, 1.0);
        this.materials.plat3.alpha = 0.55;
        this.materials.plat3.backFaceCulling = true;
        this.materials.plat3.freeze();
        

        this.materials.plat5 = this.rgba_mat(255,0,0,1, true); // fire

        this.materials.plat6 = this.rgba_mat(34,139,34,0.4, true); // green
        
        this.materials.plat7 = this.rgba_mat(165,42,42,0.8, true); // brown

        this.materials.plat8 = this.rgba_mat(64,164,223,0.2, true); // water

        // this.materials.plat4 = new BABYLON.StandardMaterial("fire", scene);
        // this.materials.plat4.diffuseColor = new BABYLON.Color3(1,0,0);

        // this.materials.plat5 = new BABYLON.StandardMaterial("green", scene);
        // this.materials.plat5.diffuseColor = new BABYLON.Color3(34 /255,139 /255,34 /255);
        // this.materials.plat5.alpha = 0.4;

        // this.materials.plat6 = new BABYLON.StandardMaterial("brown", scene);
        // this.materials.plat6.diffuseColor = new BABYLON.Color3(165 /255,42 /255,42 /255);
        // this.materials.plat6.alpha = 0.8;

        // this.materials.plat7 = new BABYLON.StandardMaterial("water", scene);
        // this.materials.plat7.diffuseColor = new BABYLON.Color3(64 /255, 164 /255, 223 /255);
        // this.materials.plat7.alpha = 0.2;


        // CONE
        this.materials.cone0 = this.rgba_mat(235,50,50,1.0);

        this.materials.cone1 = this.rgba_mat(65, 174, 217,1.0);

        // CYLINDER
        this.materials.cylinder0 = this.rgba_mat(40, 60, 235, 0.8);
        this.materials.cylinder0.freeze();

        this.materials.cylinder1 = this.rgba_mat(242, 22, 103, 1.0);
        this.materials.cylinder1.freeze();

        this.materials.cylinder2 = this.rgba_mat(146, 95, 217, 1.0);
        this.materials.cylinder2.freeze();

        this.materials.cylinder3 = this.rgba_mat(0, 0, 255, 1.0);
        this.materials.cylinder3.alpha = 0.4;
        this.materials.cylinder3.backFaceCulling = true;
        this.materials.cylinder3.freeze();

        this.materials.cylinder4 = this.rgba_mat(255,0,0,1, true); // fire

        this.materials.cylinder5 = this.rgba_mat(34,139,34,0.4, true); // green
        
        this.materials.cylinder6 = this.rgba_mat(165,42,42,0.8, true); // brown

        this.materials.cylinder7 = this.rgba_mat(64,164,223,0.2, true); // water

        // SPHERE
        this.materials.sphere0 = this.rgba_mat(40, 60, 235, 0.8);
        this.materials.sphere0.freeze();

        this.materials.sphere1 = this.rgba_mat(242, 22, 103, 1.0);
        this.materials.sphere1.freeze();

        this.materials.sphere2 = this.rgba_mat(146, 95, 217, 1.0);
        this.materials.sphere2.freeze();

        this.materials.sphere3 = this.rgba_mat(0, 0, 255, 1.0);
        this.materials.sphere3.alpha = 0.4;
        this.materials.sphere3.backFaceCulling = true;
        this.materials.sphere3.freeze();

        this.materials.sphere4 = this.rgba_mat(255, 255, 255, 1.0);
        this.materials.sphere4.freeze();


    },
    decorate: function(obj, mat_id) {
        if (this.materials[mat_id]) {
            obj.material = this.materials[mat_id];
        }
    },
    decorate_player: function(player, skinName) {
        let pmat = new BABYLON.StandardMaterial("pmat", scene);
        const URL = (skinName) ? "assets/skins/"+skinName+".png" : "assets/icons/icon128.png";
        pmat.diffuseTexture = new BABYLON.Texture(URL, scene);
        pmat.diffuseTexture.uScale = pmat.diffuseTexture.vScale = 1.0;
        pmat.backFaceCulling = false;
        pmat.freeze();
        player.material = pmat;
    },
    rgba_mat: function(r,g,b,a, backFaceCulling=false) {
        this.idno += 1;
        var customMat = new BABYLON.StandardMaterial("mat" + this.idno, scene);
        customMat.diffuseColor = new BABYLON.Color3(r/255, g/255, b/255);
        customMat.alpha = a;
        customMat.backFaceCulling = backFaceCulling;
        customMat.freeze();
        return customMat;
    },
    add_particle_system: function () {
        var ps = new BABYLON.ParticleSystem("particles", 2000, scene);
        //Texture of each particle//textures/flare
        ps.particleTexture = new BABYLON.Texture("assets/textures/flare.png", scene);
        // Where the particles come from
        ps.emitter = player; // the starting object, the emitter
        ps.minEmitBox = new BABYLON.Vector3(-0.2, 0, 0); // Starting all from
        ps.maxEmitBox = new BABYLON.Vector3(0.2, 0, 0); // To...
        // Colors of all particles
        ps.color1 = new BABYLON.Color4(0.4, 0.4, 1.0, 1.0);
        ps.color2 = new BABYLON.Color4(0.9, 0.5, 0.4, 1.0);
        ps.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.8);
        // Size of each particle (random between...
        ps.minSize = (IS_ICEPARTY) ? 0.3 : 0.15;
        ps.maxSize = (IS_ICEPARTY) ? 0.7 : 0.4;
        // Life time of each particle (random between...
        ps.minLifeTime = 0.3;
        ps.maxLifeTime = 0.4;
        // Emission rate
        ps.emitRate = (IS_ICEPARTY) ? 10 : 100;
        // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
        ps.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
        // Direction of each particle after it has been emitted
        ps.direction1 = new BABYLON.Vector3(-1, 1, 1);
        ps.direction2 = new BABYLON.Vector3(1, 1, -1);
        // Speed
        ps.minEmitPower = 1;
        ps.maxEmitPower = 3;
        ps.updateSpeed = 0.02; // 0.005
        ps.start();
    },
    add_skybox: function() {
        var skybox = BABYLON.Mesh.CreateBox("skyBox", 110.0, scene);
        var skymat = new BABYLON.StandardMaterial("skyBox", scene);
        skymat.backFaceCulling = false;
        skymat.reflectionTexture = new BABYLON.Texture("../../assets/skybox.jpg", scene);
        skymat.reflectionTexture.coordinatesMode = BABYLON.Texture.FIXED_EQUIRECTANGULAR_MODE;
        skymat.disableLighting = true;
        skybox.infiniteDistance = true;
        skybox.material = skymat;
    },
    hexToRgb: function(hex) {
        console.log("hex", hex);
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex.split(",")[0]);
        var info = result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : {
            r: 0,
            g: 0,
            b: 0
        };
        info.a = 1;
        if (hex.split(",").length == 2) {
            if (hex.split(",")[1].length > 0) {
                info.a = Number(hex.split(",")[1]);
            }
        }
        return info;
    }
}
