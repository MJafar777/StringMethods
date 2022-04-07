"use strict";

// String Methods : length , slice , substring , replace , toUpperCase , toLowerCase , concat , trim .

let txt = "   Lorem ipsum dolor, sit dolor amet consectetur   ";
// let res = txt.length;
// let res = txt.slice(-12, -1); //consectetur
// let res = txt.substring(6, 11); //ipsum
// let res = txt.replace(/dolor/g, "jafar");  // /g = global
// let res2 = txt.replace(/dolor/i, "jafar"); // /i = toLowerCase
// let res = txt.trim(); // bush joylani olib tashlaydi
let txt2 = "hello world";
let res = txt.trim().concat(" " + txt2); //concat 2 variable
console.log(res);
