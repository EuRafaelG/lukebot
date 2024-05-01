module.exports = {
    name: 'say',
    description: 'Faz o bot repetir uma mensagem com um aviso de quem pediu para falar.',
    execute(message, args) {
        // Verifica se foi especificada uma mensagem para o bot repetir
        if (!args.length) {
            return message.reply('Você precisa fornecer uma mensagem para que eu repita!');
        }

        // Concatena os argumentos para formar a mensagem
        const replyMessage = args.join(' ');

        // Adiciona um emoji antes do nome do autor da mensagem
        const emoji = '⚡'; // Você pode substituir pelo emoji de sua escolha
        const finalMessage = `${emoji} | ${message.author} pediu para eu dizer: "${replyMessage}"`;

        // Envia a mensagem de volta com o autor do comando
        message.channel.send(finalMessage);
    },
};
