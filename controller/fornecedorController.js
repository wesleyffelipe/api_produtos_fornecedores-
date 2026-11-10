import { Fornecedor } from "../model/Fornecedor.js";
import fornecedorRepository from "../repository/fornecedorRepository.js";

export async function cadastrarFornecedor(req, res) {
    try {
        const { nome, cnpj } = req.body;
        
        const novoFornecedor = new Fornecedor(nome, cnpj);
        novoFornecedor.validar();

        const idInserido = await fornecedorRepository.criar(novoFornecedor);

        return res.status(201).json({
            mensagem: "Fornecedor cadastrado com sucesso",
            id_fornecedor: idInserido,
            nome,
            cnpj
        });
    } catch (erro) {
        return res.status(400).json({
            mensagem: erro.message
        });
    }
}

export async function listarFornecedores(req, res) {
    try {
        const fornecedores = await fornecedorRepository.listarTodos();
        return res.status(200).json(fornecedores);
    } catch (erro) {
        return res.status(500).json({
            mensagem: "Erro interno ao buscar fornecedores"
        });
    }
}
