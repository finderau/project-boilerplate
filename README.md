# finder.com.au Project Boilerplate

This repo provides you with a starting point for build projects for finder.com.au

If you need help with making decisions about your design and code, so it fits with finder.com.au's, take a look at our [styleguide](https://github.com/finderau/styleguide)

The boilerplate includes the following:

1. [JSHint](https://github.com/gruntjs/grunt-contrib-jshint)
2. [SCSS lint](https://www.npmjs.com/package/grunt-scss-lint)
3. [Jasmine](https://github.com/gruntjs/grunt-contrib-jasmine)
4. [Autoprefixer](https://github.com/nDmitry/grunt-autoprefixer)
5. [Uglify](https://github.com/gruntjs/grunt-contrib-uglify)
6. [Grunt task runner for the above](http://gruntjs.com/)

## Installing dependancies

### Node and Sass

The project boilerplate requires Node and Sass to be installed. 

* http://sass-lang.com/install
* https://nodejs.org/download

Tip: if you're on a Mac and you're comfortable using [Homebrew](http://brew.sh/), we recommend installing Node via Homebrew.

```
brew install node
```

### Scss Lint

* https://github.com/brigade/scss-lint

#### Grunt

```
npm install grunt -g
```

### Install the project dependancies

```
npm install
```

## Running tests and building files

### Run the test task

This will run JSHint over all the JS files in the `./js` folder, Scss Lint over all the Scss files in `./scss` and all the unit tests in the `./spec` folder.

```
npm test
```

### Build from the source files

This will assemble all the SCSS files form the `./scss` folder, turn them into CSS then output them to `./dist/css`. It will also uglify all the JS files in `./js` and output them to `./dist/js`.

```
grunt
```
