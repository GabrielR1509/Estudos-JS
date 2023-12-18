const resultadoDaDivisão = (valor1, valor2) => {
        if (valor2 === 0) {
        throw new Error (`Divisor não pode ser igual a zero`);
    }   
        return valor1 / valor2
}; 

try {
    console.log(resultadoDaDivisão(10, 0));
} catch(error) {
    console.log(`Houve um erro em sua divisão: ${error.message}`)
};
