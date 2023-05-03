module.exports = {
    name: 'ping',
    // devOnly Boolean,
    // testOnly: Boolean,
    // options: Object[]
    // deleted: Boolean,

    callback: (client, interaction) => {
        interaction.reply(`Pong! ${client.ws.ping}ms`);
    },
};