const filtrarNumerosPares = (array) => {
    return array.filter(numero => numero % 2 === 0)
};

const sequenciaNumerica = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = filtrarNumerosPares(sequenciaNumerica);

console.log(numerosPares); 
