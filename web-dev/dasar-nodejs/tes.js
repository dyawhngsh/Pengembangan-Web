console.log(".....................");
console.log("Operator Aritmastika");
console.log(".....................");

const a=20;
const b=3;

console.log("penjumlahan" , a+b);
console.log("pengurangan" , a-b);
console.log("pembagian" , a/b);
console.log("perkalian" , a*b);
console.log("sisa bagi" , a%b);
console.log("pangkat" , a**b);
console.log("Selesaiiiii");


console.log(".....................");
console.log("Operator Assigment");
console.log(".....................");

let x=10;

console.log("x+=2" , x+=2) //x=x+2; x=10+2
console.log("x-=2" , x-=2)
console.log("x/=2" , x/=2)
console.log("x*=2" , x*=2)
console.log("x%=2" , x%=2)
console.log("x**=2" , x**=2)
console.log("finishhhh")


console.log(".....................");
console.log("Operator Perbandingan");
console.log(".....................");

const p = 10
const q = '10'
const r = 5

console.log(p==q)
console.log(p===q)
console.log(p!=q)

console.log(".....................");
console.log("Operator Kondisional atau Logika");
console.log(".....................");

const nilai = 85
const lulus = nilai >= 75
const hadir = false

//AND = harus keduanya terpenuhi
if (lulus&&hadir) {
    console.log("Siswa baik")
} else {
    console.log("Siswa tidak baik")
}

//OR = boleh salah satu terpenuhi
if (lulus||hadir) {
    console.log("Siswa baik")
} else {
    console.log("Siswa tidak baik")
}

//NOT = membalikkan kondisi
if (hadir) {
    console.log("Siswa hadir")
} else if (!hadir) {
    console.log("Siswa tidak hadir")
}