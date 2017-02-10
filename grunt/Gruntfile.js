module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-scss-lint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Project configuration.
  grunt.initConfig({
    autoprefixer: {
      build: {
        src: 'dist/css/*.css'
      }
    },

    jasmine: {
      all: {
        src: ['js/*.js'],
        options: {
          specs: 'spec/*Spec.js',
        }
      }
    },

    jshint: {
      all: ['Gruntfile.js', 'spec/**/*.js', 'js/**/*.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    sass: {
      dist: {
        options: {
          sourcemap: 'none',
          style: 'compressed'
        },
        files: {
          'dist/css/main.min.css': 'scss/main.scss',
        }
      }
    },

    scsslint: {
      allFiles: [
        'scss/*.scss'
      ],
      options: {
        config: '.scss-lint.yml',
        reporterOutput: 'logs/scss-lint-report.xml',
        colorizeOutput: true,
        maxBuffer: 1000 * 1024
      }
    },

    uglify: {
      all: {
        files: [{
          expand: true,
          cwd: './js',
          src: '**/*.js',
          dest: 'dist/js'
        }]
      }
    }
  });

  grunt.registerTask('default', 'Test files then build Sass', ['test', 'sass', 'autoprefixer', 'uglify']);
  grunt.registerTask('test', 'Validate JS and Scss then run unit tests', ['jshint', 'scsslint', 'jasmine']);

};
