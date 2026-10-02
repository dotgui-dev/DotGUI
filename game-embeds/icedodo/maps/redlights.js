var map = {
    title: "Red Lights Green Lights",
    song: "env2",
    maker: "Carrots",
    spawn: [0, 0.5, 0],
    init: function() {
        a.c([-7.98, -0.5299999999999999, -70]);
        a.p([0.35, -0.88, -6.44], [0, 0, 0], [2.82, 0.48, 20]);
        a.p([-3.75, -0.88, -30.3], [0.28, 0, 0], [2.82, 0.48, 30]);
        a.p([-7.85, -0.87, -58.39], [0, 0, 0], [2.82, 0.48, 30]);
        a.p([-4.48, -0.88, -58.39], [-0.23, 0, 0], [2.82, 0.48, 30]);
        a.p([-4.48, -0.87, -86.81], [-0.23, 0, 0], [2.82, 0.48, 30]);
        a.p([-1.15, -0.88, -86.11], [0, 0, 0], [2.82, 0.48, 30]);
        a.c([43.6, -0.59, -17.78]);
        a.c([43.6, -0.59, -59.35]);
        a.c([-44.25, -0.59, -17.78]);
        a.c([-44.25, -0.59, -59.76]);
        a.p([-2.48, 1.98, -67.55], [-0.23, 0, 0], [2, 6, 0.5]);
        a.p([-7.96, 1.98, -67.55], [0, 0, 0], [2, 6, 0.5]);
        a.p([5.99, -0.88, -111.03], [0, 0, 0], [2.82, 0.48, 20]);
        a.p([-1.15, -0.88, -111.03], [0, 0, 0], [2.82, 0.48, 20]);
        a.p([-9.64, -0.88, -111.03], [0, 0, 0], [2.82, 0.48, 20]);
        a.p([5.99, -0.88, -133.85], [0, 0, 0], [2.82, 0.48, 20]);
        a.p([-1.07, -0.88, -133.85], [0, 0, 0], [2.82, 0.48, 20]);
        a.p([-9.55, -0.88, -133.85], [0, 0, 0], [2.82, 0.48, 20]);
        a.c([-0.35, -0.5599999999999999, -169.85]);
        a.c([0, -0.68, -159.42]);
        a.c([-1.84, -0.59, -173.12]);
        a.c([2.06, -0.63, -165.92]);
        a.c([-2.77, -0.66, -164.68]);
        a.p([-49.46, 46.99, -174.84], [-0.79, -0.79, -0.79], [10, 10, 10]);
        a.p([-49.46, 46.99, -174.84], [0, 0, 0], [10, 10, 10]);
        a.p([-1.15, -0.88, -122.3], [0, 0, 0], [20.62, 0.48, 3]);
        a.p([-1.15, -0.88, -148.14], [0, 0, 0], [20.62, 0.48, 9.96]);
        a.p([-1.15, -0.88, -167.88], [0, 0, 0], [8, 0.48, 31]);
        a.p([-1.15, -0.88, -227.96], [0, 0, 0], [8, 0.48, 90]);
        a.e([-0.82, 5.47, -270.13]);
    },
    post: function() {
        a.m('C0').unfreezeWorldMatrix();
        a.m('C0').material = decorations.materials.moving_mat;
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
        a.m('C1').unfreezeWorldMatrix();
        a.m('C1').material = decorations.materials.moving_mat;
        a.m('C2').unfreezeWorldMatrix();
        a.m('C2').material = decorations.materials.moving_mat;
        a.m('C3').unfreezeWorldMatrix();
        a.m('C3').material = decorations.materials.moving_mat;
        a.m('C4').unfreezeWorldMatrix();
        a.m('C4').material = decorations.materials.moving_mat;
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
        a.m('C5').unfreezeWorldMatrix();
        a.m('C5').material = decorations.materials.moving_mat;
        a.m('C6').unfreezeWorldMatrix();
        a.m('C6').material = decorations.materials.moving_mat;
        a.m('C7').unfreezeWorldMatrix();
        a.m('C7').material = decorations.materials.moving_mat;
        a.m('C8').unfreezeWorldMatrix();
        a.m('C8').material = decorations.materials.moving_mat;
        a.m('C9').unfreezeWorldMatrix();
        a.m('C9').material = decorations.materials.moving_mat;
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
    },
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
            case 0:
                if (PZ < 14.51) {
                    steer = default_steer * 0.0;
                    speed = default_speed * 1.0;
                    this.section_id += 1
                }
                break;
            case 1:
                a.m('C1').position.x += -0.6000000000000001;
                a.m('C2').position.x += -0.6000000000000001;
                a.m('C2').position.z += 0.6000000000000001;
                a.m('C3').position.x += 0.6000000000000001;
                a.m('C4').position.x += 0.6000000000000001;
                a.m('C4').position.z += 0.6000000000000001;
                if (PZ < -15.49) {
                    steer = default_steer;
                    speed = default_speed;
                    this.section_id += 1
                }
                break;
            case 2:
                if (PZ < -15.780000000000001) {
                    speed = default_speed * 0.2;
                    this.section_id += 1
                }
                break;
            case 3:
                a.m('C1').position.x += -0.6000000000000001;
                a.m('C2').position.x += -0.6000000000000001;
                a.m('C2').position.z += 0.6000000000000001;
                a.m('C3').position.x += 0.6000000000000001;
                a.m('C4').position.x += 0.6000000000000001;
                a.m('C4').position.z += 0.6000000000000001;
                if (PZ < -18.78) {
                    speed = default_speed;
                    this.section_id += 1
                }
                break;
            case 4:
                if (PZ < -19.02) {
                    steer = default_steer * 0.0;
                    speed = default_speed * 2.0;
                    this.section_id += 1
                }
                break;
            case 5:
                a.m('C0').undefined += undefined;
                a.m('P0').undefined += undefined;
                a.m('P1').undefined += undefined;
                a.m('P2').undefined += undefined;
                a.m('P3').undefined += undefined;
                a.m('P4').undefined += undefined;
                a.m('P5').undefined += undefined;
                a.m('P16').undefined += undefined;
                a.m('P17').undefined += undefined;
                a.m('P18').undefined += undefined;
                a.m('P19').undefined += undefined;
                if (PZ < -43.019999999999996) {
                    steer = default_steer;
                    speed = default_speed;
                    this.section_id += 1
                }
                break;
            case 6:
                if (PZ < -43.34) {
                    speed = default_speed * 0.2;
                    this.section_id += 1
                }
                break;
            case 7:
                a.m('P6').rotation.z += 0.1;
                a.m('P7').rotation.z += 0.1001;
                if (PZ < -46.34) {
                    speed = default_speed;
                    this.section_id += 1
                }
                break;
            case 8:
                if (PZ < -46.78) {
                    steer = default_steer * 0.0;
                    speed = default_speed * 2.0;
                    this.section_id += 1
                }
                break;
            case 9:
                a.m('P6').rotation.z += 0.1;
                a.m('P7').rotation.z += 0.1001;
                if (PZ < -70.78) {
                    steer = default_steer;
                    speed = default_speed;
                    this.section_id += 1
                }
                break;
            case 10:
                if (PZ < -70.91) {
                    speed = default_speed * 0.2;
                    this.section_id += 1
                }
                break;
            case 11:
                if (PZ < -73.91) {
                    speed = default_speed;
                    this.section_id += 1
                }
                break;
            case 12:
                if (PZ < -74.1) {
                    steer = default_steer * 0.0;
                    speed = default_speed * 2.0;
                    this.section_id += 1
                }
                break;
            case 13:
                if (PZ < -98.1) {
                    steer = default_steer;
                    speed = default_speed;
                    this.section_id += 1
                }
                break;
            case 14:
                if (PZ < -98.27) {
                    speed = default_speed * 0.15;
                    this.section_id += 1
                }
                break;
            case 15:
                a.m('P8').position.x += 0.1;
                a.m('P9').position.x += 0.11000000000000001;
                a.m('P10').position.x += 0.12;
                if (PZ < -101.27) {
                    speed = default_speed;
                    this.section_id += 1
                }
                break;
            case 16:
                if (PZ < -101.63) {
                    steer = default_steer * 0.0;
                    speed = default_speed * 2.0;
                    this.section_id += 1
                }
                break;
            case 17:
                a.m('P8').position.x += 0.1;
                a.m('P9').position.x += 0.11000000000000001;
                a.m('P10').position.x += 0.12;
                if (PZ < -121.63) {
                    steer = default_steer;
                    speed = default_speed;
                    this.section_id += 1
                }
                break;
            case 18:
                if (PZ < -121.71) {
                    speed = default_speed * 0.15;
                    this.section_id += 1
                }
                break;
            case 19:
                a.m('P11').position.x += -0.07500000000000001;
                a.m('P12').position.x += -0.0751;
                a.m('P13').position.x += -0.0752;
                if (PZ < -124.11) {
                    speed = default_speed;
                    this.section_id += 1
                }
                break;
            case 20:
                if (PZ < -124.32) {
                    steer = default_steer * 0.0;
                    speed = default_speed * 2.0;
                    this.section_id += 1
                }
                break;
            case 21:
                a.m('P11').position.x += -0.07500000000000001;
                a.m('P12').position.x += -0.0751;
                a.m('P13').position.x += -0.0752;
                if (PZ < -144.32) {
                    steer = default_steer;
                    speed = default_speed;
                    this.section_id += 1
                }
                break;
            case 22:
                if (PZ < -150.25) {
                    speed = default_speed * 0.2;
                    this.section_id += 1
                }
                break;
            case 23:
                a.m('C5').position.x += -0.020000000000000004;
                a.m('C5').position.z += 0.020000000000000004;
                a.m('C6').position.x += -0.03;
                a.m('C6').position.z += -0.010000000000000002;
                a.m('C7').position.x += 0.020000000000000004;
                a.m('C8').position.z += -0.04000000000000001;
                a.m('C9').position.z += 0.020000000000000004;
                if (PZ < -153.25) {
                    speed = default_speed;
                    this.section_id += 1
                }
                break;
            case 24:
                if (PZ < -153.39) {
                    steer = default_steer * 0.0;
                    speed = default_speed * 2.0;
                    this.section_id += 1
                }
                break;
            case 25:
                a.m('C5').position.x += -0.020000000000000004;
                a.m('C5').position.z += 0.020000000000000004;
                a.m('C6').position.x += -0.03;
                a.m('C6').position.z += -0.010000000000000002;
                a.m('C7').position.x += 0.020000000000000004;
                a.m('C8').position.z += -0.04000000000000001;
                a.m('C9').position.z += 0.020000000000000004;
                if (PZ < -183.39) {
                    steer = default_steer;
                    speed = default_speed;
                    this.section_id += 1
                }
                break;
            case 26:
                if (PZ < -183.74) {
                    speed = default_speed * 0.1;
                    this.section_id += 1
                }
                break;
            case 27:
                a.m('P14').rotation.z += -0.1;
                a.m('P14').rotation.y += -0.1;
                a.m('P14').position.z += -0.4;
                a.m('P14').position.y += -0.2;
                a.m('P14').position.x += 0.2;
                a.m('P15').rotation.z += -0.1;
                a.m('P15').rotation.y += -0.1001;
                a.m('P15').position.z += -0.4;
                a.m('P15').position.y += -0.2;
                a.m('P15').position.x += 0.2;
                if (PZ < -186.74) {
                    speed = default_speed;
                    this.section_id += 1
                }
                break;
            case 28:
                if (PZ < -188) {
                    steer = default_steer * 0.0;
                    speed = default_speed * 1.5;
                    this.section_id += 1
                }
                break;
            case 29:
                a.m('P14').rotation.z += -0.1;
                a.m('P14').rotation.y += -0.1;
                a.m('P14').position.z += -0.4;
                a.m('P14').position.y += -0.2;
                a.m('P14').position.x += 0.2;
                a.m('P15').rotation.z += -0.1;
                a.m('P15').rotation.y += -0.1001;
                a.m('P15').position.z += -0.4;
                a.m('P15').position.y += -0.2;
                a.m('P15').position.x += 0.2;
                if (PZ < -248) {
                    steer = default_steer;
                    speed = default_speed;
                    this.section_id += 1
                }
                break;
            case 30:
                if (PZ < -257.11) {
                    update.set_gravity(default_gravity * -0.5);
                    this.section_id += 1
                }
                break;
            case 31:
                if (PZ < -265.11) {
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
        a.m('C0').position.x = -7.98;
        a.m('C0').position.y = -0.5299999999999999;
        a.m('C0').position.z = -70;
        a.m('C0').scaling.x = 2;
        a.m('C0').scaling.y = 2;
        a.m('C0').scaling.z = 2;
        a.m('P0').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P0').rotation.x = 0;
        a.m('P0').rotation.y = 0;
        a.m('P0').rotation.z = 0;
        a.m('P0').position.x = 0.35;
        a.m('P0').position.y = -0.88;
        a.m('P0').position.z = -6.44;
        a.m('P0').scaling.x = 2.82;
        a.m('P0').scaling.y = 0.48;
        a.m('P0').scaling.z = 20;
        a.m('P1').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P1').rotation.x = 0;
        a.m('P1').rotation.y = 0.28;
        a.m('P1').rotation.z = 0;
        a.m('P1').position.x = -3.75;
        a.m('P1').position.y = -0.88;
        a.m('P1').position.z = -30.3;
        a.m('P1').scaling.x = 2.82;
        a.m('P1').scaling.y = 0.48;
        a.m('P1').scaling.z = 30;
        a.m('P2').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P2').rotation.x = 0;
        a.m('P2').rotation.y = 0;
        a.m('P2').rotation.z = 0;
        a.m('P2').position.x = -7.85;
        a.m('P2').position.y = -0.87;
        a.m('P2').position.z = -58.39;
        a.m('P2').scaling.x = 2.82;
        a.m('P2').scaling.y = 0.48;
        a.m('P2').scaling.z = 30;
        a.m('P3').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P3').rotation.x = 0;
        a.m('P3').rotation.y = -0.23;
        a.m('P3').rotation.z = 0;
        a.m('P3').position.x = -4.48;
        a.m('P3').position.y = -0.88;
        a.m('P3').position.z = -58.39;
        a.m('P3').scaling.x = 2.82;
        a.m('P3').scaling.y = 0.48;
        a.m('P3').scaling.z = 30;
        a.m('P4').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P4').rotation.x = 0;
        a.m('P4').rotation.y = -0.23;
        a.m('P4').rotation.z = 0;
        a.m('P4').position.x = -4.48;
        a.m('P4').position.y = -0.87;
        a.m('P4').position.z = -86.81;
        a.m('P4').scaling.x = 2.82;
        a.m('P4').scaling.y = 0.48;
        a.m('P4').scaling.z = 30;
        a.m('P5').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P5').rotation.x = 0;
        a.m('P5').rotation.y = 0;
        a.m('P5').rotation.z = 0;
        a.m('P5').position.x = -1.15;
        a.m('P5').position.y = -0.88;
        a.m('P5').position.z = -86.11;
        a.m('P5').scaling.x = 2.82;
        a.m('P5').scaling.y = 0.48;
        a.m('P5').scaling.z = 30;
        a.m('C1').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('C1').rotation.x = 0;
        a.m('C1').rotation.y = 0;
        a.m('C1').rotation.z = 0;
        a.m('C1').position.x = 43.6;
        a.m('C1').position.y = -0.59;
        a.m('C1').position.z = -17.78;
        a.m('C1').scaling.x = 2;
        a.m('C1').scaling.y = 2;
        a.m('C1').scaling.z = 2;
        a.m('C2').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('C2').rotation.x = 0;
        a.m('C2').rotation.y = 0;
        a.m('C2').rotation.z = 0;
        a.m('C2').position.x = 43.6;
        a.m('C2').position.y = -0.59;
        a.m('C2').position.z = -59.35;
        a.m('C2').scaling.x = 2;
        a.m('C2').scaling.y = 2;
        a.m('C2').scaling.z = 2;
        a.m('C3').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('C3').rotation.x = 0;
        a.m('C3').rotation.y = 0;
        a.m('C3').rotation.z = 0;
        a.m('C3').position.x = -44.25;
        a.m('C3').position.y = -0.59;
        a.m('C3').position.z = -17.78;
        a.m('C3').scaling.x = 2;
        a.m('C3').scaling.y = 2;
        a.m('C3').scaling.z = 2;
        a.m('C4').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('C4').rotation.x = 0;
        a.m('C4').rotation.y = 0;
        a.m('C4').rotation.z = 0;
        a.m('C4').position.x = -44.25;
        a.m('C4').position.y = -0.59;
        a.m('C4').position.z = -59.76;
        a.m('C4').scaling.x = 2;
        a.m('C4').scaling.y = 2;
        a.m('C4').scaling.z = 2;
        a.m('P6').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P6').rotation.x = 0;
        a.m('P6').rotation.y = -0.23;
        a.m('P6').rotation.z = 0;
        a.m('P6').position.x = -2.48;
        a.m('P6').position.y = 1.98;
        a.m('P6').position.z = -67.55;
        a.m('P6').scaling.x = 2;
        a.m('P6').scaling.y = 6;
        a.m('P6').scaling.z = 0.5;
        a.m('P7').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P7').rotation.x = 0;
        a.m('P7').rotation.y = 0;
        a.m('P7').rotation.z = 0;
        a.m('P7').position.x = -7.96;
        a.m('P7').position.y = 1.98;
        a.m('P7').position.z = -67.55;
        a.m('P7').scaling.x = 2;
        a.m('P7').scaling.y = 6;
        a.m('P7').scaling.z = 0.5;
        a.m('P8').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P8').rotation.x = 0;
        a.m('P8').rotation.y = 0;
        a.m('P8').rotation.z = 0;
        a.m('P8').position.x = 5.99;
        a.m('P8').position.y = -0.88;
        a.m('P8').position.z = -111.03;
        a.m('P8').scaling.x = 2.82;
        a.m('P8').scaling.y = 0.48;
        a.m('P8').scaling.z = 20;
        a.m('P9').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P9').rotation.x = 0;
        a.m('P9').rotation.y = 0;
        a.m('P9').rotation.z = 0;
        a.m('P9').position.x = -1.15;
        a.m('P9').position.y = -0.88;
        a.m('P9').position.z = -111.03;
        a.m('P9').scaling.x = 2.82;
        a.m('P9').scaling.y = 0.48;
        a.m('P9').scaling.z = 20;
        a.m('P10').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P10').rotation.x = 0;
        a.m('P10').rotation.y = 0;
        a.m('P10').rotation.z = 0;
        a.m('P10').position.x = -9.64;
        a.m('P10').position.y = -0.88;
        a.m('P10').position.z = -111.03;
        a.m('P10').scaling.x = 2.82;
        a.m('P10').scaling.y = 0.48;
        a.m('P10').scaling.z = 20;
        a.m('P11').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P11').rotation.x = 0;
        a.m('P11').rotation.y = 0;
        a.m('P11').rotation.z = 0;
        a.m('P11').position.x = 5.99;
        a.m('P11').position.y = -0.88;
        a.m('P11').position.z = -133.85;
        a.m('P11').scaling.x = 2.82;
        a.m('P11').scaling.y = 0.48;
        a.m('P11').scaling.z = 20;
        a.m('P12').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P12').rotation.x = 0;
        a.m('P12').rotation.y = 0;
        a.m('P12').rotation.z = 0;
        a.m('P12').position.x = -1.07;
        a.m('P12').position.y = -0.88;
        a.m('P12').position.z = -133.85;
        a.m('P12').scaling.x = 2.82;
        a.m('P12').scaling.y = 0.48;
        a.m('P12').scaling.z = 20;
        a.m('P13').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P13').rotation.x = 0;
        a.m('P13').rotation.y = 0;
        a.m('P13').rotation.z = 0;
        a.m('P13').position.x = -9.55;
        a.m('P13').position.y = -0.88;
        a.m('P13').position.z = -133.85;
        a.m('P13').scaling.x = 2.82;
        a.m('P13').scaling.y = 0.48;
        a.m('P13').scaling.z = 20;
        a.m('C5').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('C5').rotation.x = 0;
        a.m('C5').rotation.y = 0;
        a.m('C5').rotation.z = 0;
        a.m('C5').position.x = -0.35;
        a.m('C5').position.y = -0.5599999999999999;
        a.m('C5').position.z = -169.85;
        a.m('C5').scaling.x = 2;
        a.m('C5').scaling.y = 2;
        a.m('C5').scaling.z = 2;
        a.m('C6').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('C6').rotation.x = 0;
        a.m('C6').rotation.y = 0;
        a.m('C6').rotation.z = 0;
        a.m('C6').position.x = 0;
        a.m('C6').position.y = -0.68;
        a.m('C6').position.z = -159.42;
        a.m('C6').scaling.x = 2;
        a.m('C6').scaling.y = 2;
        a.m('C6').scaling.z = 2;
        a.m('C7').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('C7').rotation.x = 0;
        a.m('C7').rotation.y = 0;
        a.m('C7').rotation.z = 0;
        a.m('C7').position.x = -1.84;
        a.m('C7').position.y = -0.59;
        a.m('C7').position.z = -173.12;
        a.m('C7').scaling.x = 2;
        a.m('C7').scaling.y = 2;
        a.m('C7').scaling.z = 2;
        a.m('C8').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('C8').rotation.x = 0;
        a.m('C8').rotation.y = 0;
        a.m('C8').rotation.z = 0;
        a.m('C8').position.x = 2.06;
        a.m('C8').position.y = -0.63;
        a.m('C8').position.z = -165.92;
        a.m('C8').scaling.x = 2;
        a.m('C8').scaling.y = 2;
        a.m('C8').scaling.z = 2;
        a.m('C9').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('C9').rotation.x = 0;
        a.m('C9').rotation.y = 0;
        a.m('C9').rotation.z = 0;
        a.m('C9').position.x = -2.77;
        a.m('C9').position.y = -0.66;
        a.m('C9').position.z = -164.68;
        a.m('C9').scaling.x = 2;
        a.m('C9').scaling.y = 2;
        a.m('C9').scaling.z = 2;
        a.m('P14').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P14').rotation.x = -0.79;
        a.m('P14').rotation.y = -0.79;
        a.m('P14').rotation.z = -0.79;
        a.m('P14').position.x = -49.46;
        a.m('P14').position.y = 46.99;
        a.m('P14').position.z = -174.84;
        a.m('P14').scaling.x = 10;
        a.m('P14').scaling.y = 10;
        a.m('P14').scaling.z = 10;
        a.m('P15').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P15').rotation.x = 0;
        a.m('P15').rotation.y = 0;
        a.m('P15').rotation.z = 0;
        a.m('P15').position.x = -49.46;
        a.m('P15').position.y = 46.99;
        a.m('P15').position.z = -174.84;
        a.m('P15').scaling.x = 10;
        a.m('P15').scaling.y = 10;
        a.m('P15').scaling.z = 10;
        a.m('P16').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P16').rotation.x = 0;
        a.m('P16').rotation.y = 0;
        a.m('P16').rotation.z = 0;
        a.m('P16').position.x = -1.15;
        a.m('P16').position.y = -0.88;
        a.m('P16').position.z = -122.3;
        a.m('P16').scaling.x = 20.62;
        a.m('P16').scaling.y = 0.48;
        a.m('P16').scaling.z = 3;
        a.m('P17').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P17').rotation.x = 0;
        a.m('P17').rotation.y = 0;
        a.m('P17').rotation.z = 0;
        a.m('P17').position.x = -1.15;
        a.m('P17').position.y = -0.88;
        a.m('P17').position.z = -148.14;
        a.m('P17').scaling.x = 20.62;
        a.m('P17').scaling.y = 0.48;
        a.m('P17').scaling.z = 9.96;
        a.m('P18').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P18').rotation.x = 0;
        a.m('P18').rotation.y = 0;
        a.m('P18').rotation.z = 0;
        a.m('P18').position.x = -1.15;
        a.m('P18').position.y = -0.88;
        a.m('P18').position.z = -167.88;
        a.m('P18').scaling.x = 8;
        a.m('P18').scaling.y = 0.48;
        a.m('P18').scaling.z = 31;
        a.m('P19').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P19').rotation.x = 0;
        a.m('P19').rotation.y = 0;
        a.m('P19').rotation.z = 0;
        a.m('P19').position.x = -1.15;
        a.m('P19').position.y = -0.88;
        a.m('P19').position.z = -227.96;
        a.m('P19').scaling.x = 8;
        a.m('P19').scaling.y = 0.48;
        a.m('P19').scaling.z = 90;
    },
    physics_update: function() {},
    render_update: function() {}
}