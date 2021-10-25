module.exports = function (grunt) {
  // Do grunt-related things in here
  const sass = require("node-sass");

  grunt.initConfig({
    purgecss: {
      my_target: {
        options: {
          content: ['*.html']
        },
        files: {
          'assets/css/main.css': ['assets/css/main-ready.css']
        }
      }
    },
    sass: {
      options: {
        implementation: sass,
        sourceMap: false,
      },
      dist: {
        files: {
          "assets/css/main-ready.css": "assets/scss/main.scss",
        },
      },
    },
    cssmin: {
      target: {
        files: [
          {
            expand: true,
            cwd: "assets/css",
            src: ["*.css", "!*.min.css", "!main-ready.css"],
            dest: "assets/css/min",
            ext: ".min.css",
          },
        ],
      },
    },
    uglify: {
      target: {
        files: {
          "assets/js/min/main.min.js": ["assets/js/main.js"],
        },
      },
    },
    autoprefixer: {
      options: {
        browsers: ["ie > 7", "ff > 3.4", "chrome > 3", "safari > 3"],
      },
      dist: {
        // Target
        files: {
          "assets/css/main.css": "assets/css/main-ready.css",
        },
      },
    },
    imagemin: {
      png: {
        options: {
          optimizationLevel: 7,
        },
        files: [
          {
            expand: true,
            cwd: "assets/images",
            src: ["**/*.png", "!**/*.min.png"],
            dest: "assets/images/min",
            ext: ".min.png",
          },
        ],
      },
      jpg: {
        options: {
          progressive: true
        },
        files: [
          {
            expand: true,
            cwd: 'assets/images',
            src: ['**/*.jpg','**/*.jpeg', "!**/*.min.jpg"],
            dest: 'assets/images/min',
            ext: '.min.jpg'
          }
        ]
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
    copy: {
      main: {
        files: [
          // includes files within path
          {expand: true, src: ['*.html'], dest: 'public/', filter: 'isFile'},
          {expand: true, src: ['assets/css/min/*.min.css'], dest: 'public/', filter: 'isFile'},
          {expand: true, src: ['assets/js/min/*.min.js'], dest: 'public/', filter: 'isFile'},
          {expand: true, src: ['assets/images/min/*.min.png', 'assets/images/min/*.min.jpg'], dest: 'public/', filter: 'isFile'},
        ],
      },
    },
  });

  grunt.registerTask("css", ["sass", "autoprefixer", "cssmin"]);
  grunt.registerTask("public", ["copy"]);
  grunt.registerTask("default", ["connect", "watch"]);

  // Load up tasks
  grunt.loadNpmTasks("grunt-sass");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-autoprefixer");
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-purgecss');
  grunt.loadNpmTasks('grunt-contrib-copy');
};
