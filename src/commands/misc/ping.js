module.exports = {
    name: 'ping',
    // devOnly Boolean,
    // testOnly: Boolean,
    // options: Object[]

    callback: (client, interaction) => {
        interaction.reply(`Pong! ${client.ws.ping}ms`);
    },
};