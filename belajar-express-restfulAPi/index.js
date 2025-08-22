const express = require('express')
const app = express()
const productRoutes = require('./routes/product.js')

app.use(express.json());
app.use('/products', productRoutes)

app.get('/',(req,res) => {
   res.send("Haloooooooooo")
})

const port = 3000;
app.listen(port,() => {
    console.log(`server berjalan di http://localhost:${port}`)
});