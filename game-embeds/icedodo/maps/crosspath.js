var map = {
    title: "Cross Path",
    song: "env2",
    maker: "Kazil",
    spawn: [0, 0.5, 0],
    init: function() {
        a.p([0.35, -0.87, -1.97], [0, 0, 0], [2.82, 0.48, 5.16]);
        a.p([0.35, -0.88, -12.81], [0, 0, 0], [2.82, 0.48, 5.16]);
        a.p([0.35, -0.88, -7.33], [0, 0, 0], [2.82, 0.48, 5.16]);
        a.p([-0.04, 6.62, -200.84], [0, 0, 0], [10.86, 0.48, 22.58]);
        a.p([-13.55, 5.5, -54.93], [-1.57, 0, 0], [0.6, 18.18, 13.42]);
        a.p([7, 5.5, -59.27], [0, 0, 0], [0.6, 18.18, 9]);
        a.p([-11.5, 3, -83.43], [0, 0, -1.57], [8, 0.48, 14]);
        a.p([-8, 3, -83.43], [0, 0, 0], [8, 0.48, 14]);
        a.p([8, 3, -83.43], [0, 0, 0], [8, 0.48, 14]);
        a.p([11.5, 3, -83.43], [0, 0, -1.57], [8, 0.48, 14]);
        a.p([0, 2.26, -75.66], [0.79, 0, 0], [0.6, 0.2, 6]);
        a.p([0, 2.26, -75.66], [-0.79, 0, 0], [0.6, 0.2, 6]);
        a.p([0, -1.76, -54.14], [-0.79, 0, 0], [0.6, 0.2, 6]);
        a.p([0, -1.76, -54.14], [0.79, 0, 0], [0.6, 0.2, 6]);
        a.p([0, 10.48, -112.3], [0.4, 0, 0], [2.6, 0.2, 18]);
        a.p([0, 10.55, -112.3], [-0.4, 0, 0], [2.6, 0.2, 18]);
        a.p([-7, 5.5, -59.27], [0, 0, 0], [0.6, 18.18, 9]);
        a.p([13.55, 5.5, -54.93], [-1.57, 0, 0], [0.6, 18.18, 13.42]);
        a.p([-0.26, 8.55, -143.94], [0, 0, 0], [9.16, 0.48, 11.54]);
        a.y([5.7, 4.91, -98.07], [0.35, 2.09, 0], [4.8, 20, 4.8]);
        a.y([-5.7, 4.91, -98.07], [-0.35, 2.09, 0], [4.8, 20, 4.8]);
        a.p([0.35, -0.9, -44.54], [0, 0, 0], [3.74, 0.48, 7.92]);
        a.p([0.35, -0.9, -19.9], [0, 0, 0], [3.74, 0.48, 7.92]);
        a.p([0.35, -0.9, -36.35], [0, 0, 0], [3.74, 0.48, 7.92]);
        a.p([0.35, -0.9, -28.08], [0, 0, 0], [3.74, 0.48, 7.92]);
        a.p([0.35, -0.88, -44.54], [0, 0, 0], [3.74, 0.48, 7.92]);
        a.p([0.35, -0.88, -19.9], [0, 0, 0], [3.74, 0.48, 7.92]);
        a.p([0.35, -0.88, -36.35], [0, 0, 0], [3.74, 0.48, 7.92]);
        a.p([0.35, -0.88, -28.08], [0, 0, 0], [3.74, 0.48, 7.92]);
        a.p([-3.5, 10, -122.88], [0, 0, 0], [2.82, 0.48, 5.16]);
        a.p([3.5, 10, -122.88], [0, 0, 0], [2.82, 0.48, 5.16]);
        a.p([0, 5.55, -152.23], [0, 0, 0], [6, 6, 6]);
        a.e([-0.62, 6.95, -211.01]);
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
        a.m('Y0').unfreezeWorldMatrix();
        // a.m('Y0').material = decorations.materials.moving_mat;
        a.m('Y1').unfreezeWorldMatrix();
        // a.m('Y1').material = decorations.materials.moving_mat;
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
    },
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
            case 0:
                if (PZ < -4.789999999999999) {
                    steer = default_steer * 1.5;
                    this.section_id += 1
                }
                break;
            case 1:
                a.m('P19').position.x += -0.04000000000000001;
                a.m('P20').position.x += -0.05;
                a.m('P21').position.x += -0.06;
                a.m('P22').position.x += -0.085;
                a.m('P23').position.x += 0.04000000000000001;
                a.m('P24').position.x += 0.05;
                a.m('P25').position.x += 0.06;
                a.m('P26').position.x += 0.085;
                if (PZ < -48.63) {
                    steer = default_steer;
                    this.section_id += 1
                }
                break;
            case 2:
                if (PZ < -48.790000000000006) {
                    update.set_gravity(default_gravity * -0.34);
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
                a.m('Y0').undefined += undefined;
                a.m('Y1').undefined += undefined;
                if (PZ < -63.75) {
                    update.set_gravity(default_gravity);
                    this.section_id += 1
                }
                break;
            case 4:
                if (PZ < -63.879999999999995) {
                    update.set_gravity(default_gravity * 0.5);
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
                a.m('Y0').undefined += undefined;
                a.m('Y1').undefined += undefined;
                if (PZ < -82.25999999999999) {
                    update.set_gravity(default_gravity);
                    this.section_id += 1
                }
                break;
            case 6:
                if (PZ < -82.4) {
                    update.set_gravity(default_gravity * 3.0);
                    this.section_id += 1
                }
                break;
            case 7:
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
                a.m('Y0').undefined += undefined;
                a.m('Y1').undefined += undefined;
                if (PZ < -90.28) {
                    update.set_gravity(default_gravity);
                    this.section_id += 1
                }
                break;
            case 8:
                if (PZ < -121.00000000000001) {
                    this.section_id += 1
                }
                break;
            case 9:
                a.m('P27').position.z += -0.25;
                a.m('P27').position.x += -0.05;
                a.m('P27').rotation.y += -0.010000000000000002;
                a.m('P28').position.z += -0.25;
                a.m('P28').position.x += 0.05;
                a.m('P28').rotation.y += 0.010000000000000002;
                if (PZ < -139.22000000000003) {
                    this.section_id += 1
                }
                break;
            case 10:
                if (PZ < -149.52) {
                    this.section_id += 1
                }
                break;
            case 11:
                a.m('P29').rotation.z += 0.03;
                a.m('P29').rotation.x += 0.010000000000000002;
                a.m('P29').position.z += -0.22000000000000003;
                a.m('P29').rotation.y += 0.03;
                if (PZ < -189.92) {
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
        a.m('P0').position.x = 0.35;
        a.m('P0').position.y = -0.87;
        a.m('P0').position.z = -1.97;
        a.m('P0').scaling.x = 2.82;
        a.m('P0').scaling.y = 0.48;
        a.m('P0').scaling.z = 5.16;
        a.m('P1').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P1').rotation.x = 0;
        a.m('P1').rotation.y = 0;
        a.m('P1').rotation.z = 0;
        a.m('P1').position.x = 0.35;
        a.m('P1').position.y = -0.88;
        a.m('P1').position.z = -12.81;
        a.m('P1').scaling.x = 2.82;
        a.m('P1').scaling.y = 0.48;
        a.m('P1').scaling.z = 5.16;
        a.m('P2').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P2').rotation.x = 0;
        a.m('P2').rotation.y = 0;
        a.m('P2').rotation.z = 0;
        a.m('P2').position.x = 0.35;
        a.m('P2').position.y = -0.88;
        a.m('P2').position.z = -7.33;
        a.m('P2').scaling.x = 2.82;
        a.m('P2').scaling.y = 0.48;
        a.m('P2').scaling.z = 5.16;
        a.m('P3').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P3').rotation.x = 0;
        a.m('P3').rotation.y = 0;
        a.m('P3').rotation.z = 0;
        a.m('P3').position.x = -0.04;
        a.m('P3').position.y = 6.62;
        a.m('P3').position.z = -200.84;
        a.m('P3').scaling.x = 10.86;
        a.m('P3').scaling.y = 0.48;
        a.m('P3').scaling.z = 22.58;
        a.m('P4').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P4').rotation.x = 0;
        a.m('P4').rotation.y = -1.57;
        a.m('P4').rotation.z = 0;
        a.m('P4').position.x = -13.55;
        a.m('P4').position.y = 5.5;
        a.m('P4').position.z = -54.93;
        a.m('P4').scaling.x = 0.6;
        a.m('P4').scaling.y = 18.18;
        a.m('P4').scaling.z = 13.42;
        a.m('P5').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P5').rotation.x = 0;
        a.m('P5').rotation.y = 0;
        a.m('P5').rotation.z = 0;
        a.m('P5').position.x = 7;
        a.m('P5').position.y = 5.5;
        a.m('P5').position.z = -59.27;
        a.m('P5').scaling.x = 0.6;
        a.m('P5').scaling.y = 18.18;
        a.m('P5').scaling.z = 9;
        a.m('P6').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P6').rotation.x = 0;
        a.m('P6').rotation.y = 0;
        a.m('P6').rotation.z = -1.57;
        a.m('P6').position.x = -11.5;
        a.m('P6').position.y = 3;
        a.m('P6').position.z = -83.43;
        a.m('P6').scaling.x = 8;
        a.m('P6').scaling.y = 0.48;
        a.m('P6').scaling.z = 14;
        a.m('P7').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P7').rotation.x = 0;
        a.m('P7').rotation.y = 0;
        a.m('P7').rotation.z = 0;
        a.m('P7').position.x = -8;
        a.m('P7').position.y = 3;
        a.m('P7').position.z = -83.43;
        a.m('P7').scaling.x = 8;
        a.m('P7').scaling.y = 0.48;
        a.m('P7').scaling.z = 14;
        a.m('P8').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P8').rotation.x = 0;
        a.m('P8').rotation.y = 0;
        a.m('P8').rotation.z = 0;
        a.m('P8').position.x = 8;
        a.m('P8').position.y = 3;
        a.m('P8').position.z = -83.43;
        a.m('P8').scaling.x = 8;
        a.m('P8').scaling.y = 0.48;
        a.m('P8').scaling.z = 14;
        a.m('P9').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P9').rotation.x = 0;
        a.m('P9').rotation.y = 0;
        a.m('P9').rotation.z = -1.57;
        a.m('P9').position.x = 11.5;
        a.m('P9').position.y = 3;
        a.m('P9').position.z = -83.43;
        a.m('P9').scaling.x = 8;
        a.m('P9').scaling.y = 0.48;
        a.m('P9').scaling.z = 14;
        a.m('P10').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P10').rotation.x = 0;
        a.m('P10').rotation.y = 0.79;
        a.m('P10').rotation.z = 0;
        a.m('P10').position.x = 0;
        a.m('P10').position.y = 2.26;
        a.m('P10').position.z = -75.66;
        a.m('P10').scaling.x = 0.6;
        a.m('P10').scaling.y = 0.2;
        a.m('P10').scaling.z = 6;
        a.m('P11').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P11').rotation.x = 0;
        a.m('P11').rotation.y = -0.79;
        a.m('P11').rotation.z = 0;
        a.m('P11').position.x = 0;
        a.m('P11').position.y = 2.26;
        a.m('P11').position.z = -75.66;
        a.m('P11').scaling.x = 0.6;
        a.m('P11').scaling.y = 0.2;
        a.m('P11').scaling.z = 6;
        a.m('P12').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P12').rotation.x = 0;
        a.m('P12').rotation.y = -0.79;
        a.m('P12').rotation.z = 0;
        a.m('P12').position.x = 0;
        a.m('P12').position.y = -1.76;
        a.m('P12').position.z = -54.14;
        a.m('P12').scaling.x = 0.6;
        a.m('P12').scaling.y = 0.2;
        a.m('P12').scaling.z = 6;
        a.m('P13').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P13').rotation.x = 0;
        a.m('P13').rotation.y = 0.79;
        a.m('P13').rotation.z = 0;
        a.m('P13').position.x = 0;
        a.m('P13').position.y = -1.76;
        a.m('P13').position.z = -54.14;
        a.m('P13').scaling.x = 0.6;
        a.m('P13').scaling.y = 0.2;
        a.m('P13').scaling.z = 6;
        a.m('P14').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P14').rotation.x = 0;
        a.m('P14').rotation.y = 0.4;
        a.m('P14').rotation.z = 0;
        a.m('P14').position.x = 0;
        a.m('P14').position.y = 10.48;
        a.m('P14').position.z = -112.3;
        a.m('P14').scaling.x = 2.6;
        a.m('P14').scaling.y = 0.2;
        a.m('P14').scaling.z = 18;
        a.m('P15').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P15').rotation.x = 0;
        a.m('P15').rotation.y = -0.4;
        a.m('P15').rotation.z = 0;
        a.m('P15').position.x = 0;
        a.m('P15').position.y = 10.55;
        a.m('P15').position.z = -112.3;
        a.m('P15').scaling.x = 2.6;
        a.m('P15').scaling.y = 0.2;
        a.m('P15').scaling.z = 18;
        a.m('P16').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P16').rotation.x = 0;
        a.m('P16').rotation.y = 0;
        a.m('P16').rotation.z = 0;
        a.m('P16').position.x = -7;
        a.m('P16').position.y = 5.5;
        a.m('P16').position.z = -59.27;
        a.m('P16').scaling.x = 0.6;
        a.m('P16').scaling.y = 18.18;
        a.m('P16').scaling.z = 9;
        a.m('P17').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P17').rotation.x = 0;
        a.m('P17').rotation.y = -1.57;
        a.m('P17').rotation.z = 0;
        a.m('P17').position.x = 13.55;
        a.m('P17').position.y = 5.5;
        a.m('P17').position.z = -54.93;
        a.m('P17').scaling.x = 0.6;
        a.m('P17').scaling.y = 18.18;
        a.m('P17').scaling.z = 13.42;
        a.m('P18').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P18').rotation.x = 0;
        a.m('P18').rotation.y = 0;
        a.m('P18').rotation.z = 0;
        a.m('P18').position.x = -0.26;
        a.m('P18').position.y = 8.55;
        a.m('P18').position.z = -143.94;
        a.m('P18').scaling.x = 9.16;
        a.m('P18').scaling.y = 0.48;
        a.m('P18').scaling.z = 11.54;
        a.m('Y0').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('Y0').rotation.x = 2.09;
        a.m('Y0').rotation.y = 0.35;
        a.m('Y0').rotation.z = 0;
        a.m('Y0').position.x = 5.7;
        a.m('Y0').position.y = 4.91;
        a.m('Y0').position.z = -98.07;
        a.m('Y0').scaling.x = 4.8;
        a.m('Y0').scaling.y = 20;
        a.m('Y0').scaling.z = 4.8;
        a.m('Y1').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('Y1').rotation.x = 2.09;
        a.m('Y1').rotation.y = -0.35;
        a.m('Y1').rotation.z = 0;
        a.m('Y1').position.x = -5.7;
        a.m('Y1').position.y = 4.91;
        a.m('Y1').position.z = -98.07;
        a.m('Y1').scaling.x = 4.8;
        a.m('Y1').scaling.y = 20;
        a.m('Y1').scaling.z = 4.8;
        a.m('P19').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P19').rotation.x = 0;
        a.m('P19').rotation.y = 0;
        a.m('P19').rotation.z = 0;
        a.m('P19').position.x = 0.35;
        a.m('P19').position.y = -0.9;
        a.m('P19').position.z = -44.54;
        a.m('P19').scaling.x = 3.74;
        a.m('P19').scaling.y = 0.48;
        a.m('P19').scaling.z = 7.92;
        a.m('P20').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P20').rotation.x = 0;
        a.m('P20').rotation.y = 0;
        a.m('P20').rotation.z = 0;
        a.m('P20').position.x = 0.35;
        a.m('P20').position.y = -0.9;
        a.m('P20').position.z = -19.9;
        a.m('P20').scaling.x = 3.74;
        a.m('P20').scaling.y = 0.48;
        a.m('P20').scaling.z = 7.92;
        a.m('P21').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P21').rotation.x = 0;
        a.m('P21').rotation.y = 0;
        a.m('P21').rotation.z = 0;
        a.m('P21').position.x = 0.35;
        a.m('P21').position.y = -0.9;
        a.m('P21').position.z = -36.35;
        a.m('P21').scaling.x = 3.74;
        a.m('P21').scaling.y = 0.48;
        a.m('P21').scaling.z = 7.92;
        a.m('P22').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P22').rotation.x = 0;
        a.m('P22').rotation.y = 0;
        a.m('P22').rotation.z = 0;
        a.m('P22').position.x = 0.35;
        a.m('P22').position.y = -0.9;
        a.m('P22').position.z = -28.08;
        a.m('P22').scaling.x = 3.74;
        a.m('P22').scaling.y = 0.48;
        a.m('P22').scaling.z = 7.92;
        a.m('P23').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P23').rotation.x = 0;
        a.m('P23').rotation.y = 0;
        a.m('P23').rotation.z = 0;
        a.m('P23').position.x = 0.35;
        a.m('P23').position.y = -0.88;
        a.m('P23').position.z = -44.54;
        a.m('P23').scaling.x = 3.74;
        a.m('P23').scaling.y = 0.48;
        a.m('P23').scaling.z = 7.92;
        a.m('P24').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P24').rotation.x = 0;
        a.m('P24').rotation.y = 0;
        a.m('P24').rotation.z = 0;
        a.m('P24').position.x = 0.35;
        a.m('P24').position.y = -0.88;
        a.m('P24').position.z = -19.9;
        a.m('P24').scaling.x = 3.74;
        a.m('P24').scaling.y = 0.48;
        a.m('P24').scaling.z = 7.92;
        a.m('P25').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P25').rotation.x = 0;
        a.m('P25').rotation.y = 0;
        a.m('P25').rotation.z = 0;
        a.m('P25').position.x = 0.35;
        a.m('P25').position.y = -0.88;
        a.m('P25').position.z = -36.35;
        a.m('P25').scaling.x = 3.74;
        a.m('P25').scaling.y = 0.48;
        a.m('P25').scaling.z = 7.92;
        a.m('P26').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P26').rotation.x = 0;
        a.m('P26').rotation.y = 0;
        a.m('P26').rotation.z = 0;
        a.m('P26').position.x = 0.35;
        a.m('P26').position.y = -0.88;
        a.m('P26').position.z = -28.08;
        a.m('P26').scaling.x = 3.74;
        a.m('P26').scaling.y = 0.48;
        a.m('P26').scaling.z = 7.92;
        a.m('P27').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P27').rotation.x = 0;
        a.m('P27').rotation.y = 0;
        a.m('P27').rotation.z = 0;
        a.m('P27').position.x = -3.5;
        a.m('P27').position.y = 10;
        a.m('P27').position.z = -122.88;
        a.m('P27').scaling.x = 2.82;
        a.m('P27').scaling.y = 0.48;
        a.m('P27').scaling.z = 5.16;
        a.m('P28').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P28').rotation.x = 0;
        a.m('P28').rotation.y = 0;
        a.m('P28').rotation.z = 0;
        a.m('P28').position.x = 3.5;
        a.m('P28').position.y = 10;
        a.m('P28').position.z = -122.88;
        a.m('P28').scaling.x = 2.82;
        a.m('P28').scaling.y = 0.48;
        a.m('P28').scaling.z = 5.16;
        a.m('P29').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P29').rotation.x = 0;
        a.m('P29').rotation.y = 0;
        a.m('P29').rotation.z = 0;
        a.m('P29').position.x = 0;
        a.m('P29').position.y = 5.55;
        a.m('P29').position.z = -152.23;
        a.m('P29').scaling.x = 6;
        a.m('P29').scaling.y = 6;
        a.m('P29').scaling.z = 6;
    },
    physics_update: function() {},
    render_update: function() {}
}