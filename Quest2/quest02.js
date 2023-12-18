const calcularIdade = (date) => {
    const dataNascimento = new Date(date);
    const dataAtual = new Date();

    const diferençaEmMilissegundos = dataAtual - dataNascimento;
    const milissegundosPorDia = 1000 * 60 * 60 * 24;

    const anos = Math.floor(diferençaEmMilissegundos / (milissegundosPorDia * 365.25));
    const meses = Math.floor((diferençaEmMilissegundos % (milissegundosPorDia * 365.25)) / (milissegundosPorDia * 30.44));
    const dias = Math.floor((diferençaEmMilissegundos % (milissegundosPorDia * 30.44)) / milissegundosPorDia);

    return console.log (`Sua idade é ${anos} anos, ${meses} meses, ${dias} dias`);
}

calcularIdade('1999/09/15');
