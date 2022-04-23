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
          "dev/css/dirty-main.css": "dev/scss/main.scss",
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
          'assets/js/min/main.min.js': ['dev/js/main.js'],
          'assets/js/min/leadCollector.min.js': ['dev/js/leadCollector.js']
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['ie > 7', 'ff > 3.4', 'chrome > 3', 'safari > 3'],
      },
      dist: { // Target
        files: {
          'dev/css/prefixed-main.css': 'dev/css/dirty-main.css'
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
    },
    postcss: {
      options: {
          map: false,
          processors: [
            require('postcss-flexbugs-fixes'),
            require('autoprefixer')({overrideBrowserslist: ['last 2 versions, > 1%, ie >= 11']}),
            require('cssnano')({preset: 'default'})
          ],
      }, 
      files: {    
        src: 'dev/css/dirty-main.css',
        dest: 'assets/css/min/main.min.css'
      }
    },
    cwebp: {
      dynamic: {
        options: {
          q: 95
        },
        files: [{
          expand: true,
          cwd: 'assets/images',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'assets/images/webp'
        }]
      }
    }
  });

  grunt.registerTask("css", ["sass", "postcss"]);
  grunt.registerTask("clean", ["sass", "postcss", "uglify"]);
  grunt.registerTask("default", ["connect", "watch"]);

  // Load up tasks
  grunt.loadNpmTasks("grunt-sass");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('@lodder/grunt-postcss');
  grunt.loadNpmTasks('grunt-cwebp');
};