console.log("============Rincian Belanja Sepatu===========")
let modal = 1200000

let belanjaan = [
    {nama: "New Balance NB530", harga: 390000},
    {nama: "Nike Vomero 5", harga: 350000},
    {nama: "Adidas Samba", harga: 180000},
    {nama: "Onitsuka Tiger Mexico", harga: 420000},
]
let no = 1
let totalharga = 0
for (let i = 0; i < belanjaan.length; i++) {
    console.log(no + "." + belanjaan[i].nama + "- Rp. " + belanjaan[i].harga.toLocaleString("id-ID"));
    no++

    totalharga += belanjaan[i].harga
}

console.log("Total Belanjaan = Rp. " + totalharga.toLocaleString("id-ID"));

if (totalharga < 250000) {
    let diskon = totalharga * 0/100
    let setelahDiskon = totalharga-diskon

    console.log("diskon: 0%");
    console.log("total setelah diskon: " + setelahDiskon.toLocaleString("id-ID"));
}else if (totalharga>=250000 && totalharga<500000) {
    let diskon = totalharga * 5/100
    let setelahDiskon = totalharga-diskon

    console.log("diskon: 5%");
    console.log("total setelah diskon: " + setelahDiskon.toLocaleString("id-ID"));
}else if (totalharga>=500000 && totalharga<800000) {
    let diskon = totalharga * 10/100
    let setelahDiskon = totalharga-diskon
    
    console.log("diskon: 10%");
    console.log("total setelah diskon: " + setelahDiskon.toLocaleString("id-ID"));
}else {
    let diskon = totalharga * 15/100
    let setelahDiskon = totalharga-diskon
    
    console.log("diskon: 15%");
    console.log("total setelah diskon: " + setelahDiskon.toLocaleString("id-ID"));
}


//ATAU DENGAN JALAN SINGKATTTTT
console.log ("======================")

let diskon = totalharga < 250000?0:totalharga<500000?5:totalharga<800000?10:15
let setelahDiskon = totalharga - (totalharga*diskon/100)

console.log("diskon: " + diskon + "%");
console.log("total setelah diskon: " + setelahDiskon.toLocaleString("id-ID"));

console.log("pembayaran: Rp. " + modal.toLocaleString("id-ID"));

let kembalian = modal - setelahDiskon
console.log("Kembalian: Rp. " +kembalian.toLocaleString("id-ID"));
