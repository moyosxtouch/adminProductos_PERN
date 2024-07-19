import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();
console.log(process.env.DATABASE_URL!);
const db = new Sequelize(
  "postgresql://rest_api_react_d5hi_user:Gu5fGCopDhLorBwezWCQZQOcHGnoqmYF@dpg-cqcnnjlds78s738q68tg-a.oregon-postgres.render.com/rest_api_react_d5hi?ssl=true"
);
export default db;
