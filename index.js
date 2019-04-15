const Discord = require('discord.js');
const client = new Discord.Client();
const botname = `ThorBOT`;
const prefix = '*'
client.on('ready', () => {
  console.log(`Бот запущен`);
});

client.on('message', message => {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (command === 'help') {
        message.reply(`1. *help - Показывает все команды
    2. *ping - Пинг API и бота
    3. *creator - Создатель в ютубе и пинг его
    4. *light - Стрельнуть молнией
    5. *8ball - Шар предсказаний
    6. *invite - Пригласить на свой сервер`);
    
        
    }
})
client.on('message', message => {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  if (command === 'ping')
    var embed = new Discord.RichEmbed()
    .setColor('#ff0000')
    .setTitle('Текущий пинг бота',true)
    .addField('Пинг API:', `\`${Math.round(client.ping)} MS\``, true)
    .addField('Пинг бота:', `\`${new Date().getTime() - message.createdTimestamp + " MS"}\``, true)
    .setTimestamp();
    message.channel.send(embed);
});
    client.on('message', message => {
        if(message.author.bot) return;
        if(!message.content.startsWith(prefix)) return;
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
  if (command === 'creator') {
    const embed = new Discord.RichEmbed()
    .setTitle('Создатели')
    .addField('Автор бота:', `Azte[Cas]#0346`)
    .addField('Второй автор:', `MrVaDiM4iK#0232`)
      message.channel.send(embed)};
    });
client.on('message', message => {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  if (command === 'light') {
      message.reply(`*Вы попали в Таноса и тот умер  :joy:*`)};
  });

  var fortunes = [
      "**Да**",
      "**Нет**",
      "**Может быть**",
      "**Возможно нет**",
      "**Ещё как!**",
      "**Никогда!**"
  ];

  client.on('message', message => {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  if (command === '8ball') {
    const ballembed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setTitle('Шар предсказаний')
    .addField('Ваш вопрос:', args.join('** **'))
    .addField('Ответ:', fortunes[Math.floor(Math.random() * fortunes.length)]);
    if (args[0]) message.channel.send(ballembed);
}});
client.on('message', message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
if (command === 'invite') {
message.reply('Ccылка на приглашение бота - https://discordapp.com/oauth2/authorize?client_id=567034171105607687&scope=bot&permissions=8')
}});

client.login("NTY3MDM0MTcxMTA1NjA3Njg3.XLN_xA.cw4I1y_1FEjRsHm1hMJY3dw5_tE");
