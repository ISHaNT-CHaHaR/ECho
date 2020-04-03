const Telegraf = require('telegraf');

const bot = new Telegraf('1126313437:AAEeJMWbpzvtL_wf9BT20Pcq9XY8qajcJnU');
/// code to handle the update and messages.

bot.start((ctx)=>{
    // ctx.reply("kya be choda hoga?");
    ctx.reply(ctx.from.first_name + " bhaag bdk!");
    console.log(ctx.from);
    console.log(ctx.chat);
    console.log(ctx.message);
    console.log( ctx.updateSubTypes);



})
bot.help((ctx)=>{
ctx.reply("bta na? bol?");

})

bot.settings((ctx)=>{
    ctx.reply("chl hole!");

})

bot.launch(); 