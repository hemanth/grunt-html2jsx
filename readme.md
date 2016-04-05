# grunt-html2jsx [![Build Status](https://travis-ci.org/hemanth/grunt-html2jsx.svg?branch=master)](https://travis-ci.org/hemanth/grunt-html2jsx)

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

__Options:__

```js
{
  createClass: true,
  outputClassName: 'AwesomeComponent'
}
```

__Sample:__

```html
<p> Hello </p>
```

Get converted to:

```js
var NewComponent = React.createClass({
  render: function() {
    return (

      <p> Hello </p>
    );
  }
});
```


## License

MIT © [Hemanth.HM](http://hemanth.com)
