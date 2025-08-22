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

app.get("/princesas/:id", (req, res) => {
    let id = req.params.id;
    id = parseInt(id);
    const princesa = princesas.find(p => p.id === id);

    if (princesa) {
        res.status(200).json(princesa);
    } else {
        res.status(404).json({
            erro: `Princesa com o ID ${id} não encontrada!`
        });
    }
});

app.listen(serverPort, () => {
    console.log(`✨ O servidor das princesas está em: http://localhost:${serverPort}`);
});