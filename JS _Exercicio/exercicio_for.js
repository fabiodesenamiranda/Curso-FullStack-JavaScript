let spaceship = prompt("Qual o nome da Espaçonave?") 

let chartReplace = prompt("Qual caractere deseja substituir?")

let replacementChar = prompt("Para qual caractere deseja substituir?")

let newSpaceship= ""

for(let pos = 0; pos < spaceship.length; pos++) {
   if(spaceship[pos] == chartReplace) {
       newSpaceship += replacementChar
    } else {
        newSpaceship += spaceship[pos]
 } 
}
alert("O novo nome da Nave é " + newSpaceship)