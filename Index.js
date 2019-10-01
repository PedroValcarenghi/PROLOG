// https://github.com/yagop/node-telegram-bot-api/blob/master/doc/usage.md#events

const TelegramBot = require('node-telegram-bot-api')
const TOKEN = '836807007:AAEA8rBgFFLCvOdpJ9bSz4VG8oNxE7xcR4Q' //BoT TOKEM NÂO MECHER POR FAVOR

const bot = new TelegramBot(TOKEN, { polling: true })

// bot.on('new_chat_members', (msg) => {
//   bot.sendMessage(msg.chat.id, `Olá ${msg.from.first_name}, bem vindo ao Devs SC!! Conte-nos um pouco sobre você, com o que trabalha e onde, se possivel é claro`)
// })

bot.on( 'message', ( msg ) => console.log( 'msg', msg ) )

// bot.on("message", ( msg ) => {
//     let texto = bot.onText('texto', msg)
// })

// Teste Tau Prolog

var pl = require('./node_modules/tau-prolog/modules/core.js');
require('./node_modules/tau-prolog')

var session = pl.create(100);

// Load the program
var program =
    "humano(joao)."
    "humano(maria)."
    "humano(pedro)."
    "mulher(maria)."
    "homem(joao)."
    "homem(pedro)."
session.consult(program);

// Get Node.js argument: nodejs ./script.js item
//var item = process.argv[2];

// Query the goal
session.query("humano(X).");

// Show answers
 session.answers(x => console.log(pl.format_answer(x)));

//bot.sendMessage(pl.format_answer(y)); //Text para mandar menssagems 

