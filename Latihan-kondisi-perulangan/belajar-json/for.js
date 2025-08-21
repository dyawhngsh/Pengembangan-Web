let jumlah = 0

console.log("Bilangan ganjil dari 1 hingga 20:");

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 1) {
        console.log(i);
        jumlah += i;
    }
}

console.log("Jumlah semua bilangan ganjil tersebut adalah:" , jumlah);