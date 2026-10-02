var map = {
    title: "Gravity",
    song: "env2",
    maker: "dododo73",
    spawn: [0, 0.5, 0],
    init: function() {

		function pup(a2, b, c, d, e, f, g, h, i, j) {
			a.og(a2,b,c,d,e,f,g,h,i,j);
		}


		a.og('ice2', 0,0,0,0,0,0,2 ,0.3 ,4 );
		a.og('ice2', 0,0,-3.981,0,0,0,2 ,0.3 ,4 );
		a.og('ice2', 0.492,-0.208,-7.601,18.464,0,10.7,2 ,0.3 ,4 );
		a.og('ice2', 2.319,-0.566,-10.413,48.726,-5.44,22.025,2 ,0.3 ,4 );
		a.og('ice2', 5.145,-1.396,-12.446,66.147,-11.998,34.178,2 ,0.3 ,4 );
		
		// going down
		a.og('ice2', 8.426,-3.216,-13.57,80.296,-33.107,11.223,2 ,0.3 ,4 );
		a.og('ice2', 11.755,-5.419,-14.139,80.296,-33.107,11.223,2 ,0.3 ,4 );
		a.og('ice2', 15.027,-7.583,-14.699,80.296,-33.107,11.223,2 ,0.3 ,4 );
		a.og('ice2', 18.28,-9.625,-16.149,80.296,-33.107,11.223,2 ,0.3 ,4 );


		a.og('ice2', 21.818,-9.824,-17.996,-10.655,-6.095,-18.77,5.804 ,2.029 ,10.58 );
		a.og('ice2', 17.422,-10.499,-27.191,0,0,0,5.804 ,0.733 ,10.58 );


		a.og('fire', 17.422,-10.771,-34.504,0,0,0,2 ,0.5 ,4 );
		a.og('fire', 18.535,-10.771,-38.486,0,0,0,2 ,0.5 ,4 );
		a.og('fire', 17.094,-10.771,-42.498,0,0,0,2 ,0.5 ,4 );
		a.og('fire', 16.083,-10.771,-45.169,-41.771,0,0,2 ,0.5 ,4 );
		a.og('fire', 13.83,-9.833,-47.691,-41.771,31.505,0,2 ,0.5 ,4 );
		a.og('fire', 3.95,-7.999,-58.753,-41.771,0,0,2 ,0.5 ,10.488 );

		a.og('fire', 0.944,-7.999,-63.626,7.925,0,0,2 ,0.5 ,3.589 );
		a.og('fire', -2.047,-7.999,-68.451,-41.771,0,0,2 ,0.5 ,10.488 );
		a.og('fire', -4.262,-7.999,-75.782,14.86,0,0,2 ,0.5 ,8.86 );
		a.og('fire', -3.217,-7.999,-84.086,0,0,0,2 ,0.5 ,8.86 );

		a.og('green', -4.211,-6.845,-90.28,0,0,0,0.348 ,2.739 ,17.722 );

		a.og('green', -8.776,-6.845,-103.584,0,0,0,0.348 ,2.739 ,9.68 );
		a.og('fire', -7.678,-7.999,-109.852,0,0,0,2 ,0.5 ,8.86 );

		a.og_y(-7.844,-8.415,-120.115,0,0,0,1.511 ,0.725 );
		a.og_y(-12.105,-8.669,-125.466,0,0,0,1.511 ,0.725 );

		a.og('ice2', -13.144,-8.867,-128.966,0,0,0,3.171 ,0.5 ,7.136 );
		a.og('ice2', -11.634,-9.023,-134.802,37.036,0,0,3.171 ,0.5 ,7.136 );
		a.og('ice2', -8.577,-8.285,-138.854,37.036,21.838,0,3.171 ,0.5 ,4.115 );
		a.og('ice2', -5.357,-7.54,-143.122,37.036,0,0,3.171 ,0.5 ,7.136 );

		a.og('green', -1.889,-4.786,-147.757,37.036,0,0,1 ,0.5 ,8.959 );
		a.og('green', 13.851,-4.786,-168.443,37.036,0,0,1 ,0.5 ,8.079 );
		a.og('green', 8.799,-4.786,-163.725,59.066,0,0,1 ,0.5 ,6.634 );
		a.og('green', 1.513,-4.786,-154.171,16.306,0,0,1 ,0.5 ,5.983 );
		a.og('green', 4.069,-4.786,-159.504,37.036,0,0,1 ,0.5 ,6.581 );

		a.og('ice2', 16.527,-7.54,-171.95,37.036,0,0,3.171 ,0.5 ,7.136 );
		a.og('ice2', 21.291,-7.54,-177.707,2.52,0,0,3.171 ,0.5 ,7.136 );
		a.og('ice2', 24.015,-7.54,-184.768,2.52,0,0,3.171 ,0.5 ,7.136 );
		a.og('ice2', 24.314,-6.567,-191.566,2.52,18.91,0,3.171 ,0.5 ,7.136 );
		a.og('ice2', 18.095,-6.106,-198.991,2.52,18.91,0,3.171 ,0.5 ,7.136 );
		a.og('ice2', 18.992,-5.38,-219.38,2.52,18.91,0,3.171 ,0.5 ,7.136 );
		a.og('ice2', 19.041,-6.022,-207.604,2.52,18.91,0,3.171 ,0.5 ,7.136 );
		a.og('ice2', 19.174,-4.372,-226.177,0,0,0,3.171 ,0.5 ,7.136 );


		a.og_end(-19.174, -4.372, -226.177, 0);

		this.setgrav = function(box, scene, x, y, z) {
			scene.gravity = new BABYLON.Vector3(x, y, z);
			scene.getPhysicsEngine().setGravity(new BABYLON.Vector3(x, y, z));
			box.applyGravity = true;
		}

		this.per = 0;

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
	//map.setgrav(scene, 0, 0, 0);
	



	if ((box.position.z < -8) && (box.position.z > -10)) {
		if (camrx < 1) {
			camrx += 0.5 *  0.05;
		}
		if (campy < 7.6) {
			campy += 0.5 *  0.5;
		}
		//scene.getMeshByName('P23').position.x += 0.5 *  0.05;
	}
	if ((box.position.z < -14) && (box.position.z > -16)) {
		if (map.per == 0) {
			map.setgrav(box, scene, 0, 0, 0); //9.81
			map.per = 1;
		}
	}
	if ((box.position.z < -18) && (box.position.z > -20)) {
		if (map.per == 1) {
			map.setgrav(box, scene, 0, -1, 0); //9.81
			map.per = 2;
		}
	}
	if ((box.position.z < -47) && (box.position.z > -49)) {
		if (map.per == 2) {
			map.setgrav(box, scene, 0, 1, 0); //9.81
			map.per = 3;
		}
	}
	if ((box.position.z < -52) && (box.position.z > -53)) {
		if (map.per == 3) {
			map.setgrav(box, scene, 0, -5.5, 0); //9.81
			map.per = 4;
		}
	}
	if ((box.position.z < -84) && (box.position.z > -85)) {
		if (map.per == 4) {
			map.setgrav(box, scene, 2, 0.2, 0); //9.81
			map.per = 5;
		}
	}
	if ((box.position.z < -105) && (box.position.z > -106)) {
		if (map.per == 5) {
			map.setgrav(box, scene, 0, -9.81, 0); //9.81
			map.per = 6;
		}
		if (camrx > 0.2) {
			camrx -= 0.5 *  0.05;
		}
		if (campy > 1.8) {
			campy -= 0.5 *  0.5;
		}
	}

	// stepping stones
	if ((box.position.z < -112) && (box.position.z > -114)) {
		if (map.per == 6) {
			map.setgrav(box, scene, 0, 0.1, 0); //9.81
			map.per = 7;
		}
	}
	if ((box.position.z < -119) && (box.position.z > -120)) {
		if (map.per == 7) {
			map.setgrav(box, scene, 0, -9.81, 0); //9.81
			map.per = 8;
		}
	}
	if ((box.position.z < -120) && (box.position.z > -121)) {
		if (map.per == 8) {
			map.setgrav(box, scene, 0, 1, 0); //9.81
			map.per = 9;
		}
	}
	if ((box.position.z < -125.5) && (box.position.z > -127)) {
		if (map.per == 9) {
			map.setgrav(box, scene, 0, -9.81, 0); //9.81
			map.per = 10;
		}
	}
	
	// up rail
	if ((box.position.z < -145) && (box.position.z > -146)) {
		if (map.per == 10) {
			map.setgrav(box, scene, 0, 5, 0); //9.81
			map.per = 11;
		}
	}
	if ((box.position.z < -169) && (box.position.z > -170)) {
		if (map.per == 11) {
			map.setgrav(box, scene, 0, -9.81, 0); //9.81
			map.per = 12;
		}
	}

	if ((box.position.z < -184) && (box.position.z > -185)) {
		if (map.per == 12) {
			map.setgrav(box, scene, 0, -0.5, 0); //9.81
			map.per = 13;
		}
	}




}

