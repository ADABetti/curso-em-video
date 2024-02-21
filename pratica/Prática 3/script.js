function contar() {
    var inicio = document.getElementById("inicio");
    var fim = document.getElementById("fim");
    var passo = document.getElementById("passo");
    var resultado = document.getElementById("resultado");
    var numeros = document.getElementById("numeros")

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert("Erro! Preencha as informações adequadamente.");
    } else if (passo.value.length == 0) {
        window.alert("Passo inválido. Considerando PASSO 1");
    } else {
        resultado.innerText = "Contando: ";

        let numeroI = Number(inicio.value);
        let numeroF = Number(fim.value);
        let numeroP = Number(passo.value);

        if (numeroP <= 0) {
            window.alert("Passo inválido. Considerando PASSO 1");
        }
        numeroP = 1;

        if (numeroI < numeroF) {
            for (var i = numeroI; i <= numeroF; i += numeroP) {
                numeros.innerText += ` ${i} \u{1F449}`
            }
            numeros.innerText += `\u{1F3C1}`
        } else {
            for (var j = numeroI; j >= numeroF; j -= numeroP) {
                numeros.innerText += ` ${j} \u{1F449}`
            }
            numeros.innerText += `\u{1F3C1}`
        }
    }
}
