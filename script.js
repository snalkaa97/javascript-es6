//function declaration
function Mahasiswa(nama, energi) {
	let mahasiswa = {};
	mahasiswa.nama = nama;
	mahasiswa.energi = energi;

	mahasiswa.makan = function (porsi) {
		this.energi += porsi;
		console.log(`Halo ${this.name} energi ${this.energi}`);
	};

	return mahasiswa;
}

let alka = Mahasiswa("alka", 23);

//function constructor
function Mahasiswa(nama, energi) {
	// let mahasiswa = {};
	this.nama = nama;
	this.energi = energi;

	this.makan = function (porsi) {
		this.energi += porsi;
		console.log(`Halo ${this.name} energi ${this.energi}`);
	};
}

let alkatiri = new Mahasiswa("alkatiri", 23);

//Object Create
