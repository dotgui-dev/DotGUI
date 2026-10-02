var map = {
    title: "Trek",
    song: "env2",
    maker: "Kazil",
    spawn: [0, 0.5, 0],
    init: function() {
        a.c([18.32, 18.78, -73.38]);
        a.c([20.66, 18.78, -69.6]);
        a.c([15.96, 18.78, -69.65]);
        a.p([0, -0.1, -2], [0, 0, 0], [2.5, 0.4, 5.5]);
        a.p([-1.55, -0.08, -11.27], [0.79, 0, 0], [2.5, 0.4, 5.5]);
        a.p([0, -0.1, -7.55], [0, 0, 0], [2.5, 0.4, 5.5]);
        a.p([-5.49, -0.08, -15.2], [0.79, 0, 0], [2.5, 0.4, 5.5]);
        a.p([-9.13, 1.23, -18.85], [0.79, 0.52, 0], [2.5, 0.4, 5.5]);
        a.p([-11.45, 2.57, -21.18], [0.79, 0, 0], [2.5, 0.4, 2]);
        a.p([-11.42, 2.61, -28.45], [-0.35, 0, 0], [2.8, 0.4, 5.5]);
        a.p([-11.77, 2.59, -23.87], [0.12, 0, 0], [3.2, 0.4, 5.5]);
        a.p([-8.37, 5.29, -39.5], [0, 0, 0], [2.96, 0.4, 5.5]);
        a.p([18.26, 1.78, -55.59], [0, 0, 0], [2.82, 0.48, 5.16]);
        a.p([-4.85, 12.38, -71.35], [0, 0, 0], [2.5, 0.4, 5.5]);
        a.p([-8.53, 5.23, -36.32], [-0.35, 0, 0], [2.8, 0.4, 2]);
        a.p([-9.64, 3.87, -33.24], [-0.35, 0.52, 0], [2.8, 0.4, 5.5]);
        a.p([-7.01, 5.29, -49.07], [0, 0, 0], [2.96, 0.4, 5.5]);
        a.p([-4.85, 13.81, -76.37], [0, 0.52, 0], [2.5, 0.4, 5.5]);
        a.p([-4.84, 15.16, -79.09], [0, 0, 0], [2.5, 0.4, 1]);
        a.p([-3.92, 15.19, -81.66], [-0.35, 0, 0], [2.7, 0.4, 5.5]);
        a.p([-1.28, 15.26, -85.38], [-0.87, 0, 0], [2.7, 0.4, 5.5]);
        a.p([2.68, 15.31, -86.79], [-1.57, 0, 0], [2.7, 0.4, 5.5]);
        a.p([18.26, 18.11, -79.29], [-3.14, 0, 0], [2.8, 0.4, 5.5]);
        a.p([16.86, 18.06, -83.2], [-2.44, 0, 0], [2.8, 0.4, 5.5]);
        a.p([13.13, 17.99, -85.85], [-1.92, 0, 0], [2.8, 0.4, 5.5]);
        a.p([10.54, 17.95, -86.77], [-1.57, 0, 0], [2.7, 0.4, 1]);
        a.p([7.75, 16.6, -86.78], [-1.57, 0.52, 0], [2.7, 0.4, 5.5]);
        a.p([18.26, 18.11, -71.96], [-3.14, 0, 0], [6.82, 0.4, 8.86]);
        a.p([18.26, 3.09, -50.79], [0, -0.52, 0], [2.82, 0.48, 5.16]);
        a.p([13.59, 3.05, -39.52], [-0.79, 0.52, 0], [2.82, 0.48, 5.16]);
        a.p([18.26, 4.26, -46.09], [0, 0, 0], [2.82, 0.48, 5.16]);
        a.p([16.84, 4.3, -42.78], [-0.79, 0, 0], [2.82, 0.48, 5.16]);
        a.p([10.28, 1.83, -36.27], [-0.79, 0, 0], [2.82, 0.48, 5.16]);
        a.p([6.61, 1.83, -32.6], [-0.79, 0, 0], [2.82, 0.48, 5.16]);
        a.p([-8.38, 5.29, -44.29], [0, 0, 0], [2.96, 0.4, 4]);
        a.p([-7.01, 5.29, -54.64], [0, 0, 0], [2.96, 0.4, 5.5]);
        a.e([5.66, 2.52, -31.63]);
    },
    post: function() {
        a.m('C0').unfreezeWorldMatrix();
        a.m('C0').material = decorations.materials.moving_mat;
        a.m('C1').unfreezeWorldMatrix();
        a.m('C1').material = decorations.materials.moving_mat;
        a.m('C2').unfreezeWorldMatrix();
        a.m('C2').material = decorations.materials.moving_mat;
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
    },
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
            case 0:
                if (PZ < -1.2100000000000009) {
                    speed = default_speed * 0.75;
                    update.set_gravity(default_gravity * 15.0);
                    steer = default_steer * 1.1;
                    this.section_id += 1
                }
                break;
            case 1:
                if (PZ < -41.87) {
                    speed = default_speed;
                    update.set_gravity(default_gravity);
                    steer = default_steer;
                    this.section_id += 1
                }
                break;
            case 2:
                if (PZ < -41.980000000000004) {
                    speed = default_speed * 0.75;
                    this.section_id += 1
                }
                break;
            case 3:
                a.m('P31').position.x += 0.05;
                if (PZ < -52) {
                    speed = default_speed;
                    this.section_id += 1
                }
                break;
            case 4:
                if (PZ < -52.12) {
                    speed = default_speed * 0.8;
                    this.section_id += 1
                }
                break;
            case 5:
                a.m('P32').position.y += 0.1;
                a.m('P32').position.z += -0.15000000000000002;
                a.m('P32').position.x += 0.03;
                if (PZ < -68.24) {
                    speed = default_speed;
                    this.section_id += 1
                }
                break;
            case 6:
                if (PZ < -68.37) {
                    speed = default_speed * 0.75;
                    steer = default_steer * 1.101;
                    this.section_id += 1
                }
                break;
            case 7:
                if (PZ < -78.85) {
                    speed = default_speed;
                    steer = default_steer;
                    this.section_id += 1
                }
                break;
            case 8:
                if (PZ < -78.91) {
                    speed = default_speed * 0.75;
                    steer = default_steer * 1.203;
                    update.set_gravity(default_gravity * 0.5);
                    this.section_id += 1
                }
                break;
            case 9:
                if (PZ < -97.15) {
                    speed = default_speed;
                    steer = default_steer;
                    update.set_gravity(default_gravity);
                    this.section_id += 1
                }
                break;
        }
    },
    reset: function() {
        this.section_id = 0;
        a.m('C0').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('C0').rotation.x = 0;
        a.m('C0').rotation.y = 0;
        a.m('C0').rotation.z = 0;
        a.m('C0').position.x = 18.32;
        a.m('C0').position.y = 18.78;
        a.m('C0').position.z = -73.38;
        a.m('C0').scaling.x = 2;
        a.m('C0').scaling.y = 2;
        a.m('C0').scaling.z = 2;
        a.m('C1').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('C1').rotation.x = 0;
        a.m('C1').rotation.y = 0;
        a.m('C1').rotation.z = 0;
        a.m('C1').position.x = 20.66;
        a.m('C1').position.y = 18.78;
        a.m('C1').position.z = -69.6;
        a.m('C1').scaling.x = 2;
        a.m('C1').scaling.y = 2;
        a.m('C1').scaling.z = 2;
        a.m('C2').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('C2').rotation.x = 0;
        a.m('C2').rotation.y = 0;
        a.m('C2').rotation.z = 0;
        a.m('C2').position.x = 15.96;
        a.m('C2').position.y = 18.78;
        a.m('C2').position.z = -69.65;
        a.m('C2').scaling.x = 2;
        a.m('C2').scaling.y = 2;
        a.m('C2').scaling.z = 2;
        a.m('P0').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P0').rotation.x = 0;
        a.m('P0').rotation.y = 0;
        a.m('P0').rotation.z = 0;
        a.m('P0').position.x = 0;
        a.m('P0').position.y = -0.1;
        a.m('P0').position.z = -2;
        a.m('P0').scaling.x = 2.5;
        a.m('P0').scaling.y = 0.4;
        a.m('P0').scaling.z = 5.5;
        a.m('P1').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P1').rotation.x = 0;
        a.m('P1').rotation.y = 0.79;
        a.m('P1').rotation.z = 0;
        a.m('P1').position.x = -1.55;
        a.m('P1').position.y = -0.08;
        a.m('P1').position.z = -11.27;
        a.m('P1').scaling.x = 2.5;
        a.m('P1').scaling.y = 0.4;
        a.m('P1').scaling.z = 5.5;
        a.m('P2').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P2').rotation.x = 0;
        a.m('P2').rotation.y = 0;
        a.m('P2').rotation.z = 0;
        a.m('P2').position.x = 0;
        a.m('P2').position.y = -0.1;
        a.m('P2').position.z = -7.55;
        a.m('P2').scaling.x = 2.5;
        a.m('P2').scaling.y = 0.4;
        a.m('P2').scaling.z = 5.5;
        a.m('P3').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P3').rotation.x = 0;
        a.m('P3').rotation.y = 0.79;
        a.m('P3').rotation.z = 0;
        a.m('P3').position.x = -5.49;
        a.m('P3').position.y = -0.08;
        a.m('P3').position.z = -15.2;
        a.m('P3').scaling.x = 2.5;
        a.m('P3').scaling.y = 0.4;
        a.m('P3').scaling.z = 5.5;
        a.m('P4').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P4').rotation.x = 0.52;
        a.m('P4').rotation.y = 0.79;
        a.m('P4').rotation.z = 0;
        a.m('P4').position.x = -9.13;
        a.m('P4').position.y = 1.23;
        a.m('P4').position.z = -18.85;
        a.m('P4').scaling.x = 2.5;
        a.m('P4').scaling.y = 0.4;
        a.m('P4').scaling.z = 5.5;
        a.m('P5').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P5').rotation.x = 0;
        a.m('P5').rotation.y = 0.79;
        a.m('P5').rotation.z = 0;
        a.m('P5').position.x = -11.45;
        a.m('P5').position.y = 2.57;
        a.m('P5').position.z = -21.18;
        a.m('P5').scaling.x = 2.5;
        a.m('P5').scaling.y = 0.4;
        a.m('P5').scaling.z = 2;
        a.m('P6').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P6').rotation.x = 0;
        a.m('P6').rotation.y = -0.35;
        a.m('P6').rotation.z = 0;
        a.m('P6').position.x = -11.42;
        a.m('P6').position.y = 2.61;
        a.m('P6').position.z = -28.45;
        a.m('P6').scaling.x = 2.8;
        a.m('P6').scaling.y = 0.4;
        a.m('P6').scaling.z = 5.5;
        a.m('P7').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P7').rotation.x = 0;
        a.m('P7').rotation.y = 0.12;
        a.m('P7').rotation.z = 0;
        a.m('P7').position.x = -11.77;
        a.m('P7').position.y = 2.59;
        a.m('P7').position.z = -23.87;
        a.m('P7').scaling.x = 3.2;
        a.m('P7').scaling.y = 0.4;
        a.m('P7').scaling.z = 5.5;
        a.m('P8').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P8').rotation.x = 0;
        a.m('P8').rotation.y = 0;
        a.m('P8').rotation.z = 0;
        a.m('P8').position.x = -8.37;
        a.m('P8').position.y = 5.29;
        a.m('P8').position.z = -39.5;
        a.m('P8').scaling.x = 2.96;
        a.m('P8').scaling.y = 0.4;
        a.m('P8').scaling.z = 5.5;
        a.m('P9').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P9').rotation.x = 0;
        a.m('P9').rotation.y = 0;
        a.m('P9').rotation.z = 0;
        a.m('P9').position.x = 18.26;
        a.m('P9').position.y = 1.78;
        a.m('P9').position.z = -55.59;
        a.m('P9').scaling.x = 2.82;
        a.m('P9').scaling.y = 0.48;
        a.m('P9').scaling.z = 5.16;
        a.m('P10').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P10').rotation.x = 0;
        a.m('P10').rotation.y = 0;
        a.m('P10').rotation.z = 0;
        a.m('P10').position.x = -4.85;
        a.m('P10').position.y = 12.38;
        a.m('P10').position.z = -71.35;
        a.m('P10').scaling.x = 2.5;
        a.m('P10').scaling.y = 0.4;
        a.m('P10').scaling.z = 5.5;
        a.m('P11').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P11').rotation.x = 0;
        a.m('P11').rotation.y = -0.35;
        a.m('P11').rotation.z = 0;
        a.m('P11').position.x = -8.53;
        a.m('P11').position.y = 5.23;
        a.m('P11').position.z = -36.32;
        a.m('P11').scaling.x = 2.8;
        a.m('P11').scaling.y = 0.4;
        a.m('P11').scaling.z = 2;
        a.m('P12').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P12').rotation.x = 0.52;
        a.m('P12').rotation.y = -0.35;
        a.m('P12').rotation.z = 0;
        a.m('P12').position.x = -9.64;
        a.m('P12').position.y = 3.87;
        a.m('P12').position.z = -33.24;
        a.m('P12').scaling.x = 2.8;
        a.m('P12').scaling.y = 0.4;
        a.m('P12').scaling.z = 5.5;
        a.m('P13').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P13').rotation.x = 0;
        a.m('P13').rotation.y = 0;
        a.m('P13').rotation.z = 0;
        a.m('P13').position.x = -7.01;
        a.m('P13').position.y = 5.29;
        a.m('P13').position.z = -49.07;
        a.m('P13').scaling.x = 2.96;
        a.m('P13').scaling.y = 0.4;
        a.m('P13').scaling.z = 5.5;
        a.m('P14').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P14').rotation.x = 0.52;
        a.m('P14').rotation.y = 0;
        a.m('P14').rotation.z = 0;
        a.m('P14').position.x = -4.85;
        a.m('P14').position.y = 13.81;
        a.m('P14').position.z = -76.37;
        a.m('P14').scaling.x = 2.5;
        a.m('P14').scaling.y = 0.4;
        a.m('P14').scaling.z = 5.5;
        a.m('P15').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P15').rotation.x = 0;
        a.m('P15').rotation.y = 0;
        a.m('P15').rotation.z = 0;
        a.m('P15').position.x = -4.84;
        a.m('P15').position.y = 15.16;
        a.m('P15').position.z = -79.09;
        a.m('P15').scaling.x = 2.5;
        a.m('P15').scaling.y = 0.4;
        a.m('P15').scaling.z = 1;
        a.m('P16').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P16').rotation.x = 0;
        a.m('P16').rotation.y = -0.35;
        a.m('P16').rotation.z = 0;
        a.m('P16').position.x = -3.92;
        a.m('P16').position.y = 15.19;
        a.m('P16').position.z = -81.66;
        a.m('P16').scaling.x = 2.7;
        a.m('P16').scaling.y = 0.4;
        a.m('P16').scaling.z = 5.5;
        a.m('P17').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P17').rotation.x = 0;
        a.m('P17').rotation.y = -0.87;
        a.m('P17').rotation.z = 0;
        a.m('P17').position.x = -1.28;
        a.m('P17').position.y = 15.26;
        a.m('P17').position.z = -85.38;
        a.m('P17').scaling.x = 2.7;
        a.m('P17').scaling.y = 0.4;
        a.m('P17').scaling.z = 5.5;
        a.m('P18').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P18').rotation.x = 0;
        a.m('P18').rotation.y = -1.57;
        a.m('P18').rotation.z = 0;
        a.m('P18').position.x = 2.68;
        a.m('P18').position.y = 15.31;
        a.m('P18').position.z = -86.79;
        a.m('P18').scaling.x = 2.7;
        a.m('P18').scaling.y = 0.4;
        a.m('P18').scaling.z = 5.5;
        a.m('P19').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P19').rotation.x = 0;
        a.m('P19').rotation.y = -3.14;
        a.m('P19').rotation.z = 0;
        a.m('P19').position.x = 18.26;
        a.m('P19').position.y = 18.11;
        a.m('P19').position.z = -79.29;
        a.m('P19').scaling.x = 2.8;
        a.m('P19').scaling.y = 0.4;
        a.m('P19').scaling.z = 5.5;
        a.m('P20').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P20').rotation.x = 0;
        a.m('P20').rotation.y = -2.44;
        a.m('P20').rotation.z = 0;
        a.m('P20').position.x = 16.86;
        a.m('P20').position.y = 18.06;
        a.m('P20').position.z = -83.2;
        a.m('P20').scaling.x = 2.8;
        a.m('P20').scaling.y = 0.4;
        a.m('P20').scaling.z = 5.5;
        a.m('P21').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P21').rotation.x = 0;
        a.m('P21').rotation.y = -1.92;
        a.m('P21').rotation.z = 0;
        a.m('P21').position.x = 13.13;
        a.m('P21').position.y = 17.99;
        a.m('P21').position.z = -85.85;
        a.m('P21').scaling.x = 2.8;
        a.m('P21').scaling.y = 0.4;
        a.m('P21').scaling.z = 5.5;
        a.m('P22').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P22').rotation.x = 0;
        a.m('P22').rotation.y = -1.57;
        a.m('P22').rotation.z = 0;
        a.m('P22').position.x = 10.54;
        a.m('P22').position.y = 17.95;
        a.m('P22').position.z = -86.77;
        a.m('P22').scaling.x = 2.7;
        a.m('P22').scaling.y = 0.4;
        a.m('P22').scaling.z = 1;
        a.m('P23').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P23').rotation.x = 0.52;
        a.m('P23').rotation.y = -1.57;
        a.m('P23').rotation.z = 0;
        a.m('P23').position.x = 7.75;
        a.m('P23').position.y = 16.6;
        a.m('P23').position.z = -86.78;
        a.m('P23').scaling.x = 2.7;
        a.m('P23').scaling.y = 0.4;
        a.m('P23').scaling.z = 5.5;
        a.m('P24').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P24').rotation.x = 0;
        a.m('P24').rotation.y = -3.14;
        a.m('P24').rotation.z = 0;
        a.m('P24').position.x = 18.26;
        a.m('P24').position.y = 18.11;
        a.m('P24').position.z = -71.96;
        a.m('P24').scaling.x = 6.82;
        a.m('P24').scaling.y = 0.4;
        a.m('P24').scaling.z = 8.86;
        a.m('P25').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P25').rotation.x = -0.52;
        a.m('P25').rotation.y = 0;
        a.m('P25').rotation.z = 0;
        a.m('P25').position.x = 18.26;
        a.m('P25').position.y = 3.09;
        a.m('P25').position.z = -50.79;
        a.m('P25').scaling.x = 2.82;
        a.m('P25').scaling.y = 0.48;
        a.m('P25').scaling.z = 5.16;
        a.m('P26').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P26').rotation.x = 0.52;
        a.m('P26').rotation.y = -0.79;
        a.m('P26').rotation.z = 0;
        a.m('P26').position.x = 13.59;
        a.m('P26').position.y = 3.05;
        a.m('P26').position.z = -39.52;
        a.m('P26').scaling.x = 2.82;
        a.m('P26').scaling.y = 0.48;
        a.m('P26').scaling.z = 5.16;
        a.m('P27').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P27').rotation.x = 0;
        a.m('P27').rotation.y = 0;
        a.m('P27').rotation.z = 0;
        a.m('P27').position.x = 18.26;
        a.m('P27').position.y = 4.26;
        a.m('P27').position.z = -46.09;
        a.m('P27').scaling.x = 2.82;
        a.m('P27').scaling.y = 0.48;
        a.m('P27').scaling.z = 5.16;
        a.m('P28').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P28').rotation.x = 0;
        a.m('P28').rotation.y = -0.79;
        a.m('P28').rotation.z = 0;
        a.m('P28').position.x = 16.84;
        a.m('P28').position.y = 4.3;
        a.m('P28').position.z = -42.78;
        a.m('P28').scaling.x = 2.82;
        a.m('P28').scaling.y = 0.48;
        a.m('P28').scaling.z = 5.16;
        a.m('P29').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P29').rotation.x = 0;
        a.m('P29').rotation.y = -0.79;
        a.m('P29').rotation.z = 0;
        a.m('P29').position.x = 10.28;
        a.m('P29').position.y = 1.83;
        a.m('P29').position.z = -36.27;
        a.m('P29').scaling.x = 2.82;
        a.m('P29').scaling.y = 0.48;
        a.m('P29').scaling.z = 5.16;
        a.m('P30').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P30').rotation.x = 0;
        a.m('P30').rotation.y = -0.79;
        a.m('P30').rotation.z = 0;
        a.m('P30').position.x = 6.61;
        a.m('P30').position.y = 1.83;
        a.m('P30').position.z = -32.6;
        a.m('P30').scaling.x = 2.82;
        a.m('P30').scaling.y = 0.48;
        a.m('P30').scaling.z = 5.16;
        a.m('P31').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P31').rotation.x = 0;
        a.m('P31').rotation.y = 0;
        a.m('P31').rotation.z = 0;
        a.m('P31').position.x = -8.38;
        a.m('P31').position.y = 5.29;
        a.m('P31').position.z = -44.29;
        a.m('P31').scaling.x = 2.96;
        a.m('P31').scaling.y = 0.4;
        a.m('P31').scaling.z = 4;
        a.m('P32').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P32').rotation.x = 0;
        a.m('P32').rotation.y = 0;
        a.m('P32').rotation.z = 0;
        a.m('P32').position.x = -7.01;
        a.m('P32').position.y = 5.29;
        a.m('P32').position.z = -54.64;
        a.m('P32').scaling.x = 2.96;
        a.m('P32').scaling.y = 0.4;
        a.m('P32').scaling.z = 5.5;
    },
    physics_update: function() {},
    render_update: function() {}
}
