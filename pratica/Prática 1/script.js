function carregar() {
    var imagem = window.document.getElementById("imagem");
    var mensagem = window.document.getElementById("mensagem")
    var data = new Date();
    var hora = data.getHours();
    mensagem.innerText = `Agora são ${hora} horas.`

    if (hora > 0 && hora < 12) {
        mensagem.innerText += " Bom dia!"
        imagem.src = "manhã.jpg"
        document.body.style.background = "rgb(169, 139, 153)"
    } else if (hora < 18) {
        mensagem.innerText += " Boa tarde!"
        imagem.src = "tarde.jpg"
        document.body.style.background = "rgb(240, 216, 185)"
    } else {
        mensagem.innerText += " Boa noite!"
        imagem.src = "noite.jpg"
        document.body.style.background = "rgb(87, 67, 104)"
    }

}