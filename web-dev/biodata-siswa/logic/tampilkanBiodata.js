const dataSiswa = require("../data/siswa.js")
const keteranganLulus = require("./logikaKategori.js")

function biodata() {
    for (let i = 0; i < dataSiswa.length; i++) {
        console.log("Nama                   : ", dataSiswa[i].nama)
        console.log("Umur                   : ", dataSiswa[i].umur)
        console.log("Asal                   : ", dataSiswa[i].asal)
        console.log("Sekolah                : ", dataSiswa[i].sekolah)
        console.log("Tahun Lulus            : ", dataSiswa[i].tahun_lulus)
        console.log("Kategori Kondisi       : ", keteranganLulus(i))
        console.log("------------------------------------------------------")
    }
}

module.exports = biodata