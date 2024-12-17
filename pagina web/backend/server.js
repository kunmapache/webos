// backend/server.js
const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Cargar productos simulados desde un archivo JSON
const products = JSON.parse(fs.readFileSync("products.json", "utf-8"));

// Ruta para obtener todos los productos
app.get("/api/products", (req, res) => {
  res.json(products);
});

// Ruta para manejar el carrito de compras (solo simulación)
app.post("/api/cart", (req, res) => {
  const cartItems = req.body;
  console.log("Carrito recibido:", cartItems);
  res.json({ message: "Carrito recibido con éxito", cart: cartItems });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
