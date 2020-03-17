module.exports = {
	name: 'teste',
	description: 'Teste Message!',
	execute(message, args) {
		message.channel.send('teste, OK!');
	},
};