var maker = {
    platform_count: 0,
    cone_count: 0,
    cylinder_count: 0,
    sphere_count: 0,
    ending_count: 0,
    plat1: null,
    plat2: null,
    plat3: null,
    init: function() {
        this.add_root_meshes("cone", 2, (i) => {
            return BABYLON.Mesh.CreateCylinder("cone"+i, 1.0, 0.0, 1.0, 5, 1, scene, false, BABYLON.Mesh.DEFAULTSIDE);
        });
        this.add_root_meshes("plat", 8, (i) => {
            return BABYLON.Mesh.CreateBox("plat"+i,1, scene);
        });
        this.add_root_meshes("sphere", 5, (i) => {
            return BABYLON.Mesh.CreateSphere("sphere"+i, 10, 1, scene);
        });
    },
    add_root_meshes: function(name, count, fn) {
        for (var i=0;i<count;i++) {
            this[name+i] = fn(i);
            decorations.decorate(this[name+i], name+i);
            this[name+i].isVisible = false;
            this[name+i].cullingStrategy = BABYLON.AbstractMesh.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY;
        }  
    },
    make_platform: function(posList, rotList, sizList, imat=0, bounce=0, mass=0, friction=0.6, jump=false, air=false) {
        // Data
        let pX = posList[0]; let pY = posList[1]; let pZ = posList[2];
        let rX = rotList[1]; let rY = rotList[0]; let rZ = rotList[2];
        let sX = sizList[0]; let sY = sizList[1]; let sZ = sizList[2];
        pY += Math.random() * 0.0007;
        // Mesh
        let mesh_name = "P" + this.platform_count;
        var platform;

        function isNum(x) {
            return (isNaN(Math.round(x)) == false);
        }
        if (isNum(imat)) {
            imat = Math.round(imat);
            platform = (this["plat"+imat] || this["plat"+0]).createInstance(mesh_name);
            if (imat == -1) platform.isVisible = false;
        } else {
            platform = BABYLON.Mesh.CreateBox(mesh_name,1, scene);
            platform.cullingStrategy = BABYLON.AbstractMesh.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY;
            let color_obj = decorations.hexToRgb("#"+imat);
            console.log("color_obj", color_obj);
            platform.material = decorations.rgba_mat(color_obj.r, color_obj.g, color_obj.b, color_obj.a);
        }
        
        // Set
        platform.scaling = new BABYLON.Vector3(sX,sY,sZ);
        platform.position = new BABYLON.Vector3(pX,pY,pZ);
        platform.rotation = new BABYLON.Vector3(rX,rY,rZ);
        // platform.freezeWorldMatrix(); // Don't use:  ???
        // Physics
        if (air == false) {
            platform.physicsImpostor = new BABYLON.PhysicsImpostor(platform, BABYLON.PhysicsImpostor.BoxImpostor, { mass: mass, restitution: bounce, friction: friction}, scene);
        }
        // Tracker
        this.platform_count += 1;
        if (jump == true) {
            jumppads.push(platform);
        }
    },
    make_cone: function(posList, imat) {
        // Data
        let pX = posList[0]; let pY = posList[1]; let pZ = posList[2];
        // Mesh
        let mesh_name = "C" + this.cone_count;
        
        if ((imat == true) || (imat == false)) {
            imat = (imat == true) ? 1 : 0;
        }

        var cone;
        if (isNaN(Math.round(imat)) == false) {
            imat = Math.round(imat);
            cone = (this["cone"+imat] || this["cone"+0]).createInstance(mesh_name);
            if (imat == -1) cone.isVisible = false;
        } else {
            cone = BABYLON.Mesh.CreateCylinder(mesh_name, 1.0, 0.0, 1.0, 5, 1, scene, false, BABYLON.Mesh.DEFAULTSIDE);
            cone.cullingStrategy = BABYLON.AbstractMesh.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY;
            let color_obj = decorations.hexToRgb("#"+imat);
            cone.material = decorations.rgba_mat(color_obj.r, color_obj.g, color_obj.b, color_obj.a);
        }
        
        // Set
        cone.position = new BABYLON.Vector3(pX,pY,pZ);
        cone.scaling.y = 1.2;
        cone.freezeWorldMatrix();
        // Tracker
        cones.push(cone);
        this.cone_count += 1;
    },
    make_sphere: function(posList, r, imat=0, bounce=0, mass=0, friction=0.6, air=false) {
        // Data
        let pX = posList[0]; let pY = posList[1]; let pZ = posList[2];
        // Mesh
        let mesh_name = "S" + this.sphere_count;
        var sphere;

        if (isNaN(Math.round(imat)) == false) {
            imat = Math.round(imat);
            sphere = (this["sphere"+imat] || this["sphere"+0]).createInstance(mesh_name);
            if (imat == -1) sphere.isVisible = false;
        } else {
            sphere = BABYLON.Mesh.CreateSphere(mesh_name, 10, 1, scene);
            sphere.cullingStrategy = BABYLON.AbstractMesh.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY;
            let color_obj = decorations.hexToRgb("#"+imat);
            sphere.material = decorations.rgba_mat(color_obj.r, color_obj.g, color_obj.b, color_obj.a);
        }
        // Set
        sphere.position = new BABYLON.Vector3(pX,pY,pZ);
        sphere.scaling = new BABYLON.Vector3(r,r,r);
        sphere.freezeWorldMatrix(); // // Don't use: ???
        // Physics
        if (air == false) {
            sphere.physicsImpostor = new BABYLON.PhysicsImpostor(sphere, BABYLON.PhysicsImpostor.SphereImpostor, { mass: mass, restitution: bounce, friction: friction }, scene);
        }
        // Tracker
        this.sphere_count += 1;
    },
    make_ending: function(posList) {
        // Data
        let pX = posList[0]; let pY = posList[1]; let pZ = posList[2];
        // Mesh
        let mesh_name = "E" + this.ending_count;
        var ending = BABYLON.Mesh.CreateCylinder(mesh_name, 2.0, 2.0, 2.0, 8, 1, scene, false, BABYLON.Mesh.DEFAULTSIDE);
        ending.position = new BABYLON.Vector3(pX, pY, pZ);
        // Visuals
        ending.material = decorations.materials.ending;
        ending.freezeWorldMatrix();
        // Physics
        endings.push(ending);
        this.ending_count += 1;
    },
    make_cylinder: function(posList, rotList, sizList, imat=0, bounce=0, mass=0, friction=0.6, air=false, topR=1) {
        // Data
        let pX = posList[0]; let pY = posList[1]; let pZ = posList[2];
        let rX = rotList[1]; let rY = rotList[0]; let rZ = rotList[2];
        let sX = sizList[0]; let sY = sizList[1]; let sZ = sizList[2];
        
        const height = 1;//sY;
        const radius = 1;//sZ;

        var mesh = BABYLON.Mesh.CreateCylinder("Y" + this.cylinder_count, height, radius * topR, radius, 12, 1, scene, false, BABYLON.Mesh.DEFAULTSIDE);
        mesh.scaling = new BABYLON.Vector3(sX,sY,sZ);
        mesh.position = new BABYLON.Vector3(pX,pY,pZ);
        mesh.rotation = new BABYLON.Vector3(rX,rY,rZ);
        
        if (air == false) {
            mesh.physicsImpostor = new BABYLON.PhysicsImpostor(mesh, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: mass, restitution: bounce, friction: friction }, scene);
        }
        
        
        if (isNaN(Math.round(imat)) == false) {
            imat = Math.round(imat);
            decorations.decorate(mesh, "cylinder"+imat);
        } else {
            let color_obj = decorations.hexToRgb("#"+imat);
            mesh.material = decorations.rgba_mat(color_obj.r, color_obj.g, color_obj.b, color_obj.a);
        }
        if (imat == -1) mesh.isVisible = false;
        this.cylinder_count += 1;
    },
    make_start: function(posList) {
        let pX = posList[0]; let pY = posList[1]; let pZ = posList[2];
        this.make_platform([pX,pY,pZ+9], [0,0,0], [3,0.5, 14]);
    },
    og_tree: function(positionX, positionY, positionZ) {
        var greenTexture = decorations.materials.cylinder5;
        var brownTexture = decorations.materials.cylinder6;


        var cylinderXD = BABYLON.Mesh.CreateCylinder("Y" + this.cylinder_count, 0.65, 0.0, 3.3, 10, 1, scene, false, BABYLON.Mesh.DEFAULTSIDE);
        cylinderXD.position.z = (positionZ);
        cylinderXD.position.x = (positionX * -1);
        cylinderXD.position.y = (positionY + 1);
        cylinderXD.physicsImpostor = new BABYLON.PhysicsImpostor(cylinderXD, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: 0.0, restitution: 0.0 }, scene);
        cylinderXD.material = greenTexture;
        this.cylinder_count += 1;

        var cylinderXD2 = BABYLON.Mesh.CreateCylinder("Y" + this.cylinder_count, 1.65, 0.3, 0.3, 10, 1, scene, false, BABYLON.Mesh.DEFAULTSIDE);
        cylinderXD2.position.z = (positionZ);
        cylinderXD2.position.x = (positionX * -1);
        cylinderXD2.position.y = (positionY);
        cylinderXD2.physicsImpostor = new BABYLON.PhysicsImpostor(cylinderXD2, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: 0.0, restitution: 0.0 }, scene);
        cylinderXD2.material = brownTexture;

        this.cylinder_count += 1;
    },
    og_cone: function(positionY, positionZ, positionX) {
        var fireTexture = decorations.materials.cylinder4;
        var cylinder = BABYLON.Mesh.CreateCylinder("Y" + this.cylinder_count, 0.45, 0.0, 0.45, 10, 1, scene, false, BABYLON.Mesh.DEFAULTSIDE);
        cylinder.position.z = (positionZ);
        cylinder.position.x = (positionX);
        cylinder.position.y = (positionY);
        cylinder.physicsImpostor = new BABYLON.PhysicsImpostor(cylinder, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: 0.0, restitution: 0.0 }, scene);
        cylinder.material = fireTexture;

        this.cylinder_count += 1;
    },
    og_cylinder(positionX, positionY, positionZ, rotationY, rotationX, rotationZ, rad, hei) {
        var cylinderXD = BABYLON.Mesh.CreateCylinder("Y" + this.cylinder_count, hei, rad, rad, 12, 1, scene, false, BABYLON.Mesh.DEFAULTSIDE);
        cylinderXD.position.z = (positionZ);
        cylinderXD.position.x = (positionX * -1);
        cylinderXD.position.y = (positionY);
        cylinderXD.physicsImpostor = new BABYLON.PhysicsImpostor(cylinderXD, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: 0.0, restitution: 0.0 }, scene);
        cylinderXD.material = decorations.materials.cylinder1;
        cylinderXD.rotation.x = (rotationX * (Math.PI / 180)); // complete
        cylinderXD.rotation.y = (rotationY * (Math.PI / 180)); // complete
        cylinderXD.rotation.z = (rotationZ * (Math.PI / 180)); // complete
        
        this.cylinder_count += 1;
    }

}

