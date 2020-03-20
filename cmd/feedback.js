const Discord = require('discord.js');
module.exports = {
    name: 'feedback',
    alises: ['건의', 'feedback', '피드백'],
    description: '봇에 대한 건의를 할 수 있습니다.',
    run: async function (client, message, args, option) {
        var arg = args.slice(1).join(' ');
        const embed = new Discord.MessageEmbed()
            .setTitle(`${client.emojis.cache.find(x => x.name == 'loadingCirclebar')} 건의를 보내는 중`)
            .setColor(0xffff00)
            .setThumbnail(client.user.displayAvatarURL({
                dynamic: true
            }))
            .addField('건의 내용', arg)
            .addField('건의 작성자', message.author.tag)
            .setFooter(message.author.tag, message.author.avatarURL({
                dynamic: true
            }))
            .setTimestamp()
        let m = await message.channel.send(embed);
        const imbed = new Discord.MessageEmbed()
            .setTitle('건의')
            .setColor(0x00ffff)
            .setThumbnail(client.user.displayAvatarURL({
                dynamic: true
            }))
            .addField('건의 내용', arg)
            .addField('건의 작성자', message.author.tag)
            .setFooter(message.author.tag, message.author.avatarURL({
                dynamic: true
            }))
            .setTimestamp()
        client.users.cache.get('647736678815105037').send(imbed);
        const ymbed = new Discord.MessageEmbed()
            .setTitle('건의 전송 완료')
            .setColor(0x00ffff)
            .setThumbnail(client.user.displayAvatarURL({
                dynamic: true
            }))
            .addField('건의 내용', arg)
            .addField('건의 작성자', message.author.tag)
            .setFooter(message.author.tag, message.author.avatarURL({
                dynamic: true
            }))
            .setTimestamp()
        m.edit(ymbed);
    }
}