module.exports = {
    name: 'ping',

    execute(client, message) {
        message.channel.send(`Dostum Satışta ne kadar yoruldum **${client.ws.ping}ms** 👋`);
    },
}; 