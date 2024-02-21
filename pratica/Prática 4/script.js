function contar() {

    var numero = document.getElementById("numero");
    var tabuada = document.getElementById("tabuada");

    if (numero.value.length <= 0) {
        window.alert("Preencher valores");
    } else {
        var numeroC = Number(numero.value);
    }

    tabuada.innerHTML = " ";

    for (let i = 1; i <= 10; i++) {
        let item = document.createElement("option");
        item.text = `${i} x ${numeroC} = ${i * numeroC}`;
        tabuada.appendChild(item);
    }
}