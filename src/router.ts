import Router from "express";
import { createProduct } from "./handlers/product";
const router = Router();
//Routing
router.get("/", (req, res) => {
  res.json("GET");
});
router.post("/", createProduct);
router.put("/", (req, res) => {
  res.json("PUT");
});
router.patch("/", (req, res) => {
  res.json("PATCH");
});
router.delete("/", (req, res) => {
  res.json("DELETE");
});
export default router;
