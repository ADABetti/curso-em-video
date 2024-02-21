let amigo = {
    nome:"Ricardão",
    idade: 30,
    sexo: "M",
    peso: 50,
    engordar(p=0){
        console.log("engordou");
        this.peso += p;
    }
}

amigo.engordar(7);
console.log(`${amigo.nome} pesa ${amigo.peso} kg.`)