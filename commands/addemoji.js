module.exports = {
    name: 'addemoji',
    description: 'Adiciona um emoji ao servidor.',
    execute(message, args) {
        // Verifica se o autor da mensagem é o dono do bot
        if (message.author.id !== '1010570109229744138' && !message.member.hasPermission('MANAGE_EMOJIS')) {
            return message.reply('Você não tem permissão para adicionar emojis!');
        }

        // Verifica se foi fornecido um emoji para adicionar
        if (!args[0]) {
            return message.reply('Por favor, forneça um emoji para adicionar!');
        }

        // Obtém o nome e a URL do emoji a ser adicionado
        const [emojiName, emojiUrl] = args;

        // Adiciona o emoji ao servidor
        message.guild.emojis.create(emojiUrl, emojiName)
            .then(emoji => {
                message.channel.send(`Emoji ${emoji} adicionado com sucesso!`);
            })
            .catch(error => {
                console.error('Erro ao adicionar emoji:', error);
                message.channel.send('Ocorreu um erro ao adicionar o emoji. Por favor, verifique se o emoji é válido e se você tem permissão para adicionar emojis.');
            });
    },
};
