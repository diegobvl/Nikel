const nome = "Diego Lima"
let nome2 = "";
let pessoaDefaut = {
    nome: "Diego Lima",
    idade: "30",
    trabalho: "RH",
}

let nomes = ["Diego Lima", "Maria Silva", "Pedro Silva"]

let pessoasListaVazia = [];

let pessoas = [
    {
        nome: "Diego Lima",
        idade: "30",
        trabalho: "RH",
    },
    {
        nome: "Maria Silva",
        idade: "25",
        trabalho: "UX/UI Designer",
    }
];

function alterarNome() {
    nome2 = "Maria Silva"
    console.log("Valor alterado:")
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log(pessoa);

    console.log("Nome:");
    console.log(pessoa.nome);

    console.log("Idade:");
    console.log(pessoa.idade);

    console.log("Trabalho:");
    console.log(pessoa.trabalho);

}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
}

function imprimirPessoas() {
    console.log("---------IMPRIMIR PESSOAS-------")
    pessoas.forEach((item) => {
        console.log("Nome:");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);

        console.log("Trabalho:");
        console.log(item.trabalho);
    })
}

imprimirPessoas();


adicionarPessoa({
    nome: "Pedro Silva",
    idade: "28",
    trabalho: "Porteiro"
});

imprimirPessoas();






//imprimirPessoa(pessoaDefaut);

//imprimirPessoa({
//   nome: "Maria Silva",
//   idade: "25",
//  trabalho: "UX/UI Designer",
//})

//recebeEalteraNome("João Silva Pereira");
//recebeEalteraNome("Maria Silva");

//alterarNome();