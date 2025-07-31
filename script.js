// function inserirNome(){
//     let nomeUsuario = prompt("Qual é o seu nome?")
//     let elemento = document.querySelector('#nome-cursista')
//     elemento.textContent = nomeUsuario;
// }

let aluno1 = {
    nome: "Vagnes",
    idade: 52,
    anoLetivo: "3° série",
    materiaFavorita: ["Matemátiva", "Física", "Programação", "Robotica"]
}
console.log(aluno1.materiaFavorita[2])

const objeto = document.querySelector("#alunos");
objeto.textContent = aluno1.nome;
//objeto.textContent = aluno1.idade;
