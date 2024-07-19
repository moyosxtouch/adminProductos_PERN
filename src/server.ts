import express from "express";
import router from "./router";
import db from "./config/db";

//conectar a la base de datos
async function connectDB() {
  try {
    await db.authenticate();
    db.sync();
    console.log("conexion establecida exitosamente");
  } catch (error) {
    console.log(error);
    console.log("Hubo un error al conectar a la db");
  }
}
connectDB();

const server = express();

//Routing
server.use("/api/products", router);

export default server;
