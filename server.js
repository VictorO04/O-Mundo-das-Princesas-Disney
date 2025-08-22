import express from "express";
import princesas from "./src/data/princesas.js";

const app = express();
const serverPort = 3000;
app.use(express.json());

app.get("/", (req, res) => {
    res.send(`Bem-vindos(as) ao reino mágico das Princesas Disney! ✨👑`);
});

app.get("/princesas", (req, res) => {
    res.send(princesas);
});

app.listen(serverPort, () => {
    console.log(`✨ O servidor das princesas está em: http://localhost:${serverPort}`);
});