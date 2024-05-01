module.exports = {
    name: 'craftlife',
    description: 'Faça um merchan do servidor CraftLife!',
    execute(message, args) {
        // URL da imagem do servidor CraftLife
        const craftLifeImageUrl = 'https://logo.clearbit.com/craftlife.com.br';

        // Descrição do servidor CraftLife
        const craftLifeDescription = `
        ⚒️ Bem-vindo ao CraftLife! O melhor servidor de Minecraft da galáxia! ⚔️

        Aqui você encontra uma comunidade amigável e animada pronta para aventuras épicas! Com uma mistura de jogadores experientes e novatos, sempre há algo acontecendo no CraftLife!

        💥 Explore os minigames Survival e Creative, onde você pode criar e sobreviver em um mundo cheio de desafios e oportunidades!

        💡 Procurando por diversão? Junte-se a nós agora mesmo e faça parte desta incrível comunidade!

        🌟 CraftLife - Onde as aventuras se tornam realidade! 🌟
        `;

        // Monta a mensagem com a descrição do servidor CraftLife
        const embed = {
            color: 0x55acee, // Cor azul claro
            author: {
                name: 'CraftLife - O melhor servidor de Minecraft!',
                icon_url: craftLifeImageUrl,
            },
            title: 'Junte-se ao CraftLife!',
            description: craftLifeDescription,
        };

        // Envia a mensagem com o merchan do servidor CraftLife
        message.channel.send({ embed: embed });
    },
};
