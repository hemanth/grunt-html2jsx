'use strict';
var assert = require('assert');
var grunt = require('grunt');

it('should transpile', function () {
	assert(grunt.file.read('test/tmp/converted.jsx').toString().indexOf('createClass') != -1);
});
