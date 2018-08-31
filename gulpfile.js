var gulp = require('gulp'),
sass = require('gulp-sass'),
watch = require('gulp-watch'),
browserSync = require('browser-sync'),
clean = require('gulp-clean'),
fileinclude = require('gulp-file-include'),
run = require('gulp-run');

// Levanta o servidor
gulp.task('server', ['kss'], function () {
    browserSync.init({
        server: {
            baseDir: 'build'
        }
        
    });

    gulp.watch('src/css-components/**/*.scss',['kss']).on('change',browserSync.reload);
    gulp.watch('src/app/templates/**/*.hbs',['kss']).on('change', browserSync.reload);
});

// Cria a pasta build
gulp.task('kss',['sass'], function() {    
    gulp.src('./src/css-components/styles.css')
    .pipe(gulp.dest('./build/kss-assets/css'));

    gulp.src(['src/app/templates/index.hbs'])
    .pipe(fileinclude({
       prefix: '@@',
    }))
    .pipe(gulp.dest('src/app/'));


    return run('npm run kss').exec();
  });
  
//   Compila o arquivo Styles.scss e gera o Styles.css
  gulp.task('sass',function(){
    return gulp.src('src/css-components/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css-components/'))
    .pipe(browserSync.stream());
    });
    
    // Apaga a pasta build
    gulp.task('clean',function () {
       return gulp.src('build')
       .pipe(clean());
    });

gulp.task('html', function(){
    
});