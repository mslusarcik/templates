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
      html: {
        // You need a task, can be any string
        files: ["**/*.html"],
      },
    },
  });

  grunt.registerTask("css", ["sass", "cssmin"]);
  grunt.registerTask("default", ["watch"]);
  grunt.registerTask("server", ["connect", "watch"]);

  // Load up tasks
  grunt.loadNpmTasks("grunt-sass");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-connect");
};