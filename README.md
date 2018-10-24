"# Netpeak-Test" 


Я использовал npm v6.2.0, с помощью которого я установил все необходимое для сборки проекта, а именно:

В качастве сборщика выступал Gulp#4.0, а также плагины, такие как:

    "browser-sync": "^2.24.7",
    "del": "^3.0.0",
    "gulp-autoprefixer": "^6.0.0",
    "gulp-concat": "^2.6.1",
    "gulp-cssmin": "^0.2.0",
    "gulp-if": "^2.0.2",
    "gulp-minify-html": "^1.0.6",
    "gulp-rename": "^1.4.0",
    "gulp-sass": "^4.0.1",
    "gulp-sourcemaps": "^2.6.4",
    "gulp-uglify": "^3.0.1"


Исходные файлы находятся в папке frontend

Для просмотра, откройте файл index.html в папке public

gulp build - собирает проект в папку public

gulp develop - собирает проект и запускает browser-synk, открывает на локальном сервере и обновляет при изменениях. 

Check how it looks: https://netpeak-test.herokuapp.com/public/index.html
