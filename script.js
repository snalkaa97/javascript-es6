//function declaration
const methodmahasiswa = {
	makan: function (porsi) {
		this.energi += porsi;
		console.log(`Halo ${this.name} energi ${this.energi}`);
	},
	tidur: function (jam) {
		this.energi += jam * 2;
	},
};

function Mahasiswa(nama, energi) {
	let mahasiswa = {};
	mahasiswa.nama = nama;
	mahasiswa.energi = energi;
	mahasiswa.makan = methodmahasiswa.makan;
	mahasiswa.tidur = methodmahasiswa.tidur;

	return mahasiswa;
}

let alka = Mahasiswa("alka", 23);
