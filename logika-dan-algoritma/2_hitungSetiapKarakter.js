/* prettier-ignore */

// soal2
// Diberikan sebuah string acak, hitunglah berapa jumlah setiap karakter yang ada dalam string
// tersebut

const hitungSetiapKarakter = (string) => {
	const karakterCount = {};

	for (let karakter of string) { // looping setiap karakter dari string
		karakterCount[karakter] = karakterCount[karakter] || 0; // mengambil total setiap karakter. Jika tidak ada, maka nol

		karakterCount[karakter]++; // menambah total karakter
	}
	// hasil menjadi object. 
	// { karakter: total, karakter: total }

	for (let karakter in karakterCount) { // looping setiap property dari object
		console.log(`${karakter} = ${karakterCount[karakter]}`); // mengubah formatnya menjadi "karakter = total"
	}
};

hitungSetiapKarakter("aabbbahwws");
// a = 3
// b = 3
// h = 1
// w = 2
// s = 1
