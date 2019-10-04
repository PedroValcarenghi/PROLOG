// https://github.com/yagop/node-telegram-bot-api/blob/master/doc/usage.md#events

//Require das Api´s
const TelegramBot = require('node-telegram-bot-api')

//Uso do Token do Telegeram
const TOKEN = '836807007:AAEA8rBgFFLCvOdpJ9bSz4VG8oNxE7xcR4Q' //BoT TOKEM || NÂO MECHER POR FAVOR

//Construção do BoT
const bot = new TelegramBot(TOKEN, { polling: true });

//Puxar Pergunta

const prolog = require('./Prolog');

var txt;

//Query para Prolog
function queryM(msg) {
    console.log('texto :',msg.text.substring(7));
    let resp = prolog.pergunta(txt);
    console.log(resp);
};

//Boas Vindas 
function start(msg) {
    bot.sendMessage(msg.chat.id, "/g Gosto \n /ng Não Gosto \n \t Generos: \n Rock \n Pop ");
}
//Chamada de Query
bot.onText(/\/Query (.*)/, (msg) => queryM(msg));
//Chamada de Start
bot.onText(/\/start/, (msg) => start(msg));






