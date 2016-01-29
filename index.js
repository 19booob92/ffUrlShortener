var self = require('sdk/self');
var clipboard = require("sdk/clipboard");
var selection = require("sdk/selection");
var { Hotkey } = require("sdk/hotkeys");
var Request = require("sdk/request").Request;

var URL = "http://tinyurl.com/api-create.php?url=";

var showHotKey = Hotkey({
	combo: "accel-alt-c",
	onPress: function() {
			
		var selectedText = selection.text;

		if (selectedText) {
			var shortenUrl = Request({
				 url: URL + selectedText,
				 onComplete: function (response) {
  				 	clipboard.set(response.text);
				 }
			});
			shortenUrl.get();	
		}
	}
});

