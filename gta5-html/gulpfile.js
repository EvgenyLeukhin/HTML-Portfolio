// PACKAGES
const gulp     = require('gulp'),
  browserSync  = require('browser-sync'),
  del          = require('del'),
  cache        = require('gulp-cache'),
  rigger       = require('gulp-rigger'),
  // scss -> css //
  plumber      = require('gulp-plumber'),
  scss         = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  csscomb      = require('gulp-csscomb'),
  postcss      = require('gulp-postcss'),
  mqpacker     = require('css-mqpacker'),
  // images //
  imagemin     = require('gulp-imagemin'),
  pngquant     = require('imagemin-pngquant'),
  // min //
  // uglify       = require('gulp-uglify'),
  htmlmin      = require('gulp-htmlmin'),
  strip        = require('gulp-strip-comments'),
  cssnano      = require('gulp-cssnano'),
  rename       = require('gulp-rename');

// PATHs
const path = {
  src: {
    html:  'src/*.html',
    scss:  'src/style.scss',
    // js:    'src/main.js',
    img:   'src/img/**/*.*',
    fonts: 'src/fonts/**/*.*'
  },

  watch: {
    html:  'src/**/*.html',
    scss:  'src/**/*.scss',
    // js:    'src/**/*.js',
    img:   'src/img/**/*.*',
    fonts: 'src/fonts/**/*.*'
  },

  dist: {
    html:  'dist/',
    css:   'dist/css/',
    // js:    'dist/js/',
    img:   'dist/img/',
    fonts: 'dist/fonts/'
  }
};


// DEVELOPMENT
gulp.task('default', ['pre-build', 'browser-sync'], () => {
  gulp.watch(path.watch.html,   ['html:watch'],  browserSync.reload);
  gulp.watch(path.watch.scss,   ['scss:watch',], browserSync.reload);
  // gulp.watch(path.watch.js,     ['js:watch'],    browserSync.reload);
  gulp.watch(path.src.img,      ['img:watch'],   browserSync.reload);
  gulp.watch(path.src.fonts,    ['fonts:watch'], browserSync.reload);
});

// browser-sync
gulp.task('browser-sync', () => {
  browserSync({
    server: { baseDir: './dist/' },
    notify: true // alert windows
  });
  // browserSync.init({proxy: 'front-end.loc'}); // if local server with php/sql
});

// html:watch
gulp.task('html:watch', () => {
  gulp.src(path.src.html)
    .pipe(rigger())
    .pipe(gulp.dest(path.dist.html))
    .pipe(browserSync.reload({ stream: true }));
});

// scss:watch
gulp.task('scss:watch', () => {
  gulp.src(path.src.scss)
    .pipe(plumber())
    .pipe(scss())
    .pipe(csscomb())
    .pipe(rename({ basename: 'bundle' })) // , suffix: '.min'
    .pipe(gulp.dest(path.dist.css))
    .pipe(browserSync.reload({stream: true}));
});

// js:watch
// gulp.task('js:watch', () => {
//   gulp.src(path.src.js)
//     .pipe(rigger())
//     .pipe(rename({ basename: 'bundle', suffix: '.min' }))
//     .pipe(gulp.dest(path.dist.js))
//     .pipe(browserSync.reload({ stream: true }));
// });

// img:watch
gulp.task('img:watch', () => {
  gulp.src(path.src.img)
    .pipe(gulp.dest(path.dist.img))
    .pipe(browserSync.reload({ stream: true }));
});

// fonts:watch
gulp.task('fonts:watch', () => {
  gulp.src(path.src.fonts)
    .pipe(gulp.dest(path.dist.fonts))
    .pipe(browserSync.reload({ stream: true }));
});



// BUILD
gulp.task('pre-build', [
  'clear',
  'del',
  'html:watch',
  'scss:watch',
  // 'js:watch',
  'img:watch',
  'fonts:watch',
]);

gulp.task('build', [
  'clear',
  'del',
  'html:build',
  'scss:build',
  // 'js:build',
  'img:build',
  'fonts:build',
]);

gulp.task('build-min', [
  'clear',
  'del',
  'html:build-min',
  'scss:build-min',
  // 'js:build',
  'img:build',
  'fonts:build',
]);


// clear cache
gulp.task('clear', () => { return cache.clearAll(); });

// del (delete dist/ before building)
gulp.task('del',    () => { return del.sync('./dist'); });

// delete (delete node_modules/)
gulp.task('delete', () => { return del.sync('./node_modules'); });

// html:build
gulp.task('html:build', () => {
  gulp.src(path.src.html)
    .pipe(rigger())
    .pipe(gulp.dest(path.dist.html));
});

// html:build-min
gulp.task('html:build-min', () => {
  gulp.src(path.src.html)
    .pipe(rigger())
    .pipe(strip())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(path.dist.html));
});

// scss:build
gulp.task('scss:build', () => {
  gulp.src(path.src.scss)
    .pipe(plumber())
    .pipe(scss())
    .pipe(csscomb())
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(postcss( [mqpacker({sort: false})] ))
    .pipe(rename({ basename: 'bundle'})) // , suffix: '.min'
    .pipe(gulp.dest(path.dist.css));
});

// scss:build-min
gulp.task('scss:build-min', () => {
  gulp.src(path.src.scss)
    .pipe(plumber())
    .pipe(scss())
    .pipe(csscomb())
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(postcss( [mqpacker({sort: false})] ))
    .pipe(cssnano({
      zindex: false,
      discardComments: { removeAll: true }
    }))
    .pipe(rename({ basename: 'bundle'}))
    .pipe(gulp.dest(path.dist.css));
});

// js:build
// gulp.task('js:build', () => {
//   gulp.src(path.src.js)
//     .pipe(rigger())
//     .pipe(uglify())
//     .pipe(rename({ basename: 'bundle', suffix: '.min' }))
//     .pipe(gulp.dest(path.dist.js));
// });

// img:build
gulp.task('img:build', () => {
  gulp.src(path.src.img)
    .pipe(cache(imagemin({
      interlaced: true,
      progressive: true,
      scgoPlugins: [{ removeVievBox: false }],
      use: [pngquant()]
    })))
    .pipe(gulp.dest(path.dist.img));
});

// fonts:build
gulp.task('fonts:build', () => {
  gulp.src(path.src.fonts)
    .pipe(gulp.dest(path.dist.fonts));
});
