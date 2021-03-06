module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  	
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
    build: {
        files: [{
            expand: true,
            src: 'js/*.js',
            dest: './minifyJs/',
            cwd: './',
        ext: '.min.js'
        }]
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};