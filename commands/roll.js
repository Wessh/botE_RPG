module.exports = {
    name: 'r',
    description: 'Rolagem de dados',
    execute(message, args) {
        if (!args.length) {
            return message.channel.send(`Você não forneceu argumentos, ${message.author}!`);
        }
        var argumento = `${args}`;
        var retorno = argumento.split("d");
        //Recebe a quantidade de dados.
        var qntDados = retorno[0];
        //Recebe o valor do dado
        var valDados = retorno[1];
        var resultadoDados = [valDados];

        switch (valDados) {
            case '4':
                for(i=0;i<qntDados;i++){
                    resultadoDados[i]= Math.floor(Math.random() * valDados + 1)
                }
                message.channel.send(`
                🎲\nResultados: ${resultadoDados}`);
                break;
            case '6':
                for(i=0;i<qntDados;i++){
                    resultadoDados[i]= Math.floor(Math.random() * valDados + 1)
                }
                message.channel.send(`
                🎲\nResultados: ${resultadoDados}`);
                break;
            case '8':
                for(i=0;i<qntDados;i++){
                    resultadoDados[i]= Math.floor(Math.random() * valDados + 1)
                }
                message.channel.send(`🎲\nResultados: ${resultadoDados}`);
                break;
            case '10':
                for(i=0;i<qntDados;i++){
                    resultadoDados[i]= Math.floor(Math.random() * valDados + 1)
                }
                message.channel.send(`
                🎲\nResultados: ${resultadoDados}`);
                break;
            case '12':
                for(i=0;i<qntDados;i++){
                    resultadoDados[i]= Math.floor(Math.random() * valDados + 1)
                }
                message.channel.send(`
                🎲\nResultados: ${resultadoDados}`);
                break;
            case '20':
                for(i=0;i<qntDados;i++){
                    resultadoDados[i]= Math.floor(Math.random() * valDados + 1)
                }
                message.channel.send(`
                🎲\nResultados: ${resultadoDados}`);
                break;
            default:
                message.channel.send(`Ops! Parece que algo está errado.`);
        }
        /*
        message.channel.send(`
        Você rolou: ${args}\n
        Dados: ${retorno[0]}
        //Teste: ${Math.floor(Math.random() * 10 + 1)}
        `);
*/
    },
};