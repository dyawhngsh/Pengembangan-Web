let daftarBelanja = [ ]

daftarBelanja.push("beras", "minyak", "gula")
console.log(daftarBelanja);

daftarBelanja.push("telur", "sayur", "buah")
console.log(daftarBelanja);

daftarBelanja.splice(daftarBelanja.indexOf("minyak"), 1)
console.log(daftarBelanja);

daftarBelanja.sort()
for(let i = 0; i < daftarBelanja.length; i++) {
    console.log((i + 1) + "." + daftarBelanja[i]);
}
