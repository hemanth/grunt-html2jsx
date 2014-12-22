# grunt-htmltojsx [![Build Status](https://travis-ci.org/hemanth/grunt-htmltojsx.svg?branch=master)](https://travis-ci.org/hemanth/grunt-htmltojsx)

> Converts HTML to JSX for use with React.


## Install

```sh
$ npm install --save-dev grunt-htmltojsx
```


## Usage

```js
require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
	htmltojsx: {
		options: {
			includeRuntime: true
		},
		dist: {
			files: {
				'dist/main.js': 'src/main.js'
			}
		}
	}
});

grunt.registerTask('default', ['htmltojsx']);
```


## Options

### includeRuntime

Type: `boolean`  
Default: `false`

> A small runtime library (less than 1KB compressed) is required to provide the wrapGenerator function. You can install it either as a CommonJS module or as a standalone .js file, whichever you prefer.


## License

MIT © [Hemanth.HM](http://hemanth.com)
