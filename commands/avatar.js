module.exports = {
    name: 'avatar',
    description: 'Mostra o avatar do usuário.',
    execute(message, args) {
        // Verifica se foi mencionado algum usuário
        const user = message.mentions.users.first() || message.author;

        // Retorna o avatar do usuário
        const avatarEmbed = {
            color: 0x0099ff,
            title: '🖼️ | Avatar de ' + user.username,
            image: {
                url: user.displayAvatarURL({ dynamic: true, size: 4096 }),
            },
            timestamp: new Date(),
            footer: {
                text: 'Luke Bot',
                icon_url: 'https://i.imgur.com/wSTFkRM.png',
            },
        };

        message.channel.send({ embed: avatarEmbed });
    },
};
