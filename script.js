//CLOSURE

//lexical scope

function init() {
	let nama = "alka"; //local variable
	function tampilNama() {
		//inner functuin (closure)
		console.log(nama); //akses ke parent variable
	}
	tampilNama();
}
init();

function ucapkanSalam(waktu) {
	return function (nama) {
		console.log(`Halo ${nama}, Selamat ${waktu}`);
	};
}

let pagi = ucapkanSalam("pagi"); //ketika dijalankan baru setengah
console.log(pagi("alka"));

let add = function () {
	let counter = 0;
	return function () {
		return ++counter;
	};
};

a = add();

console.log(a());
console.log(a());
console.log(a());
