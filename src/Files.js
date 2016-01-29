var EventEmitter = require('event-emitter');

function Files(options) {
	options = options || { selector: 'input[type=file]' };
	var emitter = new EventEmitter();
	var files = [];
}

function onInput(callback) {
	document.querySelector(options.selector).addEventListener('change', function onChange(ev) {
		var files = ev.target.files;
	});
}

Files.prototype.on = function on(callback) {
	
};

module.exports = Files;
