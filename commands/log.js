const fs = require('fs');
const { Permissions, MessageEmbed } = require('discord.js');
const config = require('../config.js');

module.exports = {
    name: 'log',

    execute(client, message) {
        // Kullanıcının yetkilerini kontrol et
        if (!message.member.permissions.has('ADMINISTRATOR')) {
            return message.channel.send('Bu komutu kullanmak için yönetici iznine sahip olmanız gerekir ❌');
        }

        // Data klasöründeki dosyaları al
        const files = fs.readdirSync('./data/');

        // Dosya kontrolü
        if (files.length === 0) {
            // Data klasörü boşsa, belirtilen kanala mesaj gönder
            return message.channel.send(` ${message.author}** Atılıcak Log Yok !**`);
        }

        // Her dosyanın içeriğini ayrı ayrı gönder
        files.forEach(file => {
            const filePath = `./data/${file}`;
            const data = fs.readFileSync(filePath, 'utf-8');

            const embed = new MessageEmbed()
                .setColor('GREEN')
                .setTitle(`Log Dosyası: ${file}`)
                .setDescription('```' + data + '```');
    

            message.channel.send({ embeds: [embed] });
        });
    },
};
