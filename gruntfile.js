/*global module */
module.exports = function(grunt) {

    grunt.initConfig({
        jasmine: {
            src: [
                // list your files to register fake data
                // e.g. './spec/data/*.js'
                './lib/**/*', './src/**/*'
            ],
            options: {
                specs: './spec/unit/*spec.js',
                helpers: './spec/helper/*.js'
            }

        },

        watch: {
            test: {
                files: ['./spec/unit/*spec.js'],
                tasks: ['jasmine']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-requirejs');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['test']); 
    grunt.registerTask('test', ['jasmine']);
};
