var paths = {
    js: {
        src  : './app/scripts/{,*/}*.js',
        tasks: './tasks/{,*/}*.js'
    },
    html   : './app/templates/{,*/}{,*/}*.html',
    sass   : './app/assets/sass/site.scss',
    sassAll: './app/assets/sass/{,*/}{,*/}*.scss',
    css    : './app/assets/*.css',
    index  : './app/index.html',
    images : './app/assets/{,*/}*.{png,jpg,jpeg,gif,ico}',
    svg    : './app/assets/{,*/}*.svg',
    dist   : './dist'
};

module.exports = paths;
