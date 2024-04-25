const { Permissions, MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'papara',

    execute(client, message) {
        if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
            return message.channel.send('Bu komutu kullanmak için **mesajları yönet** iznine sahip olmanız gerekir ❌');
        }

        const setupEmbed = new MessageEmbed();

        setupEmbed.setColor('GREEN');
        setupEmbed.setImage("https://share.creavite.co/65fd9d79c1fd3ec562e543e2.gif")
        setupEmbed.setAuthor('');
        setupEmbed.setDescription('**_SilentA ÖDEME YÖNTEMLERİ_\n \n Papara <a:SASHOParrow4:1125092670415573103> `2020006123` \n İtem Satış <a:SASHOParrow4:1125092670415573103> `https://www.itemsatis.com/p/SilentA`**');
        setupEmbed.setFooter(``)

        const ticketButton = new MessageButton();

        ticketButton.setEmoji('💳');
        ticketButton.setStyle('SUCCESS');
        ticketButton.setLabel('Satın al');
        ticketButton.setCustomId('createTicket');

        const row = new MessageActionRow().addComponents(ticketButton);

        message.channel.send({ embeds: [setupEmbed], components: [row] });
    },
};
