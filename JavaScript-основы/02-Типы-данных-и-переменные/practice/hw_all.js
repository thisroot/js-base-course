/*
int,float,string,undefined,null,NaN
*/

/*1*/

let vint = 5;
let vfloat = 4.213;
let vstring = "Hi";
let vundef = undefined;
let vnull = null;
let vnan = NaN;
let vinf = Infinity;
let vnum = new Number(2);

console.log("1 example: ", 
            vint, 
            vfloat, 
            vstring, 
            vundef,
            vnull,
            vnan)

/*2*/

vstring = ' \u00ABКак поживаете\u00BB , Сказал Джои';
console.log(vstring)

/*3*/

console.log(
    typeof vint,
    typeof vfloat,
    typeof vstring,
    typeof vundef,
    typeof vnull,
    typeof vnan,
    typeof vinf,
    typeof vnum
)

/*4*/

let empty;
console.log(empty);

/*5*/
let one = '1234',
    two = '1234abc',
    three = '0.15',
    four = '3.14ivan',
    five = 'Infinity',
    six = '999999999999'

console.log(
    '============\n',
    one,
    parseInt(one),
    parseFloat(one),
    Number(one),
    + one,
    one | 0,
    '\n=============\n',
    two,
    parseInt(two),
    parseFloat(two),
    Number(two),
    +two,
    two | 0,
    '\n=============\n',
    three,
    parseInt(three),
    parseFloat(three),
    Number(three),
    +three,
    three | 0,
    '\n=============\n',
    four,
    parseInt(four),
    parseFloat(four),
    Number(four),
    +four,
    four | 0,
    '\n=============\n',
    five,
    parseInt(five),
    parseFloat(five),
    Number(five),
    +five,
    five | 0,
    '\n=============\n',
    six,
    parseInt(six),
    parseFloat(six),
    Number(six),
    +six,
    six | 0,
    '\n=============\n'
)

