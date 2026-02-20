import mongoose from "mongoose";

export const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Conectado a MongoDB");
    } catch (error) {
        console.error("Error en la conexión de la base de datos:", error);
    }
};