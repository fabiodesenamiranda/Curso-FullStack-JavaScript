let spaceshipName = prompt("Qual é o nome da Nave?")

let invertedNAme = ""

for(let i = spaceshipName.length -1; i >= 0; i--) {
    if(spaceshipName[i] =="e"){
        break
    }
    invertedNAme += spaceshipName[i]
}

alert("Nome original da nave: "+spaceshipName + "\nNome aṕos ocultação: " +invertedNAme)