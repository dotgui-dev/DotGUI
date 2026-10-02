// game objects
var camera = null;
var light = null;
var player = null;
var cape_wings = null;
var cape_tail = null;

var endings = [];
var cones = [];
var jumppads = [];

// game essentials
var canvas = null;
var engine = null;
var scene = null;

// game variables
var rotation = 0;
var alive = false;
var transitioning = true;

var start = {
	init: async function() {
		canvas = await document.getElementById("renderCanvas");
		engine = await new BABYLON.Engine(canvas, true, {
		  deterministicLockstep: false,
		  lockstepMaxSteps: 4
		});
		scene = await new BABYLON.Scene(engine, {antialiasing: false});
		// scene
		var gravityVector = new BABYLON.Vector3(0,-9, 0);
		scene.enablePhysics(gravityVector);
	},
	create_scene: function() {
		scene.clearColor = new BABYLON.Color4(0,0,0,1);
		scene.ambientColor = new BABYLON.Color4(0,0,0,0);

		// camera
		camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0, 2, 10), scene);
		camera.setTarget(BABYLON.Vector3.Zero());
		camera.rotation.y = -3.14;
		camera.rotation.x = 0.3;
		camera.rotation.z = 0;
		camera.speed = 0;
		camera.maxZ = 300; //200; //120;
		camera.noRotationConstraint = true;

		// player
		player = BABYLON.Mesh.CreateBox("player",0.5,scene);
		player.scaling = new BABYLON.Vector3(1, 0.16, 1);
		player.physicsImpostor = new BABYLON.PhysicsImpostor(player, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 1.0, restitution: 1.0, friction: 0.5}, scene);

		player.position = new BABYLON.Vector3(0,0,0);
		player.applyGravity = true;
		sync.get("skinName", function(curr_val) {
			if (curr_val) {
				decorations.decorate_player(player, curr_val);
			}
		});
		
		// light
	    light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
	    light.intensity = 1.0;
	    light.parent = camera;

	    // cape_wings
		cape_wings = new BABYLON.Mesh("custom", scene);
		
		var wings_vertexData = new BABYLON.VertexData();
		wings_vertexData.positions = [
			1,0,-1,
			3,0,0,
			1,0,1,
			-1,0,-1,
			-3,0,0,
			-1,0,1
		];
		wings_vertexData.indices = [0, 1, 2, 3, 4, 5];
		wings_vertexData.applyToMesh(cape_wings);

		cape_wings.material = decorations.rgba_mat(255,255,255,1);

		cape_wings.scaling.x = 0.3;
		cape_wings.scaling.y = 0.3;
		cape_wings.scaling.z = 0.3;
		cape_wings.isVisible = false;
		cape_wings.parent = player;

		// cape_tail
		cape_tail = new BABYLON.Mesh("custom", scene);
		
		var tail_vertexData = new BABYLON.VertexData();
		tail_vertexData.positions = [
			-1,0,1,
			0,0,3,
			1,0,1,
		];
		tail_vertexData.indices = [0, 1, 2];
		tail_vertexData.applyToMesh(cape_tail);

		cape_tail.material = decorations.rgba_mat(255,255,255,1);

		cape_tail.scaling.x = 0.3;
		cape_tail.scaling.y = 0.3;
		cape_tail.scaling.z = 0.3;
		cape_tail.isVisible = false;
		cape_tail.parent = player;

	}
}
