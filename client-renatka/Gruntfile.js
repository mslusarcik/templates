module.exports = function (grunt) {
  // Do grunt-related things in here
  const sass = require("node-sass");

  grunt.initConfig({
    sass: {
      options: {
        implementation: sass,
        sourceMap: true,
      },
      dist: {
        files: {
          "assets/css/main.css": "assets/scss/main.scss",
        },
      },
    },
    cssmin: {
      target: {
        files: [
          {
            expand: true,
            cwd: "assets/css",
            src: ["*.css", "!*.min.css"],
            dest: "assets/css/min",
            ext: ".min.css",
          },
        ],
      },
    },
    uglify: {
      target: {
        files: {
          'assets/js/min/main.min.js': ['assets/js/main.js']
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['ie > 7', 'ff > 3.4', 'chrome > 3', 'safari > 3'],
      },
      dist: { // Target
        files: {
          'assets/css/main-prefixed.css': 'assets/css/main.css'
        }
      }
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
        }
      }
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
    }
  });

  grunt.registerTask("css", ["sass", "autoprefixer", "cssmin"]);
  grunt.registerTask("uglify", ["uglify"]);
  grunt.registerTask("default", ["watch"]);
  grunt.registerTask("server", ["connect", "watch"]);

  // Load up tasks
  grunt.loadNpmTasks("grunt-sass");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-autoprefixer');
};