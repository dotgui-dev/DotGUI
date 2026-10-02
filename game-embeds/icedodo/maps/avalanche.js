var map = {
    title: "Avalanche",
    song: "env2",
    maker: "Squirrel",
    spawn: [0, 0.5, 0],
    init: function() {
        a.p([0, -0.59, -2.41], [3.14, 0, 0], [2, 0.6, 8.04]);
        a.p([-0.71, 49.67, -45.75], [0.1, -0.28, -0.19], [2, 0.6, 8]);
        a.p([0, 7.99, -10.61], [3.14, -1.17, 0], [2, 0.6, 18.16]);
        a.p([0, 47.3, -29.93], [3.14, -0.83, 0], [2, 0.6, 10]);
        a.p([0, 38.6, -23.72], [3.14, -1.07, 0], [2, 0.6, 10]);
        a.p([-0.28, 47.59, -53.91], [-0.33, 0.01, -0.48], [2, 0.6, 8.02]);
        a.p([0, 51.31, -37.64], [0, 0, 0], [2, 0.6, 7.46]);
        a.p([3.34, 18.36, -95.96], [-0.6, -0.51, -0.32], [3, 0.6, 10]);
        a.p([0, 25.33, -17.73], [3.14, -1.18, 0], [2, 0.6, 18.16]);
        a.p([8.61, 27.15, -86.34], [0.38, -0.28, 0.23], [3, 0.6, 10]);
        a.p([5.17, 41.24, -63.25], [-0.22, -0.1, 0.32], [3, 0.6, 10]);
        a.p([7.27, 13.74, -104.2], [0, 0, 0], [3, 0.6, 10]);
        a.p([6.42, 34.61, -75.35], [-0.54, -0.24, -0.16], [3, 0.6, 10]);
        a.e([7.54, 14.7, -107.68]);
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
    },
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
            case 0:
                if (PZ < 2.040000000000001) {
                    update.set_gravity(default_gravity * -0.69);
                    this.section_id += 1
                }
                break;
            case 1:
                if (PZ < -18.740000000000002) {
                    update.set_gravity(default_gravity);
                    this.section_id += 1
                }
                break;
            case 2:
                if (PZ < -32.26) {
                    update.set_gravity(default_gravity * 1.75);
                    steer = default_steer * 1.5;
                    this.section_id += 1
                }
                break;
            case 3:
                if (PZ < -119.18) {
                    update.set_gravity(default_gravity);
                    steer = default_steer;
                    this.section_id += 1
                }
                break;
        }
    },
    reset: function() {
        this.section_id = 0;
        a.m('P0').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P0').rotation.x = 0;
        a.m('P0').rotation.y = 3.14;
        a.m('P0').rotation.z = 0;
        a.m('P0').position.x = 0;
        a.m('P0').position.y = -0.59;
        a.m('P0').position.z = -2.41;
        a.m('P0').scaling.x = 2;
        a.m('P0').scaling.y = 0.6;
        a.m('P0').scaling.z = 8.04;
        a.m('P1').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P1').rotation.x = -0.28;
        a.m('P1').rotation.y = 0.1;
        a.m('P1').rotation.z = -0.19;
        a.m('P1').position.x = -0.71;
        a.m('P1').position.y = 49.67;
        a.m('P1').position.z = -45.75;
        a.m('P1').scaling.x = 2;
        a.m('P1').scaling.y = 0.6;
        a.m('P1').scaling.z = 8;
        a.m('P2').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P2').rotation.x = -1.17;
        a.m('P2').rotation.y = 3.14;
        a.m('P2').rotation.z = 0;
        a.m('P2').position.x = 0;
        a.m('P2').position.y = 7.99;
        a.m('P2').position.z = -10.61;
        a.m('P2').scaling.x = 2;
        a.m('P2').scaling.y = 0.6;
        a.m('P2').scaling.z = 18.16;
        a.m('P3').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P3').rotation.x = -0.83;
        a.m('P3').rotation.y = 3.14;
        a.m('P3').rotation.z = 0;
        a.m('P3').position.x = 0;
        a.m('P3').position.y = 47.3;
        a.m('P3').position.z = -29.93;
        a.m('P3').scaling.x = 2;
        a.m('P3').scaling.y = 0.6;
        a.m('P3').scaling.z = 10;
        a.m('P4').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P4').rotation.x = -1.07;
        a.m('P4').rotation.y = 3.14;
        a.m('P4').rotation.z = 0;
        a.m('P4').position.x = 0;
        a.m('P4').position.y = 38.6;
        a.m('P4').position.z = -23.72;
        a.m('P4').scaling.x = 2;
        a.m('P4').scaling.y = 0.6;
        a.m('P4').scaling.z = 10;
        a.m('P5').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P5').rotation.x = 0.01;
        a.m('P5').rotation.y = -0.33;
        a.m('P5').rotation.z = -0.48;
        a.m('P5').position.x = -0.28;
        a.m('P5').position.y = 47.59;
        a.m('P5').position.z = -53.91;
        a.m('P5').scaling.x = 2;
        a.m('P5').scaling.y = 0.6;
        a.m('P5').scaling.z = 8.02;
        a.m('P6').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P6').rotation.x = 0;
        a.m('P6').rotation.y = 0;
        a.m('P6').rotation.z = 0;
        a.m('P6').position.x = 0;
        a.m('P6').position.y = 51.31;
        a.m('P6').position.z = -37.64;
        a.m('P6').scaling.x = 2;
        a.m('P6').scaling.y = 0.6;
        a.m('P6').scaling.z = 7.46;
        a.m('P7').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P7').rotation.x = -0.51;
        a.m('P7').rotation.y = -0.6;
        a.m('P7').rotation.z = -0.32;
        a.m('P7').position.x = 3.34;
        a.m('P7').position.y = 18.36;
        a.m('P7').position.z = -95.96;
        a.m('P7').scaling.x = 3;
        a.m('P7').scaling.y = 0.6;
        a.m('P7').scaling.z = 10;
        a.m('P8').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P8').rotation.x = -1.18;
        a.m('P8').rotation.y = 3.14;
        a.m('P8').rotation.z = 0;
        a.m('P8').position.x = 0;
        a.m('P8').position.y = 25.33;
        a.m('P8').position.z = -17.73;
        a.m('P8').scaling.x = 2;
        a.m('P8').scaling.y = 0.6;
        a.m('P8').scaling.z = 18.16;
        a.m('P9').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P9').rotation.x = -0.28;
        a.m('P9').rotation.y = 0.38;
        a.m('P9').rotation.z = 0.23;
        a.m('P9').position.x = 8.61;
        a.m('P9').position.y = 27.15;
        a.m('P9').position.z = -86.34;
        a.m('P9').scaling.x = 3;
        a.m('P9').scaling.y = 0.6;
        a.m('P9').scaling.z = 10;
        a.m('P10').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P10').rotation.x = -0.1;
        a.m('P10').rotation.y = -0.22;
        a.m('P10').rotation.z = 0.32;
        a.m('P10').position.x = 5.17;
        a.m('P10').position.y = 41.24;
        a.m('P10').position.z = -63.25;
        a.m('P10').scaling.x = 3;
        a.m('P10').scaling.y = 0.6;
        a.m('P10').scaling.z = 10;
        a.m('P11').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P11').rotation.x = 0;
        a.m('P11').rotation.y = 0;
        a.m('P11').rotation.z = 0;
        a.m('P11').position.x = 7.27;
        a.m('P11').position.y = 13.74;
        a.m('P11').position.z = -104.2;
        a.m('P11').scaling.x = 3;
        a.m('P11').scaling.y = 0.6;
        a.m('P11').scaling.z = 10;
        a.m('P12').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        a.m('P12').rotation.x = -0.24;
        a.m('P12').rotation.y = -0.54;
        a.m('P12').rotation.z = -0.16;
        a.m('P12').position.x = 6.42;
        a.m('P12').position.y = 34.61;
        a.m('P12').position.z = -75.35;
        a.m('P12').scaling.x = 3;
        a.m('P12').scaling.y = 0.6;
        a.m('P12').scaling.z = 10;
    },
    physics_update: function() {},
    render_update: function() {}
}
