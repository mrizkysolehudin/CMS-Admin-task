// soal 3a
// Buatlah kode pemrograman untuk menampilkan deret angka sebagai berikut, sebanyak
// inputan user:
// ○ 1 4 9 16 25 36 49 64 81 100 ...

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

function generateDeretKuadrat(n) {
	let deretKuadrat = [];
	for (let i = 1; i <= n; i++) {
		deretKuadrat.push(i ** 2); // masukkan i kuadrat ke dalam array
	}
	return deretKuadrat;
}

rl.question("Masukkan jumlah angka yang ingin ditampilkan: ", function (angka) {
	let deretKuadrat = generateDeretKuadrat(parseInt(angka));
	console.log("Deret Kuadrat:", deretKuadrat);
	rl.close();
});

//  hasil: 1,    4,    9,   16,   25,   36,   49,   64,   81
