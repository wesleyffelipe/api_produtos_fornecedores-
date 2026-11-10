import { Router } from "express";
import {
    cadastrarFornecedor,
    listarFornecedores,
    buscarFornecedorPorId,
    atualizarFornecedorParcial,
    excluirFornecedor
} from "../controller/fornecedorController.js";

const router = Router();

router.post("/", cadastrarFornecedor);
router.get("/", listarFornecedores);
router.get("/:id", buscarFornecedorPorId);
router.patch("/:id", atualizarFornecedorParcial);
router.delete("/:id", excluirFornecedor);

export default router;
