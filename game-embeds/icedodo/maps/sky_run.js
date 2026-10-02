var map = {
    title: "Sky Run",
    song: "env2",
    maker: "Kazil",
    spawn: [0, 0.5, 0],
    init: function() {
        a.p([0, -1, -3], [0, 0, 0], [3, 0.5, 6]);
        a.p([0, -21, -491.82], [0, 0, 0], [1000, 0.4, 1000]);
        a.p([-10.04, -11.92, -265.68], [-1.57, 0, 0], [0.5, 18, 10]);
        a.p([-14.74, -11.92, -270.48], [0, 0, 0], [0.5, 18, 10]);
        a.p([-5.27, -11.92, -270.48], [0, 0, 0], [0.5, 18, 10]);
        a.p([-10.04, -11.92, -275.18], [-1.57, 0, 0], [0.5, 18, 10]);
        a.p([-13.35, -1.61, -270.48], [0, 0, -0.79], [0.5, 10, 10]);
        a.p([-6.6, -1.61, -270.48], [0, 0, 0.79], [0.5, 10, 10]);
        a.p([-24.41, -1.61, -51.66], [0, 0, 0.79], [0.5, 10, 10]);
        a.p([-31.17, -1.61, -51.66], [0, 0, -0.79], [0.5, 10, 10]);
        a.p([-23.08, -11.92, -51.66], [0, 0, 0], [0.5, 18, 10]);
        a.p([-32.55, -11.92, -51.66], [0, 0, 0], [0.5, 18, 10]);
        a.p([-27.85, -11.92, -46.86], [-1.57, 0, 0], [0.5, 18, 10]);
        a.p([-17.84, -11.92, -72.83], [-1.57, 0, 0], [0.5, 18, 10]);
        a.p([-22.54, -11.92, -77.63], [0, 0, 0], [0.5, 18, 10]);
        a.p([-13.07, -11.92, -77.63], [0, 0, 0], [0.5, 18, 10]);
        a.p([-17.84, -11.92, -82.33], [-1.57, 0, 0], [0.5, 18, 10]);
        a.p([-21.16, -1.61, -77.63], [0, 0, -0.79], [0.5, 10, 10]);
        a.p([-14.41, -1.61, -77.63], [0, 0, 0.79], [0.5, 10, 10]);
        a.p([30.77, -1.61, -65.73], [0, 0, 0.79], [0.5, 10, 10]);
        a.p([24.02, -1.61, -65.73], [0, 0, -0.79], [0.5, 10, 10]);
        a.p([32.1, -11.92, -65.73], [0, 0, 0], [0.5, 18, 10]);
        a.p([22.64, -11.92, -65.73], [0, 0, 0], [0.5, 18, 10]);
        a.p([27.33, -11.92, -60.93], [-1.57, 0, 0], [0.5, 18, 10]);
        a.p([19.49, -11.92, -85.82], [-1.57, 0, 0], [0.5, 18, 10]);
        a.p([14.79, -11.92, -90.62], [0, 0, 0], [0.5, 18, 10]);
        a.p([24.26, -11.92, -90.61], [0, 0, 0], [0.5, 18, 10]);
        a.p([19.49, -11.92, -95.31], [-1.57, 0, 0], [0.5, 18, 10]);
        a.p([16.18, -1.61, -90.61], [0, 0, -0.79], [0.5, 10, 10]);
        a.p([22.93, -1.61, -90.61], [0, 0, 0.79], [0.5, 10, 10]);
        a.p([-20.15, -1.61, -165.14], [0, 0, 0.79], [0.5, 10, 10]);
        a.p([-26.9, -1.61, -165.14], [0, 0, -0.79], [0.5, 10, 10]);
        a.p([-23.59, -11.92, -169.84], [-1.57, 0, 0], [0.5, 18, 10]);
        a.p([-18.82, -11.92, -165.14], [0, 0, 0], [0.5, 18, 10]);
        a.p([-28.29, -11.92, -165.14], [0, 0, 0], [0.5, 18, 10]);
        a.p([-23.59, -11.92, -160.34], [-1.57, 0, 0], [0.5, 18, 10]);
        a.p([27.21, -11.92, -192.44], [-1.57, 0, 0], [0.5, 18, 10]);
        a.p([22.51, -11.92, -197.24], [0, 0, 0], [0.5, 18, 10]);
        a.p([31.98, -11.92, -197.23], [0, 0, 0], [0.5, 18, 10]);
        a.p([27.21, -11.92, -201.93], [-1.57, 0, 0], [0.5, 18, 10]);
        a.p([23.89, -1.61, -197.23], [0, 0, -0.79], [0.5, 10, 10]);
        a.p([30.65, -1.61, -197.23], [0, 0, 0.79], [0.5, 10, 10]);
        a.p([-13.49, -1.61, -230.3], [0, 0, 0.79], [0.5, 10, 10]);
        a.p([-20.24, -1.61, -230.3], [0, 0, -0.79], [0.5, 10, 10]);
        a.p([-16.93, -11.92, -235], [-1.57, 0, 0], [0.5, 18, 10]);
        a.p([-12.16, -11.92, -230.3], [0, 0, 0], [0.5, 18, 10]);
        a.p([-21.63, -11.92, -230.3], [0, 0, 0], [0.5, 18, 10]);
        a.p([-16.93, -11.92, -225.51], [-1.57, 0, 0], [0.5, 18, 10]);
        a.p([25.49, -1.61, -242.79], [0, 0, 0.79], [0.5, 10, 10]);
        a.p([18.74, -1.61, -242.79], [0, 0, -0.79], [0.5, 10, 10]);
        a.p([22.05, -11.92, -247.49], [-1.57, 0, 0], [0.5, 18, 10]);
        a.p([26.82, -11.92, -242.79], [0, 0, 0], [0.5, 18, 10]);
        a.p([17.35, -11.92, -242.8], [0, 0, 0], [0.5, 18, 10]);
        a.p([22.05, -11.92, -238], [-1.57, 0, 0], [0.5, 18, 10]);
        a.p([0, 5.5, -26.3], [0, 0, 0], [4, 0.5, 12]);
        a.p([-4.68, 5.5, -38.38], [0, 0, 0], [4, 0.5, 12]);
        a.p([7.75, 4.3, -51.37], [-0.77, 0, 0], [4, 0.5, 12]);
        a.p([7.82, -5.83, -71.5], [0, 0, 0], [5.34, 0.5, 12]);
        a.p([2.69, -5.23, -150.24], [0, 0, 0], [4, 0.5, 17.12]);
        a.p([2.69, 8.23, -186.29], [0, 0, 0], [4, 0.5, 12]);
        a.p([-1.58, 8.23, -201.96], [0, 0, 0], [4, 0.5, 18.38]);
        a.p([-1.54, 0.07, -235], [0, 0, 0], [4, 0.5, 13.22]);
        a.p([7.82, 1.92, -63.73], [0, 0.89, 0], [4, 0.5, 5]);
        a.p([7.82, -2.71, -62.94], [0, -0.89, 0], [4, 0.5, 8]);
        a.p([2.69, -0.75, -104.64], [0, 0, 0], [4, 0.5, 12]);
        a.p([0.39, -0.34, -125.63], [0, 0, -1.57], [13.4, 0.5, 32.38]);
        a.p([4.98, -0.34, -125.63], [0, 0, -1.57], [13.4, 0.5, 32.38]);
        a.p([2.69, -1.07, -164.84], [0, 0, 0], [4, 0.5, 12]);
        a.p([2.69, 8.23, -174.02], [0, 0, 0], [4, 0.5, 12]);
        a.p([-1.54, 8.23, -217.52], [0, 0, 0], [4, 0.5, 12]);
        a.p([-2.48, 1.96, -231.27], [-0.44, 0, -1.57], [3.6, 0.5, 6]);
        a.p([-11.53, -0.06, -253.66], [0, 0, -1.57], [4, 0.5, 17.66]);
        a.p([-9.8, -1.87, -253.66], [0, 0, 0], [4, 0.5, 17.66]);
        a.p([0, -1, -10.1], [0, 0, 0], [4, 0.5, 8]);
        a.e([-9.8, -0.8, -281.39]);
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
        a.m('P34').unfreezeWorldMatrix();
        a.m('P34').material = decorations.materials.moving_mat;
        a.m('P35').unfreezeWorldMatrix();
        a.m('P35').material = decorations.materials.moving_mat;
        a.m('P36').unfreezeWorldMatrix();
        a.m('P36').material = decorations.materials.moving_mat;
        a.m('P37').unfreezeWorldMatrix();
        a.m('P37').material = decorations.materials.moving_mat;
        a.m('P38').unfreezeWorldMatrix();
        a.m('P38').material = decorations.materials.moving_mat;
        a.m('P39').unfreezeWorldMatrix();
        a.m('P39').material = decorations.materials.moving_mat;
        a.m('P40').unfreezeWorldMatrix();
        a.m('P40').material = decorations.materials.moving_mat;
        a.m('P41').unfreezeWorldMatrix();
        a.m('P41').material = decorations.materials.moving_mat;
        a.m('P42').unfreezeWorldMatrix();
        a.m('P42').material = decorations.materials.moving_mat;
        a.m('P43').unfreezeWorldMatrix();
        a.m('P43').material = decorations.materials.moving_mat;
        a.m('P44').unfreezeWorldMatrix();
        a.m('P44').material = decorations.materials.moving_mat;
        a.m('P45').unfreezeWorldMatrix();
        a.m('P45').material = decorations.materials.moving_mat;
        a.m('P46').unfreezeWorldMatrix();
        a.m('P46').material = decorations.materials.moving_mat;
        a.m('P47').unfreezeWorldMatrix();
        a.m('P47').material = decorations.materials.moving_mat;
        a.m('P48').unfreezeWorldMatrix();
        a.m('P48').material = decorations.materials.moving_mat;
        a.m('P49').unfreezeWorldMatrix();
        a.m('P49').material = decorations.materials.moving_mat;
        a.m('P50').unfreezeWorldMatrix();
        a.m('P50').material = decorations.materials.moving_mat;
        a.m('P51').unfreezeWorldMatrix();
        a.m('P51').material = decorations.materials.moving_mat;
        a.m('P52').unfreezeWorldMatrix();
        a.m('P52').material = decorations.materials.moving_mat;
        a.m('P53').unfreezeWorldMatrix();
        a.m('P53').material = decorations.materials.moving_mat;
        a.m('P54').unfreezeWorldMatrix();
        a.m('P54').material = decorations.materials.moving_mat;
        a.m('P55').unfreezeWorldMatrix();
        a.m('P55').material = decorations.materials.moving_mat;
        a.m('P56').unfreezeWorldMatrix();
        a.m('P56').material = decorations.materials.moving_mat;
        a.m('P57').unfreezeWorldMatrix();
        a.m('P57').material = decorations.materials.moving_mat;
        a.m('P58').unfreezeWorldMatrix();
        a.m('P58').material = decorations.materials.moving_mat;
        a.m('P59').unfreezeWorldMatrix();
        a.m('P59').material = decorations.materials.moving_mat;
        a.m('P60').unfreezeWorldMatrix();
        a.m('P60').material = decorations.materials.moving_mat;
        a.m('P61').unfreezeWorldMatrix();
        a.m('P61').material = decorations.materials.moving_mat;
        a.m('P62').unfreezeWorldMatrix();
        a.m('P62').material = decorations.materials.moving_mat;
        a.m('P63').unfreezeWorldMatrix();
        a.m('P63').material = decorations.materials.moving_mat;
        a.m('P64').unfreezeWorldMatrix();
        a.m('P64').material = decorations.materials.moving_mat;
        a.m('P65').unfreezeWorldMatrix();
        a.m('P65').material = decorations.materials.moving_mat;
        a.m('P66').unfreezeWorldMatrix();
        a.m('P66').material = decorations.materials.moving_mat;
        a.m('P67').unfreezeWorldMatrix();
        a.m('P67').material = decorations.materials.moving_mat;
        a.m('P68').unfreezeWorldMatrix();
        a.m('P68').material = decorations.materials.moving_mat;
        a.m('P69').unfreezeWorldMatrix();
        a.m('P69').material = decorations.materials.moving_mat;
        a.m('P70').unfreezeWorldMatrix();
        a.m('P70').material = decorations.materials.moving_mat;
        a.m('P71').unfreezeWorldMatrix();
        a.m('P71').material = decorations.materials.moving_mat;
        a.m('P72').unfreezeWorldMatrix();
        a.m('P72').material = decorations.materials.moving_mat;
        a.m('P73').unfreezeWorldMatrix();
        a.m('P73').material = decorations.materials.moving_mat;
    },
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
            case 0:
                if (PZ < -6.1) {
                    this.section_id += 1
                }
                break;
            case 1:
                a.m('P73').position.y += 0.25;
                if (PZ < -14.1) {
                    this.section_id += 1
                }
                break;
            case 2:
                if (PZ < -23.98) {
                    this.section_id += 1
                }
                break;
            case 3:
                a.m('P54').position.x += -0.15000000000000002;
                if (PZ < -32.24) {
                    this.section_id += 1
                }
                break;
            case 4:
                if (PZ < -34.55) {
                    update.set_gravity(default_gravity * 2.0);
                    steer = default_steer * 1.2;
                    this.section_id += 1
                }
                break;
            case 5:
                a.m('P55').rotation.y += -0.018;
                a.m('P55').position.z += -0.1;
                a.m('P55').position.x += 0.1;
                a.m('P55').position.y += -0.03;
                if (PZ < -44.45) {
                    update.set_gravity(default_gravity);
                    steer = default_steer;
                    this.section_id += 1
                }
                break;
            case 6:
                if (PZ < -49.13) {
                    speed = default_speed * 0.35;
                    this.section_id += 1
                }
                break;
            case 7:
                a.m('P56').rotation.y += 0.04000000000000001;
                if (PZ < -50.85) {
                    speed = default_speed;
                    this.section_id += 1
                }
                break;
            case 8:
                if (PZ < -63.84) {
                    speed = default_speed * 0.0;
                    update.set_gravity(default_gravity * 15.0);
                    this.section_id += 1
                }
                break;
            case 9:
                if (PZ < -65.12) {
                    speed = default_speed;
                    update.set_gravity(default_gravity);
                    this.section_id += 1
                }
                break;
            case 10:
                if (PZ < -69.85000000000001) {
                    this.section_id += 1
                }
                break;
            case 11:
                a.m('P57').position.y += 0.05;
                a.m('P57').rotation.y += 0.03;
                a.m('P57').position.z += -0.24;
                a.m('P57').position.x += -0.05;
                if (PZ < -98.83) {
                    this.section_id += 1
                }
                break;
            case 12:
                if (PZ < -110.59) {
                    update.set_gravity(default_gravity * 0.044);
                    steer = default_steer * 1.75;
                    this.section_id += 1
                }
                break;
            case 13:
                if (PZ < -140.67) {
                    update.set_gravity(default_gravity);
                    steer = default_steer;
                    this.section_id += 1
                }
                break;
            case 14:
                if (PZ < -146.81) {
                    this.section_id += 1
                }
                break;
            case 15:
                a.m('P58').position.y += 0.1;
                if (PZ < -158.79000000000002) {
                    this.section_id += 1
                }
                break;
            case 16:
                if (PZ < -168.03) {
                    update.set_gravity(default_gravity * -1.0);
                    this.section_id += 1
                }
                break;
            case 17:
                if (PZ < -180.30999999999997) {
                    update.set_gravity(default_gravity);
                    this.section_id += 1
                }
                break;
            case 18:
                if (PZ < -180.4) {
                    update.set_gravity(default_gravity * -1.001);
                    this.section_id += 1
                }
                break;
            case 19:
                a.m('P59').position.x += -0.1;
                if (PZ < -192.67999999999998) {
                    update.set_gravity(default_gravity);
                    this.section_id += 1
                }
                break;
            case 20:
                if (PZ < -192.89000000000001) {
                    update.set_gravity(default_gravity * -1.002);
                    this.section_id += 1
                }
                break;
            case 21:
                a.m('P60').position.y += -0.1;
                if (PZ < -222.23) {
                    update.set_gravity(default_gravity);
                    this.section_id += 1
                }
                break;
            case 22:
                if (PZ < -228.91) {
                    update.set_gravity(default_gravity * 2.5);
                    this.section_id += 1
                }
                break;
            case 23:
                if (PZ < -235.67) {
                    update.set_gravity(default_gravity);
                    this.section_id += 1
                }
                break;
            case 24:
                if (PZ < -235.85999999999999) {
                    update.set_gravity(default_gravity * 0.3);
                    this.section_id += 1
                }
                break;
            case 25:
                a.m('P61').rotation.z += 0.1;
                if (PZ < -250.54) {
                    update.set_gravity(default_gravity);
                    this.section_id += 1
                }
                break;
            case 26:
                if (PZ < -250.66000000000003) {
                    update.set_gravity(default_gravity * 3.5);
                    this.section_id += 1
                }
                break;
            case 27:
                if (PZ < -255.94) {
                    update.set_gravity(default_gravity);
                    this.section_id += 1
                }
                break;
            case 28:
                if (PZ < -256.15) {
                    update.set_gravity(default_gravity * 0.0);
                    this.section_id += 1
                }
                break;
            case 29:
                if (PZ < -291.85) {
                    update.set_gravity(default_gravity);
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
        a.m('P0').rotation.z = 0;
        a.m('P0').position.x = 0;
        a.m('P0').position.y = -1;
        a.m('P0').position.z = -3;
        a.m('P0').scaling.x = 3;
        a.m('P0').scaling.y = 0.5;
        a.m('P0').scaling.z = 6;
        a.m('P1').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P1').rotation.x = 0;
        a.m('P1').rotation.y = 0;
        a.m('P1').rotation.z = 0;
        a.m('P1').position.x = 0;
        a.m('P1').position.y = -21;
        a.m('P1').position.z = -491.82;
        a.m('P1').scaling.x = 1000;
        a.m('P1').scaling.y = 0.4;
        a.m('P1').scaling.z = 1000;
        a.m('P2').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P2').rotation.x = 0;
        a.m('P2').rotation.y = -1.57;
        a.m('P2').rotation.z = 0;
        a.m('P2').position.x = -10.04;
        a.m('P2').position.y = -11.92;
        a.m('P2').position.z = -265.68;
        a.m('P2').scaling.x = 0.5;
        a.m('P2').scaling.y = 18;
        a.m('P2').scaling.z = 10;
        a.m('P3').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P3').rotation.x = 0;
        a.m('P3').rotation.y = 0;
        a.m('P3').rotation.z = 0;
        a.m('P3').position.x = -14.74;
        a.m('P3').position.y = -11.92;
        a.m('P3').position.z = -270.48;
        a.m('P3').scaling.x = 0.5;
        a.m('P3').scaling.y = 18;
        a.m('P3').scaling.z = 10;
        a.m('P4').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P4').rotation.x = 0;
        a.m('P4').rotation.y = 0;
        a.m('P4').rotation.z = 0;
        a.m('P4').position.x = -5.27;
        a.m('P4').position.y = -11.92;
        a.m('P4').position.z = -270.48;
        a.m('P4').scaling.x = 0.5;
        a.m('P4').scaling.y = 18;
        a.m('P4').scaling.z = 10;
        a.m('P5').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P5').rotation.x = 0;
        a.m('P5').rotation.y = -1.57;
        a.m('P5').rotation.z = 0;
        a.m('P5').position.x = -10.04;
        a.m('P5').position.y = -11.92;
        a.m('P5').position.z = -275.18;
        a.m('P5').scaling.x = 0.5;
        a.m('P5').scaling.y = 18;
        a.m('P5').scaling.z = 10;
        a.m('P6').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P6').rotation.x = 0;
        a.m('P6').rotation.y = 0;
        a.m('P6').rotation.z = -0.79;
        a.m('P6').position.x = -13.35;
        a.m('P6').position.y = -1.61;
        a.m('P6').position.z = -270.48;
        a.m('P6').scaling.x = 0.5;
        a.m('P6').scaling.y = 10;
        a.m('P6').scaling.z = 10;
        a.m('P7').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P7').rotation.x = 0;
        a.m('P7').rotation.y = 0;
        a.m('P7').rotation.z = 0.79;
        a.m('P7').position.x = -6.6;
        a.m('P7').position.y = -1.61;
        a.m('P7').position.z = -270.48;
        a.m('P7').scaling.x = 0.5;
        a.m('P7').scaling.y = 10;
        a.m('P7').scaling.z = 10;
        a.m('P8').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P8').rotation.x = 0;
        a.m('P8').rotation.y = 0;
        a.m('P8').rotation.z = 0.79;
        a.m('P8').position.x = -24.41;
        a.m('P8').position.y = -1.61;
        a.m('P8').position.z = -51.66;
        a.m('P8').scaling.x = 0.5;
        a.m('P8').scaling.y = 10;
        a.m('P8').scaling.z = 10;
        a.m('P9').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P9').rotation.x = 0;
        a.m('P9').rotation.y = 0;
        a.m('P9').rotation.z = -0.79;
        a.m('P9').position.x = -31.17;
        a.m('P9').position.y = -1.61;
        a.m('P9').position.z = -51.66;
        a.m('P9').scaling.x = 0.5;
        a.m('P9').scaling.y = 10;
        a.m('P9').scaling.z = 10;
        a.m('P10').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P10').rotation.x = 0;
        a.m('P10').rotation.y = 0;
        a.m('P10').rotation.z = 0;
        a.m('P10').position.x = -23.08;
        a.m('P10').position.y = -11.92;
        a.m('P10').position.z = -51.66;
        a.m('P10').scaling.x = 0.5;
        a.m('P10').scaling.y = 18;
        a.m('P10').scaling.z = 10;
        a.m('P11').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P11').rotation.x = 0;
        a.m('P11').rotation.y = 0;
        a.m('P11').rotation.z = 0;
        a.m('P11').position.x = -32.55;
        a.m('P11').position.y = -11.92;
        a.m('P11').position.z = -51.66;
        a.m('P11').scaling.x = 0.5;
        a.m('P11').scaling.y = 18;
        a.m('P11').scaling.z = 10;
        a.m('P12').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P12').rotation.x = 0;
        a.m('P12').rotation.y = -1.57;
        a.m('P12').rotation.z = 0;
        a.m('P12').position.x = -27.85;
        a.m('P12').position.y = -11.92;
        a.m('P12').position.z = -46.86;
        a.m('P12').scaling.x = 0.5;
        a.m('P12').scaling.y = 18;
        a.m('P12').scaling.z = 10;
        a.m('P13').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P13').rotation.x = 0;
        a.m('P13').rotation.y = -1.57;
        a.m('P13').rotation.z = 0;
        a.m('P13').position.x = -17.84;
        a.m('P13').position.y = -11.92;
        a.m('P13').position.z = -72.83;
        a.m('P13').scaling.x = 0.5;
        a.m('P13').scaling.y = 18;
        a.m('P13').scaling.z = 10;
        a.m('P14').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P14').rotation.x = 0;
        a.m('P14').rotation.y = 0;
        a.m('P14').rotation.z = 0;
        a.m('P14').position.x = -22.54;
        a.m('P14').position.y = -11.92;
        a.m('P14').position.z = -77.63;
        a.m('P14').scaling.x = 0.5;
        a.m('P14').scaling.y = 18;
        a.m('P14').scaling.z = 10;
        a.m('P15').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P15').rotation.x = 0;
        a.m('P15').rotation.y = 0;
        a.m('P15').rotation.z = 0;
        a.m('P15').position.x = -13.07;
        a.m('P15').position.y = -11.92;
        a.m('P15').position.z = -77.63;
        a.m('P15').scaling.x = 0.5;
        a.m('P15').scaling.y = 18;
        a.m('P15').scaling.z = 10;
        a.m('P16').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P16').rotation.x = 0;
        a.m('P16').rotation.y = -1.57;
        a.m('P16').rotation.z = 0;
        a.m('P16').position.x = -17.84;
        a.m('P16').position.y = -11.92;
        a.m('P16').position.z = -82.33;
        a.m('P16').scaling.x = 0.5;
        a.m('P16').scaling.y = 18;
        a.m('P16').scaling.z = 10;
        a.m('P17').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P17').rotation.x = 0;
        a.m('P17').rotation.y = 0;
        a.m('P17').rotation.z = -0.79;
        a.m('P17').position.x = -21.16;
        a.m('P17').position.y = -1.61;
        a.m('P17').position.z = -77.63;
        a.m('P17').scaling.x = 0.5;
        a.m('P17').scaling.y = 10;
        a.m('P17').scaling.z = 10;
        a.m('P18').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P18').rotation.x = 0;
        a.m('P18').rotation.y = 0;
        a.m('P18').rotation.z = 0.79;
        a.m('P18').position.x = -14.41;
        a.m('P18').position.y = -1.61;
        a.m('P18').position.z = -77.63;
        a.m('P18').scaling.x = 0.5;
        a.m('P18').scaling.y = 10;
        a.m('P18').scaling.z = 10;
        a.m('P19').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P19').rotation.x = 0;
        a.m('P19').rotation.y = 0;
        a.m('P19').rotation.z = 0.79;
        a.m('P19').position.x = 30.77;
        a.m('P19').position.y = -1.61;
        a.m('P19').position.z = -65.73;
        a.m('P19').scaling.x = 0.5;
        a.m('P19').scaling.y = 10;
        a.m('P19').scaling.z = 10;
        a.m('P20').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P20').rotation.x = 0;
        a.m('P20').rotation.y = 0;
        a.m('P20').rotation.z = -0.79;
        a.m('P20').position.x = 24.02;
        a.m('P20').position.y = -1.61;
        a.m('P20').position.z = -65.73;
        a.m('P20').scaling.x = 0.5;
        a.m('P20').scaling.y = 10;
        a.m('P20').scaling.z = 10;
        a.m('P21').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P21').rotation.x = 0;
        a.m('P21').rotation.y = 0;
        a.m('P21').rotation.z = 0;
        a.m('P21').position.x = 32.1;
        a.m('P21').position.y = -11.92;
        a.m('P21').position.z = -65.73;
        a.m('P21').scaling.x = 0.5;
        a.m('P21').scaling.y = 18;
        a.m('P21').scaling.z = 10;
        a.m('P22').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P22').rotation.x = 0;
        a.m('P22').rotation.y = 0;
        a.m('P22').rotation.z = 0;
        a.m('P22').position.x = 22.64;
        a.m('P22').position.y = -11.92;
        a.m('P22').position.z = -65.73;
        a.m('P22').scaling.x = 0.5;
        a.m('P22').scaling.y = 18;
        a.m('P22').scaling.z = 10;
        a.m('P23').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P23').rotation.x = 0;
        a.m('P23').rotation.y = -1.57;
        a.m('P23').rotation.z = 0;
        a.m('P23').position.x = 27.33;
        a.m('P23').position.y = -11.92;
        a.m('P23').position.z = -60.93;
        a.m('P23').scaling.x = 0.5;
        a.m('P23').scaling.y = 18;
        a.m('P23').scaling.z = 10;
        a.m('P24').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P24').rotation.x = 0;
        a.m('P24').rotation.y = -1.57;
        a.m('P24').rotation.z = 0;
        a.m('P24').position.x = 19.49;
        a.m('P24').position.y = -11.92;
        a.m('P24').position.z = -85.82;
        a.m('P24').scaling.x = 0.5;
        a.m('P24').scaling.y = 18;
        a.m('P24').scaling.z = 10;
        a.m('P25').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P25').rotation.x = 0;
        a.m('P25').rotation.y = 0;
        a.m('P25').rotation.z = 0;
        a.m('P25').position.x = 14.79;
        a.m('P25').position.y = -11.92;
        a.m('P25').position.z = -90.62;
        a.m('P25').scaling.x = 0.5;
        a.m('P25').scaling.y = 18;
        a.m('P25').scaling.z = 10;
        a.m('P26').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P26').rotation.x = 0;
        a.m('P26').rotation.y = 0;
        a.m('P26').rotation.z = 0;
        a.m('P26').position.x = 24.26;
        a.m('P26').position.y = -11.92;
        a.m('P26').position.z = -90.61;
        a.m('P26').scaling.x = 0.5;
        a.m('P26').scaling.y = 18;
        a.m('P26').scaling.z = 10;
        a.m('P27').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P27').rotation.x = 0;
        a.m('P27').rotation.y = -1.57;
        a.m('P27').rotation.z = 0;
        a.m('P27').position.x = 19.49;
        a.m('P27').position.y = -11.92;
        a.m('P27').position.z = -95.31;
        a.m('P27').scaling.x = 0.5;
        a.m('P27').scaling.y = 18;
        a.m('P27').scaling.z = 10;
        a.m('P28').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P28').rotation.x = 0;
        a.m('P28').rotation.y = 0;
        a.m('P28').rotation.z = -0.79;
        a.m('P28').position.x = 16.18;
        a.m('P28').position.y = -1.61;
        a.m('P28').position.z = -90.61;
        a.m('P28').scaling.x = 0.5;
        a.m('P28').scaling.y = 10;
        a.m('P28').scaling.z = 10;
        a.m('P29').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P29').rotation.x = 0;
        a.m('P29').rotation.y = 0;
        a.m('P29').rotation.z = 0.79;
        a.m('P29').position.x = 22.93;
        a.m('P29').position.y = -1.61;
        a.m('P29').position.z = -90.61;
        a.m('P29').scaling.x = 0.5;
        a.m('P29').scaling.y = 10;
        a.m('P29').scaling.z = 10;
        a.m('P30').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P30').rotation.x = 0;
        a.m('P30').rotation.y = 0;
        a.m('P30').rotation.z = 0.79;
        a.m('P30').position.x = -20.15;
        a.m('P30').position.y = -1.61;
        a.m('P30').position.z = -165.14;
        a.m('P30').scaling.x = 0.5;
        a.m('P30').scaling.y = 10;
        a.m('P30').scaling.z = 10;
        a.m('P31').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P31').rotation.x = 0;
        a.m('P31').rotation.y = 0;
        a.m('P31').rotation.z = -0.79;
        a.m('P31').position.x = -26.9;
        a.m('P31').position.y = -1.61;
        a.m('P31').position.z = -165.14;
        a.m('P31').scaling.x = 0.5;
        a.m('P31').scaling.y = 10;
        a.m('P31').scaling.z = 10;
        a.m('P32').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P32').rotation.x = 0;
        a.m('P32').rotation.y = -1.57;
        a.m('P32').rotation.z = 0;
        a.m('P32').position.x = -23.59;
        a.m('P32').position.y = -11.92;
        a.m('P32').position.z = -169.84;
        a.m('P32').scaling.x = 0.5;
        a.m('P32').scaling.y = 18;
        a.m('P32').scaling.z = 10;
        a.m('P33').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P33').rotation.x = 0;
        a.m('P33').rotation.y = 0;
        a.m('P33').rotation.z = 0;
        a.m('P33').position.x = -18.82;
        a.m('P33').position.y = -11.92;
        a.m('P33').position.z = -165.14;
        a.m('P33').scaling.x = 0.5;
        a.m('P33').scaling.y = 18;
        a.m('P33').scaling.z = 10;
        a.m('P34').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P34').rotation.x = 0;
        a.m('P34').rotation.y = 0;
        a.m('P34').rotation.z = 0;
        a.m('P34').position.x = -28.29;
        a.m('P34').position.y = -11.92;
        a.m('P34').position.z = -165.14;
        a.m('P34').scaling.x = 0.5;
        a.m('P34').scaling.y = 18;
        a.m('P34').scaling.z = 10;
        a.m('P35').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P35').rotation.x = 0;
        a.m('P35').rotation.y = -1.57;
        a.m('P35').rotation.z = 0;
        a.m('P35').position.x = -23.59;
        a.m('P35').position.y = -11.92;
        a.m('P35').position.z = -160.34;
        a.m('P35').scaling.x = 0.5;
        a.m('P35').scaling.y = 18;
        a.m('P35').scaling.z = 10;
        a.m('P36').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P36').rotation.x = 0;
        a.m('P36').rotation.y = -1.57;
        a.m('P36').rotation.z = 0;
        a.m('P36').position.x = 27.21;
        a.m('P36').position.y = -11.92;
        a.m('P36').position.z = -192.44;
        a.m('P36').scaling.x = 0.5;
        a.m('P36').scaling.y = 18;
        a.m('P36').scaling.z = 10;
        a.m('P37').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P37').rotation.x = 0;
        a.m('P37').rotation.y = 0;
        a.m('P37').rotation.z = 0;
        a.m('P37').position.x = 22.51;
        a.m('P37').position.y = -11.92;
        a.m('P37').position.z = -197.24;
        a.m('P37').scaling.x = 0.5;
        a.m('P37').scaling.y = 18;
        a.m('P37').scaling.z = 10;
        a.m('P38').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P38').rotation.x = 0;
        a.m('P38').rotation.y = 0;
        a.m('P38').rotation.z = 0;
        a.m('P38').position.x = 31.98;
        a.m('P38').position.y = -11.92;
        a.m('P38').position.z = -197.23;
        a.m('P38').scaling.x = 0.5;
        a.m('P38').scaling.y = 18;
        a.m('P38').scaling.z = 10;
        a.m('P39').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P39').rotation.x = 0;
        a.m('P39').rotation.y = -1.57;
        a.m('P39').rotation.z = 0;
        a.m('P39').position.x = 27.21;
        a.m('P39').position.y = -11.92;
        a.m('P39').position.z = -201.93;
        a.m('P39').scaling.x = 0.5;
        a.m('P39').scaling.y = 18;
        a.m('P39').scaling.z = 10;
        a.m('P40').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P40').rotation.x = 0;
        a.m('P40').rotation.y = 0;
        a.m('P40').rotation.z = -0.79;
        a.m('P40').position.x = 23.89;
        a.m('P40').position.y = -1.61;
        a.m('P40').position.z = -197.23;
        a.m('P40').scaling.x = 0.5;
        a.m('P40').scaling.y = 10;
        a.m('P40').scaling.z = 10;
        a.m('P41').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P41').rotation.x = 0;
        a.m('P41').rotation.y = 0;
        a.m('P41').rotation.z = 0.79;
        a.m('P41').position.x = 30.65;
        a.m('P41').position.y = -1.61;
        a.m('P41').position.z = -197.23;
        a.m('P41').scaling.x = 0.5;
        a.m('P41').scaling.y = 10;
        a.m('P41').scaling.z = 10;
        a.m('P42').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P42').rotation.x = 0;
        a.m('P42').rotation.y = 0;
        a.m('P42').rotation.z = 0.79;
        a.m('P42').position.x = -13.49;
        a.m('P42').position.y = -1.61;
        a.m('P42').position.z = -230.3;
        a.m('P42').scaling.x = 0.5;
        a.m('P42').scaling.y = 10;
        a.m('P42').scaling.z = 10;
        a.m('P43').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P43').rotation.x = 0;
        a.m('P43').rotation.y = 0;
        a.m('P43').rotation.z = -0.79;
        a.m('P43').position.x = -20.24;
        a.m('P43').position.y = -1.61;
        a.m('P43').position.z = -230.3;
        a.m('P43').scaling.x = 0.5;
        a.m('P43').scaling.y = 10;
        a.m('P43').scaling.z = 10;
        a.m('P44').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P44').rotation.x = 0;
        a.m('P44').rotation.y = -1.57;
        a.m('P44').rotation.z = 0;
        a.m('P44').position.x = -16.93;
        a.m('P44').position.y = -11.92;
        a.m('P44').position.z = -235;
        a.m('P44').scaling.x = 0.5;
        a.m('P44').scaling.y = 18;
        a.m('P44').scaling.z = 10;
        a.m('P45').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P45').rotation.x = 0;
        a.m('P45').rotation.y = 0;
        a.m('P45').rotation.z = 0;
        a.m('P45').position.x = -12.16;
        a.m('P45').position.y = -11.92;
        a.m('P45').position.z = -230.3;
        a.m('P45').scaling.x = 0.5;
        a.m('P45').scaling.y = 18;
        a.m('P45').scaling.z = 10;
        a.m('P46').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P46').rotation.x = 0;
        a.m('P46').rotation.y = 0;
        a.m('P46').rotation.z = 0;
        a.m('P46').position.x = -21.63;
        a.m('P46').position.y = -11.92;
        a.m('P46').position.z = -230.3;
        a.m('P46').scaling.x = 0.5;
        a.m('P46').scaling.y = 18;
        a.m('P46').scaling.z = 10;
        a.m('P47').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P47').rotation.x = 0;
        a.m('P47').rotation.y = -1.57;
        a.m('P47').rotation.z = 0;
        a.m('P47').position.x = -16.93;
        a.m('P47').position.y = -11.92;
        a.m('P47').position.z = -225.51;
        a.m('P47').scaling.x = 0.5;
        a.m('P47').scaling.y = 18;
        a.m('P47').scaling.z = 10;
        a.m('P48').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P48').rotation.x = 0;
        a.m('P48').rotation.y = 0;
        a.m('P48').rotation.z = 0.79;
        a.m('P48').position.x = 25.49;
        a.m('P48').position.y = -1.61;
        a.m('P48').position.z = -242.79;
        a.m('P48').scaling.x = 0.5;
        a.m('P48').scaling.y = 10;
        a.m('P48').scaling.z = 10;
        a.m('P49').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P49').rotation.x = 0;
        a.m('P49').rotation.y = 0;
        a.m('P49').rotation.z = -0.79;
        a.m('P49').position.x = 18.74;
        a.m('P49').position.y = -1.61;
        a.m('P49').position.z = -242.79;
        a.m('P49').scaling.x = 0.5;
        a.m('P49').scaling.y = 10;
        a.m('P49').scaling.z = 10;
        a.m('P50').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P50').rotation.x = 0;
        a.m('P50').rotation.y = -1.57;
        a.m('P50').rotation.z = 0;
        a.m('P50').position.x = 22.05;
        a.m('P50').position.y = -11.92;
        a.m('P50').position.z = -247.49;
        a.m('P50').scaling.x = 0.5;
        a.m('P50').scaling.y = 18;
        a.m('P50').scaling.z = 10;
        a.m('P51').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P51').rotation.x = 0;
        a.m('P51').rotation.y = 0;
        a.m('P51').rotation.z = 0;
        a.m('P51').position.x = 26.82;
        a.m('P51').position.y = -11.92;
        a.m('P51').position.z = -242.79;
        a.m('P51').scaling.x = 0.5;
        a.m('P51').scaling.y = 18;
        a.m('P51').scaling.z = 10;
        a.m('P52').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P52').rotation.x = 0;
        a.m('P52').rotation.y = 0;
        a.m('P52').rotation.z = 0;
        a.m('P52').position.x = 17.35;
        a.m('P52').position.y = -11.92;
        a.m('P52').position.z = -242.8;
        a.m('P52').scaling.x = 0.5;
        a.m('P52').scaling.y = 18;
        a.m('P52').scaling.z = 10;
        a.m('P53').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P53').rotation.x = 0;
        a.m('P53').rotation.y = -1.57;
        a.m('P53').rotation.z = 0;
        a.m('P53').position.x = 22.05;
        a.m('P53').position.y = -11.92;
        a.m('P53').position.z = -238;
        a.m('P53').scaling.x = 0.5;
        a.m('P53').scaling.y = 18;
        a.m('P53').scaling.z = 10;
        a.m('P54').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P54').rotation.x = 0;
        a.m('P54').rotation.y = 0;
        a.m('P54').rotation.z = 0;
        a.m('P54').position.x = 0;
        a.m('P54').position.y = 5.5;
        a.m('P54').position.z = -26.3;
        a.m('P54').scaling.x = 4;
        a.m('P54').scaling.y = 0.5;
        a.m('P54').scaling.z = 12;
        a.m('P55').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P55').rotation.x = 0;
        a.m('P55').rotation.y = 0;
        a.m('P55').rotation.z = 0;
        a.m('P55').position.x = -4.68;
        a.m('P55').position.y = 5.5;
        a.m('P55').position.z = -38.38;
        a.m('P55').scaling.x = 4;
        a.m('P55').scaling.y = 0.5;
        a.m('P55').scaling.z = 12;
        a.m('P56').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P56').rotation.x = 0;
        a.m('P56').rotation.y = -0.77;
        a.m('P56').rotation.z = 0;
        a.m('P56').position.x = 7.75;
        a.m('P56').position.y = 4.3;
        a.m('P56').position.z = -51.37;
        a.m('P56').scaling.x = 4;
        a.m('P56').scaling.y = 0.5;
        a.m('P56').scaling.z = 12;
        a.m('P57').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P57').rotation.x = 0;
        a.m('P57').rotation.y = 0;
        a.m('P57').rotation.z = 0;
        a.m('P57').position.x = 7.82;
        a.m('P57').position.y = -5.83;
        a.m('P57').position.z = -71.5;
        a.m('P57').scaling.x = 5.34;
        a.m('P57').scaling.y = 0.5;
        a.m('P57').scaling.z = 12;
        a.m('P58').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P58').rotation.x = 0;
        a.m('P58').rotation.y = 0;
        a.m('P58').rotation.z = 0;
        a.m('P58').position.x = 2.69;
        a.m('P58').position.y = -5.23;
        a.m('P58').position.z = -150.24;
        a.m('P58').scaling.x = 4;
        a.m('P58').scaling.y = 0.5;
        a.m('P58').scaling.z = 17.12;
        a.m('P59').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P59').rotation.x = 0;
        a.m('P59').rotation.y = 0;
        a.m('P59').rotation.z = 0;
        a.m('P59').position.x = 2.69;
        a.m('P59').position.y = 8.23;
        a.m('P59').position.z = -186.29;
        a.m('P59').scaling.x = 4;
        a.m('P59').scaling.y = 0.5;
        a.m('P59').scaling.z = 12;
        a.m('P60').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P60').rotation.x = 0;
        a.m('P60').rotation.y = 0;
        a.m('P60').rotation.z = 0;
        a.m('P60').position.x = -1.58;
        a.m('P60').position.y = 8.23;
        a.m('P60').position.z = -201.96;
        a.m('P60').scaling.x = 4;
        a.m('P60').scaling.y = 0.5;
        a.m('P60').scaling.z = 18.38;
        a.m('P61').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P61').rotation.x = 0;
        a.m('P61').rotation.y = 0;
        a.m('P61').rotation.z = 0;
        a.m('P61').position.x = -1.54;
        a.m('P61').position.y = 0.07;
        a.m('P61').position.z = -235;
        a.m('P61').scaling.x = 4;
        a.m('P61').scaling.y = 0.5;
        a.m('P61').scaling.z = 13.22;
        a.m('P62').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P62').rotation.x = 0.89;
        a.m('P62').rotation.y = 0;
        a.m('P62').rotation.z = 0;
        a.m('P62').position.x = 7.82;
        a.m('P62').position.y = 1.92;
        a.m('P62').position.z = -63.73;
        a.m('P62').scaling.x = 4;
        a.m('P62').scaling.y = 0.5;
        a.m('P62').scaling.z = 5;
        a.m('P63').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P63').rotation.x = -0.89;
        a.m('P63').rotation.y = 0;
        a.m('P63').rotation.z = 0;
        a.m('P63').position.x = 7.82;
        a.m('P63').position.y = -2.71;
        a.m('P63').position.z = -62.94;
        a.m('P63').scaling.x = 4;
        a.m('P63').scaling.y = 0.5;
        a.m('P63').scaling.z = 8;
        a.m('P64').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P64').rotation.x = 0;
        a.m('P64').rotation.y = 0;
        a.m('P64').rotation.z = 0;
        a.m('P64').position.x = 2.69;
        a.m('P64').position.y = -0.75;
        a.m('P64').position.z = -104.64;
        a.m('P64').scaling.x = 4;
        a.m('P64').scaling.y = 0.5;
        a.m('P64').scaling.z = 12;
        a.m('P65').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P65').rotation.x = 0;
        a.m('P65').rotation.y = 0;
        a.m('P65').rotation.z = -1.57;
        a.m('P65').position.x = 0.39;
        a.m('P65').position.y = -0.34;
        a.m('P65').position.z = -125.63;
        a.m('P65').scaling.x = 13.4;
        a.m('P65').scaling.y = 0.5;
        a.m('P65').scaling.z = 32.38;
        a.m('P66').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P66').rotation.x = 0;
        a.m('P66').rotation.y = 0;
        a.m('P66').rotation.z = -1.57;
        a.m('P66').position.x = 4.98;
        a.m('P66').position.y = -0.34;
        a.m('P66').position.z = -125.63;
        a.m('P66').scaling.x = 13.4;
        a.m('P66').scaling.y = 0.5;
        a.m('P66').scaling.z = 32.38;
        a.m('P67').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P67').rotation.x = 0;
        a.m('P67').rotation.y = 0;
        a.m('P67').rotation.z = 0;
        a.m('P67').position.x = 2.69;
        a.m('P67').position.y = -1.07;
        a.m('P67').position.z = -164.84;
        a.m('P67').scaling.x = 4;
        a.m('P67').scaling.y = 0.5;
        a.m('P67').scaling.z = 12;
        a.m('P68').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P68').rotation.x = 0;
        a.m('P68').rotation.y = 0;
        a.m('P68').rotation.z = 0;
        a.m('P68').position.x = 2.69;
        a.m('P68').position.y = 8.23;
        a.m('P68').position.z = -174.02;
        a.m('P68').scaling.x = 4;
        a.m('P68').scaling.y = 0.5;
        a.m('P68').scaling.z = 12;
        a.m('P69').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P69').rotation.x = 0;
        a.m('P69').rotation.y = 0;
        a.m('P69').rotation.z = 0;
        a.m('P69').position.x = -1.54;
        a.m('P69').position.y = 8.23;
        a.m('P69').position.z = -217.52;
        a.m('P69').scaling.x = 4;
        a.m('P69').scaling.y = 0.5;
        a.m('P69').scaling.z = 12;
        a.m('P70').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P70').rotation.x = 0;
        a.m('P70').rotation.y = -0.44;
        a.m('P70').rotation.z = -1.57;
        a.m('P70').position.x = -2.48;
        a.m('P70').position.y = 1.96;
        a.m('P70').position.z = -231.27;
        a.m('P70').scaling.x = 3.6;
        a.m('P70').scaling.y = 0.5;
        a.m('P70').scaling.z = 6;
        a.m('P71').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P71').rotation.x = 0;
        a.m('P71').rotation.y = 0;
        a.m('P71').rotation.z = -1.57;
        a.m('P71').position.x = -11.53;
        a.m('P71').position.y = -0.06;
        a.m('P71').position.z = -253.66;
        a.m('P71').scaling.x = 4;
        a.m('P71').scaling.y = 0.5;
        a.m('P71').scaling.z = 17.66;
        a.m('P72').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P72').rotation.x = 0;
        a.m('P72').rotation.y = 0;
        a.m('P72').rotation.z = 0;
        a.m('P72').position.x = -9.8;
        a.m('P72').position.y = -1.87;
        a.m('P72').position.z = -253.66;
        a.m('P72').scaling.x = 4;
        a.m('P72').scaling.y = 0.5;
        a.m('P72').scaling.z = 17.66;
        a.m('P73').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P73').rotation.x = 0;
        a.m('P73').rotation.y = 0;
        a.m('P73').rotation.z = 0;
        a.m('P73').position.x = 0;
        a.m('P73').position.y = -1;
        a.m('P73').position.z = -10.1;
        a.m('P73').scaling.x = 4;
        a.m('P73').scaling.y = 0.5;
        a.m('P73').scaling.z = 8;
    },
    physics_update: function() {},
    render_update: function() {}
}
