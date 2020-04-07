const Telegraf = require('telegraf');

const bot = new Telegraf('1231488835:AAF88PEIq3WYnqc8hYwi7YHgbZg4qyUfkjo');

const helpMessage = `
Say something to me.
/start - start the bot
/help - command reference
`;

bot.use((ctx, next) => {
   // if (ctx.updateSubTypes[0] == 'text') {
   //    /// beacause updateSubType is an array
   //    console.log(ctx.from.first_name + ' said: ' + ctx.message.text);
   // } else {
   //    console.log(ctx.from.first_name + ' said: ' + ctx.updateSubTypes[0]);
   // }

   if (ctx.updateSubTypes[0] == 'text') {
      bot.telegram.sendMessage(
         ctx.chat.id,
         ctx.from.first_name + ' said: ' + ctx.message.text
      );
   } else {
      bot.telegram.sendMessage(
         ctx.chat.id,
         ctx.from.first_name + ' said: ' + ctx.updateSubTypes[0]
      );
   }

   next();
});
bot.start((ctx) => {
   ctx.reply('Hi I am Echo bot');

   ctx.reply(helpMessage);
});

bot.help((ctx) => {
   ctx.reply(helpMessage);
});

bot.command('echo', (ctx) => {
   let input = ctx.message.text;
   let inputArray = input.split(' ');
   let message = '';
   if (inputArray.length === 1) {
      // check if array contains echo.
      message = 'You said echo';
   } else {
      inputArray.shift(); //removes 1st element in arrray
      message = inputArray.join(' ');
   }
   ctx.reply(message);
});

bot.launch();
