//function declaration
// const methodmahasiswa = {
// 	makan: function (porsi) {
// 		this.energi += porsi;
// 		console.log(`Halo ${this.name} energi ${this.energi}`);
// 	},
// 	tidur: function (jam) {
// 		this.energi += jam * 2;
// 	},
// };

// function Mahasiswa(nama, energi) {
// 	let mahasiswa = Object.create(methodmahasiswa);
// 	mahasiswa.nama = nama;
// 	mahasiswa.energi = energi;

// 	return mahasiswa;
// }

//PROTOTYPE
function Mahasiswa(nama, energi) {
	this.nama = nama;
	this.energi = energi;
}

Mahasiswa.prototype.makan = function (porsi) {
	this.energi += porsi;
	console.log(`Halo ${this.nama} energi ${this.energi}`);
};

let alka = new Mahasiswa("alka", 23);
