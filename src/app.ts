import express, { type Application } from 'express'
import dotenv from 'dotenv'
import productRoute from './routes/product-routes.ts'
import { connectDB } from './database/db.ts'
const app:Application = express()

dotenv.config()
connectDB()

const PORT = process.env.PORT
app.use(express.json())
app.use("/products",productRoute)

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)    
})
