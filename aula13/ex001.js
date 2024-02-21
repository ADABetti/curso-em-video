var agora = new Date();
var diaSemana = agora.getDay();

// no JS:
//     0 = domingo
//     1 = segunda-feira
//     2 = terça-feira
//     3 = quarta-feira
//     4 = quinta-feira
//     5 = sexta-feira
//     6 = sábado

console.log(diaSemana);
switch (diaSemana) {
    case 0:
        console.log("Domingo");
        break
    case 1:
        console.log("segunda");
        break
    case 2:
        console.log("terça");
        break
    case 3:
        console.log("quarta");
        break
    case 4:
        console.log("quinta");
        break
    case 5:
        console.log("Sexta");
        break
    case 6:
        console.log("Sábado");
        break
    default:
        console.log("Dia inválido");
        break

}