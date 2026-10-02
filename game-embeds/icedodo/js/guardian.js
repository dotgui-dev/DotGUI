var guardian = {
	init: function() {
		if (deployment.is_chrome_ext) {
			this.chrx();
			// Maximum 255 characters.
			chrome.runtime.setUninstallURL("https://forms.gle/jUFzghwpdr3NJWmN7");
		} else {
			this.web();
		}
		// deployment.is_jason = true;
		if (deployment.is_jason == false) {
			document.addEventListener('contextmenu', event => event.preventDefault());
		} else {
			if (false) {
				setInterval(function() {
					if (player) {
						console.log(player.position.x, player.position.z);
					}
				}, 300);
			}
		}
	},
	chrx: function() {
		if (["jhidcpailhmpjpbdbhceiaeeggkalgmd", "dfbgcgacmhnidfcfnhhphhijkbmfcbkg"].indexOf(chrome.runtime.id) == -1) {
			function openInNewTab(url) {
			  var win = window.open(url, '_blank');
			  win.focus();
			}
			if (Math.random() < 0.008) {
				//openInNewTab("https://www.onionfist.com/icecopycat?rtid="+chrome.runtime.id);
			}
		}
	},
	web: function() {
		if (["fn.onionfist.com", "onionfist.com", "localhost"].indexOf(window.location.hostname) == -1) {
			function openInNewTab(url) {
			  var win = window.open(url, '_blank');
			  win.focus();
			}
			if (Math.random() < 0.008) {
				//openInNewTab("https://www.onionfist.com/icecopycat?rtid="+window.location.hostname);
			}
		}
	}
}
