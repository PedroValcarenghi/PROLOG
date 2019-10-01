// https://github.com/yagop/node-telegram-bot-api/blob/master/doc/usage.md#events

//Require das Api´s
const TelegramBot = require('node-telegram-bot-api')
var pl = require('./node_modules/tau-prolog/modules/core.js');
require('./node_modules/tau-prolog/modules/lists.js')(pl)

//Criar Session do Tau-Prolog
var session = pl.create(100);
//Uso do Token do Telegeram
const TOKEN = '836807007:AAEA8rBgFFLCvOdpJ9bSz4VG8oNxE7xcR4Q' //BoT TOKEM || NÂO MECHER POR FAVOR

//Construção do BoT
const bot = new TelegramBot(TOKEN, { polling: true })

//Console log das entradas das menssagens
bot.on( 'message', ( msg ) => console.log( 'msg', msg ) )

//Receber Texto do BoT


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

// Mostra a resposta no bot
bot.on('message', (msg) => {
    session.answers(x => bot.sendMessage(msg.chat.id, pl.format_answer(x)));
})

// session.answers(x => console.log(pl.format_answer(x)));


