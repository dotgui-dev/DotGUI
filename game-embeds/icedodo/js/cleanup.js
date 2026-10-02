var cleanup = {
	run: function(full_reset=true) {
		if (full_reset == true) {
			map = {
				render_update: function() {},
				physics_update: function() {},
				section_update: function() {}
			}
		}
		
		for (var i=0;i<maker.ending_count;i++) {
			let mesh_name = "E" + i;
			var mesh = scene.getMeshByName(mesh_name);
			mesh.dispose();
		}
		for (var i=0;i<maker.platform_count;i++) {
			let mesh_name = "P" + i;
			var mesh = scene.getMeshByName(mesh_name);
			mesh.dispose();
		}
		for (var i=0;i<maker.cone_count;i++) {
			let mesh_name = "C" + i;
			var mesh = scene.getMeshByName(mesh_name);
			mesh.dispose();
		}
		for (var i=0;i<maker.cylinder_count;i++) {
			let mesh_name = "Y" + i;
			var mesh = scene.getMeshByName(mesh_name);
			mesh.dispose();
		}
		for (var i=0;i<maker.sphere_count;i++) {
			let mesh_name = "S" + i;
			var mesh = scene.getMeshByName(mesh_name);
			mesh.dispose();
		}
		cones = [];
		endings = [];
		jumppads = [];
		maker.platform_count = 0;
		maker.cone_count = 0;
		maker.cylinder_count = 0;
		maker.sphere_count = 0;
		maker.ending_count = 0;
	}
}