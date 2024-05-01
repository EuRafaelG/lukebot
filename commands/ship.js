module.exports = {
    name: 'ship',
    description: 'Calcula o nível de compatibilidade entre dois usuários.',
    execute(message, args) {
        // Verifica se foram fornecidos dois usuários como argumentos
        if (args.length < 2) {
            return message.reply('Por favor, forneça dois usuários para calcular o nível de compatibilidade.');
        }

        // Obtém os usuários mencionados
        const user1 = message.mentions.users.first();
        const user2 = message.mentions.users.last();

        // Calcula um número aleatório entre 0 e 100 como nível de compatibilidade
        const compatibilityLevel = Math.floor(Math.random() * 101);

        // Define as mensagens com base no nível de compatibilidade
        let messageText = '';
        if (compatibilityLevel <= 25) {
            messageText = `😢 Infelizmente, parece que ${user1.username} e ${user2.username} não são muito compatíveis, com apenas ${compatibilityLevel}%. Talvez seja melhor apenas amigos.`;
        } else if (compatibilityLevel <= 75) {
            messageText = `🤔 Hmm... Parece que ${user1.username} e ${user2.username} têm uma compatibilidade razoável, com ${compatibilityLevel}%. Quem sabe?`;
        } else {
            messageText = `😏 Ooh la la! Parece que ${user1.username} e ${user2.username} têm uma boa chance, com ${compatibilityLevel}%. Quem sabe o que o futuro reserva?`;
        }

        // Monta uma mensagem com o resultado
        const shipEmbed = {
            color: 0xf1c40f,
            title: `🚢 Compatibilidade entre ${user1.username} e ${user2.username}`,
            description: `${messageText}`,
            timestamp: new Date(),
        };

        // Envia a mensagem com o resultado
        message.channel.send({ embed: shipEmbed });
    },
};
