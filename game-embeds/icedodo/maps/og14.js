var map = {
    title: "Bonus Level",
    song: "env2",
    maker: "dododo73",
    spawn: [0, 0.5, 0],
    init: function() {

	function pup(a2, b, c, d, e, f, g, h, i, j) {
		a.og(a2,b,c,d,e,f,g,h,i,j);
	}
	a.og('green', 0,0,0,0,0,0,2 ,0.1 ,4 ); //0
	a.og('green', 0,0,-4.183,0,0,0,2 ,0.1 ,4 );
	a.og('green', 1.652,0,-7.97,0,0,0,2 ,0.1 ,4 );
	a.og('green', 0.885,0,-11.862,0,0,0,2 ,0.1 ,4 ); //3
	a.og('green', 0.885,0,-15.275,0,0,0,2 ,0.1 ,4 );
	a.og('green', 0.283,0,-19.127,0,0,0,0.697 ,0.1 ,4 );
	a.og('green', 0.283,0.302,-22.83,0,10.272,0,0.697 ,0.1 ,4 );
	a.og('green', 0.283,0.576,-27.146,0,0,0,2.257 ,0.1 ,5.081 );
	a.og('green', 1.461,0.576,-31.379,29.286,0,0,2.257 ,0.1 ,5.081 );
	a.og('green', 4.985,0.576,-34.295,48.551,0,0,1.135 ,0.1 ,5.081 );
	a.og('green', 7.182,0.576,-37.728,21.655,0,0,1.135 ,0.1 ,5.081 ); // 0
	a.og('green', 10.534,0.576,-43.065,21.655,0,0,2 ,0.1 ,8 );

	var greenTexture = new BABYLON.StandardMaterial("greenTexture", scene);
    greenTexture.diffuseColor = new BABYLON.Color3(34 /255,139 /255,34 /255);
    greenTexture.alpha = 0.4;

	for (i=0;i<8;i+=1) {
		var cylinderXDa = BABYLON.Mesh.CreateCylinder("Y"+maker.cylinder_count, 0.1, 1.5, 1.5, 10, 1, scene, false, BABYLON.Mesh.DEFAULTSIDE);
		cylinderXDa.position.z = -47.0 - i;
		cylinderXDa.position.x = -12;
		cylinderXDa.position.y = 0.576;
		cylinderXDa.physicsImpostor = new BABYLON.PhysicsImpostor(cylinderXDa, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: 0.0, restitution: 0.0 }, scene);
		cylinderXDa.material = greenTexture;

		maker.cylinder_count += 1;
	}

	a.og('green', 12.423,0.576,-54.32,0,0,0,2 ,0.1 ,0.767 );
	a.og('green', 13.125,0.576,-56.511,17.432,0,0,2 ,0.1 ,4.531 );
	a.og('green', 12.912,0.576,-60.151,-16.968,0,0,2 ,0.1 ,4.531 );
	a.og('green', 12.338,0.576,-64.264,0,0,0,2 ,0.1 ,4.531 );
	a.og('green', 10.845,0.576,-66.004,-22.615,0,0,0.604 ,0.1 ,4.531 );
	a.og('green', 8.722,0.576,-70.468,0.208,0,0,1.98 ,0.1 ,5.347 );
	a.og('green', 9.353,0.576,-74.873,-15.785,0,0,1.98 ,0.1 ,3.818 );
	a.og('green', 7.339,0.576,-77.35,-15.785,0,0,1.98 ,0.1 ,3.818 );
	a.og('green', 6.541,0.718,-80.389,-15.785,6.224,0,0.646 ,0.1 ,3.818 ); // 0
	a.og('green', 5.913,1.244,-85.216,-15.785,6.224,0,1.701 ,0.1 ,6.04 );
	a.og('brown', 4.128,1.307,-89.203,0,0,0,1.223 ,0.1 ,6.04 );
	a.og('brown', 4.915,1.307,-93.046,32.553,0,0,1.223 ,0.1 ,2.91 );
	a.og('brown', 4.663,1.307,-95.624,0,0,0,1.223 ,0.1 ,2.91 );
	a.og('brown', 5.663,1.307,-99.017,0,0,0,0.737 ,0.1 ,4.19 ); // 5
	a.og('green', 2.557,1.307,-101.482,0,0,0,2.642 ,0.1 ,4.19 );
	a.og('green', 2.146,1.307,-106.413,0,0,0,1.017 ,0.1 ,6.136 );
	a.og('green', 1.543,1.307,-111.256,0,0,0,2 ,0.1 ,4 );
	a.og('green', 0.102,1.307,-115.195,0,0,0,2 ,0.1 ,4 );
	a.og('green', 3.087,1.307,-115.195,0,0,0,2 ,0.1 ,4 ); // 30 moveZ
	a.og('green', 1.532,1.307,-122.087,0,0,0,2 ,0.1 ,4 );
	a.og('green', 1.532,1.307,-131.693,0,0,0,0.779 ,0.1 ,15.557 );
	a.og('green', -0.536,1.307,-133.485,-27.19,0,0,0.779 ,0.1 ,15.557 );
	a.og('green', -1.417,1.307,-137.482,-7.054,0,0,0.779 ,0.1 ,6.147 );
	a.og('green', -1.54,1.307,-143.636,-7.054,0,0,0.779 ,0.1 ,6.147 );
	a.og('green', -1.091,1.307,-150.248,-7.054,0,0,2 ,0.1 ,7 );
	a.og('fire', -0.714,1.638,-149.933,-7.054,0,0,0.992 ,0.874 ,0.164 );
	a.og('green', -0.682,1.307,-155.986,-7.054,0,0,2 ,0.1 ,7 );
	a.og('fire', -1.246,1.638,-155.846,-7.054,0,0,0.992 ,0.874 ,0.164 );
	a.og('green', -2.411,1.307,-162.745,0,0,0,2 ,0.1 ,7 ); // 0
	a.og('fire', -2.921,1.638,-161.674,0,0,0,0.992 ,0.874 ,0.164 ); // 41 movX
	a.og('green', -0.899,1.307,-172.943,0,0,0,2 ,0.1 ,15.719 );
	a.og('fire', -1.482,1.638,-168.31,0,0,0,0.992 ,0.874 ,0.164 ); // 43 movZ
	a.og('fire', -0.365,1.638,-168.31,0,0,0,0.992 ,0.874 ,0.164 );
	a.og('fire', -0.365,1.85,-175.721,0,0,0,1 ,0.5 ,0.164 );
	a.og('fire', -1.277,1.6,-175.721,0,0,0,1 ,1 ,0.164 );
	a.og('fire', -1.462,1.6,-179.786,0,0,0,1 ,1 ,0.164 );
	a.og('green', -1.749,1.307,-184.168,0,0,0,2 ,0.1 ,8.658 );
	a.og('green', 0.459,1.307,-191.353,15.375,0,0,2 ,0.1 ,8.658 );
	a.og('green', -0.142,1.307,-199.204,-3.408,0,0,2 ,0.1 ,8.658 );
	a.og('green', -2.274,1.307,-206.581,-18.518,0,0,0.591 ,0.1 ,8.658 );
	a.og('green', 0.151,1.307,-207.393,5.871,0,0,0.591 ,0.1 ,8.658 );
	a.og('green', 2.226,1.307,-206.839,25.929,0,0,0.591 ,0.1 ,8.658 ); // ENDIG
	
	a.og_c(0.7, -27.1, 0.283);
	a.og_c(0.7, -28.1, -0.683);
	a.og_c(0.7, -29.1, -1.283);
	a.og_c(0.7, -32.1, -1.0);
	a.og_c(0.7, -33.1, -2.0);
	a.og_c(0.7, -43.1, -11);
	a.og_c(0.7, -44.1, -11.5);
	a.og_c(0.7, -45.1, -12);
	a.og_c(0.7, -43.1, -10.0);
	a.og_c(0.7, -44.1, -10.5);
	a.og_c(0.7, -45.1, -11.0);
	a.og_c(0.7, -56.1, -13.0);
	a.og_c(0.7, -57.1, -13.5);
	a.og_c(0.7, -58.1, -14.0);
	a.og_c(0.7, -60.1, -12.5);
	a.og_c(0.7, -61.1, -12.25);
	a.og_c(0.7, -62.1, -12.0);

	a.og_end(-2.226, 1.407, -206.839, 0);

	this.originalX = scene.getMeshByName("P25").position.x;

	this.number = 0.0;
},
	post: function() {
		cc.set_monkey("speed", 0.2);
		cc.set_monkey("steer", 0.03);
		cc.refresh();
	},
    section_id: 0,
    section_update: function() {
    },
    reset: function() {
        this.section_id = 0;
		cleanup.run(false);
		this.init();
    },
    physics_update: function() {},
    render_update: function() {
    	iv(player, scene);
    }
}

function iv(box, scene) {
	if (box.position.z < -90) {
		map.number += 0.05 * 0.5;
		scene.getMeshByName("P25").position.x = map.originalX + Math.sin(map.number) * 2;
	}
	if (box.position.z < -110) {
		scene.getMeshByName("P30").position.x += 0.5 * 0.1;
		scene.getMeshByName("P30").position.z -= 0.5 *  0.2;
	}
	if (box.position.z < -158) {
		scene.getMeshByName("P41").position.x -= 0.5 *  0.2;	
	}
	if ((box.position.z < -163) && (box.position.z > -170)) {
		scene.getMeshByName("P43").position.z -= 0.5 *  0.3;	
	}
}
