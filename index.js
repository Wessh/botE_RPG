//API Guide https://discordjs.guide/creating-your-bot/commands-with-user-input.html#basic-arguments

//Modulo do sistema de arquivos
const fs = require('fs');

//Responsavel por interagir com o discord
const Discord = require('discord.js');

//Arquivo de configurações do server
const { prefix, token } = require('./config.json');

//Cria um novo Bot
const bot = new Discord.Client();

//Inclui a versão extendida do modulo Maps 
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	bot.commands.set(command.name, command);
}

//Faz a autenticação do bot no discord
bot.login(token);

//Feedback sobre se o Bot ja está pronto
bot.once('ready',()=>{console.log(`Bot online: ${bot.user.tag}!`)});

//-> Códigos abaixo estão relacionados ao chat do bot/discord <-\\

let cMessage = process.openStdin();
cMessage.addListener("data", res => {
    let x = res.toString().trim().split(/ +/g)
    //bot.channels.cache.get("689429879430971485").send(x.join(" "));
    bot.channels.cache.get("691076993198063668").send(x.join(" "));
    
});

bot.on("guildMemberAdd", (member) => {

    let channel = bot.channels.cache.get('689269745257808044');

    channel.send(`Temos um novo aventureiro nas redondezas.\n ${member.user}, Bem vindo a nossa guilda!`); 
});




bot.on('message', msg => {
    if (msg.author.bot) return;

        const args = msg.content.slice(prefix.length).split(' ');
        const command = args.shift().toLowerCase();

        console.log(msg.author.username+ ": " + msg.content);

        if (command === 'args-info') {
            /*if (!args.length) {
                return msg.channel.send(`Você não forneceu argumentos, ${msg.author}!`);
            }
        
            msg.channel.send(`Command name: ${command}\nArguments: ${args}`);*/
            bot.commands.get('args-info').execute(msg, args);
        }else if (command === 'teste'){
            bot.commands.get('teste').execute(msg, args);
        }else if (command === 'r'){
            bot.commands.get('r').execute(msg, args);
        }
        /*else if (command === 'avatar') {
            if (!msg.mentions.users.size) {
                return msg.channel.send(`Your avatar: <${msg.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
            }
        }*/




        //- Criados por mim -\\
    if(msg.content === `${prefix}oi`){
        msg.reply('Chaaamaa Catchioro!!!');
    }else if (msg.content === `server`) {
        msg.channel.send(`O nome desse server é: ${msg.guild.name}`);
    }else if (msg.content === `${prefix}user-info`) {
        if(msg.author.id === '689458553089687552'){
            console.log("idiota!");
        }else{
            msg.channel.send(`Seu username: ${msg.author.username}\nSeu ID: ${msg.author.id}`);
        }
    }

});
