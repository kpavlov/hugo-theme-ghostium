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

    css: {
        src: [
            'node_modules/prismjs/themes/prism.css',
            'node_modules/prismjs/plugins/autolinker/prism-autolinker.css',
            'node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css'
        ],
        fileName: 'prism.min.css',
        dest: dest + '/static/assets/css',
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
            },
            {
                fileName: 'prism.min.js',
                src: [
                    'node_modules/prismjs/prism.js',
                    'node_modules/prismjs/components/prism-bash.min.js',
                    'node_modules/prismjs/components/prism-docker.min.js',
                    'node_modules/prismjs/components/prism-http.min.js',
                    'node_modules/prismjs/components/prism-ini.min.js',
                    'node_modules/prismjs/components/prism-java.min.js',
                    'node_modules/prismjs/components/prism-javascrips.min.js',
                    'node_modules/prismjs/components/prism-json.min.js',
                    'node_modules/prismjs/components/prism-jsx.min.js',
                    'node_modules/prismjs/components/prism-less.min.js',
                    'node_modules/prismjs/components/prism-nginx.min.js',
                    'node_modules/prismjs/components/prism-php.min.js',
                    'node_modules/prismjs/components/prism-protobuf.min.js',
                    'node_modules/prismjs/components/prism-rest.min.js',
                    'node_modules/prismjs/components/prism-scala.min.js',
                    'node_modules/prismjs/components/prism-scss.min.js',
                    'node_modules/prismjs/components/prism-sql.min.js',
                    'node_modules/prismjs/components/prism-typescript.min.js',
                    'node_modules/prismjs/components/prism-wiki.min.js',
                    'node_modules/prismjs/components/prism-yaml.min.js',
                    'node_modules/prismjs/plugins/autolinker/prism-autolinker.min.js' ,
                    'node_modules/prismjs/plugins/line-numbers/prism-line-numbers.min.js',
                    'node_modules/prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.min.js'
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
