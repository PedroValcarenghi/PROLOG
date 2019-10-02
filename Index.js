// https://github.com/yagop/node-telegram-bot-api/blob/master/doc/usage.md#events

//Require das Api´s
const TelegramBot = require('node-telegram-bot-api')

//Uso do Token do Telegeram
const TOKEN = '836807007:AAEA8rBgFFLCvOdpJ9bSz4VG8oNxE7xcR4Q' //BoT TOKEM || NÂO MECHER POR FAVOR

//Construção do BoT
const bot = new TelegramBot(TOKEN, { polling: true });

//Console log das entradas das menssagens
bot.on( 'message', ( msg ) => console.log( 'msg', msg ) );



//Receber Texto do BoT
var txt ;
bot.on('message', (msg) => txt = ('msg', msg.text))
console.log(txt);


// Mostra a resposta no bot
// bot.on('message', (msg) => {
//     session.answers(x => bot.sendMessage(msg.chat.id, pl.format_answer(x)));
// })


