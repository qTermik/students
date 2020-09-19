// Меньщиков Андрей ЭМ-73

/** 
1. Написать функцию, которая принимает два числа a, b, 
и выводит в консоль строку формата «а больше/меньше/равно b на n”
*/

let a = 10;
let b = 20;

function compare(a, b) {
    let n;
    if (a > b) {
        n = a - b;
        console.log("Number a is greater than b by " + n)
    }
    else if (a == b) {
        console.log("The numbers are equal ")
    }
    else {
        n = b - a;
        console.log("Number b is greater than a by "+ n)
    }
    return;
}

compare(a, b);

/**
2. Написать функцию, которая сортирует массив [‘Саша’, ‘Андрей’, ‘Олег’,’Юлия’, ‘Ксения’, ‘Артём’] 
в алфавитном порядке и выводит новый массив в консоль.
*/
let massname = ['Саша', 'Андрей', 'Олег', 'Юлия', 'Ксения', 'Артём'];
function namesort(array) {
    array.sort();
    console.log(array);
    return;
}
namesort(massname);
/**
3. Написать функцию, которая отфильтрует массив[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
и оставит из него только те числа, квадраты которых больше 20, но меньше 100 
*/

let massnub = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
function numbsort(array) {

    function sort(value) {
        if (Math.pow(value, 2) > 20 && Math.pow(value, 2)<100) {
            return value;
        }
    }
    let somenumb = array.filter(sort);
    console.log(somenumb);
    return;
}
numbsort(massnub);
/**
4.Написать функцию, которая 25 раз выведет в консоль: 
«Я номер 1», «Я номер 2», «Я номер 3» и так далее до 25.
*/

function iNumb() {
    for (let i = 1; i <= 25; i++) { 
        console.log("Я номер " + i);
    }
    return;
}
iNumb();

/**
5. Написать функцию, которая вернёт из исходного массива 
[10,20,30,40,50,60,70] следующий массив [70,60,50,40,30,20,10]
*/

function massrev() {
    let massivik = [10, 20, 30, 40, 50, 60, 70];
    massivik.reverse();
    console.log(massivik);
    return;
}
massrev();

/**
6. Написать функцию, которая будет принимать на вход имя, а возвращать 
массив из букв его имени, то есть: вход - «Саша», выход - [‘с’, ‘а’, ‘ш’, ‘а’]
*/
function inoutmass(str) {
    
    console.log(str.split(''));
    return;
}
inoutmass('Саша');

/**
7. Написать функцию, которая принимает на вход массив из 4 чисел, 
и возвращает сумму этих числе. То есть, вход: [1,2,3,4], выход: 10
*/
function sumass(mass) {
    let res = mass.reduce((sum, current) => sum + current, 0);
    console.log(res);
    return;
}
let ees = [1, 2, 3, 4];
sumass(ees);

/**
8. Написать функцию, которая принимает на вход строку, и выводит в консоль её длину.
*/
function strleng(str) {

    console.log(str.length);
    return;
}
strleng('Узнай мою длину');

/**
9. Написать функцию, которая принимает на вход имя и число n, и выводит в консоль заданное имя n-раз.
*/
function namnum(str, count) {

    for (let i = 1; i <= count; i++) {
        console.log(str);
    }
    return;
}
namnum('Андрей',10);