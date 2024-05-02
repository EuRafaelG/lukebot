module.exports = {
  name: 'dado',
  description: 'Rola um dado personalizado.',
  execute(message, args) {
    const sides = args.includes('rpg') ? 20 : 6;
    const result = Math.floor(Math.random() * sides) + 1;
    message.channel.send(`🎲 Você rolou um dado de ${sides} lados e o resultado foi: ${result}`);
  },
};
