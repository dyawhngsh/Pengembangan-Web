let tinggi = {
    Rose: "179 cm",
    Magnolia: "153 cm",
    Daisy: "165 cm",
    Jasmine: "161 cm",
    Violet: "159 cm",
}
for (let nama in tinggi) {
    console.log(nama + " memiliki tinggi badan " + tinggi[nama]);
}