var map = {
    title: "Easy Drifting",
    song: "env2",
    maker: "Kazil",
    spawn: [0, 0.5, 0],
    init: function() {
        a.c([3.6, 1.17, -150]);
        a.c([3.6, 1.17, -102]);
        a.c([3.6, 1.17, -118]);
        a.c([3.6, 1.17, -126]);
        a.c([3.6, 1.17, -134]);
        a.c([3.6, 1.17, -142]);
        a.c([3.6, 1.17, -110]);
        a.c([8.34, 1.17, -110]);
        a.c([8.34, 1.17, -142]);
        a.c([8.34, 1.17, -134]);
        a.c([8.34, 1.17, -126]);
        a.c([8.34, 1.17, -118]);
        a.c([8.34, 1.17, -102]);
        a.c([8.34, 1.17, -150]);
        a.c([-3.77, 1.69, -288.74]);
        a.c([-4.66, 1.69, -280.01]);
        a.c([-4.66, 1.69, -288.74]);
        a.c([-5.32, 1.69, -288.74]);
        a.p([0, 0, -61], [0, 0, 0], [2, 0.4, 15]);
        a.p([1.76, 2.6, -71.5], [-0.7, 0.52, -0.35], [5, 0.4, 10]);
        a.p([7.9, 0.5, -128], [0, 0, 0.52], [2, 0.4, 80]);
        a.p([2.8, 1.9, -128], [0, 0, -1.05], [2, 0.4, 80]);
        a.p([4.1, 0.5, -128], [0, 0, -0.52], [2, 0.4, 80]);
        a.p([6, 0, -128], [0, 0, 0], [2, 0.4, 80]);
        a.p([9.2, 1.9, -128], [0, 0, -2.09], [2, 0.4, 80]);
        a.p([-4.66, 8.45, -253.82], [0, 0.52, 0], [8, 0.4, 14]);
        a.p([-4.66, 1.2, -284], [0, 0, 0], [8, 0.4, 40]);
        a.p([-4.66, 8.45, -303.83], [0, -1.57, 0], [8, 0.4, 14]);
        a.y([-0.67, 6.02, -188], [-0.79, 0, -1.57], [6, 26, 6]);
        a.y([-6.01, 6.02, -204.94], [1.22, 0, -1.57], [5, 20, 5]);
        a.y([-3.92, 6.11, -220.4], [1.75, 0, -1.57], [4, 14, 4]);
        a.y([-5, 6.11, -231.78], [1.57, 0, -1.57], [3, 10, 3]);
        a.p([0, -2, -16], [0, 0, 0], [4, 4, 34]);
        a.p([0, -1, -40], [0, 0, 0], [6, 0.4, 10]);
        a.p([6.3, 3.3, -83.3], [0, 0, 0], [4, 0.4, 22]);
        a.p([6, -1, -168], [0, 0, 0], [4, 0.4, 16]);
        a.p([-4, 6.65, -237.61], [-1.57, 0, 0], [4, 0.4, 20]);
        a.p([-6, 6.61, -237.61], [-1.57, 0, 0], [4, 0.4, 20]);
        a.e([-4.94, 1.71, -269.82]);
    },
    post: function() {
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
        a.m('C10').unfreezeWorldMatrix();
        a.m('C10').material = decorations.materials.moving_mat;
        a.m('C11').unfreezeWorldMatrix();
        a.m('C11').material = decorations.materials.moving_mat;
        a.m('C12').unfreezeWorldMatrix();
        a.m('C12').material = decorations.materials.moving_mat;
        a.m('C13').unfreezeWorldMatrix();
        a.m('C13').material = decorations.materials.moving_mat;
        a.m('C14').unfreezeWorldMatrix();
        a.m('C14').material = decorations.materials.moving_mat;
        a.m('C15').unfreezeWorldMatrix();
        a.m('C15').material = decorations.materials.moving_mat;
        a.m('C16').unfreezeWorldMatrix();
        a.m('C16').material = decorations.materials.moving_mat;
        a.m('C17').unfreezeWorldMatrix();
        a.m('C17').material = decorations.materials.moving_mat;
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
        a.m('Y0').unfreezeWorldMatrix();
        // a.m('Y0').material = decorations.materials.moving_mat;
        a.m('Y1').unfreezeWorldMatrix();
        // a.m('Y1').material = decorations.materials.moving_mat;
        a.m('Y2').unfreezeWorldMatrix();
        // a.m('Y2').material = decorations.materials.moving_mat;
        a.m('Y3').unfreezeWorldMatrix();
        // a.m('Y3').material = decorations.materials.moving_mat;
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
    },
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
            case 0:
                if (PZ < 0) {
                    this.section_id += 1
                }
                break;
            case 1:
                a.m('P10').rotation.z += 0.04000000000000001;
                if (PZ < -33) {
                    this.section_id += 1
                }
                break;
            case 2:
                if (PZ < -36) {
                    speed = default_speed * 1.5;
                    update.set_gravity(default_gravity * 0.5);
                    this.section_id += 1
                }
                break;
            case 3:
                a.m('P11').rotation.x += 0.020000000000000004;
                if (PZ < -45) {
                    speed = default_speed;
                    update.set_gravity(default_gravity);
                    this.section_id += 1
                }
                break;
            case 4:
                if (PZ < -45) {
                    update.set_gravity(default_gravity * 0.5);
                    this.section_id += 1
                }
                break;
            case 5:
                a.m('C0').undefined += undefined;
                a.m('C1').undefined += undefined;
                a.m('C2').undefined += undefined;
                a.m('C3').undefined += undefined;
                a.m('C4').undefined += undefined;
                a.m('C5').undefined += undefined;
                a.m('C6').undefined += undefined;
                a.m('C7').undefined += undefined;
                a.m('C8').undefined += undefined;
                a.m('C9').undefined += undefined;
                a.m('C10').undefined += undefined;
                a.m('C11').undefined += undefined;
                a.m('C12').undefined += undefined;
                a.m('C13').undefined += undefined;
                a.m('C14').undefined += undefined;
                a.m('C15').undefined += undefined;
                a.m('C16').undefined += undefined;
                a.m('C17').undefined += undefined;
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
                a.m('Y0').undefined += undefined;
                a.m('Y1').undefined += undefined;
                a.m('Y2').undefined += undefined;
                a.m('Y3').undefined += undefined;
                if (PZ < -57) {
                    update.set_gravity(default_gravity);
                    this.section_id += 1
                }
                break;
            case 6:
                if (PZ < -77.3) {
                    this.section_id += 1
                }
                break;
            case 7:
                a.m('P12').rotation.x += -0.005000000000000001;
                if (PZ < -94.3) {
                    this.section_id += 1
                }
                break;
            case 8:
                if (PZ < -95.92) {
                    speed = default_speed * 7.0;
                    this.section_id += 1
                }
                break;
            case 9:
                a.m('C0').undefined += undefined;
                a.m('C1').undefined += undefined;
                a.m('C2').undefined += undefined;
                a.m('C3').undefined += undefined;
                a.m('C4').undefined += undefined;
                a.m('C5').undefined += undefined;
                a.m('C6').undefined += undefined;
                a.m('C7').undefined += undefined;
                a.m('C8').undefined += undefined;
                a.m('C9').undefined += undefined;
                a.m('C10').undefined += undefined;
                a.m('C11').undefined += undefined;
                a.m('C12').undefined += undefined;
                a.m('C13').undefined += undefined;
                a.m('C14').undefined += undefined;
                a.m('C15').undefined += undefined;
                a.m('C16').undefined += undefined;
                a.m('C17').undefined += undefined;
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
                a.m('Y0').undefined += undefined;
                a.m('Y1').undefined += undefined;
                a.m('Y2').undefined += undefined;
                a.m('Y3').undefined += undefined;
                if (PZ < -159.92000000000002) {
                    speed = default_speed;
                    this.section_id += 1
                }
                break;
            case 10:
                if (PZ < -160) {
                    speed = default_speed * 1.01;
                    this.section_id += 1
                }
                break;
            case 11:
                a.m('P13').position.y += 0.2;
                if (PZ < -176) {
                    speed = default_speed;
                    this.section_id += 1
                }
                break;
            case 12:
                if (PZ < -233.57999999999998) {
                    speed = default_speed * 0.99;
                    this.section_id += 1
                }
                break;
            case 13:
                a.m('P14').rotation.y += -0.03;
                a.m('P15').rotation.y += 0.03;
                if (PZ < -250.94) {
                    speed = default_speed;
                    this.section_id += 1
                }
                break;
            case 14:
                if (PZ < -258.92) {
                    update.set_gravity(default_gravity * 0.3);
                    this.section_id += 1
                }
                break;
            case 15:
                a.m('C0').undefined += undefined;
                a.m('C1').undefined += undefined;
                a.m('C2').undefined += undefined;
                a.m('C3').undefined += undefined;
                a.m('C4').undefined += undefined;
                a.m('C5').undefined += undefined;
                a.m('C6').undefined += undefined;
                a.m('C7').undefined += undefined;
                a.m('C8').undefined += undefined;
                a.m('C9').undefined += undefined;
                a.m('C10').undefined += undefined;
                a.m('C11').undefined += undefined;
                a.m('C12').undefined += undefined;
                a.m('C13').undefined += undefined;
                a.m('C14').undefined += undefined;
                a.m('C15').undefined += undefined;
                a.m('C16').undefined += undefined;
                a.m('C17').undefined += undefined;
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
                a.m('Y0').undefined += undefined;
                a.m('Y1').undefined += undefined;
                a.m('Y2').undefined += undefined;
                a.m('Y3').undefined += undefined;
                if (PZ < -251.04) {
                    update.set_gravity(default_gravity);
                    this.section_id += 1
                }
                break;
            case 16:
                if (PZ < -259.29999999999995) {
                    update.set_gravity(default_gravity * 0.3);
                    speed = default_speed * 2.0;
                    this.section_id += 1
                }
                break;
            case 17:
                a.m('C0').undefined += undefined;
                a.m('C1').undefined += undefined;
                a.m('C2').undefined += undefined;
                a.m('C3').undefined += undefined;
                a.m('C4').undefined += undefined;
                a.m('C5').undefined += undefined;
                a.m('C6').undefined += undefined;
                a.m('C7').undefined += undefined;
                a.m('C8').undefined += undefined;
                a.m('C9').undefined += undefined;
                a.m('C10').undefined += undefined;
                a.m('C11').undefined += undefined;
                a.m('C12').undefined += undefined;
                a.m('C13').undefined += undefined;
                a.m('C14').undefined += undefined;
                a.m('C15').undefined += undefined;
                a.m('C16').undefined += undefined;
                a.m('C17').undefined += undefined;
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
                a.m('Y0').undefined += undefined;
                a.m('Y1').undefined += undefined;
                a.m('Y2').undefined += undefined;
                a.m('Y3').undefined += undefined;
                if (PZ < -300.74) {
                    update.set_gravity(default_gravity);
                    speed = default_speed;
                    this.section_id += 1
                }
                break;
            case 18:
                if (PZ < -300.85) {
                    speed = default_speed * -1.0;
                    this.section_id += 1
                }
                break;
            case 19:
                a.m('C0').undefined += undefined;
                a.m('C1').undefined += undefined;
                a.m('C2').undefined += undefined;
                a.m('C3').undefined += undefined;
                a.m('C4').undefined += undefined;
                a.m('C5').undefined += undefined;
                a.m('C6').undefined += undefined;
                a.m('C7').undefined += undefined;
                a.m('C8').undefined += undefined;
                a.m('C9').undefined += undefined;
                a.m('C10').undefined += undefined;
                a.m('C11').undefined += undefined;
                a.m('C12').undefined += undefined;
                a.m('C13').undefined += undefined;
                a.m('C14').undefined += undefined;
                a.m('C15').undefined += undefined;
                a.m('C16').undefined += undefined;
                a.m('C17').undefined += undefined;
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
                a.m('Y0').undefined += undefined;
                a.m('Y1').undefined += undefined;
                a.m('Y2').undefined += undefined;
                a.m('Y3').undefined += undefined;
                if (PZ < -303.85) {
                    speed = default_speed;
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
        a.m('C0').position.x = 3.6;
        a.m('C0').position.y = 1.17;
        a.m('C0').position.z = -150;
        a.m('C0').scaling.x = 2;
        a.m('C0').scaling.y = 2;
        a.m('C0').scaling.z = 2;
        a.m('C1').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('C1').rotation.x = 0;
        a.m('C1').rotation.y = 0;
        a.m('C1').rotation.z = 0;
        a.m('C1').position.x = 3.6;
        a.m('C1').position.y = 1.17;
        a.m('C1').position.z = -102;
        a.m('C1').scaling.x = 2;
        a.m('C1').scaling.y = 2;
        a.m('C1').scaling.z = 2;
        a.m('C2').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('C2').rotation.x = 0;
        a.m('C2').rotation.y = 0;
        a.m('C2').rotation.z = 0;
        a.m('C2').position.x = 3.6;
        a.m('C2').position.y = 1.17;
        a.m('C2').position.z = -118;
        a.m('C2').scaling.x = 2;
        a.m('C2').scaling.y = 2;
        a.m('C2').scaling.z = 2;
        a.m('C3').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('C3').rotation.x = 0;
        a.m('C3').rotation.y = 0;
        a.m('C3').rotation.z = 0;
        a.m('C3').position.x = 3.6;
        a.m('C3').position.y = 1.17;
        a.m('C3').position.z = -126;
        a.m('C3').scaling.x = 2;
        a.m('C3').scaling.y = 2;
        a.m('C3').scaling.z = 2;
        a.m('C4').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('C4').rotation.x = 0;
        a.m('C4').rotation.y = 0;
        a.m('C4').rotation.z = 0;
        a.m('C4').position.x = 3.6;
        a.m('C4').position.y = 1.17;
        a.m('C4').position.z = -134;
        a.m('C4').scaling.x = 2;
        a.m('C4').scaling.y = 2;
        a.m('C4').scaling.z = 2;
        a.m('C5').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('C5').rotation.x = 0;
        a.m('C5').rotation.y = 0;
        a.m('C5').rotation.z = 0;
        a.m('C5').position.x = 3.6;
        a.m('C5').position.y = 1.17;
        a.m('C5').position.z = -142;
        a.m('C5').scaling.x = 2;
        a.m('C5').scaling.y = 2;
        a.m('C5').scaling.z = 2;
        a.m('C6').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('C6').rotation.x = 0;
        a.m('C6').rotation.y = 0;
        a.m('C6').rotation.z = 0;
        a.m('C6').position.x = 3.6;
        a.m('C6').position.y = 1.17;
        a.m('C6').position.z = -110;
        a.m('C6').scaling.x = 2;
        a.m('C6').scaling.y = 2;
        a.m('C6').scaling.z = 2;
        a.m('C7').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('C7').rotation.x = 0;
        a.m('C7').rotation.y = 0;
        a.m('C7').rotation.z = 0;
        a.m('C7').position.x = 8.34;
        a.m('C7').position.y = 1.17;
        a.m('C7').position.z = -110;
        a.m('C7').scaling.x = 2;
        a.m('C7').scaling.y = 2;
        a.m('C7').scaling.z = 2;
        a.m('C8').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('C8').rotation.x = 0;
        a.m('C8').rotation.y = 0;
        a.m('C8').rotation.z = 0;
        a.m('C8').position.x = 8.34;
        a.m('C8').position.y = 1.17;
        a.m('C8').position.z = -142;
        a.m('C8').scaling.x = 2;
        a.m('C8').scaling.y = 2;
        a.m('C8').scaling.z = 2;
        a.m('C9').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('C9').rotation.x = 0;
        a.m('C9').rotation.y = 0;
        a.m('C9').rotation.z = 0;
        a.m('C9').position.x = 8.34;
        a.m('C9').position.y = 1.17;
        a.m('C9').position.z = -134;
        a.m('C9').scaling.x = 2;
        a.m('C9').scaling.y = 2;
        a.m('C9').scaling.z = 2;
        a.m('C10').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('C10').rotation.x = 0;
        a.m('C10').rotation.y = 0;
        a.m('C10').rotation.z = 0;
        a.m('C10').position.x = 8.34;
        a.m('C10').position.y = 1.17;
        a.m('C10').position.z = -126;
        a.m('C10').scaling.x = 2;
        a.m('C10').scaling.y = 2;
        a.m('C10').scaling.z = 2;
        a.m('C11').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('C11').rotation.x = 0;
        a.m('C11').rotation.y = 0;
        a.m('C11').rotation.z = 0;
        a.m('C11').position.x = 8.34;
        a.m('C11').position.y = 1.17;
        a.m('C11').position.z = -118;
        a.m('C11').scaling.x = 2;
        a.m('C11').scaling.y = 2;
        a.m('C11').scaling.z = 2;
        a.m('C12').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('C12').rotation.x = 0;
        a.m('C12').rotation.y = 0;
        a.m('C12').rotation.z = 0;
        a.m('C12').position.x = 8.34;
        a.m('C12').position.y = 1.17;
        a.m('C12').position.z = -102;
        a.m('C12').scaling.x = 2;
        a.m('C12').scaling.y = 2;
        a.m('C12').scaling.z = 2;
        a.m('C13').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('C13').rotation.x = 0;
        a.m('C13').rotation.y = 0;
        a.m('C13').rotation.z = 0;
        a.m('C13').position.x = 8.34;
        a.m('C13').position.y = 1.17;
        a.m('C13').position.z = -150;
        a.m('C13').scaling.x = 2;
        a.m('C13').scaling.y = 2;
        a.m('C13').scaling.z = 2;
        a.m('C14').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('C14').rotation.x = 0;
        a.m('C14').rotation.y = 0;
        a.m('C14').rotation.z = 0;
        a.m('C14').position.x = -3.77;
        a.m('C14').position.y = 1.69;
        a.m('C14').position.z = -288.74;
        a.m('C14').scaling.x = 2;
        a.m('C14').scaling.y = 2;
        a.m('C14').scaling.z = 2;
        a.m('C15').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('C15').rotation.x = 0;
        a.m('C15').rotation.y = 0;
        a.m('C15').rotation.z = 0;
        a.m('C15').position.x = -4.66;
        a.m('C15').position.y = 1.69;
        a.m('C15').position.z = -280.01;
        a.m('C15').scaling.x = 2;
        a.m('C15').scaling.y = 2;
        a.m('C15').scaling.z = 2;
        a.m('C16').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('C16').rotation.x = 0;
        a.m('C16').rotation.y = 0;
        a.m('C16').rotation.z = 0;
        a.m('C16').position.x = -4.66;
        a.m('C16').position.y = 1.69;
        a.m('C16').position.z = -288.74;
        a.m('C16').scaling.x = 2;
        a.m('C16').scaling.y = 2;
        a.m('C16').scaling.z = 2;
        a.m('C17').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('C17').rotation.x = 0;
        a.m('C17').rotation.y = 0;
        a.m('C17').rotation.z = 0;
        a.m('C17').position.x = -5.32;
        a.m('C17').position.y = 1.69;
        a.m('C17').position.z = -288.74;
        a.m('C17').scaling.x = 2;
        a.m('C17').scaling.y = 2;
        a.m('C17').scaling.z = 2;
        a.m('P0').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P0').rotation.x = 0;
        a.m('P0').rotation.y = 0;
        a.m('P0').rotation.z = 0;
        a.m('P0').position.x = 0;
        a.m('P0').position.y = 0;
        a.m('P0').position.z = -61;
        a.m('P0').scaling.x = 2;
        a.m('P0').scaling.y = 0.4;
        a.m('P0').scaling.z = 15;
        a.m('P1').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P1').rotation.x = 0.52;
        a.m('P1').rotation.y = -0.7;
        a.m('P1').rotation.z = -0.35;
        a.m('P1').position.x = 1.76;
        a.m('P1').position.y = 2.6;
        a.m('P1').position.z = -71.5;
        a.m('P1').scaling.x = 5;
        a.m('P1').scaling.y = 0.4;
        a.m('P1').scaling.z = 10;
        a.m('P2').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P2').rotation.x = 0;
        a.m('P2').rotation.y = 0;
        a.m('P2').rotation.z = 0.52;
        a.m('P2').position.x = 7.9;
        a.m('P2').position.y = 0.5;
        a.m('P2').position.z = -128;
        a.m('P2').scaling.x = 2;
        a.m('P2').scaling.y = 0.4;
        a.m('P2').scaling.z = 80;
        a.m('P3').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P3').rotation.x = 0;
        a.m('P3').rotation.y = 0;
        a.m('P3').rotation.z = -1.05;
        a.m('P3').position.x = 2.8;
        a.m('P3').position.y = 1.9;
        a.m('P3').position.z = -128;
        a.m('P3').scaling.x = 2;
        a.m('P3').scaling.y = 0.4;
        a.m('P3').scaling.z = 80;
        a.m('P4').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P4').rotation.x = 0;
        a.m('P4').rotation.y = 0;
        a.m('P4').rotation.z = -0.52;
        a.m('P4').position.x = 4.1;
        a.m('P4').position.y = 0.5;
        a.m('P4').position.z = -128;
        a.m('P4').scaling.x = 2;
        a.m('P4').scaling.y = 0.4;
        a.m('P4').scaling.z = 80;
        a.m('P5').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P5').rotation.x = 0;
        a.m('P5').rotation.y = 0;
        a.m('P5').rotation.z = 0;
        a.m('P5').position.x = 6;
        a.m('P5').position.y = 0;
        a.m('P5').position.z = -128;
        a.m('P5').scaling.x = 2;
        a.m('P5').scaling.y = 0.4;
        a.m('P5').scaling.z = 80;
        a.m('P6').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P6').rotation.x = 0;
        a.m('P6').rotation.y = 0;
        a.m('P6').rotation.z = -2.09;
        a.m('P6').position.x = 9.2;
        a.m('P6').position.y = 1.9;
        a.m('P6').position.z = -128;
        a.m('P6').scaling.x = 2;
        a.m('P6').scaling.y = 0.4;
        a.m('P6').scaling.z = 80;
        a.m('P7').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P7').rotation.x = 0.52;
        a.m('P7').rotation.y = 0;
        a.m('P7').rotation.z = 0;
        a.m('P7').position.x = -4.66;
        a.m('P7').position.y = 8.45;
        a.m('P7').position.z = -253.82;
        a.m('P7').scaling.x = 8;
        a.m('P7').scaling.y = 0.4;
        a.m('P7').scaling.z = 14;
        a.m('P8').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P8').rotation.x = 0;
        a.m('P8').rotation.y = 0;
        a.m('P8').rotation.z = 0;
        a.m('P8').position.x = -4.66;
        a.m('P8').position.y = 1.2;
        a.m('P8').position.z = -284;
        a.m('P8').scaling.x = 8;
        a.m('P8').scaling.y = 0.4;
        a.m('P8').scaling.z = 40;
        a.m('P9').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P9').rotation.x = -1.57;
        a.m('P9').rotation.y = 0;
        a.m('P9').rotation.z = 0;
        a.m('P9').position.x = -4.66;
        a.m('P9').position.y = 8.45;
        a.m('P9').position.z = -303.83;
        a.m('P9').scaling.x = 8;
        a.m('P9').scaling.y = 0.4;
        a.m('P9').scaling.z = 14;
        a.m('Y0').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('Y0').rotation.x = 0;
        a.m('Y0').rotation.y = -0.79;
        a.m('Y0').rotation.z = -1.57;
        a.m('Y0').position.x = -0.67;
        a.m('Y0').position.y = 6.02;
        a.m('Y0').position.z = -188;
        a.m('Y0').scaling.x = 6;
        a.m('Y0').scaling.y = 26;
        a.m('Y0').scaling.z = 6;
        a.m('Y1').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('Y1').rotation.x = 0;
        a.m('Y1').rotation.y = 1.22;
        a.m('Y1').rotation.z = -1.57;
        a.m('Y1').position.x = -6.01;
        a.m('Y1').position.y = 6.02;
        a.m('Y1').position.z = -204.94;
        a.m('Y1').scaling.x = 5;
        a.m('Y1').scaling.y = 20;
        a.m('Y1').scaling.z = 5;
        a.m('Y2').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('Y2').rotation.x = 0;
        a.m('Y2').rotation.y = 1.75;
        a.m('Y2').rotation.z = -1.57;
        a.m('Y2').position.x = -3.92;
        a.m('Y2').position.y = 6.11;
        a.m('Y2').position.z = -220.4;
        a.m('Y2').scaling.x = 4;
        a.m('Y2').scaling.y = 14;
        a.m('Y2').scaling.z = 4;
        a.m('Y3').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('Y3').rotation.x = 0;
        a.m('Y3').rotation.y = 1.57;
        a.m('Y3').rotation.z = -1.57;
        a.m('Y3').position.x = -5;
        a.m('Y3').position.y = 6.11;
        a.m('Y3').position.z = -231.78;
        a.m('Y3').scaling.x = 3;
        a.m('Y3').scaling.y = 10;
        a.m('Y3').scaling.z = 3;
        a.m('P10').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P10').rotation.x = 0;
        a.m('P10').rotation.y = 0;
        a.m('P10').rotation.z = 0;
        a.m('P10').position.x = 0;
        a.m('P10').position.y = -2;
        a.m('P10').position.z = -16;
        a.m('P10').scaling.x = 4;
        a.m('P10').scaling.y = 4;
        a.m('P10').scaling.z = 34;
        a.m('P11').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P11').rotation.x = 0;
        a.m('P11').rotation.y = 0;
        a.m('P11').rotation.z = 0;
        a.m('P11').position.x = 0;
        a.m('P11').position.y = -1;
        a.m('P11').position.z = -40;
        a.m('P11').scaling.x = 6;
        a.m('P11').scaling.y = 0.4;
        a.m('P11').scaling.z = 10;
        a.m('P12').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P12').rotation.x = 0;
        a.m('P12').rotation.y = 0;
        a.m('P12').rotation.z = 0;
        a.m('P12').position.x = 6.3;
        a.m('P12').position.y = 3.3;
        a.m('P12').position.z = -83.3;
        a.m('P12').scaling.x = 4;
        a.m('P12').scaling.y = 0.4;
        a.m('P12').scaling.z = 22;
        a.m('P13').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P13').rotation.x = 0;
        a.m('P13').rotation.y = 0;
        a.m('P13').rotation.z = 0;
        a.m('P13').position.x = 6;
        a.m('P13').position.y = -1;
        a.m('P13').position.z = -168;
        a.m('P13').scaling.x = 4;
        a.m('P13').scaling.y = 0.4;
        a.m('P13').scaling.z = 16;
        a.m('P14').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P14').rotation.x = 0;
        a.m('P14').rotation.y = -1.57;
        a.m('P14').rotation.z = 0;
        a.m('P14').position.x = -4;
        a.m('P14').position.y = 6.65;
        a.m('P14').position.z = -237.61;
        a.m('P14').scaling.x = 4;
        a.m('P14').scaling.y = 0.4;
        a.m('P14').scaling.z = 20;
        a.m('P15').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P15').rotation.x = 0;
        a.m('P15').rotation.y = -1.57;
        a.m('P15').rotation.z = 0;
        a.m('P15').position.x = -6;
        a.m('P15').position.y = 6.61;
        a.m('P15').position.z = -237.61;
        a.m('P15').scaling.x = 4;
        a.m('P15').scaling.y = 0.4;
        a.m('P15').scaling.z = 20;
    },
    physics_update: function() {},
    render_update: function() {}
}