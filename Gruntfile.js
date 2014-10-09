module.exports = function(grunt) {


  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      estilo: {
        files: ['app/css/**/*.scss'],
        tasks: ['sass'],
        options : {
          reload: true,
          livereload: true
        }
      },
      html: {
        files: ['app/jade/**/*.jade'],
        tasks: ['jade'],
        options : {
          reload: true,
          livereload: true
        }
      },
      script: {
        files: ['app/script/**/*.js'],
        tasks: ['uglify'],
        options: {
          reload: true,
          livereload: true
        }
      }
    },
    sass: {
      dist: {
        options: {
          style: 'compressed',
          trace: true
        },
        files: [{
           'dist/css/main.css' : 'app/css/main.scss'
        }]
      }
    },
    jade: {
      dist:{
        options: {
          magle: false
        },
        files: [ {
          cwd: "app/jade",
          src: ["*.jade","!template.jade"],
          dest: "dist/",
          expand: true,
          ext: ".html"
        } ]
      }
    },
    uglify: {
      dist : {
        options: {

        },
        files: {
          'dist/script/app.js' : ['app/script/app.js']
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};