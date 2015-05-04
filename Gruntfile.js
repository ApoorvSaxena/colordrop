module.exports = function( grunt ) {
  "use strict";

  require("load-grunt-tasks")(grunt);

  var banner = "/* https://github.com/ApoorvSaxena/colordrop by Apoorv Saxena @Apoorv_Saxena\n   build:<%= grunt.template.today(\"dd/mm/yyyy\") %> */\n";

  grunt.initConfig({
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: [
          'chrome-extension/src/inject/js/lib/*.js',
          'chrome-extension/src/inject/js/main.js',
          'dist/tempCollect/helpers/style.js',
          'chrome-extension/src/inject/js/inject.js',
        ],
        dest: 'dist/production.js',
      },
    },
    uglify : {
      dist: {
        files: {
          "chrome-extension/src/background/background.min.js": ["chrome-extension/src/background/background.js"],
          "dist/production.min.js": ["dist/production.js"]
        }
      }
    },
    copy: {
      main: {
        nonull: true,
        src: 'dist/production.min.js',
        dest: 'chrome-extension/src/inject/production.min.js',
      },
    },
    clean: ["dist"]
  });


  //transform CSS to JS
  grunt.registerTask("inlineCssToJs", function() {
    var cssFile = "chrome-extension/src/inject/css/inject.css";
    var cssFileDestination = "dist/tempCollect/helpers/style.js";
    var varName = "style";

    var cssContent = grunt.file.read(cssFile);

    //clean CSS content
    cssContent = cssContent.replace( /\/\*(?:(?!\*\/)[\s\S])*\*\//g, "").replace(/[\r\n\t]+/g, " ").replace(/[ ]{2,}/g, " ").replace(/\"/g,"\\\"");

    //make JS Var and export as module
    var cssToJS = "var css = document.createElement(\"style\"); \
                  css.type = \"text/css\"; \
                  css.innerHTML = \"" + cssContent.trim() + "\"; \
                  document.body.appendChild(css);";

    grunt.log.writeln(cssFile + " transformed to " + cssFileDestination);

    grunt.file.write(cssFileDestination, cssToJS);
  });

  grunt.registerTask("default", ["inlineCssToJs", "concat", "uglify", "copy", "clean"]);
};