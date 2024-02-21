var num = [4,5];
console.log(num);

num.push(567); // acrescenta um dado na última posição
console.log(num);

num[2] = "teste";
console.log(num);

console.log(num.length); // mostra a quantidade de posições

num.sort() // organiza o array em ordem crescente.
console.log(num);

console.log(num.indexOf(4)); //procura o índice daquele valor.

// Array e estrutura de repetição
for (let pos = 0; pos < num.length; pos++){ 
    console.log(`a posição ${pos} tem o valor ${num[pos]}`);
}

for (let i in num){
    console.log(`A posição ${i} tem o valor ${num[i]}`);
}