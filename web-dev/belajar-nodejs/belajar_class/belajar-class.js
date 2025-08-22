class Car {
    constructor (brand) {
        this.brand=brand
    }
}

//instantiate the class
var pajero = new Car('Mitsubishi')
console.log(pajero.brand);

console.log("==================")

//Method
class Car2 {
    sound(){
        return "Tututtttt tuttttt"
    }
}

var pajero = new Car2();
console.log(pajero.sound());

console.log("==================")

//Method
class Car3 {
    sound(x){
        return x + ",tututttt tutttt"
    }
}

var pajero = new Car3()
console.log(pajero.sound('halooo'));

console.log("==================")

//getter dan setter
class Car4{
    constructor (brand){
        this.carname = brand
    }
    get carname (){
        return this._carname
    }
    set carname(x){
        this._carname = x
    }
}

newcar = new Car4 ('pajero')
newcar.carname = 'alphard';
console.log(newcar.carname);

console.log("==================")

//control program if-else
    //BUAT DI SLIDE HALAMAN 25
