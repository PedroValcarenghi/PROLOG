// https://github.com/yagop/node-telegram-bot-api/blob/master/doc/usage.md#events

//Require das Api´s
const TelegramBot = require('node-telegram-bot-api')

//Uso do Token do Telegeram
const TOKEN = '836807007:AAEA8rBgFFLCvOdpJ9bSz4VG8oNxE7xcR4Q' //BoT TOKEM || NÂO MECHER POR FAVOR

//Construção do BoT
const bot = new TelegramBot(TOKEN, { polling: true });

//Puxar Pergunta

const prolog = require('./Prolog');
//Teste Pati
var txt = 'oi';
var resp ;
//Query para Prolog
function playlist(msg) {
    console.log('Texto :',msg.text.substring(10));
    resp = prolog.pergunta(txt);
    bot.sendMessage(msg.chat.id,resp);
};
var like = [];
function gosta(msg) {
    console.log('texto :',msg.text.substring(3));
    like.push(msg.text.substring(3));
    console.log(like)
    //bot.sendMessage(msg.chat.id,like[0]);
};
var dislike = [];
function Ngosta(msg) {
    console.log('texto :',msg.text.substring(4));
    dislike.push(msg.text.substring(4));
    //bot.sendMessage(msg.chat.id, dislike[0]);
};


//Boas Vindas 
function start(msg) {
    bot.sendMessage(msg.chat.id, "/G Gosto \n /NG Não Gosto \n \t Generos: \n Rock \n Pop ");
}
//Chamada de Query
bot.onText(/\/Playlist (.*)/, (msg) => playlist(msg));
//Chamada de Start
bot.onText(/\/start/, (msg) => start(msg));
//Chmada Gosto
bot.onText(/\/G (.*)/, (msg) => gosta(msg));
//Chamada Não-Gosto
bot.onText(/\/NG (.*)/, (msg) => Ngosta(msg));





