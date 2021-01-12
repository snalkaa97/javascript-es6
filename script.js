//2.1 EXECUTION CONTEXT, HOISTING & SCOPE

//creation phase pada global context
//nama var = undifined
// function = fn()
//window = global object
//this = window

//execution phase
// console.log(sayHello());
// var nama = "alka";
// var umur = 23;

// function sayHello() {
// 	console.log(`Hello, nama saya ${nama}, saya ${umur} tahun`);
// }

function satu() {
	var nama = "alka";
	console.log(nama);
}

function dua() {
	console.log(nama);
}

console.log(nama);
var nama = "wibi";
satu();
dua("Taslim");
console.log(nama);
