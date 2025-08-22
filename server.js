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
    const princesaPorId = princesas.find(p => p.id === id);

    if (princesaPorId) {
        res.status(200).json(princesaPorId);
    } else {
        res.status(404).json({
            erro: `Princesa com o ID ${id} não encontrada!`
        });
    }
});

app.get("/princesas/nome/:nome", (req, res) => {
    let nome = req.params.nome.toLowerCase();
    const princesaPorNome = princesas.filter(p => p.nome.toLowerCase().includes(nome));

    if (princesaPorNome.length > 0) {
        res.status(200).json(princesaPorNome);
    } else {
        res.status(404).json({
            erro: `Princesa com o nome ${nome} não encontrada!`
        });
    }
});

app.listen(serverPort, () => {
    console.log(`✨ O servidor das princesas está em: http://localhost:${serverPort}`);
});