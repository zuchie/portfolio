module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 1600,
            suffix: '_large_2x',
          },{
            width: 800,
            suffix: '_large_1x',
            quality: 50
          },{
            aspectRatio: false,  
            width: 600,
            height: 400,
            suffix: '_medium', 
            quality: 100
           },{
            aspectRatio: false,  
            width: "70%", 
            height: "70%",
            suffix: '_small', 
            quality: 100
           }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images/',
          dest: 'images_resp/'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);

};
