module.exports = {
	name: 'args-info',
    description: 'Teste de envio de argumento!',
	execute(message, args) {
        if (!args.length) {
            return message.channel.send(`Você não forneceu argumentos, ${message.author}!`);
        }
        message.channel.send(`Command name: ${this.name}\nArguments: ${args}\nTeste: ${Math.floor(Math.random() * 10 + 1)}`);
		//message.channel.send('teste, OK!');
	},
};