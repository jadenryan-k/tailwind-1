const gulp = require('gulp');
const postcss = require('gulp-postcss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

gulp.task('build:css', function () {
  return gulp
    .src('path/to/your/source/css/file.css') // Replace with your CSS source file
    .pipe(postcss([tailwindcss, autoprefixer]))
    .pipe(gulp.dest('path/to/your/output/css')); // Replace with the directory where you want the processed CSS to be output
});

gulp.task('watch', function () {
  gulp.watch('path/to/your/source/css/**/*.css', gulp.series('build:css')); // Replace with the directory where your CSS files are located
});

gulp.task('default', gulp.series('build:css', 'watch'));
