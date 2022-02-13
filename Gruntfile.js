module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-screeps');

    grunt.initConfig({
        screeps: {
            options: {
                email: 'justin.viacrusis21p@gmail.com>',
                token: 'c0d16020-62a8-409e-864d-68f426c0bc0f',
                branch: 'contain-mine',
                //server: 'season'
            },
            dist: {
                src: ['dist/*.js']
            }
        }
    });
}
