class ContaCorrente {
    constructor(nomeDoCliente, numeroDaConta, saldo) {
        if (saldo <= 0) {
            throw new Error ('O saldo inicial deve conter um valor maior que zero.');
        }
        this.nomeDoCliente = nomeDoCliente;
        this.numeroDaConta = numeroDaConta;
        this.saldo = saldo;
        this.transacoes = [];
    }

    deposito(valor) {
        if (valor<= 0) {
            throw new Error('O valor do deposito deve ser maior que zero.');
        }
        this.saldo += valor;
        this.registrarTransacaoBancaria('deposito', valor);
    }
    
    saque(valor) {
        if (valor <= 0) {
            throw new Error('O valor do saque deve ser maior que zero.');
        }
        if (valor > this.saldo) {
            throw new Error('Saldo insuficiente.');
        }
        this.saldo -= valor;
        this.registrarTransacaoBancaria('saque', valor);
    }

    registrarTransacaoBancaria(tipo, valor) {
        this.transacoes.push({ tipo, valor });
    }

    mostrarSaldoBancario() {
        console.log(`Saldo atual: R$ ${this.saldo.toFixed(2)}`);
    }

    mostrarExtratoBancario() {
        console.log('--- Extrato ---');
        this.transacoes.forEach(transacao => {
            console.log(`Tipo: ${transacao.tipo}, Valor: R$ ${transacao.valor.toFixed(2)}`);
        });
        console.log('------------------');
    }
}

try {
    const minhaConta = new ContaCorrente('Thor Batista', '267218', 2000);
    minhaConta.deposito(20);
    minhaConta.saque(10);
    minhaConta.mostrarSaldoBancario();
    minhaConta.mostrarExtratoBancario();
} catch (error) {
    console.log('Erro:', error.message);
}