let numero = document.getElementById('numero');
let quadro = document.getElementById('quadro');
let resultado = document.querySelector('div#resultado');
let array = [];

function inLista(n, l) {
    if (l.indexOf(Number(n)) == -1) {
        return true;
    } else {
        return false;
    }
}

function adicionar() {
    if (numero.value < 1 || numero.value > 100 || inLista(numero.value, array) == false) {
        window.alert("[ERRO] Número inválido ou existente!");
    } else {
        array.push(Number(numero.value));
        let numeroConvertido = Number(numero.value);
        let item = document.createElement('option');
        item.text = `Valor ${numeroConvertido} adicionado`;
        quadro.appendChild(item);
        resultado.innerHTML = '';

    }
    numero.value = '';
    numero.focus();
}

function finalizar() {
    if (array.length == 0) {
        window.alert("Adicione valores");
    } else {
        let tamanho = array.length;
        let maior = array[0];
        let menor = array[0];
        let soma = 0;
        let media = 0;

        for (let i in array) {
            soma += array[i];
            if (array[i] > maior)
                maior = array[i];
            if (array[i] < menor)
                menor = array[i];
        }

        media = soma / tamanho;

        resultado.innerHTML = '';
        resultado.innerHTML += `<p> A quantidade de números cadastrados é igual a ${tamanho}.</p>`;
        resultado.innerHTML += `<p> O maior número é ${maior}.</p>`;
        resultado.innerHTML += `<p> O menor número é ${menor}.</p>`;
        resultado.innerHTML += `<p> A soma dos números é igual a ${soma}.</p>`;
        resultado.innerHTML += `<p> A média dos números é igual a ${media}.</p>`;
    }
}