
if(!process.env.JWT_SECRET){
    console.log("jwt secret not present");
}
if(!process.env.MONGODB_URI){
    console.log("mongodb url not present");
}
if(!process.env.IMAGEKIT_PRIVATE_KEY){
    console.log("imagekit private key not provided")
}

// Collects environment-backed settings used by the server and integrations.
export const config={
    "PORT":process.env.PORT ||8080,
    "JWT_SECRET":process.env.JWT_SECRET,
    "MONGO_URI":process.env.MONGODB_URI,
    "IMAGEKIT_PRIVATE_KEY":process.env.IMAGEKIT_PRIVATE_KEY
}