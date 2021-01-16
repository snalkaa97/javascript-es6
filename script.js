//ARROW FUNCTION

const tampilNama = (nama) => {
	return console.log(`halo ${nama}`);
};

console.log(tampilNama("alka"));

//implisit return
const tampilNama2 = (nama) => {
	return `halo ${nama}`;
};

console.log(tampilNama2("alkatiri"));

let mahasiswa = ["alka", "wibi", "taslim"];
// let jumlahHuruf = mahasiswa.map(function (nama) {
// 	return nama.length;
// });
// console.log(jumlahHuruf);
// let jumlahHuruf = mahasiswa.map((nama, index) => {
// 	return nama.length;
// });
let jumlahHuruf = mahasiswa.map((nama, index) => {
	return { nama: nama, jumlahHrf: nama.length };
});

console.log(jumlahHuruf);
