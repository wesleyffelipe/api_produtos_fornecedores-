import express from "express";
import dotenv from "dotenv";
import produtoRoutes from "./routes/produtoRoutes.js";
import fornecedorRoutes from "./routes/fornecedorRoutes.js";

dotenv.config();

const app = express();

// Middlewares obrigatórios
app.use(express.json());

// Registro das rotas com seus respectivos prefixos
app.use("/produto", produtoRoutes);
app.use("/fornecedor", fornecedorRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso na porta ${PORT}`);
});
