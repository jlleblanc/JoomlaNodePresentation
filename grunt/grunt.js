/*
  To install this script:
  
  * Install Node
  * Copy both this file and package.json into the root of your Joomla site.
  * On the command line, change directory to the Joomla root and do these commands:
    * npm install -g grunt
    * npm install   # This will create a node_modules folder in your Joomla site root and install the required modules
  * Run with this command:
    * grunt
  * Close out with ^C

*/

/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    less: {
      development: {
        options: {
          paths: ['templates/protostar/less']
        },
        files: {
          'templates/protostar/css/template.css': ['templates/protostar/less/template.less']
        }
      }
    },
    reload: {
      port: 8181,
      proxy: {
        host: 'localhost'
      }
    },
    watch: [{
      files: ['templates/protostar/less/*.less'],
      tasks: 'less reload'
    },
    {
      files: ['templates/protostar/*.php'],
      tasks: 'reload'
    }]
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-reload');

  // Default task.
  grunt.registerTask('default', 'reload watch');

};
