const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'defina',
    description: 'Busca uma definição de palavra e exibe a imagem correspondente.',
    async execute(message, args) {
        // Verifica se foi fornecida uma palavra para definir
        if (!args.length) {
            return message.reply('Por favor, forneça uma palavra para definir!');
        }

        // Obtém a palavra a ser definida
        const palavra = args.join('').toLowerCase();

        try {
            // Cria o embed com a imagem da definição da palavra
            const embed = new MessageEmbed()
                .setTitle(`💡 | Definição de "${palavra}"`)
                .setImage(`https://s.dicio.com.br/${encodeURIComponent(palavra)}.jpg`)
                .setColor('#0099ff');

            // Envia o embed com a imagem da definição da palavra
            message.channel.send(embed);
        } catch (error) {
            console.error('Erro ao buscar definição da palavra:', error);
            message.reply('Ocorreu um erro ao buscar a definição da palavra. Por favor, tente novamente mais tarde.');
        }
    },
};
