var map = {
    title: "Moving Road",
    song: "env2",
    maker: "Kazil",
    spawn: [0, 0.5, 0],
    init: function() {
        a.c([0, -2, -14.6]); //-1.42
        a.c([1.52, -2, -20.25]); //-1.42
        a.c([-1.53, -2, -20.25]); //-1.42
        a.p([0, -1.41, -3.65], [0, -0.17, 0], [3, 0.6, 10]);
        a.p([-1.79, -1.46, -35.9], [-0.52, 0, 0], [2.5, 3, 0.5]);
        a.p([1.78, -1.46, -35.9], [0.52, 0, 0], [2.5, 3, 0.5]);
        a.p([-31.05, 2.18, -117.84], [0, 0, -0.79], [2.5, 2.5, 11]);
        a.y([0, -0.5, -27.2], [0, 0, 0], [4, 4, 4]);
        a.y([-23.47, 0.81, -129.13], [0.79, 0, -1.57], [2, 9, 2]);
        a.y([-20.56, 0.68, -136.06], [-1.57, 0, -1.57], [2, 9, 2]);
        a.p([0, -2.29, -11.59], [0, 0, 0], [6, 0.6, 6]);
        a.p([-7.54, 3.37, -70.3], [0, 0, 0], [6, 0.6, 6]);
        a.p([0, -2.28, -47.78], [0, 0, 0], [2.5, 0.6, 10]);
        a.p([-1.09, -2.25, -54.31], [0.52, 0, 0], [2.5, 0.6, 5]);
        a.p([-4.92, 0.75, -60.98], [0.52, 0.52, 0], [2.5, 0.6, 12]);
        a.p([-31.07, 3.46, -72.25], [1.18, 0, 0], [2.5, 0.6, 5]);
        a.p([-34.69, 3.48, -74.64], [0.79, 0, 0], [2.5, 0.6, 5]);
        a.p([-37.81, 3.5, -82.54], [0, 0, 0], [2.5, 0.6, 5]);
        a.p([-40.23, 3.5, -87.57], [0, 0, 0], [2.5, 0.6, 5]);
        a.p([-31, 3.5, -109.79], [0, 0, 0], [2.5, 0.6, 5]);
        a.p([-31, 3.5, -104.73], [0, 0, 0], [2.5, 0.6, 5]);
        a.p([-37.05, 3.49, -78.26], [0.39, 0, 0], [2.5, 0.6, 5]);
        a.p([-28.41, 1.93, -124.19], [-0.79, 0, 0], [2.5, 0.6, 5]);
        a.p([-33.69, 1.93, -124.19], [0.79, 0, 0], [2.5, 0.6, 5]);
        a.p([-38.66, 1.93, -129.19], [0.79, 0, 0], [2.5, 0.6, 9]);
        a.p([-37.49, -3.18, -147.47], [0, 0, -0.79], [14, 0.6, 14]);
        a.p([-41.42, 1.67, -136.05], [0, 0, 0], [2.5, 0.6, 9]);
        a.p([-24.43, -3.18, -147.47], [0, 0, 0.79], [14, 0.6, 14]);
        a.p([-31, -8.22, -147.55], [0, 0, 0], [3, 0.6, 14]);
        a.p([-31, -5.65, -158.93], [0, 0.52, 0], [3, 0.6, 10]);
        a.e([-31, -3.35, -161.89]);
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
        a.m('Y0').unfreezeWorldMatrix();
        // a.m('Y0').material = decorations.materials.moving_mat;
        a.m('Y1').unfreezeWorldMatrix();
        // a.m('Y1').material = decorations.materials.moving_mat;
        a.m('Y2').unfreezeWorldMatrix();
        // a.m('Y2').material = decorations.materials.moving_mat;
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
    },
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
            case 0:
                if (PZ < -11.270000000000003) {
                    steer = default_steer * 1.5;
                    this.section_id += 1
                }
                break;
            case 1:
                a.m('P4').position.z += -0.273;
                a.m('P4').rotation.y += 0.1;
                if (PZ < -45.57) {
                    steer = default_steer;
                    this.section_id += 1
                }
                break;
            case 2:
                if (PZ < -67.11999999999999) {
                    steer = default_steer * 1.5;
                    this.section_id += 1
                }
                break;
            case 3:
                a.m('P5').position.x += -0.273;
                if (PZ < -76.64) {
                    steer = default_steer;
                    this.section_id += 1
                }
                break;
            case 4:
                if (PZ < -76.89999999999999) {
                    steer = default_steer * 1.51;
                    this.section_id += 1
                }
                break;
            case 5:
                if (PZ < -86.42) {
                    steer = default_steer;
                    this.section_id += 1
                }
                break;
            case 6:
                if (PZ < -90.14) {
                    update.set_gravity(default_gravity * -0.5);
                    steer = default_steer * 1.25;
                    this.section_id += 1
                }
                break;
            case 7:
                if (PZ < -96.89999999999999) {
                    update.set_gravity(default_gravity);
                    steer = default_steer;
                    this.section_id += 1
                }
                break;
            case 8:
                if (PZ < -97.19) {
                    steer = default_steer * 1.26;
                    this.section_id += 1
                }
                break;
            case 9:
                if (PZ < -106.71000000000001) {
                    steer = default_steer;
                    this.section_id += 1
                }
                break;
            case 10:
                if (PZ < -107.08) {
                    steer = default_steer * 1.24;
                    this.section_id += 1
                }
                break;
            case 11:
                if (PZ < -123.96) {
                    steer = default_steer;
                    this.section_id += 1
                }
                break;
            case 12:
                if (PZ < -128.83) {
                    steer = default_steer * 1.5;
                    this.section_id += 1
                }
                break;
            case 13:
                if (PZ < -136.85) {
                    steer = default_steer;
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
        a.m('C0').position.x = 0;
        a.m('C0').position.y = -2;
        a.m('C0').position.z = -14.6;
        a.m('C0').scaling.x = 2;
        a.m('C0').scaling.y = 2;
        a.m('C0').scaling.z = 2;
        a.m('C1').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('C1').rotation.x = 0;
        a.m('C1').rotation.y = 0;
        a.m('C1').rotation.z = 0;
        a.m('C1').position.x = 1.52;
        a.m('C1').position.y = -2;
        a.m('C1').position.z = -20.25;
        a.m('C1').scaling.x = 2;
        a.m('C1').scaling.y = 2;
        a.m('C1').scaling.z = 2;
        a.m('C2').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('C2').rotation.x = 0;
        a.m('C2').rotation.y = 0;
        a.m('C2').rotation.z = 0;
        a.m('C2').position.x = -1.42;
        a.m('C2').position.y = -2;
        a.m('C2').position.z = -20.25;
        a.m('C2').scaling.x = 2;
        a.m('C2').scaling.y = 2;
        a.m('C2').scaling.z = 2;
        a.m('P0').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P0').rotation.x = -0.17;
        a.m('P0').rotation.y = 0;
        a.m('P0').rotation.z = 0;
        a.m('P0').position.x = 0;
        a.m('P0').position.y = -1.41;
        a.m('P0').position.z = -3.65;
        a.m('P0').scaling.x = 3;
        a.m('P0').scaling.y = 0.6;
        a.m('P0').scaling.z = 10;
        a.m('P1').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P1').rotation.x = 0;
        a.m('P1').rotation.y = -0.52;
        a.m('P1').rotation.z = 0;
        a.m('P1').position.x = -1.79;
        a.m('P1').position.y = -1.46;
        a.m('P1').position.z = -35.9;
        a.m('P1').scaling.x = 2.5;
        a.m('P1').scaling.y = 3;
        a.m('P1').scaling.z = 0.5;
        a.m('P2').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P2').rotation.x = 0;
        a.m('P2').rotation.y = 0.52;
        a.m('P2').rotation.z = 0;
        a.m('P2').position.x = 1.78;
        a.m('P2').position.y = -1.46;
        a.m('P2').position.z = -35.9;
        a.m('P2').scaling.x = 2.5;
        a.m('P2').scaling.y = 3;
        a.m('P2').scaling.z = 0.5;
        a.m('P3').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P3').rotation.x = 0;
        a.m('P3').rotation.y = 0;
        a.m('P3').rotation.z = -0.79;
        a.m('P3').position.x = -31.05;
        a.m('P3').position.y = 2.18;
        a.m('P3').position.z = -117.84;
        a.m('P3').scaling.x = 2.5;
        a.m('P3').scaling.y = 2.5;
        a.m('P3').scaling.z = 11;
        a.m('Y0').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('Y0').rotation.x = 0;
        a.m('Y0').rotation.y = 0;
        a.m('Y0').rotation.z = 0;
        a.m('Y0').position.x = 0;
        a.m('Y0').position.y = -0.5;
        a.m('Y0').position.z = -27.2;
        a.m('Y0').scaling.x = 4;
        a.m('Y0').scaling.y = 4;
        a.m('Y0').scaling.z = 4;
        a.m('Y1').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('Y1').rotation.x = 0;
        a.m('Y1').rotation.y = 0.79;
        a.m('Y1').rotation.z = -1.57;
        a.m('Y1').position.x = -23.47;
        a.m('Y1').position.y = 0.81;
        a.m('Y1').position.z = -129.13;
        a.m('Y1').scaling.x = 2;
        a.m('Y1').scaling.y = 9;
        a.m('Y1').scaling.z = 2;
        a.m('Y2').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('Y2').rotation.x = 0;
        a.m('Y2').rotation.y = -1.57;
        a.m('Y2').rotation.z = -1.57;
        a.m('Y2').position.x = -20.56;
        a.m('Y2').position.y = 0.68;
        a.m('Y2').position.z = -136.06;
        a.m('Y2').scaling.x = 2;
        a.m('Y2').scaling.y = 9;
        a.m('Y2').scaling.z = 2;
        a.m('P4').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P4').rotation.x = 0;
        a.m('P4').rotation.y = 0;
        a.m('P4').rotation.z = 0;
        a.m('P4').position.x = 0;
        a.m('P4').position.y = -2.29;
        a.m('P4').position.z = -11.59;
        a.m('P4').scaling.x = 6;
        a.m('P4').scaling.y = 0.6;
        a.m('P4').scaling.z = 6;
        a.m('P5').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P5').rotation.x = 0;
        a.m('P5').rotation.y = 0;
        a.m('P5').rotation.z = 0;
        a.m('P5').position.x = -7.54;
        a.m('P5').position.y = 3.37;
        a.m('P5').position.z = -70.3;
        a.m('P5').scaling.x = 6;
        a.m('P5').scaling.y = 0.6;
        a.m('P5').scaling.z = 6;
        a.m('P6').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P6').rotation.x = 0;
        a.m('P6').rotation.y = 0;
        a.m('P6').rotation.z = 0;
        a.m('P6').position.x = 0;
        a.m('P6').position.y = -2.28;
        a.m('P6').position.z = -47.78;
        a.m('P6').scaling.x = 2.5;
        a.m('P6').scaling.y = 0.6;
        a.m('P6').scaling.z = 10;
        a.m('P7').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P7').rotation.x = 0;
        a.m('P7').rotation.y = 0.52;
        a.m('P7').rotation.z = 0;
        a.m('P7').position.x = -1.09;
        a.m('P7').position.y = -2.25;
        a.m('P7').position.z = -54.31;
        a.m('P7').scaling.x = 2.5;
        a.m('P7').scaling.y = 0.6;
        a.m('P7').scaling.z = 5;
        a.m('P8').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P8').rotation.x = 0.52;
        a.m('P8').rotation.y = 0.52;
        a.m('P8').rotation.z = 0;
        a.m('P8').position.x = -4.92;
        a.m('P8').position.y = 0.75;
        a.m('P8').position.z = -60.98;
        a.m('P8').scaling.x = 2.5;
        a.m('P8').scaling.y = 0.6;
        a.m('P8').scaling.z = 12;
        a.m('P9').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P9').rotation.x = 0;
        a.m('P9').rotation.y = 1.18;
        a.m('P9').rotation.z = 0;
        a.m('P9').position.x = -31.07;
        a.m('P9').position.y = 3.46;
        a.m('P9').position.z = -72.25;
        a.m('P9').scaling.x = 2.5;
        a.m('P9').scaling.y = 0.6;
        a.m('P9').scaling.z = 5;
        a.m('P10').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P10').rotation.x = 0;
        a.m('P10').rotation.y = 0.79;
        a.m('P10').rotation.z = 0;
        a.m('P10').position.x = -34.69;
        a.m('P10').position.y = 3.48;
        a.m('P10').position.z = -74.64;
        a.m('P10').scaling.x = 2.5;
        a.m('P10').scaling.y = 0.6;
        a.m('P10').scaling.z = 5;
        a.m('P11').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P11').rotation.x = 0;
        a.m('P11').rotation.y = 0;
        a.m('P11').rotation.z = 0;
        a.m('P11').position.x = -37.81;
        a.m('P11').position.y = 3.5;
        a.m('P11').position.z = -82.54;
        a.m('P11').scaling.x = 2.5;
        a.m('P11').scaling.y = 0.6;
        a.m('P11').scaling.z = 5;
        a.m('P12').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P12').rotation.x = 0;
        a.m('P12').rotation.y = 0;
        a.m('P12').rotation.z = 0;
        a.m('P12').position.x = -40.23;
        a.m('P12').position.y = 3.5;
        a.m('P12').position.z = -87.57;
        a.m('P12').scaling.x = 2.5;
        a.m('P12').scaling.y = 0.6;
        a.m('P12').scaling.z = 5;
        a.m('P13').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P13').rotation.x = 0;
        a.m('P13').rotation.y = 0;
        a.m('P13').rotation.z = 0;
        a.m('P13').position.x = -31;
        a.m('P13').position.y = 3.5;
        a.m('P13').position.z = -109.79;
        a.m('P13').scaling.x = 2.5;
        a.m('P13').scaling.y = 0.6;
        a.m('P13').scaling.z = 5;
        a.m('P14').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P14').rotation.x = 0;
        a.m('P14').rotation.y = 0;
        a.m('P14').rotation.z = 0;
        a.m('P14').position.x = -31;
        a.m('P14').position.y = 3.5;
        a.m('P14').position.z = -104.73;
        a.m('P14').scaling.x = 2.5;
        a.m('P14').scaling.y = 0.6;
        a.m('P14').scaling.z = 5;
        a.m('P15').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P15').rotation.x = 0;
        a.m('P15').rotation.y = 0.39;
        a.m('P15').rotation.z = 0;
        a.m('P15').position.x = -37.05;
        a.m('P15').position.y = 3.49;
        a.m('P15').position.z = -78.26;
        a.m('P15').scaling.x = 2.5;
        a.m('P15').scaling.y = 0.6;
        a.m('P15').scaling.z = 5;
        a.m('P16').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P16').rotation.x = 0;
        a.m('P16').rotation.y = -0.79;
        a.m('P16').rotation.z = 0;
        a.m('P16').position.x = -28.41;
        a.m('P16').position.y = 1.93;
        a.m('P16').position.z = -124.19;
        a.m('P16').scaling.x = 2.5;
        a.m('P16').scaling.y = 0.6;
        a.m('P16').scaling.z = 5;
        a.m('P17').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P17').rotation.x = 0;
        a.m('P17').rotation.y = 0.79;
        a.m('P17').rotation.z = 0;
        a.m('P17').position.x = -33.69;
        a.m('P17').position.y = 1.93;
        a.m('P17').position.z = -124.19;
        a.m('P17').scaling.x = 2.5;
        a.m('P17').scaling.y = 0.6;
        a.m('P17').scaling.z = 5;
        a.m('P18').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P18').rotation.x = 0;
        a.m('P18').rotation.y = 0.79;
        a.m('P18').rotation.z = 0;
        a.m('P18').position.x = -38.66;
        a.m('P18').position.y = 1.93;
        a.m('P18').position.z = -129.19;
        a.m('P18').scaling.x = 2.5;
        a.m('P18').scaling.y = 0.6;
        a.m('P18').scaling.z = 9;
        a.m('P19').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P19').rotation.x = 0;
        a.m('P19').rotation.y = 0;
        a.m('P19').rotation.z = -0.79;
        a.m('P19').position.x = -37.49;
        a.m('P19').position.y = -3.18;
        a.m('P19').position.z = -147.47;
        a.m('P19').scaling.x = 14;
        a.m('P19').scaling.y = 0.6;
        a.m('P19').scaling.z = 14;
        a.m('P20').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P20').rotation.x = 0;
        a.m('P20').rotation.y = 0;
        a.m('P20').rotation.z = 0;
        a.m('P20').position.x = -41.42;
        a.m('P20').position.y = 1.67;
        a.m('P20').position.z = -136.05;
        a.m('P20').scaling.x = 2.5;
        a.m('P20').scaling.y = 0.6;
        a.m('P20').scaling.z = 9;
        a.m('P21').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P21').rotation.x = 0;
        a.m('P21').rotation.y = 0;
        a.m('P21').rotation.z = 0.79;
        a.m('P21').position.x = -24.43;
        a.m('P21').position.y = -3.18;
        a.m('P21').position.z = -147.47;
        a.m('P21').scaling.x = 14;
        a.m('P21').scaling.y = 0.6;
        a.m('P21').scaling.z = 14;
        a.m('P22').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P22').rotation.x = 0;
        a.m('P22').rotation.y = 0;
        a.m('P22').rotation.z = 0;
        a.m('P22').position.x = -31;
        a.m('P22').position.y = -8.22;
        a.m('P22').position.z = -147.55;
        a.m('P22').scaling.x = 3;
        a.m('P22').scaling.y = 0.6;
        a.m('P22').scaling.z = 14;
        a.m('P23').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P23').rotation.x = 0.52;
        a.m('P23').rotation.y = 0;
        a.m('P23').rotation.z = 0;
        a.m('P23').position.x = -31;
        a.m('P23').position.y = -5.65;
        a.m('P23').position.z = -158.93;
        a.m('P23').scaling.x = 3;
        a.m('P23').scaling.y = 0.6;
        a.m('P23').scaling.z = 10;
    },
    physics_update: function() {},
    render_update: function() {}
}
