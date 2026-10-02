var map = {
    title: "Acceleration and Brakes",
    song: "env2",
    maker: "skilledandkilled",
    spawn: [0, 0.5, 0],
    init: function() {
        a.p([2.90014, -0.00986, -169.94986], [0, 0, 0], [6, 0.8, 10], 0.0, 0, 0, 0.6, false);
        a.p([0.00021, 0.00021, -4.75979], [0, 0, 0], [6, 0.8, 10], 0.0, 0, 0, 0.6, false);
        a.p([0.00028000000000000003, 0.00028000000000000003, -13.67972], [-0.52, 0, 0], [0.6, 0.8, 10], 0.0, 0, 0, 0.6, false);
        a.p([0.00035000000000000005, 0.00035000000000000005, -21.93965], [-0.52, 0, 0], [0.6, 0.8, 10], 0.0, 0, 0, 0.6, false);
        a.p([0.00042, 0.00042, -21.92958], [0.52, 0, 0], [0.6, 0.8, 10], 0.0, 0, 0, 0.6, false);
        a.p([0.00049, 0.00049, -30.13951], [0.52, 0, 0], [0.6, 0.8, 10], 0.0, 0, 0, 0.6, false);
        a.p([0, 0, -30.3], [-0.52, 0, 0], [0.6, 0.8, 10], 0.0, 0, 0, 0.6, false);
        a.p([0.00007000000000000001, -0.00993, -38.77993], [0, 0, 0], [20, 0.8, 10], 0.0, 0, 0, 0.6, false);
        a.p([-1.99986, 0.00014000000000000001, -58.10986], [0, 0, 0], [6, 0.8, 10], 0.0, 0, 0, 0.6, false);
        a.p([2.90021, 0.00021, -48.69979], [0, 0, 0], [6, 0.8, 10], 0.0, 0, 0, 0.6, false);
        a.p([2.9002800000000004, 0.00028000000000000003, -67.80972], [0, 0, 0], [6, 0.8, 10], 0.0, 0, 0, 0.6, false);
        a.p([-1.99965, 0.00035000000000000005, -77.30965], [0, 0, 0], [6, 0.8, 10], 0.0, 0, 0, 0.6, false);
        a.p([2.9004199999999996, 0.020419999999999997, -86.31958], [0, 0, 0], [6, 0.8, 10], 0.0, 0, 0, 0.6, false);
        a.p([-1.99951, -0.00951, -96.30950999999999], [0, 0, 0], [6, 0.8, 10], 0.0, 0, 0, 0.6, false);
        a.p([2.9, 0.01, -104.66], [0, 0, 0], [6, 0.8, 10], 0.0, 0, 0, 0.6, false);
        a.p([-16.73993, -0.01993, -553.67993], [0, 0, 0], [10, 0.8, 20], 0.0, 0, 0, 0.6, false);
        a.p([-1.99986, 0.00014000000000000001, -128.01986], [0, 0, 0], [6, 0.8, 40], 0.0, 0, 0, 0.6, false);
        a.p([0.00021, 0.00021, -13.67979], [0.52, 0, 0], [0.6, 0.8, 10], 0.0, 0, 0, 0.6, false);
        a.p([-1.9997200000000002, 0.010280000000000001, -179.19972], [0, 0, 0], [6, 0.8, 10], 0.0, 0, 0, 0.6, false);
        a.p([2.9003500000000004, 0.01035, -152.33965], [0, 0, 0], [6, 0.8, 10], 0.0, 0, 0, 0.6, false);
        a.p([-1.99958, 0.01042, -161.59958], [0, 0, 0], [6, 0.8, 10], 0.0, 0, 0, 0.6, false);
        a.p([2.9004899999999996, -0.00951, -213.53951], [0, 0, 0], [6, 0.8, 60], 0.0, 0, 0, 0.6, false);
        a.p([-2, 0.01, -251.34], [0, 0, 0], [6, 0.8, 20], 0.0, 0, 0, 0.6, false);
        a.p([2.90007, -0.00993, -269.32993], [0, 0, 0], [6, 0.8, 20], 0.0, 0, 0, 0.6, false);
        a.p([-1.99986, 0.01014, -284.80986], [0, 0, 0], [6, 0.8, 20], 0.0, 0, 0, 0.6, false);
        a.p([2.90021, -0.00979, -299.74979], [0, 0, 0], [6, 0.8, 20], 0.0, 0, 0, 0.6, false);
        a.p([-1.9997200000000002, 0.010280000000000001, -318.26972], [0, 0, 0], [6, 0.8, 20], 0.0, 0, 0, 0.6, false);
        a.p([2.9003500000000004, -0.009649999999999999, -334.73965], [0, 0, 0], [6, 0.8, 20], 0.0, 0, 0, 0.6, false);
        a.p([-1.99958, 0.01042, -352.94957999999997], [0, 0, 0], [6, 0.8, 20], 0.0, 0, 0, 0.6, false);
        a.p([2.9004899999999996, -0.00951, -369.41951], [0, 0, 0], [6, 0.8, 20], 0.0, 0, 0, 0.6, false);
        a.p([0, 0.01, -525.75], [0, 0, 0], [10, 0.8, 20], 0.0, 0, 0, 0.6, false);
        a.p([-8.50993, 0.00007000000000000001, -538.84993], [0, 0, 0], [10, 0.8, 20], 0.0, 0, 0, 0.6, false);
        a.p([-1.99986, 0.01014, -389.45986], [0, 0, 0], [6, 0.8, 20], 0.0, 0, 0, 0.6, false);
        a.p([2.90021, -0.00979, -404.40979], [0, 0, 0], [6, 0.8, 20], 0.0, 0, 0, 0.6, false);
        a.p([-1.9997200000000002, 0.010280000000000001, -420.48972000000003], [0, 0, 0], [6, 0.8, 20], 0.0, 0, 0, 0.6, false);
        a.p([2.9003500000000004, -0.009649999999999999, -437.22965], [0, 0, 0], [6, 0.8, 20], 0.0, 0, 0, 0.6, false);
        a.p([-1.99958, 0.01042, -455.19957999999997], [0, 0, 0], [6, 0.8, 20], 0.0, 0, 0, 0.6, false);
        a.p([2.9004899999999996, -0.00951, -474.19951000000003], [0, 0, 0], [6, 0.8, 20], 0.0, 0, 0, 0.6, false);
        a.p([-2, 0.01, -489.36], [0, 0, 0], [6, 0.8, 20], 0.0, 0, 0, 0.6, false);
        a.p([-1.95993, -0.00993, -507.24993], [0, 0, 0], [6, 0.8, 20], 0.0, 0, 0, 0.6, false);
        a.p([-2.99979, 2.83021, -110.77978999999999], [0, -1.57, 0], [20, 0, 10], 1, 0, 0, 0.6, false);
        a.p([1.40028, 2.83028, -192.88972], [0, -1.57, 0], [20, 0, 10], 1, 0, 0, 0.6, false);
        a.e([-16.56965, 1.0303499999999999, -556.22965]);
    },
    post: function() {
        cc.set_monkey("scene.ambientColor", new BABYLON.Color3.FromHexString("#f51111"));
        cc.set_monkey("light.groundColor", new BABYLON.Color3.FromHexString("#f51111"));
        cc.set_monkey("speed", default_speed * 0.5);
        cc.set_monkey("steer", default_steer * 1.5);
        cc.refresh();
    },
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
            case 0:
                if (PZ < -0.6197900000000001) {
                    scene.ambientColor = new BABYLON.Color3.FromHexString("#26e4ca");
                    light.groundColor = new BABYLON.Color3.FromHexString("#26e4ca");
                    light.specular = new BABYLON.Color3.FromHexString("#26e4ca");
                    light.diffuse = new BABYLON.Color3.FromHexString("#26e4ca");
                    this.section_id += 1
                }
                break;
            case 1:
                if (PZ < -9.61979) {
                    scene.ambientColor = cc.get("scene.ambientColor", null);
                    light.groundColor = cc.get("light.groundColor", null);
                    light.specular = cc.get("light.specular", null);
                    light.diffuse = cc.get("light.diffuse", null);
                    this.section_id += 1
                }
                break;
            case 2:
                if (PZ < -10.38972) {
                    scene.ambientColor = new BABYLON.Color3.FromHexString("#26e4ca");
                    light.groundColor = new BABYLON.Color3.FromHexString("#26e4ca");
                    light.specular = new BABYLON.Color3.FromHexString("#26e4ca");
                    light.diffuse = new BABYLON.Color3.FromHexString("#26e4ca");
                    this.section_id += 1
                }
                break;
            case 3:
                if (PZ < -17.88972) {
                    scene.ambientColor = cc.get("scene.ambientColor", null);
                    light.groundColor = cc.get("light.groundColor", null);
                    light.specular = cc.get("light.specular", null);
                    light.diffuse = cc.get("light.diffuse", null);
                    this.section_id += 1
                }
                break;
            case 4:
                if (PZ < -18.31993) {
                    scene.ambientColor = new BABYLON.Color3.FromHexString("#26e4ca");
                    light.groundColor = new BABYLON.Color3.FromHexString("#26e4ca");
                    light.specular = new BABYLON.Color3.FromHexString("#26e4ca");
                    light.diffuse = new BABYLON.Color3.FromHexString("#26e4ca");
                    speed = default_speed * 0.5;
                    this.section_id += 1
                }
                break;
            case 5:
                if (PZ < -25.31993) {
                    scene.ambientColor = cc.get("scene.ambientColor", null);
                    light.groundColor = cc.get("light.groundColor", null);
                    light.specular = cc.get("light.specular", null);
                    light.diffuse = cc.get("light.diffuse", null);
                    speed = cc.get("speed", null);
                    this.section_id += 1
                }
                break;
            case 6:
                if (PZ < -26.00965) {
                    scene.ambientColor = new BABYLON.Color3.FromHexString("#26e4ca");
                    light.groundColor = new BABYLON.Color3.FromHexString("#26e4ca");
                    light.specular = new BABYLON.Color3.FromHexString("#26e4ca");
                    light.diffuse = new BABYLON.Color3.FromHexString("#26e4ca");
                    this.section_id += 1
                }
                break;
            case 7:
                if (PZ < -33.50965) {
                    scene.ambientColor = cc.get("scene.ambientColor", null);
                    light.groundColor = cc.get("light.groundColor", null);
                    light.specular = cc.get("light.specular", null);
                    light.diffuse = cc.get("light.diffuse", null);
                    this.section_id += 1
                }
                break;
            case 8:
                if (PZ < -34.27985999999999) {
                    scene.ambientColor = new BABYLON.Color3.FromHexString("#26e4ca");
                    light.groundColor = new BABYLON.Color3.FromHexString("#26e4ca");
                    light.specular = new BABYLON.Color3.FromHexString("#26e4ca");
                    light.diffuse = new BABYLON.Color3.FromHexString("#26e4ca");
                    speed = default_speed * 1.0;
                    this.section_id += 1
                }
                break;
            case 9:
                if (PZ < -113.25986) {
                    scene.ambientColor = cc.get("scene.ambientColor", null);
                    light.groundColor = cc.get("light.groundColor", null);
                    light.specular = cc.get("light.specular", null);
                    light.diffuse = cc.get("light.diffuse", null);
                    speed = cc.get("speed", null);
                    this.section_id += 1
                }
                break;
            case 10:
                if (PZ < -114.19993) {
                    light.groundColor = new BABYLON.Color3.FromHexString("#ffd533");
                    scene.ambientColor = new BABYLON.Color3.FromHexString("#ffd533");
                    light.specular = new BABYLON.Color3.FromHexString("#ffd533");
                    light.diffuse = new BABYLON.Color3.FromHexString("#ffd533");
                    speed = default_speed * 2.0;
                    this.section_id += 1
                }
                break;
            case 11:
                if (PZ < -196.19993) {
                    light.groundColor = cc.get("light.groundColor", null);
                    scene.ambientColor = cc.get("scene.ambientColor", null);
                    light.specular = cc.get("light.specular", null);
                    light.diffuse = cc.get("light.diffuse", null);
                    speed = cc.get("speed", null);
                    this.section_id += 1
                }
                break;
            case 12:
                if (PZ < -196.99) {
                    light.diffuse = new BABYLON.Color3.FromHexString("#f51111");
                    light.specular = new BABYLON.Color3.FromHexString("#f51111");
                    speed = default_speed * 3.0;
                    scene.clearColor = new BABYLON.Color3.FromHexString("#f64b1f");
                    this.section_id += 1
                }
                break;
            case 13:
                if (PZ < -516.99) {
                    light.diffuse = cc.get("light.diffuse", null);
                    light.specular = cc.get("light.specular", null);
                    speed = cc.get("speed", null);
                    scene.clearColor = cc.get("scene.clearColor", null);
                    this.section_id += 1
                }
                break;
            case 14:
                if (PZ < -517.65951) {
                    scene.clearColor = new BABYLON.Color3.FromHexString("#f68d1f");
                    scene.ambientColor = new BABYLON.Color3.FromHexString("#d4ebf2");
                    light.groundColor = new BABYLON.Color3.FromHexString("#72bcd4");
                    speed = default_speed * 1.0;
                    this.section_id += 1
                }
                break;
            case 15:
                if (PZ < -657.65951) {
                    scene.clearColor = cc.get("scene.clearColor", null);
                    scene.ambientColor = cc.get("scene.ambientColor", null);
                    light.groundColor = cc.get("light.groundColor", null);
                    speed = cc.get("speed", null);
                    this.section_id += 1
                }
                break;
        }
    },
    reset: function() {
        this.section_id = 0;
        a.re('P0', [2.90014, -0.00986, -169.94986], [0, 0, 0], [6, 0.8, 10]);
        a.re('P1', [0.00021, 0.00021, -4.75979], [0, 0, 0], [6, 0.8, 10]);
        a.re('P2', [0.00028000000000000003, 0.00028000000000000003, -13.67972], [-0.52, 0, 0], [0.6, 0.8, 10]);
        a.re('P3', [0.00035000000000000005, 0.00035000000000000005, -21.93965], [-0.52, 0, 0], [0.6, 0.8, 10]);
        a.re('P4', [0.00042, 0.00042, -21.92958], [0.52, 0, 0], [0.6, 0.8, 10]);
        a.re('P5', [0.00049, 0.00049, -30.13951], [0.52, 0, 0], [0.6, 0.8, 10]);
        a.re('P6', [0, 0, -30.3], [-0.52, 0, 0], [0.6, 0.8, 10]);
        a.re('P7', [0.00007000000000000001, -0.00993, -38.77993], [0, 0, 0], [20, 0.8, 10]);
        a.re('P8', [-1.99986, 0.00014000000000000001, -58.10986], [0, 0, 0], [6, 0.8, 10]);
        a.re('P9', [2.90021, 0.00021, -48.69979], [0, 0, 0], [6, 0.8, 10]);
        a.re('P10', [2.9002800000000004, 0.00028000000000000003, -67.80972], [0, 0, 0], [6, 0.8, 10]);
        a.re('P11', [-1.99965, 0.00035000000000000005, -77.30965], [0, 0, 0], [6, 0.8, 10]);
        a.re('P12', [2.9004199999999996, 0.020419999999999997, -86.31958], [0, 0, 0], [6, 0.8, 10]);
        a.re('P13', [-1.99951, -0.00951, -96.30950999999999], [0, 0, 0], [6, 0.8, 10]);
        a.re('P14', [2.9, 0.01, -104.66], [0, 0, 0], [6, 0.8, 10]);
        a.re('P15', [-16.73993, -0.01993, -553.67993], [0, 0, 0], [10, 0.8, 20]);
        a.re('P16', [-1.99986, 0.00014000000000000001, -128.01986], [0, 0, 0], [6, 0.8, 40]);
        a.re('P17', [0.00021, 0.00021, -13.67979], [0.52, 0, 0], [0.6, 0.8, 10]);
        a.re('P18', [-1.9997200000000002, 0.010280000000000001, -179.19972], [0, 0, 0], [6, 0.8, 10]);
        a.re('P19', [2.9003500000000004, 0.01035, -152.33965], [0, 0, 0], [6, 0.8, 10]);
        a.re('P20', [-1.99958, 0.01042, -161.59958], [0, 0, 0], [6, 0.8, 10]);
        a.re('P21', [2.9004899999999996, -0.00951, -213.53951], [0, 0, 0], [6, 0.8, 60]);
        a.re('P22', [-2, 0.01, -251.34], [0, 0, 0], [6, 0.8, 20]);
        a.re('P23', [2.90007, -0.00993, -269.32993], [0, 0, 0], [6, 0.8, 20]);
        a.re('P24', [-1.99986, 0.01014, -284.80986], [0, 0, 0], [6, 0.8, 20]);
        a.re('P25', [2.90021, -0.00979, -299.74979], [0, 0, 0], [6, 0.8, 20]);
        a.re('P26', [-1.9997200000000002, 0.010280000000000001, -318.26972], [0, 0, 0], [6, 0.8, 20]);
        a.re('P27', [2.9003500000000004, -0.009649999999999999, -334.73965], [0, 0, 0], [6, 0.8, 20]);
        a.re('P28', [-1.99958, 0.01042, -352.94957999999997], [0, 0, 0], [6, 0.8, 20]);
        a.re('P29', [2.9004899999999996, -0.00951, -369.41951], [0, 0, 0], [6, 0.8, 20]);
        a.re('P30', [0, 0.01, -525.75], [0, 0, 0], [10, 0.8, 20]);
        a.re('P31', [-8.50993, 0.00007000000000000001, -538.84993], [0, 0, 0], [10, 0.8, 20]);
        a.re('P32', [-1.99986, 0.01014, -389.45986], [0, 0, 0], [6, 0.8, 20]);
        a.re('P33', [2.90021, -0.00979, -404.40979], [0, 0, 0], [6, 0.8, 20]);
        a.re('P34', [-1.9997200000000002, 0.010280000000000001, -420.48972000000003], [0, 0, 0], [6, 0.8, 20]);
        a.re('P35', [2.9003500000000004, -0.009649999999999999, -437.22965], [0, 0, 0], [6, 0.8, 20]);
        a.re('P36', [-1.99958, 0.01042, -455.19957999999997], [0, 0, 0], [6, 0.8, 20]);
        a.re('P37', [2.9004899999999996, -0.00951, -474.19951000000003], [0, 0, 0], [6, 0.8, 20]);
        a.re('P38', [-2, 0.01, -489.36], [0, 0, 0], [6, 0.8, 20]);
        a.re('P39', [-1.95993, -0.00993, -507.24993], [0, 0, 0], [6, 0.8, 20]);
        a.re('P40', [-2.99979, 2.83021, -110.77978999999999], [0, -1.57, 0], [20, 0, 10]);
        a.re('P41', [1.40028, 2.83028, -192.88972], [0, -1.57, 0], [20, 0, 10]);
        a.re('E0', [-16.56965, 1.0303499999999999, -556.22965], [0, 0, 0], [1, 1, 1]);
    },
    physics_update: function() {},
    render_update: function() {}
}
