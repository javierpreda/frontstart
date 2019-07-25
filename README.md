
# Frontstart - Quickly make awesome projects with the help of html5-boilerplate and Bootstrap 

Frontstart is a series of gulp tasks that help you quickly setup your frontend development, without too many complex packages or libraries, is like an artist blank canvas. 

The tasks basically are the following:

- Copy html5-boilerplate dist folder from node_modules to our main newly created app folder
- Copy bootstrap core scss files to our core app/scss folder
- Create an empty main.scss file for you to start your journey from there. You should import bootstrap files and your custom scss here, is up to you how you want to proceed.
- After that you need to execute another task to watch your html and scss for changes and live reloading. 

# Setup

After cloning or downloading this repo,
First, make sure you have node and gulp installed on your system, 
On your terminal, navigate to the root frontstart folder and execute:

```
npm install
```

then:

```
gulp frontstart
```

and lastly:

```
gulp happyfrontending
```

Start making your magic on app/index.html or whatever .html file, and changing styles on scss/main.scss to livereload.
Watch your changes live, as you've made them on:

```
http://localhost:8080/
```

Voila!

# Dependencies

- gulp
- gulp-sass
- gulp-connect
- html5-boilerplate
- bootstrap

# TO-DO

- css uglify
- html uglify
- image optimization
- deploy a dist folder for production
