const IS_ICEPARTY = false;

var a = {
    p: function(q,r,s, imat, bounce, mass, friction, jump, air) {
        if (!imat) imat = (IS_ICEPARTY) ? 1 : 0;
        if (!bounce) bounce = 0;
    	maker.make_platform(q,r,s, imat, bounce, mass, friction, jump, air);
    },
    y: function(q,r,s, imat, bounce, mass, friction, air, topr) {
        if (!imat) imat = (IS_ICEPARTY) ? 1 : 0;
        if (!bounce) bounce = 0;
        maker.make_cylinder(q,r,s, imat, bounce, mass, friction, air, topr);
    },
    s: function(q,radius, imat, bounce, mass, friction, air) {
        maker.make_sphere(q, radius, imat, bounce, mass, friction, air);
    },
    c: function(q, iceparty) {
        if (iceparty == null) iceparty = (IS_ICEPARTY) ? true : false;
    	maker.make_cone(q, iceparty);
    },
    e: function(q) {
    	maker.make_ending(q);
    },
    m: function(id) {
    	return scene.getMeshByName(id);
    },
    re: function(id, q, r, s) { // reset
        let mesh = scene.getMeshByName(id);
        mesh.rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 0, 0), 0);
        mesh.rotation.x = r[1];
        mesh.rotation.y = r[0];
        mesh.rotation.z = r[2];
        mesh.position.x = q[0];
        mesh.position.y = q[1];
        mesh.position.z = q[2];
        mesh.scaling.x = s[0];
        mesh.scaling.y = s[1];
        mesh.scaling.z = s[2];
        if (mesh.physicsImpostor) {
            mesh.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(0,0,0));
            mesh.physicsImpostor.setAngularVelocity(new BABYLON.Quaternion(0,0,0,0));
        }
    },
    g: function(x,y,z) {
        let vec = cc.get("gravity", {
            x: (x != null) ? x*default_gravity : null,
            y: (y != null) ? y*default_gravity : null,
            z: (z != null) ? z*default_gravity : null
        });
        gravity = vec;
        console.log("%c GrAV", "color: blue", vec);
        scene.getPhysicsEngine().setGravity(vec);
    },
    d: function(x,y,z) {
        player.scaling = cc.get("player.scaling", {x,y,z});
    },
    cam_d: function(_radius) {
        let cam_d = cc.get("radius", _radius)
        let cam_cd = cc.get("cameraDownAngle", null);

        cam_horizontal = cam_d * cam_d;
        cam_vertical = cam_horizontal * Math.tan(cam_cd * 1.3);
        cam_depression = cam_cd;
    },
    cam_cd: function(_cameraDownAngle) {
        let cam_d = cc.get("radius", null);
        let cam_cd = cc.get("cameraDownAngle", (_cameraDownAngle != null) ? _cameraDownAngle * Math.PI / 180 : null);

        cam_horizontal = cam_d * cam_d;
        cam_vertical = cam_horizontal * Math.tan(cam_cd * 1.3);
        cam_depression = cam_cd;
    },
    cam_cr: function(_cameraRightAngle) {
        cameraRightAngle = cc.get("cameraRightAngle", (_cameraRightAngle != null) ? _cameraRightAngle * Math.PI / 180 : null);
    },
    t: function(x,y,z) {
        camera.upVector = cc.get("camera.upVector", {x,y,z});
    },
    mov: function(id, axis, value) {
        scene.getMeshByName(id).position[axis] += value * default_speed;
    },
    rot: function(id, axis, value) {
        scene.getMeshByName(id).rotation[axis] += value * default_steer;
    },
    siz: function(id, axis, value) {
        scene.getMeshByName(id).scaling[axis] += value / 100;
    },
    fov_mul2: function(_mul2) {
        let mul2 = cc.get("camera.fov mul2", _mul2);
        fov.set_mul2(mul2);
        fov.apply();
    },
    u: function(id) {
        scene.getMeshByName(id).unfreezeWorldMatrix();
    },
    msg_set: function(text) {
        $("#map_text").css("visibility", "visible");
        setTimeout(function() {
            $("#map_text").text(text);  
            $("#map_text").fadeIn("fast");
        }, 250)
        
    },
    msg_del: function() {
        $("#map_text").fadeOut("fast");
    },
    js: function(v) {
        jumpSpeed = cc.get("jumpSpeed", v);
    },
    jh: function(v) {
        jumpHeight = cc.get("jumpHeight", v);
    },
    og: function(mat, p1,p2,p3, r1,r2,r3, s1,s2,s3) {
        var mat_map = {
            ice: 0,
            fire: 5,
            green: 6,
            brown: 7,
            water: 8,
            invisible: -1,
            fall: 0
        }
        if (mat != "fall") {
            this.p([p1 * (-1),p2,p3], [r1*(Math.PI / 180),r2*(Math.PI / 180),r3*(Math.PI / 180)], [s1,s2,s3], mat_map[mat] || 0);
        } else {
            this.p([p1 * (-1),p2,p3], [r1*(Math.PI / 180),r2*(Math.PI / 180),r3*(Math.PI / 180)], [s1,s2,s3], mat_map[mat] || 0, 1, 0.2, 0);
        }
        
    },
    og_end: function(p1, p2, p3, yr) {
        this.e([p1,p2,p3]);
    },
    og_c: function(p1,p2,p3) {
        maker.og_cone(p1,p2,p3);
    },
    og_y: function(positionX, positionY, positionZ, rotationY, rotationX, rotationZ, rad, hei) {
        maker.og_cylinder(positionX, positionY, positionZ, rotationY, rotationX, rotationZ, rad, hei);
    },
    og_tree: function(p1,p2,p3) {
        maker.og_tree(p1,p2,p3);
    }
}
