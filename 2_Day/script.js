const nome = prompt('Qual seu nome? ');
const idade = prompt('Quantos anos você tem? ')
const linguagem = prompt('Qual linguagem de programação você está estudando?  ');
const ola = alert(`Olá, ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);

alert(msg);

const question = prompt(`Você gosta de estudar ${lingugem}? SIM/1-NÃO/2 `);
if (question == 1) {
    alert('Muito bom! Continue estudando e você terá muito sucesso.');
}
if (question == 2) {
    alert('Ahh que pena... Já tentou aprender outras linguagens?');
}