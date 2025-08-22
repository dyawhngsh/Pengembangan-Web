let username = "admin"
let password = 12345

try {
    if (username==="admin" && password===123) {
        console.log("Login Berhasil")
    }else{
        console.log("Username atau password salah")
    }
} catch (error) {
    console.log(" Terjadi Kesalahan: ", error.message);
}