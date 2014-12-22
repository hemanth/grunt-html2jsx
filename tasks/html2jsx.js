'use strict';
var eachAsync = require('each-async');
var HTMLtoJSX = require('htmltojsx');


module.exports = function (grunt) {
	grunt.registerMultiTask('html2jsx', 'Converts HTML to JSX for use with React.', function () {
		var options = this.options();
        console.log(this.files);
		eachAsync(this.files, function (el, i, next) {
			console.log("el",el);
			grunt.file.write(el.dest, new HTMLtoJSX(options).convert(grunt.file.read(el.src[0])));
			next();
		}, this.async());
	});
};
