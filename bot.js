const Telegraf = require('telegraf');

const bot = new Telegraf('1126313437:AAEeJMWbpzvtL_wf9BT20Pcq9XY8qajcJnU');
/// code to handle the update and messages.

bot.hears('maal laaya?', (ctx) => {
   ctx.reply('Tu rokda laaya?');
});
bot.hears('ye kya bag bhrke laaya!', (ctx) => {
   ctx.reply('ok');
});

bot.on('sticker', (ctx) => {
   ctx.reply('sticker message h');
});

bot.mention('botfather', (ctx) => {
   ctx.reply('mention method1');
});

bot.phone('+1 931 962-2527', (ctx) => {
   ctx.reply('Phone');
});
bot.hashtag('hash', (ctx) => {
   ctx.reply('HAshtag mentioned');
});


bot.launch();
