function verifikasiLogin (username,password) {
    try {
        if (username==="admin" && password==="12345") {
            console.log("Login Berhasil");
        } else if(typeof username == 'string' || typeof password == 'number') {
            console.log("Username dan password harus berupa teks")
        } else {
            throw new Error("Username atau password salah");
        } 
    }catch (error) {
        console.log("Terjadi Kesalahan: ", error.message);
    }
}

verifikasiLogin("admin", "12345")
verifikasiLogin("admin", "salah")
verifikasiLogin(123, true)