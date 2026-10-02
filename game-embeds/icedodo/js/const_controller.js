const INF = 90000000000000;

// defaults
const default_radius = 2.5;
const default_speed = 0.28;
const default_steer = 0.022;
const default_gravity = -9;
const physics_call_rate = 2; // higher = better performance. lower = better accuracy.
const default_cameraDownAngle = 0.3;
const default_cameraRightAngle = 0;
const default_jumpSpeed = 1;
const default_jumpHeight = 1;


// current
var speed;// = default_speed;
var steer;// = default_steer;
var gravity;

var jumpSpeed;
var jumpHeight;

var radius;// = default_radius;
var cameraDownAngle;// = default_cameraDownAngle;
var cameraRightAngle;// = default_cameraRightAngle;

// solved
var cam_horizontal = 0;
var cam_vertical = 0;
var cam_depression = 0;


var cc = {
	default: {},
	monkey: {},
	set_default: function() {
		this.default["camera.maxZ"] = () => {
			return 300
		};
		this.default["camera.fov mul2"] = () => {
			return 1
		};
		this.default["light.intensity"] = () => {
			return 1.0
		};

		this.default["radius"] = () => {
			return default_radius;
		};

		this.default["cameraDownAngle"] = () => {
			return default_cameraDownAngle;
		};
		this.default["cameraRightAngle"] = () => {
			return default_cameraRightAngle;
		};

		this.default["jumpSpeed"] = () => {
			return default_jumpSpeed;
		};
		this.default["jumpHeight"] = () => {
			return default_jumpHeight;
		};


		this.default["speed"] = () => {
			return default_speed
		};
		this.default["steer"] = () => {
			return default_steer
		};




		this.default["player.scaling"] = () => {
			return new BABYLON.Vector3(1, 0.16, 1)
		};
		this.default["scene.clearColor"] = () => {
			return new BABYLON.Color4(0,0,0,1)
		};
		this.default["scene.ambientColor"] = () => {
			return new BABYLON.Color4(1,1,1,1)
		};
		this.default["light.diffuse"] = () => {
			return new BABYLON.Color4(1, 1, 1, 1)
		};
		this.default["light.specular"] = () => {
			return new BABYLON.Color3(1, 1, 1)
		};
		this.default["light.groundColor"] = () => {
			return new BABYLON.Color3(0, 0, 0)
		};
		this.default["gravity"] = () => {
			return new BABYLON.Vector3(0,-9,0)
		};
		this.default["camera.upVector"] = () => {
			return new BABYLON.Vector3(0,1,0)
		};


	},
	set_monkey: function(key, val) {
		this.monkey[key] = val;
	},
	get: function(const_key, top_vec=null) {
		var vec = this.default[const_key]();
		if (Object.keys(vec).length == 0) {
			// scalar
			var arr = [vec, this.monkey[const_key], top_vec].filter(v => v != null);
			return arr[arr.length - 1];
		} else {
	        // vector
	        let is_color = ((vec.r) && (vec.g) && (vec.b));
	        let arr = [this.monkey[const_key], top_vec];
	        if (is_color) {
	        	for (var i=0;i<2;i++) {
	        		let ar = arr[i];
	        		if (ar) {
	        			vec = ar;
	        		}
	        	}
	        } else {
		        for (let key in vec) {
		        	for (var i=0;i<2;i++) {
		        		let ar = arr[i];
		        		if ((ar != null) && (ar[key] != null)) {
		        			vec[key] = ar[key];
		        		}
		        	}
		        }
		    }
	        return vec;
	    }
	},
	refresh: function() {
		// TODO: This is not done! Something's wrong i can feel it.
		camera.maxZ = this.get("camera.maxZ");
		light.intensity = this.get("light.intensity");
		radius = this.get("radius");
		cameraDownAngle = this.get("cameraDownAngle");
		cameraRightAngle = this.get("cameraRightAngle");
		speed = this.get("speed");
		steer = this.get("steer");
		player.scaling = this.get("player.scaling");
		scene.clearColor = this.get("scene.clearColor");
		scene.ambientColor = this.get("scene.ambientColor");
		light.diffuse = this.get("light.diffuse");
		light.specular = this.get("light.specular");
		light.groundColor = this.get("light.groundColor");

		jumpSpeed = this.get("jumpSpeed");
		jumpHeight = this.get("jumpHeight");


		a.fov_mul2(null);
		a.g(null, null, null);
		a.d(null, null, null);
		a.t(null, null, null);
		a.cam_d(null);
	},
	hard_reset: function() {
		this.monkey = {};
	}
}

