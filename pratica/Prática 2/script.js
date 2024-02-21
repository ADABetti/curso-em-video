function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var formularioAno = document.getElementById("anoNascimento");
  var mensagem = document.querySelector("div#mensagem");
  var imagem = document.getElementById("imagem");

  if (formularioAno.value.length == 0 || formularioAno.value > ano) {
    window.alert("ERRO! Verifique os dados e tente novamente!");
  } else {
    var formularioSexo = document.getElementsByName("sexo");
    var idade = ano - Number(formularioAno.value);
    var genero = "";
    if (formularioSexo[0].checked) {
      genero = "mulher";

      if (idade < 10) {
        imagem.src = "femBebe.jpg";
      } else if (idade < 21) {
        imagem.src = "femAdulta.jpg";
      } else if (idade < 50) {
        imagem.src = "femAdulta2.jpg";
      } else {
        imagem.src = "femIdoso.jpg";
      }
    } else if (formularioSexo[1].checked) {
      genero = "homem";

      if (idade < 10) {
        imagem.src = "mascBebe.png";
      } else if (idade < 21) {
        imagem.src = "mascAdulto.jpg";
      } else if (idade < 50) {
        imagem.src = "mascAdulto2.jpg";
      } else {
        imagem.src = "mascIdoso.jpg";
      }
    }
    mensagem.innerText = `Detectamos ${genero} com ${idade} anos.`;
  }
}
