import express from "express";
import router from "./router";
import db from "./config/db";
import colors from "colors";

//conectar a la base de datos
async function connectDB() {
  try {
    await db.authenticate();
    db.sync();
    console.log(colors.green.bold("conexion establecida exitosamente"));
  } catch (error) {
    console.log(error);
    console.log(colors.red.bold("Hubo un error al conectar a la db"));
  }
}
connectDB();
//instancia de express
const server = express();
//Leer datos de formularios
server.use(express.json());

//Routing
server.use("/api/products", router);

export default server;
