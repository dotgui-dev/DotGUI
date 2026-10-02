var news = {
	init: function() {

		this.get_news(function(data) {
			console.log(data);
			if (data != null) {
				if (data.html != null) {
					$("#news").html(data.html);
				}
				
			}
			
		});
	},
	get_news: function(callback) {

		try {
		  // https://developer.chrome.com/docs/extensions/mv3/xhr/	
			fetch("https://fn.onionfist.com/chrx_news?chrx=icedodo").then(function(res) {
				if (res.status !== 200) {
					callback(null);
				}
				res.json().then(data => {
					callback(data);
				});
			});

		}
		catch(err) {
		  console.log("News err", err.message);
		  callback(null);
		}
		
	}
}







//   "host_permissions": [
//     "https://www.google.com/"
//   ],


// chrome.runtime.sendMessage(
//     {contentScriptQuery: 'fetchUrl',
//      url: 'https://another-site.com/price-query?itemId=' +
//               encodeURIComponent(request.itemId)},
//     response => parsePrice(response.text()));
