CREATE DATABASE IF NOT EXISTS api_produtos_fornecedores;
USE api_produtos_fornecedores;

CREATE TABLE IF NOT EXISTS fornecedor (
    id_fornecedor INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    cnpj VARCHAR(14) NOT NULL
);

CREATE TABLE IF NOT EXISTS produto (
    id_produto INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(255) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    peso DECIMAL(10,2) NOT NULL,
    fk_id_fornecedor INT NULL,
    FOREIGN KEY (fk_id_fornecedor) REFERENCES fornecedor(id_fornecedor)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);
