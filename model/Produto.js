export class Produto {
    constructor(descricao, preco, peso) {
        this.descricao = descricao;
        this.preco = preco;
        this.peso = peso;
    }

    validar() {
        if (!this.descricao || this.descricao.trim().length < 3) {
            throw new Error("Descrição deve ter pelo menos 3 caracteres");
        }

        if (Number(this.preco) <= 0) {
            throw new Error("Preço deve ser maior que zero");
        }

        if (Number(this.peso) <= 0) {
            throw new Error("Peso deve ser maior que zero");
        }
    }

    static validarId(id, nomeRecurso) {
        if (!Number.isInteger(id) || id <= 0) {
            throw new Error("Id de " + nomeRecurso + " deve ser um número inteiro positivo");
        }
    }
}
