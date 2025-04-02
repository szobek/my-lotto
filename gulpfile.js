const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cleanCSS = require("gulp-clean-css");
const sourcemaps = require("gulp-sourcemaps");

// Forrás és célmappák
const paths = {
  scss: "scss/**/*.scss",
  css: "css",
};

// SCSS fordítás feladata
function styles() {
  return gulp
    .src(paths.scss)
    .pipe(sourcemaps.init()) // Sourcemaps indítása
    .pipe(sass().on("error", sass.logError)) // SCSS fordítása
    .pipe(postcss([autoprefixer()])) // Prefixek hozzáadása
    .pipe(cleanCSS()) // CSS minifikálás
    .pipe(sourcemaps.write(".")) // Sourcemaps mentése
    .pipe(gulp.dest(paths.css));
}

// Fájlfigyelés és automatikus fordítás
function watchFiles() {
  gulp.watch(paths.scss, styles);
}

// Alapértelmezett Gulp feladat
exports.default = gulp.series(styles, watchFiles);
exports.build = styles;
