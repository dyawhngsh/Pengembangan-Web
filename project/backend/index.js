import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import siswaRouter from "./routes/siswaRouter.js"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(siswaRouter)

const PORT = 8000
app.listen(PORT,() => {
console.log("server berjalan.... Okeeyyyyyy");
})