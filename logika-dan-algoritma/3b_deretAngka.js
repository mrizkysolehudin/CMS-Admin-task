// soal 3b
// Buatlah kode pemrograman untuk menampilkan deret angka sebagai berikut, sebanyak
// inputan user:
// ○ 1 2 5 10 17 26 37 50 65 82 ...

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

function generateDeret(n) {
	let deretAngka = [];
	let currentAngka = 1;

	for (let i = 0; i < n; i++) {
		deretAngka.push(currentAngka);
		currentAngka += 1 + i * 2; // penambahan angka
	}

	return deretAngka;
}

rl.question("Masukkan jumlah angka dalam deret: ", function (jumlahAngka) {
	let deret = generateDeret(parseInt(jumlahAngka));
	console.log("Deret :", deret);
	rl.close();
});

// hasil: 1,    2,    5,   10,   17,   26,   37,   50,   65,   82
