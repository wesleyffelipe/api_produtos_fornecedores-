import conexao from "../database/conexao.js";

export async function buscarPorId(id) {
    const sql = "SELECT * FROM fornecedor WHERE id_fornecedor = ?";
    const [fornecedores] = await conexao.execute(sql, [id]);

    return proveedores[0]; 
}

export async function listarTodos() {
    const sql = "SELECT * FROM fornecedor";
    const [fornecedores] = await conexao.execute(sql);
    return fornecedores;
}

export async function criar(fornecedor) {
    const sql = "INSERT INTO fornecedor (nome, cnpj) VALUES (?, ?)";
    const [resultado] = await conexao.execute(sql, [fornecedor.nome, fornecedor.cnpj]);
    return resultado.insertId;
}
