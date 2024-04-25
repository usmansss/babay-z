const fs = require('fs');
const config = require('../config.js');

module.exports = {
    name: 'log-temizle',

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
            return message.channel.send(`${message.author}, Data klasörü zaten boş.`);
        }

        // .txt uzantılı dosyaları filtrele
        const txtFiles = files.filter(file => file.endsWith('.txt'));

        // Eğer .txt uzantılı dosya yoksa mesaj gönder
        if (txtFiles.length === 0) {
            return message.channel.send(`${message.author}, .txt uzantılı dosya bulunamadı.`);
        }

        // .txt uzantılı dosyaları sil
        txtFiles.forEach(file => {
            const filePath = `./data/${file}`;
            fs.unlinkSync(filePath);
        });

        // Silinen dosya sayısını belirle
        const deletedFileCount = txtFiles.length;

        // Kullanıcının etiketini ve kaç tane dosya sildiğini belirten mesajı gönder
        const messageContent = `${message.author.tag} Bu Kadar Log Başarı İle Silindi !: ${deletedFileCount}`;
        message.channel.send(messageContent);
    },
};
