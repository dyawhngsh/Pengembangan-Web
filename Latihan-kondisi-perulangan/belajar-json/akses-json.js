const { log } = require("console")
const fs = require("fs")

const teks = fs.readFileSync("data.json")
const data = JSON.parse(teks)

console.log("data awal: ", data);
for (let i = 0; i < data.length; i++) {
    console.log(data[i].nama);
}

//fs.writeFileSync 