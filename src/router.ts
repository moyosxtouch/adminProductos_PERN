import Router from "express";
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  updateAvailability,
  deleteProduct,
} from "./handlers/product";
import { body, param } from "express-validator";
import { handleInputErrors } from "./middleware";
const router = Router();
//Routing
router.get("/", getProducts);
router.get(
  "/:id",
  param("id").isInt().withMessage("ID no válido"),
  handleInputErrors,
  getProductById
);
router.post(
  "/",
  //Validacion
  body("name")
    .notEmpty()
    .withMessage("El nombre del Producto no puede ir vacio"),

  body("price")
    .isNumeric()
    .withMessage("Valor no válido")
    .notEmpty()
    .withMessage("El precio del Producto no puede ir vacio")
    .custom((value) => value > 0)
    .withMessage("Precio no válido"),
  handleInputErrors,

  createProduct
);
router.put(
  "/:id",
  //Validacion
  param("id").isInt().withMessage("ID no válido"),
  body("name")
    .notEmpty()
    .withMessage("El nombre del Producto no puede ir vacio"),

  body("price")
    .isNumeric()
    .withMessage("Valor no válido")
    .notEmpty()
    .withMessage("El precio del Producto no puede ir vacio")
    .custom((value) => value > 0)
    .withMessage("Precio no válido"),
  body("availability")
    .isBoolean()
    .withMessage("Valor para disponibilidad no valido"),
  handleInputErrors,
  updateProduct
);
router.patch(
  "/:id",
  param("id").isInt().withMessage("ID no válido"),
  handleInputErrors,
  updateAvailability
);
router.delete(
  "/:id",
  param("id").isInt().withMessage("ID no válido"),
  handleInputErrors,
  deleteProduct
);
export default router;
