var fs = require("fs");
var gulp = require("gulp");
var upload = require("@r3it/gulp-kintone-jsupload");

gulp.task("dev", function () {
  var env = JSON.parse(fs.readFileSync("./config/devenv.json"));
  return gulp.src("dist/**/*")
    .pipe(upload(env));
});

gulp.task("default", ["dev"]);
