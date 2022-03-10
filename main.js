// function solve() {
//     let name = prompt('Введите ваше имя')
//     return name;
// }
// console.log(solve());

// function solves() {
//     let year = +prompt('Введите ваш год рождение')
//     return year;
// }
// console.log(solves());

// function solved() {
//     let now = +prompt('Введите нынешний год')
//     return now;
// }
// console.log(solved());

// function solvee() {
//     let otv = (now - year)
//     return otv;
// }
// console.log(solvee());

// function solvev() {
//     alert('Имя' + name + 'возраст' + year );
//     return alert;
// }
// console.log(solvev());


let names = prompt('имя');
let CurrentYear = prompt('Текущий год');
let BithYear = prompt('Год рождения');

function Years(a, b, c) {
    return 'Ваше имя - ' + a + 'Ваш возраст ' + (CurrentYear - BithYear)
}

alert(Years(names, CurrentYear, BithYear));
console.log(Years(names, CurrentYear, BithYear));