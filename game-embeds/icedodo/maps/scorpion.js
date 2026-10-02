var map = {
    title: "Scorpion",
    song: "env2",
    maker: "Kazil",
    spawn: [0, 0.5, 0],
    init: function() {
        a.p([-1, 1, -4.5], [0, 0, -1.57], [2, 0.4, 11]);
        a.p([0, -5, -20.16], [0, 0, 0], [6, 0.4, 10]);
        a.p([2.61, -5.1, -26.38], [-0.79, 0, 0], [6, 0.4, 10]);
        a.p([9.05, -5.2, -28.93], [-1.57, 0, 0], [6, 0.4, 10]);
        a.p([15.35, -5.5, -13.88], [-3.93, 0, 0], [6, 0.4, 10]);
        a.p([-15.86, -5.8, -24.28], [-3.14, 0, 0], [6, 0.4, 18]);
        a.p([15.26, -5.3, -26.33], [-2.36, 0, 0], [6, 0.4, 10]);
        a.p([1, -5.6, -10.33], [-1.57, 0, 0], [4.2, 0.4, 26]);
        a.p([-13.63, -5.7, -13.54], [-2.36, 0, 0], [5, 0.4, 10]);
        a.p([-11.9, -7.78, -145.5], [0, 0, 0], [4, 0.4, 18]);
        a.p([0, 0, -4.5], [0, 0, 0], [2, 0.4, 11]);
        a.p([17.83, -5.4, -20.08], [-3.14, 0, 0], [6, 0.4, 10]);
        a.p([-15.86, -4.72, -36.49], [-3.14, -0.35, 0], [4, 0.4, 7]);
        a.p([-11.9, -6.01, -232.76], [0, 0.35, 0], [4, 0.4, 14]);
        a.p([-15.76, -5.8, -67.41], [-3.14, 0, 0], [6, 0.4, 14]);
        a.p([-14.02, -0.23, -117.26], [0, 0, 0], [6, 0.4, 10]);
        a.p([-11.73, -5.85, -84.51], [-3.14, 0, 0], [4, 0.4, 7]);
        a.p([-11.88, -3.2, -296.56], [0, 0.44, 0], [4, 0.4, 4]);
        a.p([-11.88, -0.94, -299.63], [0, 0.87, 0], [4, 0.4, 4]);
        a.p([-11.88, 2.42, -301.49], [0, 1.31, 0], [4, 0.4, 4]);
        a.p([-11.88, 6.28, -301.57], [0, 1.75, 0], [4, 0.4, 4]);
        a.p([-11.88, 8.37, -294.84], [0, 0, 0], [4, 0.4, 12.94]);
        a.p([-9.26, -7.87, -199.5], [0, 0, 0], [4, 0.4, 18]);
        a.p([-10.03, -6.25, -145.5], [0, 0, -1.57], [4, 0.4, 18]);
        a.p([-11.88, -3.94, -286.13], [0, 0, 0], [4, 0.4, 18]);
        a.p([-9.26, -7.82, -163.5], [0, 0, 0], [4, 0.4, 18]);
        a.p([-11.9, -7.87, -181.5], [0, 0, 0], [4, 0.4, 18]);
        a.p([-11.9, -8.16, -217.5], [0, 0, 0], [4, 0.4, 18]);
        a.p([-11.9, -3.73, -258.21], [-3.14, 0, 0], [8, 0.4, 38]);
        a.p([-13.24, 7.52, -291.75], [-1.22, 1.57, 0], [4, 0.4, 2.04]);
        a.p([-10.36, 7.43, -291.75], [1.22, 1.57, 0], [4, 0.4, 2.04]);
        a.p([-15.7, -5.85, -77.53], [-3.14, 0, 0], [4, 0.4, 7]);
        a.p([-11.63, -5.9, -94.99], [-3.14, 0, 0], [6, 0.4, 14]);
        a.p([-14.21, -3.45, -134.89], [0, -0.23, 0], [4, 0.4, 26]);
        a.c([-8.85, -3.14, -273.84]);
        a.c([-8.85, -3.14, -263.84]);
        a.c([-8.66, -3.08, -254]);
        a.c([-15.1, -3.14, -268.84]);
        a.c([-15.09, -3.14, -258.84]);
        a.e([-11.86, 7.34, -289.28]);
    },
    post: function() {
        a.m('P0').unfreezeWorldMatrix();
        a.m('P0').material = decorations.materials.moving_mat;
        a.m('P1').unfreezeWorldMatrix();
        a.m('P1').material = decorations.materials.moving_mat;
        a.m('P2').unfreezeWorldMatrix();
        a.m('P2').material = decorations.materials.moving_mat;
        a.m('P3').unfreezeWorldMatrix();
        a.m('P3').material = decorations.materials.moving_mat;
        a.m('P4').unfreezeWorldMatrix();
        a.m('P4').material = decorations.materials.moving_mat;
        a.m('P5').unfreezeWorldMatrix();
        a.m('P5').material = decorations.materials.moving_mat;
        a.m('P6').unfreezeWorldMatrix();
        a.m('P6').material = decorations.materials.moving_mat;
        a.m('P7').unfreezeWorldMatrix();
        a.m('P7').material = decorations.materials.moving_mat;
        a.m('P8').unfreezeWorldMatrix();
        a.m('P8').material = decorations.materials.moving_mat;
        a.m('P9').unfreezeWorldMatrix();
        a.m('P9').material = decorations.materials.moving_mat;
        a.m('P10').unfreezeWorldMatrix();
        a.m('P10').material = decorations.materials.moving_mat;
        a.m('P11').unfreezeWorldMatrix();
        a.m('P11').material = decorations.materials.moving_mat;
        a.m('P12').unfreezeWorldMatrix();
        a.m('P12').material = decorations.materials.moving_mat;
        a.m('P13').unfreezeWorldMatrix();
        a.m('P13').material = decorations.materials.moving_mat;
        a.m('P14').unfreezeWorldMatrix();
        a.m('P14').material = decorations.materials.moving_mat;
        a.m('P15').unfreezeWorldMatrix();
        a.m('P15').material = decorations.materials.moving_mat;
        a.m('P16').unfreezeWorldMatrix();
        a.m('P16').material = decorations.materials.moving_mat;
        a.m('P17').unfreezeWorldMatrix();
        a.m('P17').material = decorations.materials.moving_mat;
        a.m('P18').unfreezeWorldMatrix();
        a.m('P18').material = decorations.materials.moving_mat;
        a.m('P19').unfreezeWorldMatrix();
        a.m('P19').material = decorations.materials.moving_mat;
        a.m('P20').unfreezeWorldMatrix();
        a.m('P20').material = decorations.materials.moving_mat;
        a.m('P21').unfreezeWorldMatrix();
        a.m('P21').material = decorations.materials.moving_mat;
        a.m('P22').unfreezeWorldMatrix();
        a.m('P22').material = decorations.materials.moving_mat;
        a.m('P23').unfreezeWorldMatrix();
        a.m('P23').material = decorations.materials.moving_mat;
        a.m('P24').unfreezeWorldMatrix();
        a.m('P24').material = decorations.materials.moving_mat;
        a.m('P25').unfreezeWorldMatrix();
        a.m('P25').material = decorations.materials.moving_mat;
        a.m('P26').unfreezeWorldMatrix();
        a.m('P26').material = decorations.materials.moving_mat;
        a.m('P27').unfreezeWorldMatrix();
        a.m('P27').material = decorations.materials.moving_mat;
        a.m('P28').unfreezeWorldMatrix();
        a.m('P28').material = decorations.materials.moving_mat;
        a.m('P29').unfreezeWorldMatrix();
        a.m('P29').material = decorations.materials.moving_mat;
        a.m('P30').unfreezeWorldMatrix();
        a.m('P30').material = decorations.materials.moving_mat;
        a.m('P31').unfreezeWorldMatrix();
        a.m('P31').material = decorations.materials.moving_mat;
        a.m('P32').unfreezeWorldMatrix();
        a.m('P32').material = decorations.materials.moving_mat;
        a.m('P33').unfreezeWorldMatrix();
        a.m('P33').material = decorations.materials.moving_mat;
        a.m('C0').unfreezeWorldMatrix();
        a.m('C0').material = decorations.materials.moving_mat;
        a.m('C1').unfreezeWorldMatrix();
        a.m('C1').material = decorations.materials.moving_mat;
        a.m('C2').unfreezeWorldMatrix();
        a.m('C2').material = decorations.materials.moving_mat;
        a.m('C3').unfreezeWorldMatrix();
        a.m('C3').material = decorations.materials.moving_mat;
        a.m('C4').unfreezeWorldMatrix();
        a.m('C4').material = decorations.materials.moving_mat;
    },
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
            case 0:
                if (PZ < -15.530000000000001) {
                    steer = default_steer * 2.0;
                    this.section_id += 1
                }
                break;
            case 1:
                a.m('P0').undefined += undefined;
                a.m('P1').undefined += undefined;
                a.m('P2').undefined += undefined;
                a.m('P3').undefined += undefined;
                a.m('P4').undefined += undefined;
                a.m('P5').undefined += undefined;
                a.m('P6').undefined += undefined;
                a.m('P7').undefined += undefined;
                a.m('P8').undefined += undefined;
                a.m('P9').undefined += undefined;
                a.m('P10').undefined += undefined;
                a.m('P11').undefined += undefined;
                a.m('P12').undefined += undefined;
                a.m('P13').undefined += undefined;
                a.m('P14').undefined += undefined;
                a.m('P15').undefined += undefined;
                a.m('P16').undefined += undefined;
                a.m('P17').undefined += undefined;
                a.m('P18').undefined += undefined;
                a.m('P19').undefined += undefined;
                a.m('P20').undefined += undefined;
                a.m('P21').undefined += undefined;
                a.m('P22').undefined += undefined;
                a.m('P23').undefined += undefined;
                a.m('P24').undefined += undefined;
                a.m('P25').undefined += undefined;
                a.m('P26').undefined += undefined;
                a.m('P27').undefined += undefined;
                a.m('P28').undefined += undefined;
                a.m('P29').undefined += undefined;
                a.m('P30').undefined += undefined;
                if (PZ < -32.39) {
                    steer = default_steer;
                    this.section_id += 1
                }
                break;
            case 2:
                if (PZ < -38.54) {
                    update.set_gravity(default_gravity * 0.15);
                    speed = default_speed * 1.0;
                    this.section_id += 1
                }
                break;
            case 3:
                a.m('P0').undefined += undefined;
                a.m('P1').undefined += undefined;
                a.m('P2').undefined += undefined;
                a.m('P3').undefined += undefined;
                a.m('P4').undefined += undefined;
                a.m('P5').undefined += undefined;
                a.m('P6').undefined += undefined;
                a.m('P7').undefined += undefined;
                a.m('P8').undefined += undefined;
                a.m('P9').undefined += undefined;
                a.m('P10').undefined += undefined;
                a.m('P11').undefined += undefined;
                a.m('P12').undefined += undefined;
                a.m('P13').undefined += undefined;
                a.m('P14').undefined += undefined;
                a.m('P15').undefined += undefined;
                a.m('P16').undefined += undefined;
                a.m('P17').undefined += undefined;
                a.m('P18').undefined += undefined;
                a.m('P19').undefined += undefined;
                a.m('P20').undefined += undefined;
                a.m('P21').undefined += undefined;
                a.m('P22').undefined += undefined;
                a.m('P23').undefined += undefined;
                a.m('P24').undefined += undefined;
                a.m('P25').undefined += undefined;
                a.m('P26').undefined += undefined;
                a.m('P27').undefined += undefined;
                a.m('P28').undefined += undefined;
                a.m('P29').undefined += undefined;
                a.m('P30').undefined += undefined;
                if (PZ < -40.96) {
                    update.set_gravity(default_gravity);
                    speed = default_speed;
                    this.section_id += 1
                }
                break;
            case 4:
                if (PZ < -41.09) {
                    update.set_gravity(default_gravity * 0.08);
                    speed = default_speed * 2.0;
                    this.section_id += 1
                }
                break;
            case 5:
                a.m('P0').undefined += undefined;
                a.m('P1').undefined += undefined;
                a.m('P2').undefined += undefined;
                a.m('P3').undefined += undefined;
                a.m('P4').undefined += undefined;
                a.m('P5').undefined += undefined;
                a.m('P6').undefined += undefined;
                a.m('P7').undefined += undefined;
                a.m('P8').undefined += undefined;
                a.m('P9').undefined += undefined;
                a.m('P10').undefined += undefined;
                a.m('P11').undefined += undefined;
                a.m('P12').undefined += undefined;
                a.m('P13').undefined += undefined;
                a.m('P14').undefined += undefined;
                a.m('P15').undefined += undefined;
                a.m('P16').undefined += undefined;
                a.m('P17').undefined += undefined;
                a.m('P18').undefined += undefined;
                a.m('P19').undefined += undefined;
                a.m('P20').undefined += undefined;
                a.m('P21').undefined += undefined;
                a.m('P22').undefined += undefined;
                a.m('P23').undefined += undefined;
                a.m('P24').undefined += undefined;
                a.m('P25').undefined += undefined;
                a.m('P26').undefined += undefined;
                a.m('P27').undefined += undefined;
                a.m('P28').undefined += undefined;
                a.m('P29').undefined += undefined;
                a.m('P30').undefined += undefined;
                if (PZ < -58.489999999999995) {
                    update.set_gravity(default_gravity);
                    speed = default_speed;
                    this.section_id += 1
                }
                break;
            case 6:
                if (PZ < -74.05) {
                    this.section_id += 1
                }
                break;
            case 7:
                a.m('P31').position.x += 0.12;
                if (PZ < -81.58999999999999) {
                    this.section_id += 1
                }
                break;
            case 8:
                if (PZ < -88.00999999999999) {
                    this.section_id += 1
                }
                break;
            case 9:
                a.m('P32').position.y += 0.15000000000000002;
                a.m('P32').position.z += -0.25;
                a.m('P32').rotation.x += 0.005000000000000001;
                a.m('P32').position.x += -0.05;
                if (PZ < -102.03) {
                    this.section_id += 1
                }
                break;
            case 10:
                if (PZ < -121.72) {
                    update.set_gravity(default_gravity * 1.7);
                    this.section_id += 1
                }
                break;
            case 11:
                a.m('P33').rotation.z += -0.013000000000000001;
                if (PZ < -148.14000000000001) {
                    update.set_gravity(default_gravity);
                    this.section_id += 1
                }
                break;
            case 12:
                if (PZ < -148.67999999999998) {
                    update.set_gravity(default_gravity * 3.0);
                    this.section_id += 1
                }
                break;
            case 13:
                a.m('P0').undefined += undefined;
                a.m('P1').undefined += undefined;
                a.m('P2').undefined += undefined;
                a.m('P3').undefined += undefined;
                a.m('P4').undefined += undefined;
                a.m('P5').undefined += undefined;
                a.m('P6').undefined += undefined;
                a.m('P7').undefined += undefined;
                a.m('P8').undefined += undefined;
                a.m('P9').undefined += undefined;
                a.m('P10').undefined += undefined;
                a.m('P11').undefined += undefined;
                a.m('P12').undefined += undefined;
                a.m('P13').undefined += undefined;
                a.m('P14').undefined += undefined;
                a.m('P15').undefined += undefined;
                a.m('P16').undefined += undefined;
                a.m('P17').undefined += undefined;
                a.m('P18').undefined += undefined;
                a.m('P19').undefined += undefined;
                a.m('P20').undefined += undefined;
                a.m('P21').undefined += undefined;
                a.m('P22').undefined += undefined;
                a.m('P23').undefined += undefined;
                a.m('P24').undefined += undefined;
                a.m('P25').undefined += undefined;
                a.m('P26').undefined += undefined;
                a.m('P27').undefined += undefined;
                a.m('P28').undefined += undefined;
                a.m('P29').undefined += undefined;
                a.m('P30').undefined += undefined;
                if (PZ < -158.22) {
                    update.set_gravity(default_gravity);
                    this.section_id += 1
                }
                break;
            case 14:
                if (PZ < -158.58) {
                    speed = default_speed * 1.7;
                    this.section_id += 1
                }
                break;
            case 15:
                a.m('P0').undefined += undefined;
                a.m('P1').undefined += undefined;
                a.m('P2').undefined += undefined;
                a.m('P3').undefined += undefined;
                a.m('P4').undefined += undefined;
                a.m('P5').undefined += undefined;
                a.m('P6').undefined += undefined;
                a.m('P7').undefined += undefined;
                a.m('P8').undefined += undefined;
                a.m('P9').undefined += undefined;
                a.m('P10').undefined += undefined;
                a.m('P11').undefined += undefined;
                a.m('P12').undefined += undefined;
                a.m('P13').undefined += undefined;
                a.m('P14').undefined += undefined;
                a.m('P15').undefined += undefined;
                a.m('P16').undefined += undefined;
                a.m('P17').undefined += undefined;
                a.m('P18').undefined += undefined;
                a.m('P19').undefined += undefined;
                a.m('P20').undefined += undefined;
                a.m('P21').undefined += undefined;
                a.m('P22').undefined += undefined;
                a.m('P23').undefined += undefined;
                a.m('P24').undefined += undefined;
                a.m('P25').undefined += undefined;
                a.m('P26').undefined += undefined;
                a.m('P27').undefined += undefined;
                a.m('P28').undefined += undefined;
                a.m('P29').undefined += undefined;
                a.m('P30').undefined += undefined;
                if (PZ < -224.4) {
                    speed = default_speed;
                    this.section_id += 1
                }
                break;
            case 16:
                if (PZ < -239) {
                    steer = default_steer * -1.0;
                    speed = default_speed * 0.6;
                    this.section_id += 1
                }
                break;
            case 17:
                a.m('C0').position.x += -0.0299;
                a.m('C1').position.x += -0.03;
                a.m('C2').position.x += -0.030100000000000002;
                a.m('C3').position.x += 0.0299;
                a.m('C4').position.x += 0.03;
                if (PZ < -277.22) {
                    steer = default_steer;
                    speed = default_speed;
                    this.section_id += 1
                }
                break;
            case 18:
                if (PZ < -290.66) {
                    update.set_gravity(default_gravity * -0.3);
                    this.section_id += 1
                }
                break;
            case 19:
                a.m('P0').undefined += undefined;
                a.m('P1').undefined += undefined;
                a.m('P2').undefined += undefined;
                a.m('P3').undefined += undefined;
                a.m('P4').undefined += undefined;
                a.m('P5').undefined += undefined;
                a.m('P6').undefined += undefined;
                a.m('P7').undefined += undefined;
                a.m('P8').undefined += undefined;
                a.m('P9').undefined += undefined;
                a.m('P10').undefined += undefined;
                a.m('P11').undefined += undefined;
                a.m('P12').undefined += undefined;
                a.m('P13').undefined += undefined;
                a.m('P14').undefined += undefined;
                a.m('P15').undefined += undefined;
                a.m('P16').undefined += undefined;
                a.m('P17').undefined += undefined;
                a.m('P18').undefined += undefined;
                a.m('P19').undefined += undefined;
                a.m('P20').undefined += undefined;
                a.m('P21').undefined += undefined;
                a.m('P22').undefined += undefined;
                a.m('P23').undefined += undefined;
                a.m('P24').undefined += undefined;
                a.m('P25').undefined += undefined;
                a.m('P26').undefined += undefined;
                a.m('P27').undefined += undefined;
                a.m('P28').undefined += undefined;
                a.m('P29').undefined += undefined;
                a.m('P30').undefined += undefined;
                if (PZ < -300.32) {
                    update.set_gravity(default_gravity);
                    this.section_id += 1
                }
                break;
            case 20:
                if (PZ < -300.68) {
                    update.set_gravity(default_gravity * -0.3);
                    speed = default_speed * -0.4;
                    this.section_id += 1
                }
                break;
            case 21:
                a.m('P0').undefined += undefined;
                a.m('P1').undefined += undefined;
                a.m('P2').undefined += undefined;
                a.m('P3').undefined += undefined;
                a.m('P4').undefined += undefined;
                a.m('P5').undefined += undefined;
                a.m('P6').undefined += undefined;
                a.m('P7').undefined += undefined;
                a.m('P8').undefined += undefined;
                a.m('P9').undefined += undefined;
                a.m('P10').undefined += undefined;
                a.m('P11').undefined += undefined;
                a.m('P12').undefined += undefined;
                a.m('P13').undefined += undefined;
                a.m('P14').undefined += undefined;
                a.m('P15').undefined += undefined;
                a.m('P16').undefined += undefined;
                a.m('P17').undefined += undefined;
                a.m('P18').undefined += undefined;
                a.m('P19').undefined += undefined;
                a.m('P20').undefined += undefined;
                a.m('P21').undefined += undefined;
                a.m('P22').undefined += undefined;
                a.m('P23').undefined += undefined;
                a.m('P24').undefined += undefined;
                a.m('P25').undefined += undefined;
                a.m('P26').undefined += undefined;
                a.m('P27').undefined += undefined;
                a.m('P28').undefined += undefined;
                a.m('P29').undefined += undefined;
                a.m('P30').undefined += undefined;
                if (PZ < -308.04) {
                    update.set_gravity(default_gravity);
                    speed = default_speed;
                    this.section_id += 1
                }
                break;
        }
    },
    reset: function() {
        this.section_id = 0;
        a.m('P0').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P0').rotation.x = 0;
        a.m('P0').rotation.y = 0;
        a.m('P0').rotation.z = -1.57;
        a.m('P0').position.x = -1;
        a.m('P0').position.y = 1;
        a.m('P0').position.z = -4.5;
        a.m('P0').scaling.x = 2;
        a.m('P0').scaling.y = 0.4;
        a.m('P0').scaling.z = 11;
        a.m('P1').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P1').rotation.x = 0;
        a.m('P1').rotation.y = 0;
        a.m('P1').rotation.z = 0;
        a.m('P1').position.x = 0;
        a.m('P1').position.y = -5;
        a.m('P1').position.z = -20.16;
        a.m('P1').scaling.x = 6;
        a.m('P1').scaling.y = 0.4;
        a.m('P1').scaling.z = 10;
        a.m('P2').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P2').rotation.x = 0;
        a.m('P2').rotation.y = -0.79;
        a.m('P2').rotation.z = 0;
        a.m('P2').position.x = 2.61;
        a.m('P2').position.y = -5.1;
        a.m('P2').position.z = -26.38;
        a.m('P2').scaling.x = 6;
        a.m('P2').scaling.y = 0.4;
        a.m('P2').scaling.z = 10;
        a.m('P3').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P3').rotation.x = 0;
        a.m('P3').rotation.y = -1.57;
        a.m('P3').rotation.z = 0;
        a.m('P3').position.x = 9.05;
        a.m('P3').position.y = -5.2;
        a.m('P3').position.z = -28.93;
        a.m('P3').scaling.x = 6;
        a.m('P3').scaling.y = 0.4;
        a.m('P3').scaling.z = 10;
        a.m('P4').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P4').rotation.x = 0;
        a.m('P4').rotation.y = -3.93;
        a.m('P4').rotation.z = 0;
        a.m('P4').position.x = 15.35;
        a.m('P4').position.y = -5.5;
        a.m('P4').position.z = -13.88;
        a.m('P4').scaling.x = 6;
        a.m('P4').scaling.y = 0.4;
        a.m('P4').scaling.z = 10;
        a.m('P5').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P5').rotation.x = 0;
        a.m('P5').rotation.y = -3.14;
        a.m('P5').rotation.z = 0;
        a.m('P5').position.x = -15.86;
        a.m('P5').position.y = -5.8;
        a.m('P5').position.z = -24.28;
        a.m('P5').scaling.x = 6;
        a.m('P5').scaling.y = 0.4;
        a.m('P5').scaling.z = 18;
        a.m('P6').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P6').rotation.x = 0;
        a.m('P6').rotation.y = -2.36;
        a.m('P6').rotation.z = 0;
        a.m('P6').position.x = 15.26;
        a.m('P6').position.y = -5.3;
        a.m('P6').position.z = -26.33;
        a.m('P6').scaling.x = 6;
        a.m('P6').scaling.y = 0.4;
        a.m('P6').scaling.z = 10;
        a.m('P7').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P7').rotation.x = 0;
        a.m('P7').rotation.y = -1.57;
        a.m('P7').rotation.z = 0;
        a.m('P7').position.x = 1;
        a.m('P7').position.y = -5.6;
        a.m('P7').position.z = -10.33;
        a.m('P7').scaling.x = 4.2;
        a.m('P7').scaling.y = 0.4;
        a.m('P7').scaling.z = 26;
        a.m('P8').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P8').rotation.x = 0;
        a.m('P8').rotation.y = -2.36;
        a.m('P8').rotation.z = 0;
        a.m('P8').position.x = -13.63;
        a.m('P8').position.y = -5.7;
        a.m('P8').position.z = -13.54;
        a.m('P8').scaling.x = 5;
        a.m('P8').scaling.y = 0.4;
        a.m('P8').scaling.z = 10;
        a.m('P9').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P9').rotation.x = 0;
        a.m('P9').rotation.y = 0;
        a.m('P9').rotation.z = 0;
        a.m('P9').position.x = -11.9;
        a.m('P9').position.y = -7.78;
        a.m('P9').position.z = -145.5;
        a.m('P9').scaling.x = 4;
        a.m('P9').scaling.y = 0.4;
        a.m('P9').scaling.z = 18;
        a.m('P10').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P10').rotation.x = 0;
        a.m('P10').rotation.y = 0;
        a.m('P10').rotation.z = 0;
        a.m('P10').position.x = 0;
        a.m('P10').position.y = 0;
        a.m('P10').position.z = -4.5;
        a.m('P10').scaling.x = 2;
        a.m('P10').scaling.y = 0.4;
        a.m('P10').scaling.z = 11;
        a.m('P11').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P11').rotation.x = 0;
        a.m('P11').rotation.y = -3.14;
        a.m('P11').rotation.z = 0;
        a.m('P11').position.x = 17.83;
        a.m('P11').position.y = -5.4;
        a.m('P11').position.z = -20.08;
        a.m('P11').scaling.x = 6;
        a.m('P11').scaling.y = 0.4;
        a.m('P11').scaling.z = 10;
        a.m('P12').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P12').rotation.x = -0.35;
        a.m('P12').rotation.y = -3.14;
        a.m('P12').rotation.z = 0;
        a.m('P12').position.x = -15.86;
        a.m('P12').position.y = -4.72;
        a.m('P12').position.z = -36.49;
        a.m('P12').scaling.x = 4;
        a.m('P12').scaling.y = 0.4;
        a.m('P12').scaling.z = 7;
        a.m('P13').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P13').rotation.x = 0.35;
        a.m('P13').rotation.y = 0;
        a.m('P13').rotation.z = 0;
        a.m('P13').position.x = -11.9;
        a.m('P13').position.y = -6.01;
        a.m('P13').position.z = -232.76;
        a.m('P13').scaling.x = 4;
        a.m('P13').scaling.y = 0.4;
        a.m('P13').scaling.z = 14;
        a.m('P14').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P14').rotation.x = 0;
        a.m('P14').rotation.y = -3.14;
        a.m('P14').rotation.z = 0;
        a.m('P14').position.x = -15.76;
        a.m('P14').position.y = -5.8;
        a.m('P14').position.z = -67.41;
        a.m('P14').scaling.x = 6;
        a.m('P14').scaling.y = 0.4;
        a.m('P14').scaling.z = 14;
        a.m('P15').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P15').rotation.x = 0;
        a.m('P15').rotation.y = 0;
        a.m('P15').rotation.z = 0;
        a.m('P15').position.x = -14.02;
        a.m('P15').position.y = -0.23;
        a.m('P15').position.z = -117.26;
        a.m('P15').scaling.x = 6;
        a.m('P15').scaling.y = 0.4;
        a.m('P15').scaling.z = 10;
        a.m('P16').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P16').rotation.x = 0;
        a.m('P16').rotation.y = -3.14;
        a.m('P16').rotation.z = 0;
        a.m('P16').position.x = -11.73;
        a.m('P16').position.y = -5.85;
        a.m('P16').position.z = -84.51;
        a.m('P16').scaling.x = 4;
        a.m('P16').scaling.y = 0.4;
        a.m('P16').scaling.z = 7;
        a.m('P17').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P17').rotation.x = 0.44;
        a.m('P17').rotation.y = 0;
        a.m('P17').rotation.z = 0;
        a.m('P17').position.x = -11.88;
        a.m('P17').position.y = -3.2;
        a.m('P17').position.z = -296.56;
        a.m('P17').scaling.x = 4;
        a.m('P17').scaling.y = 0.4;
        a.m('P17').scaling.z = 4;
        a.m('P18').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P18').rotation.x = 0.87;
        a.m('P18').rotation.y = 0;
        a.m('P18').rotation.z = 0;
        a.m('P18').position.x = -11.88;
        a.m('P18').position.y = -0.94;
        a.m('P18').position.z = -299.63;
        a.m('P18').scaling.x = 4;
        a.m('P18').scaling.y = 0.4;
        a.m('P18').scaling.z = 4;
        a.m('P19').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P19').rotation.x = 1.31;
        a.m('P19').rotation.y = 0;
        a.m('P19').rotation.z = 0;
        a.m('P19').position.x = -11.88;
        a.m('P19').position.y = 2.42;
        a.m('P19').position.z = -301.49;
        a.m('P19').scaling.x = 4;
        a.m('P19').scaling.y = 0.4;
        a.m('P19').scaling.z = 4;
        a.m('P20').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P20').rotation.x = 1.75;
        a.m('P20').rotation.y = 0;
        a.m('P20').rotation.z = 0;
        a.m('P20').position.x = -11.88;
        a.m('P20').position.y = 6.28;
        a.m('P20').position.z = -301.57;
        a.m('P20').scaling.x = 4;
        a.m('P20').scaling.y = 0.4;
        a.m('P20').scaling.z = 4;
        a.m('P21').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P21').rotation.x = 0;
        a.m('P21').rotation.y = 0;
        a.m('P21').rotation.z = 0;
        a.m('P21').position.x = -11.88;
        a.m('P21').position.y = 8.37;
        a.m('P21').position.z = -294.84;
        a.m('P21').scaling.x = 4;
        a.m('P21').scaling.y = 0.4;
        a.m('P21').scaling.z = 12.94;
        a.m('P22').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P22').rotation.x = 0;
        a.m('P22').rotation.y = 0;
        a.m('P22').rotation.z = 0;
        a.m('P22').position.x = -9.26;
        a.m('P22').position.y = -7.87;
        a.m('P22').position.z = -199.5;
        a.m('P22').scaling.x = 4;
        a.m('P22').scaling.y = 0.4;
        a.m('P22').scaling.z = 18;
        a.m('P23').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P23').rotation.x = 0;
        a.m('P23').rotation.y = 0;
        a.m('P23').rotation.z = -1.57;
        a.m('P23').position.x = -10.03;
        a.m('P23').position.y = -6.25;
        a.m('P23').position.z = -145.5;
        a.m('P23').scaling.x = 4;
        a.m('P23').scaling.y = 0.4;
        a.m('P23').scaling.z = 18;
        a.m('P24').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P24').rotation.x = 0;
        a.m('P24').rotation.y = 0;
        a.m('P24').rotation.z = 0;
        a.m('P24').position.x = -11.88;
        a.m('P24').position.y = -3.94;
        a.m('P24').position.z = -286.13;
        a.m('P24').scaling.x = 4;
        a.m('P24').scaling.y = 0.4;
        a.m('P24').scaling.z = 18;
        a.m('P25').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P25').rotation.x = 0;
        a.m('P25').rotation.y = 0;
        a.m('P25').rotation.z = 0;
        a.m('P25').position.x = -9.26;
        a.m('P25').position.y = -7.82;
        a.m('P25').position.z = -163.5;
        a.m('P25').scaling.x = 4;
        a.m('P25').scaling.y = 0.4;
        a.m('P25').scaling.z = 18;
        a.m('P26').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P26').rotation.x = 0;
        a.m('P26').rotation.y = 0;
        a.m('P26').rotation.z = 0;
        a.m('P26').position.x = -11.9;
        a.m('P26').position.y = -7.87;
        a.m('P26').position.z = -181.5;
        a.m('P26').scaling.x = 4;
        a.m('P26').scaling.y = 0.4;
        a.m('P26').scaling.z = 18;
        a.m('P27').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P27').rotation.x = 0;
        a.m('P27').rotation.y = 0;
        a.m('P27').rotation.z = 0;
        a.m('P27').position.x = -11.9;
        a.m('P27').position.y = -8.16;
        a.m('P27').position.z = -217.5;
        a.m('P27').scaling.x = 4;
        a.m('P27').scaling.y = 0.4;
        a.m('P27').scaling.z = 18;
        a.m('P28').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P28').rotation.x = 0;
        a.m('P28').rotation.y = -3.14;
        a.m('P28').rotation.z = 0;
        a.m('P28').position.x = -11.9;
        a.m('P28').position.y = -3.73;
        a.m('P28').position.z = -258.21;
        a.m('P28').scaling.x = 8;
        a.m('P28').scaling.y = 0.4;
        a.m('P28').scaling.z = 38;
        a.m('P29').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P29').rotation.x = 1.57;
        a.m('P29').rotation.y = -1.22;
        a.m('P29').rotation.z = 0;
        a.m('P29').position.x = -13.24;
        a.m('P29').position.y = 7.52;
        a.m('P29').position.z = -291.75;
        a.m('P29').scaling.x = 4;
        a.m('P29').scaling.y = 0.4;
        a.m('P29').scaling.z = 2.04;
        a.m('P30').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P30').rotation.x = 1.57;
        a.m('P30').rotation.y = 1.22;
        a.m('P30').rotation.z = 0;
        a.m('P30').position.x = -10.36;
        a.m('P30').position.y = 7.43;
        a.m('P30').position.z = -291.75;
        a.m('P30').scaling.x = 4;
        a.m('P30').scaling.y = 0.4;
        a.m('P30').scaling.z = 2.04;
        a.m('P31').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P31').rotation.x = 0;
        a.m('P31').rotation.y = -3.14;
        a.m('P31').rotation.z = 0;
        a.m('P31').position.x = -15.7;
        a.m('P31').position.y = -5.85;
        a.m('P31').position.z = -77.53;
        a.m('P31').scaling.x = 4;
        a.m('P31').scaling.y = 0.4;
        a.m('P31').scaling.z = 7;
        a.m('P32').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P32').rotation.x = 0;
        a.m('P32').rotation.y = -3.14;
        a.m('P32').rotation.z = 0;
        a.m('P32').position.x = -11.63;
        a.m('P32').position.y = -5.9;
        a.m('P32').position.z = -94.99;
        a.m('P32').scaling.x = 6;
        a.m('P32').scaling.y = 0.4;
        a.m('P32').scaling.z = 14;
        a.m('P33').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P33').rotation.x = -0.23;
        a.m('P33').rotation.y = 0;
        a.m('P33').rotation.z = 0;
        a.m('P33').position.x = -14.21;
        a.m('P33').position.y = -3.45;
        a.m('P33').position.z = -134.89;
        a.m('P33').scaling.x = 4;
        a.m('P33').scaling.y = 0.4;
        a.m('P33').scaling.z = 26;
        a.m('C0').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('C0').rotation.x = 0;
        a.m('C0').rotation.y = 0;
        a.m('C0').rotation.z = 0;
        a.m('C0').position.x = -8.85;
        a.m('C0').position.y = -3.14;
        a.m('C0').position.z = -273.84;
        a.m('C0').scaling.x = 2;
        a.m('C0').scaling.y = 2;
        a.m('C0').scaling.z = 2;
        a.m('C1').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('C1').rotation.x = 0;
        a.m('C1').rotation.y = 0;
        a.m('C1').rotation.z = 0;
        a.m('C1').position.x = -8.85;
        a.m('C1').position.y = -3.14;
        a.m('C1').position.z = -263.84;
        a.m('C1').scaling.x = 2;
        a.m('C1').scaling.y = 2;
        a.m('C1').scaling.z = 2;
        a.m('C2').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('C2').rotation.x = 0;
        a.m('C2').rotation.y = 0;
        a.m('C2').rotation.z = 0;
        a.m('C2').position.x = -8.66;
        a.m('C2').position.y = -3.08;
        a.m('C2').position.z = -254;
        a.m('C2').scaling.x = 2;
        a.m('C2').scaling.y = 2;
        a.m('C2').scaling.z = 2;
        a.m('C3').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('C3').rotation.x = 0;
        a.m('C3').rotation.y = 0;
        a.m('C3').rotation.z = 0;
        a.m('C3').position.x = -15.1;
        a.m('C3').position.y = -3.14;
        a.m('C3').position.z = -268.84;
        a.m('C3').scaling.x = 2;
        a.m('C3').scaling.y = 2;
        a.m('C3').scaling.z = 2;
        a.m('C4').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('C4').rotation.x = 0;
        a.m('C4').rotation.y = 0;
        a.m('C4').rotation.z = 0;
        a.m('C4').position.x = -15.09;
        a.m('C4').position.y = -3.14;
        a.m('C4').position.z = -258.84;
        a.m('C4').scaling.x = 2;
        a.m('C4').scaling.y = 2;
        a.m('C4').scaling.z = 2;
    },
    physics_update: function() {},
    render_update: function() {}
}