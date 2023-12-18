const compiladoraDeString = (string) =>{

  const stringTratada = string.replaceAll(',', '').replaceAll(' ', '');
  const stringArray = string.split('');  
  const quantidadeDeLetrasStringTratada = stringTratada.length;
   
  return {
    quantidadeA: contarLetraA(stringTratada),
    fraseInvertida: inverteString(stringArray),
    quantidadeLetras: quantidadeDeLetrasStringTratada,
  }
};

const contarLetraA = (string) => {
  let contador = 0;
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i).toLowerCase() === 'a') {
      contador++;
    }
  }
  return contador;
};

const inverteString = (stringArray) => {
  const stringInvertida = stringArray.reverse().join('')
  return stringInvertida
};

const string = "No alto daquele cume, plantei uma roseira";

const resultado = compiladoraDeString(string);

console.log(resultado.fraseInvertida);
console.log(resultado.quantidadeLetras);
console.log(resultado.quantidadeA);
