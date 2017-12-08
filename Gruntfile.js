module.exports = function(grunt) {
    
      // Project configuration.
      grunt.initConfig({
        pkg: '<json:package.json>',
        cssmin:{
            // target:{
            //     files:[
            //         {
            //             expand:true,
            //             cwd:'css/',
            //             src:['*.css','*.min.css'],
            //             dest:'css/',
            //             ext:'.min.css'
            //         }
            //     ]
            // }
            combine:{
                files:{
                    'css/combined.min.css':['common.css','css/one.css','css/two.css']
                }
            }
        },

        uglify:{
            target:{
                files:{
                    'js/combined.min.js':['js/one.js','js/two.js']
                }
            }
        },

        watch:{
            target:{
                files:['js/*.js','css/*.css'],
                tasks:['uglify','cssmin']
            }
        }
        
      });
    
      grunt.loadNpmTasks('grunt-contrib-cssmin');
      grunt.loadNpmTasks('grunt-contrib-uglify');
      grunt.loadNpmTasks('grunt-contrib-watch');
      // Default task.
      grunt.registerTask('default',['watch']);
    
    };