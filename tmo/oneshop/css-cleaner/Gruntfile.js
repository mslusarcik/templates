module.exports = function (grunt) {
  // Do grunt-related things in here
  const sass = require("node-sass");

  grunt.initConfig({
    sass: {
      options: {
        implementation: sass,
        sourceMap: false,
      },
      dist: {
        files: {
          "assets/css/main.css": "assets/scss/main.scss",
        },
      },
    },
    cssmin: {
      options: {
        advanced: true, 
        format: 'beautify',
        mergeAdjacent: true,
        removeDuplicates: true,
        shorthandCompacting: false,
        restructureRules: false
      },
      files: {    
        src: 'assets/css/main.css',
        dest: 'assets/css/temp/main.min.css' 
      }  
    },
    postcss: {
      options: {
          map: false,
          processors: [
            require('postcss-flexbugs-fixes'),
            require('autoprefixer'),
            require('cssnano')
          ],
      }, 
      files: {    
        src: 'assets/css/temp/main.min.css',
        dest: 'assets/css/min/main.min.css' 
      }
    },
    uglify: {
      target: {
        files: {
          "assets/js/min/main.min.js": ["assets/js/main.js"],
        },
      },
    },
    connect: {
      server: {
        options: {
          livereload: true,
          port: 9001,
          protocol: "http",
          hostname: "localhost",
          base: ".",
          open: true,
        },
      },
    },
    watch: {
      options: {
        livereload: true,
      },
      sass: {
        // You need a task, can be any string
        files: ["**/*.scss", "!**/*.css", "!**/*.map"],
        tasks: ["css"],
      },
      js: {
        // You need a task, can be any string
        files: ["**/*.js", "!**/*.min.js"],
        tasks: ["uglify"],
      },
      html: {
        // You need a task, can be any string
        files: ["**/*.html"],
      },
    },
  });

  grunt.registerTask('clean', ['sass', 'cssmin', 'postcss']);
  grunt.registerTask("default", ["connect", "watch"]);



  // Load up tasks
  grunt.loadNpmTasks("grunt-sass");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('@lodder/grunt-postcss');
};