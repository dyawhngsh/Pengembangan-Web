const { log } = require("console")
const fs = require("fs")

//membuka dan membaca file json
const teks = fs.readFileSync("film.json")
const film = JSON.parse(teks)

console.log("Daftar Film: ", film);
//for (let i = 0; i < film.length; i++) {
//    console.log(film[i].nama);
//}

//menulis data baru ke array
film.push({Judul: "Di Ambang Kematian", Tahun: 2023, Genre: "Horor"});

//menyimpan (menulis ulang)
//otomatis menutup
fs.writeFileSync("film.json", JSON.stringify(film, null, 2));

console.log("Data berhasil di tambahkan dan disimpan ulang");
console.log("Film Terbaru: ", film);