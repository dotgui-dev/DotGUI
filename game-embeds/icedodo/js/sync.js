var sync = {
	init: function() {
    	// use chrome storage or local storage?
    	if (!deployment.is_chrome_ext) {
            if (window.chrome == null) {
                window.chrome = {};
            }
            chrome.storage = {
                sync: {},
                local: {}
            };
            var set_fn = function(b, c) {
                var a = Object.keys(b);
                localStorage.setItem(a, b[a]);
                c();
            };

            var get_fn = function(b, c) {
                var a = b[0],
                    e = localStorage.getItem(a),
                    d = {};
                d[a] = e;
                c(d);
            };

            chrome.storage.sync.set = set_fn;
            chrome.storage.sync.get = get_fn;

            chrome.storage.local.set = set_fn;
            chrome.storage.local.get = get_fn;
        }
    },
    set: function(key, val, callback) {
        var saveObject = {};
        saveObject[key] = val;
        chrome.storage.local.set(saveObject, function(){
            if (callback) callback();
        });
    },
    get: function(key, callback) {
        this.sync_get(key, function(sync_data) {
            chrome.storage.local.get([key], function(items) {
                let local_data = items[key];
                if (local_data != null) {
                    if (callback) callback(local_data);
                } else if (sync_data != null) {
                    console.log("Converted sync --> local.");
                    sync.set(key, sync_data);
                    if (callback) callback(sync_data);
                } else {
                    callback(null);
                }
            });
        });
        
    },
    sync_set: function(key, val, callback) {
        var saveObject = {};
        saveObject[key] = val;
        chrome.storage.sync.set(saveObject, function(){
            if (callback) callback();
        });
    },
    sync_get: function(key, callback) {
        chrome.storage.sync.get([key], function(items) {
            if (callback) callback(items[key]);
        });
    }
}