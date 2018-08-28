module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
    uglify: {
      options: {
        mangle: {
          reserved: ['jQuery', 'Backbone']
        }
      },
      my_target: {
        files: {
          'dest/output.min.js': ['src/input.js']
        }
      }
    } 
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint']);

};