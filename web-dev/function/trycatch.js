let username = "admin"
let password = 112233

try {
    if (usernamee == "admin" && password == 112233) {
        console.log("Login Berhasil")
    }else {
        console.log("Login Gagal")
    }
} catch (error) {
    console.log("Kesalahan: ", error.message);
}