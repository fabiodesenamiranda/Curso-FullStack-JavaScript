let oldPersonName = prompt("Nome da pessoa mais velha")
let olderPersonAge = prompt ("Idade da pessoa mais velha")

let youngPersonName = prompt("Nome da pessoa mais nova")
let youngPersonAge = prompt ("Idade da pessoa mais nova")

let ageDifference = olderPersonAge - youngPersonAge

alert(
    "Pessoa mais velha: " + oldPersonName + "\nIdade:" + olderPersonAge + 
    "\n\nPessoa mais nova: " + youngPersonName + "\nIdade: " + youngPersonAge + 
    "\n\nDiferença de Idade: " + ageDifference
)