const { Permissions, MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'dcshop',

    execute(client, message) {
        if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
            return message.channel.send('Bu komutu kullanmak için **mesajları yönet** iznine sahip olmanız gerekir ❌');
        }

        const setupEmbed = new MessageEmbed();

        setupEmbed.setColor('BLACK');
        setupEmbed.setImage("https://cdn.discordapp.com/attachments/1206975022896250910/1220800597931069550/65fd9d79c1fd3ec562e543e2.gif?ex=66104227&is=65fdcd27&hm=862ca487d5e839657529e2930db69f4d34b0e052a650b8d40f8ad76e784b6430&")
        setupEmbed.setAuthor('');
        setupEmbed.setDescription('**_Discord HİZMETLERİ_\n \n _Discord Üye HİZMETLERİ_ \n \n <:SASHOPiconyeil:1125092692959952996> `100` Online Üye <a:SASHOParrow4:1125092670415573103> `14.90 ₺` \n <:SASHOPiconyeil:1125092692959952996> `250` Online Üye <a:SASHOParrow4:1125092670415573103> `29.90 ₺` \n <:SASHOPiconyeil:1125092692959952996> `500` Online Üye <a:SASHOParrow4:1125092670415573103> `55.90 ₺` \n <:SASHOPiconyeil:1125092692959952996> `1000` Online Üye <a:SASHOParrow4:1125092670415573103> `109.90 ₺` \n \n \n \n <:SASHOPiconkrmz:1125092690195906582> `100` Offline Üye <a:SASHOParrow4:1125092670415573103> `10.00₺` \n <:SASHOPiconkrmz:1125092690195906582> `250` Offline Üye <a:SASHOParrow4:1125092670415573103> `19.90₺` \n <:SASHOPiconkrmz:1125092690195906582> `500` Offline Üye <a:SASHOParrow4:1125092670415573103> `34.90 ₺` \n <:SASHOPiconkrmz:1125092690195906582> `1000` Offline Üye <a:SASHOParrow4:1125092670415573103> `64.90 ₺` \n \n _Discord BOOST HİZMETLERİ_ \n \n <a:SASHOPboosts:1125092684428738662>  `3 Aylık` 14x Boost ~~200.00₺~~ Yerine Sadece `190.00 ₺` \n <a:SASHOPboosts:1125092684428738662>  `1 Aylık` 14x Boost ~~100.00₺~~ Yerine Sadece `80.00 ₺` \n <a:SASHOPboosts:1125092684428738662>  `2 Haftalık` 14x Boost ~~70.00₺~~ Yerine Sadece `60.00 ₺` \n <a:SASHOPboosts:1125092684428738662>  `1 Haftalık` 14x Boost ~~40.00₺~~ Yerine Sadece `30.00 ₺` \n \n _Discord Nitro HİZMETLERİ_ \n \n <a:SASHOPnitro:1125092667248881824>  `1 Aylık 2x Boostlu Nitro` <a:SASHOParrow4:1125092670415573103> `10.00 ₺` \n  <a:SASHOPnitro:1125092667248881824>  `3 Aylık 2x Boostlu Nitro` <a:SASHOParrow4:1125092670415573103> `20.00 ₺` \n \n _SilentA OwO_ \n \n <:SASHOPHaraketliEmoji2:1125383643561463859> `Discord 1 M OwO` Sadece <a:SASHOParrow4:1125092670415573103> `11.90 ₺`\n \n_SilentA Ödeme YÖNTEMLERİ_ \n \n <:SASHOPPapara:1128709095088717947> <a:SASHOParrow4:1125092670415573103> `2020006123` \n <:SASHOPtemSat:1128708707723776000> <a:SASHOParrow4:1125092670415573103> `https://www.itemsatis.com/p/SilentA` \n \n <:HaraketliEmoji17:1125383656349900901> Tüm Ürünlerimiz Garantilidir Herhangi bir Aksilik Söz Konusu değildir. \n \n \n ||@everyone|| x ||@here||**');
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
