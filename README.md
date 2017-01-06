# gulp-jenkins
Jenkins plugin for Gulp

[![npm version](https://badge.fury.io/js/gulp-jenkins.svg)](http://badge.fury.io/js/gulp-jenkins) [![Dependency Status](https://david-dm.org/stephn-r/gulp-jenkins.svg)](https://david-dm.org/boennemann/badges) [![devDependency Status](https://david-dm.org/stephn-r/gulp-jenkins/dev-status.svg)](https://david-dm.org/boennemann/badges#info=devDependencies)

## Information

<table>
<tr>
<td>Package</td><td>gulp-jenkins</td>
</tr>
<tr>
<td>Description</td>
<td>Jenkins plugin for Gulp</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 0.9</td>
</tr>
</table>

## Usage

```javascript
var jenkins = require('gulp-jenkins');

jenkins.init({
  username: 'Agent_007',
  password: 'golden_gun',
  url: 'jenkins.your-site.com'
});

gulp.task('build production', function() {
  return gulp.src('./*')
    .pipe(jenkins.build('Secret_App', {
      target_env: 'prod',
      tag_name: 'tags/v0.07/trunk',
    }));
});
```

### init(options)
***required***

Before running builds or making use of the jenkins service, you must provide a url to where the Jenkins CI tool exists. Also, you may provide your credentials here for when connecting to the service. In the least, a **url** must be provided.


### How do I provide my own custom callback?

Since ```gulp-jenkins``` is a very lightweight wrapper on top of [node-jenkins-api](https://github.com/jansepar/node-jenkins-api), you can provide your own callback into any of the functions. Below is an example:

```javascript
gulp.task('build production', function() {
  return gulp.src('./*')
  .pipe(jenkins.build('Secret_App', {
    target_env: 'prod',
    tag_name: 'tags/v0.07/trunk',
  }, function(err, data) {
    if(err) { /* do something */ }
    else { /* do something else */ }
  }));
});
```

**TIP**: The last parameter of any function in ```gulp-jenkins``` is the optional ```callback``` parameter

If no callback is provided, the results of the execution will be printed into the Gulp log.

## Supported Functions

The ```gulp-jenkins``` plugin is wrapped on top of the [node-jenkins-api](https://github.com/jansepar/node-jenkins-api) package by [jansepar](https://github.com/jansepar). Please refer to their docs for information.

## Issues

Since ```gulp-jenkins``` is wrapped on top of [node-jenkins-api](https://github.com/jansepar/node-jenkins-api), all issues should be routed directly to that project. However, if there is an issue within the gulp logs or with how the actual plugin works with [Gulp](https://github.com/gulpjs/gulp), then please report the issue [here](https://github.com/Stephn-R/gulp-jenkins/issues)
