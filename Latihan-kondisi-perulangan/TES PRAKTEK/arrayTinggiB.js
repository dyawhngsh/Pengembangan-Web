let data = [{
    nama: "Rose",
    tinggi: 178,},
{nama: "Magnolia",
    tinggi: 153,},
{nama: "Daisy",
    tinggi: 165,},
{nama: "Jasmine",
    tinggi: 161,},
{nama: "Violet",
    tinggi: 159,}]

data.sort((a,b) => a.nama.localeCompare(b.nama))

for (let i = 0; i < data.length; i++) {
    console.log(data[i].nama + " memiliki tinggi badan " + data[i].tinggi + " cm");
}