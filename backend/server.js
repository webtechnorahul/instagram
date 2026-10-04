import "dotenv/config"
import app from "./src/app.js"
import { config } from "./src/config/config.js"
import { connectDB } from "./src/config/database.js"

connectDB();

app.listen(config.PORT ||8080,()=>{
    console.log(`server is running on ${config.PORT}`)
})