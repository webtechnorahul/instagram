import "dotenv/config"
import app from "./src/app.js"
import { config } from "./src/config/config.js"
import { connectDB } from "./src/config/database.js"

// Opens the database connection before the API handles requests.
connectDB();

// Starts the Express server on the configured port.
app.listen(config.PORT ||8080,()=>{
    console.log(`server is running on ${config.PORT}`)
})