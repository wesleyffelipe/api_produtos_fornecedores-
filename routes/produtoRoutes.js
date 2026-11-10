import { Router } from "express";
import {
    cadastrarProduto,
    listarProdutos,
    buscarProdutoPorId,
    atualizarProdutoParcial,
    excluirProduto,
    vincularFornecedorAoProduto,
    removerFornecedorDoProduto
} from "../controller/produtoController.js";

const router = Router();

router.post("/", cadastrarProduto);
router.get("/", listarProdutos);
router.get("/:id", buscarProdutoPorId);
router.patch("/:id", atualizarProdutoParcial);
router.delete("/:id", excluirProduto);

router.patch("/:idProduto/fornecedor/:idFornecedor", vincularFornecedorAoProduto);
router.patch("/:idProduto/remover-fornecedor", removerFornecedorDoProduto);

export default router;
