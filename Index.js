// https://github.com/yagop/node-telegram-bot-api/blob/master/doc/usage.md#events

//Require da api do BoT
const TelegramBot = require('node-telegram-bot-api')
//Uso do Token do Telegeram
const TOKEN = '836807007:AAEA8rBgFFLCvOdpJ9bSz4VG8oNxE7xcR4Q' //BoT TOKEM NÂO MECHER POR FAVOR

//Construção do BoT
const bot = new TelegramBot(TOKEN, { polling: true })

//Console log das entradas das menssagens
//bot.on( 'message', ( msg ) => console.log( 'msg', msg ) )


// Teste Tau-Prolog
var pl = require('./node_modules/tau-prolog/modules/core.js');
require('./node_modules/tau-prolog/modules/lists.js')(pl)

var session = pl.create(100);

// Load the program
var program =
    "humano(joao)." +
    "humano(maria)." +
    "humano(pedro)." +
    "mulher(maria)." +
    "homem(joao)." +
    "homem(pedro).";
session.consult(program);

// Query the goal
session.query("humano(X).");

// Show answers
bot.on('message', (msg) => {
    session.answers(x => bot.sendMessage(msg.chat.id, pl.format_answer(x)));
})

// session.answers(x => console.log(pl.format_answer(x)));


