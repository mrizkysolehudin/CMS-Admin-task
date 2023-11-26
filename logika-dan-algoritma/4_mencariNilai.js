// soal 4
// Diberikan sebuah deret angka random oleh user berupa string (dipisahkan oleh spasi atau
//   koma (,), ex. “20, 21, 80, 21, 55, 31, 22” ) hitunglah:
//   ○ nilai terbesar
//   ○ nilai terkecil
//   ○ nilai rata-rata

const generateNilai = (deret) => {
	const arraySort = deret.split(", ").sort(); // memasukkan setiap angka ke dalam array dan mengurutkannya
	const len = arraySort.length - 1;

	const nilaiTerkecil = arraySort[0];
	const nilaiTerbesar = arraySort[len];

	let nilaiRataRata = 0;
	for (let i = 0; i < arraySort.length; i++) {
		nilaiRataRata += Number(arraySort[i]); // menjumlahkan semua angka di dalam array
	}
	nilaiRataRata /= arraySort.length; // mengambil rata-rata

	console.log(`Nilai terkecil: ${nilaiTerkecil}`);
	console.log(`Nilai terbesar: ${nilaiTerbesar}`);
	console.log(`Nilai rata-rata: ${nilaiRataRata.toFixed(2)}`);
};

generateNilai("20, 21, 80, 21, 55, 31, 22");
// Nilai terkecil: 20
// Nilai terbesar: 80
// Nilai rata-rata: 35.71
