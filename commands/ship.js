module.exports = {
    name: 'ship',
    description: 'Avalia o nível de compatibilidade entre duas pessoas.',
    execute(message, args) {
        // Verifica se foram mencionadas duas pessoas
        if (message.mentions.users.size !== 2) {
            return message.reply('Você precisa mencionar exatamente duas pessoas para fazer o ship!');
        }

        // Obtém as duas pessoas mencionadas
        const mentionedUsers = message.mentions.users.array();
        const user1 = mentionedUsers[0];
        const user2 = mentionedUsers[1];

        // Verifica se as duas pessoas mencionadas são diferentes
        if (user1 === user2) {
            return message.reply('Amor próprio é tudo! 💔');
        }

        // Calcula o nível de compatibilidade (porcentagem aleatória)
        const compatibilityPercentage = Math.floor(Math.random() * 101);

        // Determina a frase com base na porcentagem de compatibilidade
        let frase = '';
        if (compatibilityPercentage <= 25) {
            frase = 'Não tem muito futuro... 😔';
        } else if (compatibilityPercentage <= 75) {
            frase = 'Podem até tentar... 🤔';
        } else {
            frase = 'Combinam mais que batata frita com ketchup! 😍';
        }

        // Monta o embed com as informações do "ship"
        const embed = {
            color: 0xFF00AE, // Cor rosa
            title: `💖 Ship entre ${user1.username} e ${user2.username}`,
            description: frase,
            fields: [
                {
                    name: 'Nome do Ship:',
                    value: `${user1.username.substring(0, Math.floor(user1.username.length / 2))}${user2.username.substring(Math.floor(user2.username.length / 2))}`,
                    inline: true,
                },
                {
                    name: 'Compatibilidade:',
                    value: `${compatibilityPercentage}%`,
                    inline: true,
                },
            ],
        };

        // Envia o embed com as informações do "ship"
        message.channel.send({ embeds: [embed] });
    },
};
