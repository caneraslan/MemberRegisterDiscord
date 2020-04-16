const {Discord,Client,Collection,MessageEmbed} = require("discord.js");
const {config} = require("dotenv");
const {stripIndents } = require("common-tags");
const fs = require("fs");
var rn = require('random-number');

//const formatDate = require("../../functions.js");

const client = new Client({
 disableEveryone: true 
});

/*
client.commands = new Collection();
client.aliases = new Collection();

client.categories = fs.readdirSync("./commands/");
*/

config({
    path:__dirname + "/.env"
});

/*
["command"].forEach(handler => {
    require(`./handler/${handler}`)(client);
});
*/

client.on('ready',()=>{
    console.log("Burdayım! Benim adım "+ client.user.username);
    
    client.user.setPresence({
        activity:{
            name: 'discord.js ile ',
            type: 'PLAYING'
        },
        status:'idle'
    })
});


/*
client.on("message",async message => {
   const prefix = "a";

   if(message.author.bot) return;
   if(!message.guild) return;
   if(!message.content.startsWith(prefix)) return;
   if(!message.member) message.member = await message.guild.fetchMember(message);




const args = message.content.slice(prefix.length).trim().split(/ +/g);
const cmd = args.shift().toLowerCase();
  if(cmd.length === 0 ) return;

  let command = client.commands.get(cmd);
  if(!command) command =client.commands.get(client.aliases.get(cmd));
  if(command)
     command.run(client,message,args);
})

client.on("guildCreate", (guild) => {

    console.log(client.user.username + " was invited to and joined " + guild.name);
});

*/
client.on("guildMemberAdd", async (member)  => {
 
    try{
         var tag = "⍭";
         var giris_rolu = "";
         var giris_kanal_id= "";
         var name = member.nickname;
         var username = member.user.displayName;
         var username1 = member.user.username;

         var gifs = [

            "https://media.giphy.com/media/xUPGGDNsLvqsBOhuU0/giphy.gif",
            "https://media.giphy.com/media/12jIHIqDCvL3uU/giphy.gif",
            "https://media.giphy.com/media/iCiRHhs5IQf5TLAV0A/giphy.gif",
            "https://media.giphy.com/media/YOT0zQXXuBfcZkA1WU/giphy.gif",
            "https://media.giphy.com/media/l4FGtA384pax0zRqo/giphy.gif",
            "https://media.giphy.com/media/hr4Ljjyj0L9RYlihLr/giphy.gif",
            "https://media.giphy.com/media/fU4elxKlRsulB4Jy7w/giphy.gif",
            "https://media.giphy.com/media/3oEjHHqBhAyuYUiI5G/giphy.gif",
            "https://media.giphy.com/media/OF0yOAufcWLfi/giphy.gif",
            "https://media.giphy.com/media/3ohfFviABAlNf3OfOE/giphy.gif" ];

        var options = {
            min:0,
            max:9,
            integer:true
        }
        var random = rn(options);

        var kanal = client.channels.cache.get("692735490348023858");    
        const role = '696839616602308669';
        member.setNickname( tag + " İsimsiz");
        member.roles.add([role]);

         var sonuc = member.roles.cache.some(role => role.id === giris_rolu);
         var sonuc1 = member.roles.cache.has([role]) || member.roles.cache.has(giris_kanal_id);
  
        const created= Intl.DateTimeFormat('tr-TR').format(member.user.createdAt);
        const joined = Intl.DateTimeFormat('tr-TR').format(member.joinedAt);
         const embed = new MessageEmbed();
         embed.setTitle("💖 | HOŞGELDİNİZ..");
         embed.setFooter('Alpha', null);
         embed.setThumbnail();
         embed.setColor("#ba1414"); 
         embed.addField(" 💕 | Yeni Üye ", stripIndents` 
         > **İsim:** ${member.user.username}
         > **Hesap:** ${created}
         > **Giriş:** ${joined}
         `);
         embed.addField(" 💕 | Kayıt için belirtilmeli: ", stripIndents` 
         > **Sunucudaki kişilere ve sohbete erişim için lütfen önce kayıt olmalısınız.**
         > **İsim** | **Cinsiyet** yazıp bekleyiniz. 
         `);
         embed.setImage(gifs[random]);
         embed.setTimestamp();
         await kanal.send(embed);

    }catch(err){
        console.log(err)
    }
     


});

client.login(process.env.TOKEN);
