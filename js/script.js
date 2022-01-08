"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

//Фильм и оценка

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько его оцените?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('done');
    } else {
      console.log('error');
      i--;
    }
  }
}

rememberMyFilms();

//Количество фильмов 


function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count <= 30) {
    console.log('Вы классический зритель');
  } else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
  } else {
    console.log('Произошла ошибка, попробуйте снова');
  }
}

detectPersonalLevel();

// function showMyDB() {
//   switch (personalMovieDB.privat) {
//     case false:
//       console.log(personalMovieDB);
//       break;
//     default:
//       console.log('Не в этот раз.');
//       break;
//   }
// }
// showMyDB();

//Приватность данных
function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat)

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр по порядку ${i}`);
  }
}

writeYourGenres();