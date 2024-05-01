const Discord = require('discord.js');
const express = require('./keep_alive');
const fs = require('fs');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const prefix = "l!"; // Prefixo do bot
const token = process.env.TOKEN

// Carregando os arquivos de comandos
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Luke Bot está online!');

    // Definindo o status com emojis
    client.user.setPresence({
        activity: {
            name: 'comandos do Luke Bot',
            type: 'WATCHING',
        },
        status: 'online',
    });
});

client.on('message', message => {
    // Verificando se a mensagem inicia com o prefixo e se foi enviada por um usuário
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    // Verificando se o comando existe
    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('Houve um erro ao executar esse comando.');
    }
});

client.login(token);
