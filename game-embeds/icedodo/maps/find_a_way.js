var map = {
    title: "Find a Way",
    song: "env2",
    maker: "Maplez",
    spawn: [0, 0.5, 0],
    init: function() {
        a.c([2.49, 0.46, -86.72]);
        a.c([9.18, 8.94, -120.72]);
        a.c([0.89, 0.46, -86.72]);
        a.c([6.05, 8.58, -126]);
        a.c([9.47, 8.58, -127.91]);
        a.c([6.5, 8.58, -132.11]);
        a.c([-0.74, 25.79, -171.57]);
        a.c([10.68, 25.79, -165.47]);
        a.c([-0.49, 0.46, -86.72]);
        a.c([-2.91, 0.46, -91.75]);
        a.c([-1.44, 0.46, -91.75]);
        a.p([0.35, -0.88, -1.97], [0, 0, 0], [2.82, 0.48, 5.16]);
        a.p([0.35, -0.19, -6.6], [0, 0.28, 0.01], [2.82, 0.48, 5.16]);
        a.p([0.35, -0.88, -39.95], [0, 0, 0], [2.4, 0.38, 15.5]);
        a.p([0.64, -3.41, -81.24], [0, 0.67, 0], [12.86, 1, 8.96]);
        a.p([6.42, 0, -69.04], [0, 0, 0], [2, 19.14, 26.08]);
        a.p([-6.3, 0, -69.04], [0, 0, 0], [2, 19.14, 26.08]);
        a.p([0.37, -0.62, -90.77], [0, 0, 0], [10.36, 0.9, 12.58]);
        a.p([-1.69, 0, -63.88], [0, 0, 0], [7.38, 19.14, 9.22]);
        a.p([2.05, 0, -76.97], [0, 0, 0], [7.38, 19.14, 9.22]);
        a.p([-12.36, 9.1, -166.51], [0, 0, 0], [2, 11.08, 2]);
        a.p([-10.74, 12.37, -166.51], [0, 0, 0.51], [1.26, 5.4, 2]);
        a.p([5.68, 3.48, -112.82], [-0.38, 0.35, 0.09], [2.58, 0.7, 9.58]);
        a.p([7.64, 8.19, -124.24], [0, 0, 0], [7.52, -1.04, 17.48]);
        a.p([7.39, 5.1, -141.43], [0, 0, 0], [11.9, -0.86, 10.32]);
        a.p([5.4, 6.56, -158.03], [0, -0.67, -0.01], [21.92, 1.32, 19.64]);
        a.p([5.41, 13.39, -173.79], [0, 0, 0], [22, 29.06, 19.72]);
        a.p([5.4, 24.76, -158.03], [0, -0.67, -0.01], [21.92, 1.32, 19.64]);
        a.p([-14.16, 12.37, -166.51], [0, 0, -0.62], [1.26, 5.4, 2]);
        a.y([-0.59, -0.52, -100.46], [-0.02, -1.42, 0.02], [2.38, 9.2, 2.38]);
        a.y([1.78, 1.2, -106.78], [0.89, 0, -1.18], [2.34, 6.36, 2.34]);
        a.e([5.84, 28.61, -176.28]);
    },
    post: function() {},
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
            case 0:
                if (PZ < -9.18) {
                    update.set_gravity(default_gravity * -0.002);
                    this.section_id += 1
                }
                break;
            case 1:
                if (PZ < -27.1) {
                    update.set_gravity(default_gravity);
                    this.section_id += 1
                }
                break;
            case 2:
                if (PZ < -47.37) {
                    update.set_gravity(default_gravity * 0.04);
                    this.section_id += 1
                }
                break;
            case 3:
                if (PZ < -81.66999999999999) {
                    update.set_gravity(default_gravity);
                    this.section_id += 1
                }
                break;
            case 4:
                if (PZ < -113.46) {
                    update.set_gravity(default_gravity * -0.1);
                    this.section_id += 1
                }
                break;
            case 5:
                if (PZ < -138.57999999999998) {
                    update.set_gravity(default_gravity);
                    this.section_id += 1
                }
                break;
            case 6:
                if (PZ < -139.44000000000003) {
                    update.set_gravity(default_gravity * -0.5);
                    this.section_id += 1
                }
                break;
            case 7:
                if (PZ < -147.22) {
                    update.set_gravity(default_gravity);
                    this.section_id += 1
                }
                break;
            case 8:
                if (PZ < -163.29) {
                    update.set_gravity(default_gravity * -0.04);
                    this.section_id += 1
                }
                break;
            case 9:
                if (PZ < -165.91) {
                    update.set_gravity(default_gravity);
                    this.section_id += 1
                }
                break;
        }
    },
    reset: function() {
        this.section_id = 0;
    },
    physics_update: function() {},
    render_update: function() {}
}
