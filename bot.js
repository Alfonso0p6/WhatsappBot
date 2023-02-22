const qrcode = require('qrcode-terminal');

const { Client, LocalAuth } = require('whatsapp-web.js');
const { MessageMedia } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth()
});

const limoni = MessageMedia.fromFilePath("media\\limoni.jpg");

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', message => {
    if(message.body === '/help'){
        message.reply('Comandi disponibili:\n/lemon\n/ping');
    }
    else if(message.body === '/lemon'){
        message.reply(limoni);
    }
    else if(message.body === '/ping'){
        message.reply('pong');
    }
});
 
client.initialize();