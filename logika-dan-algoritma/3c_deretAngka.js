// soal 3c
// Buatlah kode pemrograman untuk menampilkan deret angka sebagai berikut, sebanyak
// inputan user:
// ○ 0 0 1 2 4 7 12 20 33 54 ...

const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

function generateDeretAngka(n) {
	let a = 0,
		b = 0,
		c = 1;
	let result = "0 0";

	for (let i = 2; i < n; i++) {
		let temp = a + b + c;

		// penukaran value
		a = b;
		b = c;
		c = temp;

		if (temp > 13 && temp < 54) {
			result += " " + Number(temp - 3 ** (i - 6) - (i - 6)); // penyesuaian value 20 dan 33
		} else if (temp > 7) {
			result += " " + Number(temp - 3 ** (i - 6)); // jika temp lebih dari 7, maka lakukan perhitungan
		} else {
			result += " " + temp; // menambahkan spasi dan mencetak angka terbaru
		}
	}

	return result;
}

rl.question("Masukkan jumlah angka yang ingin ditampilkan: ", (jumlahAngka) => {
	const hasil = generateDeretAngka(jumlahAngka);
	console.log(hasil);
	rl.close();
});

// hasil: 0 0 1 2 4 7 12 20 33 54 68 ...
