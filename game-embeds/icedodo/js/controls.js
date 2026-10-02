var controls = {
  left: false,
  right: false,
  space: false,
  mobile_enabled: ('ontouchstart' in document.documentElement),
  mobile_allowed: true,
  init: function() {
    function use_mobile_buttons() {
      // onionfist.com/ice_mobile_notice
      if (deployment.is_chrome_ext == true) {
        return false;
      }
      if (controls.mobile_allowed == false) {
        return false;
      }
      if (controls.mobile_enabled == false) {
        return false;
      }
      return true;
    }

    this.bind_keys();
    if (use_mobile_buttons()) {
      this.bind_buttons();
      $(".mobile_btn").hide();
    } else {
      $(".mobile_btn").remove();
    }
  },
  count_key_presses: function() {
    if (alive) {
      stats.key_time += 1;
      if (stats.key_time > 16) {
        $(".mobile_btn").remove();
      }
    }
  },
  bind_buttons: function() {
    $("#left_mobile_btn").touchstart(function() {
      controls.left = true; controls.right = false;
    });
    $("#right_mobile_btn").touchstart(function() {
      controls.right = true; controls.left = false;
    });
    $("#space_mobile_btn").touchstart(function() {
      controls.space = true;
    });
    $("#left_mobile_btn").touchend(function() {
      controls.left = false;
    });
    $("#right_mobile_btn").touchend(function() {
      controls.right = false;
    });
    $("#space_mobile_btn").touchend(function() {
      controls.space = false;
    });
  },
  bind_keys: function() {
    document.onkeydown = function(e) {
      if ((e.keyCode == 37) || (e.keyCode == 65)) {
        if (popup.in_game) {
          controls.left = true; controls.right = false;
          controls.count_key_presses();
        } else if ((transitioning == false) && (e.keyCode == 37)) {
          popup.cup_num -= 1;
          popup.display_cup();
        }
      }
      if ((e.keyCode == 39) || (e.keyCode == 68)) {
        if (popup.in_game) {
          controls.right = true; controls.left = false;
          controls.count_key_presses();
        } else if ((transitioning == false) && (e.keyCode == 39)) {
          popup.cup_num += 1;
          popup.display_cup();
        }
      }
      
      if ((e.keyCode == 32) || (e.keyCode == 38) || (e.keyCode == 87)) {
        controls.space = true;
        if ((!alive) && (!transitioning) && (popup.in_game)) {
          $("#restart").click();
        }
      }

      if (e.keyCode == 82) {
        if ((alive) && (!transitioning) && (popup.in_game)) {
          change_state.die();
          screen.set_dialog("Self Destructed", "#e04c4f");
        }
      }
    }
    document.onkeyup = function(e) {
      if ((e.keyCode == 37) || (e.keyCode == 65)) {
        controls.left = false;
      }
      if ((e.keyCode == 39) || (e.keyCode == 68)) {
        controls.right = false;
      }
      if ((e.keyCode == 32) || (e.keyCode == 38) || (e.keyCode == 87)) {
        controls.space = false;
      }
    }
  }
}
