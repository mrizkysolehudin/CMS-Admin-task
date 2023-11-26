// soal 1
// Diberikan sebuah string yang dapat mengandung huruf, angka, spasi dan tanda baca.
// ○ Ubahlah format string tersebut menjadi format penulisan judul yang hanya menerima
// huruf dan angka
// ○ Ubahlah format string tersebut menjadi format penulisan biasa dengan mengkonversi
// spasi menjadi “-“ (strip)

function hapusSelainHurufDanAngka(string) {
	let cleanString = "";

	for (let i = 0; i < string.length; i++) {
		const karakter = string[i]; // masukkan string berdasarkan indexnya ke dalam variable karakter

		if (
			(karakter >= "a" && karakter <= "z") ||
			(karakter >= "A" && karakter <= "Z") ||
			(karakter >= "0" && karakter <= "9") || // jika karakter sesuai dengan kondisi, maka tambahkan karakter ke dalam variable cleanString
			karakter === " "
		) {
			cleanString += karakter;
		}
	}
	return cleanString;
}

function formatJudul(string) {
	const cleanString = hapusSelainHurufDanAngka(string);
	const words = cleanString.split(" "); // mengubah kalimat menjadi kata dan menampungnya di dalam array

	// memformat huruf-huruf pada setiap kata
	const formattedWords = words.map((word) => {
		const karakterPertama = word.charAt(0).toUpperCase();
		const sisaKarakter = word.slice(1).toLowerCase();
		return karakterPertama + sisaKarakter;
	});

	return formattedWords.join(" "); // menggabungkan kata-kata menjadi kalimat lagi
}

function formatBiasa(string) {
	const cleanString = hapusSelainHurufDanAngka(string);

	// 1. mengecilkan semua huruf
	// 2. mengubah kalimat menjadi kata
	// 3. menggabungkan setiap kata dengan strip
	return cleanString.toLowerCase().split(" ").join("-");
}

const text = "SELamAt PaGi Dunia!!";

console.log("Format judul: ", formatJudul(text));
console.log("Format biasa: ", formatBiasa(text));
// Format judul:  Selamat Pagi Dunia
// Format biasa:  selamat-pagi-dunia
