module.exports = {
    name: 'ajuda',
    description: 'Exibe uma mensagem de ajuda.',
    execute(message, args) {
        // Mensagem filosófica sobre pressa
        const frasesFilosoficas = [
            "A pressa é inimiga da perfeição, meu caro amigo.",
            "A pressa é o mais lento dos processos.",
            "A pressa é uma forma de desperdício de tempo.",
            "A pressa pode te levar para longe do seu destino.",
            "A pressa é como tentar pegar o vento com as mãos.",
            "Quem tem pressa tropeça mais facilmente.",
            "Pressa e perfeição raramente andam juntas."
        ];

        // Seleciona uma frase filosófica aleatória
        const fraseAleatoria = frasesFilosoficas[Math.floor(Math.random() * frasesFilosoficas.length)];

        // Monta a mensagem de ajuda
        const mensagemAjuda = `🐢 Hmm... Parece que o bot ainda está voltando à atividade. Mas lembre-se: "${fraseAleatoria}" Em breve teremos todos os comandos disponíveis!`;

        // Envia a mensagem de ajuda
        message.channel.send(mensagemAjuda);
    },
};
