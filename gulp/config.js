var dest = './dist';
var src = './src';
var fontAwesome = require('node-font-awesome');

module.exports = {

    sass: {
        src: [src + '/styles/**/*.{sass,scss,css}'],
        dest: dest + '/static/assets/css',
        settings: {
            includePaths: [fontAwesome.scssPath],
            outputStyle: 'compressed',
            indentedSyntax: false, // Enable .sass syntax?
            imagePath: '/images' // Used by the image-url helper
        }
    },

    scripts: {
        dest: dest + '/static/assets/js/',
        files: [
            {
                fileName: 'foot-scripts.min.js',
                src: [
                    'node_modules/fastclick/lib/fastclick.js',
                    src + '/js/drawer.js',
                    src + '/js/imageLoader.js',
                    src + '/js/scripts.js'
                ]
            }
        ]
    },

    html: {
        src: src + '/layouts/**/*.html',
        dest: dest + '/layouts'
    },

    img: {
        src: [src + '/**/*.png', src + '/**/*.jpg'],
        dest: dest + '/static/img'
    },

    files: [
        {
            src: [src + '/archetypes/**'],
            dest: dest + '/archetypes'
        },
        {
            src: [src + '/images/**'],
            dest: dest + '/images'
        },
        {
            src: ['README.md'],
            dest: dest
        },
        {
            src: ['theme.toml'],
            dest: dest
        }
    ],

    assets: {
        src: ['src/assets/**'],
        dest: dest + '/static/assets'
    },

    fonts: {
        src: [fontAwesome.fonts],
        dest: dest + '/static/assets/fonts/'
    },

    watch: {
        src: ['src/**/*.*'],
        tasks: ['build']
    },

    clean: {
        dest: dest
    }
}
