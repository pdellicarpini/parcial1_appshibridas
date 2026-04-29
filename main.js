import express from "express";
import charactersRoutes from "./routes/characters.routes.js";
import charactersApiRoutes from "./api/routes/characters.routes.js";
const app = express(); 

app.use("/", express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(charactersRoutes);
app.use("/api", charactersApiRoutes);

app.listen(2026, () => console.log("servidor funcionando en http://localhost:2026"));