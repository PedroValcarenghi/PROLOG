var pl = require('./node_modules/tau-prolog/modules/core.js');
require('./node_modules/tau-prolog/modules/lists.js')(pl)

//Criar Session do Tau-Prolog
var session = pl.create(100);

// Regras Prolog usar "+" entre as linhas e ";" no final
var program =
    "humano(joao)." +
    "humano(maria)." +
    "humano(pedro)." +
    "mulher(maria)." +
    "homem(joao)." +
    "homem(pedro).";
session.consult(program);

// Consulta 
session.query("humano(X).");

session.answers(x => console.log(pl.format_answer(x)));

