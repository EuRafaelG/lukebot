module.exports = {
    name: 'lick',
    description: 'Marca a pessoa mencionada e simula uma ação de "lamber".',
    execute(message, args) {
        // Verifica se foi mencionada uma pessoa
        const target = message.mentions.users.first();

        // Verifica se foi mencionada uma pessoa
        if (!target) {
            return message.reply('Você precisa mencionar alguém para lamber!');
        }

        // URLs dos gifs de "lick" no Imgur
        const lickGifs = [
            'https://i.imgur.com/2VQnPks.gif', // Gif 1
            'https://i.imgur.com/BRkKOSF.gif', // Gif 2
            'https://i.imgur.com/KsZ22CI.gif', // Gif 3
            'https://i.imgur.com/rOgy8Ry.gif', // Gif 4
            'https://i.imgur.com/BvVKmTi.gif', // Gif 5
        ];

        // Seleciona um gif aleatório de "lick"
        const randomLickGif = lickGifs[Math.floor(Math.random() * lickGifs.length)];

        // Monta a mensagem com a ação de lamber
        const embed = {
            color: 0xff69b4, // Cor rosa para ser "debochado"
            title: `👅 ${message.author.username} lambe ${target.username}!`,
            description: 'Que lambida atrevida! 😜',
            image: {
                url: randomLickGif,
            },
        };

        // Envia a mensagem com a ação de lamber
        message.channel.send({ embed: embed });
    },
};
