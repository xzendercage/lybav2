const {
  MessageEmbed
} = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const settings = require("../../botconfig/settings.json");
module.exports = {
  name: "autoresume", //the command name for execution & for helpcmd [OPTIONAL]

  category: "Settings",
  aliases: ["aresume"],
  usage: "autoresume",

  cooldown: 10, //the command cooldown for execution & for helpcmd [OPTIONAL]
  description: "Enable/Disable the Autoresume for this Guild, if the bot restarts!", //the command description for helpcmd [OPTIONAL]
  memberpermissions: ["MANAGE_GUILD "], //Only allow members with specific Permissions to execute a Commmand [OPTIONAL]
  requiredroles: [], //Only allow specific Users with a Role to execute a Command [OPTIONAL]
  alloweduserids: [], //Only allow specific Users to execute a Command [OPTIONAL]
  run: async (client, message, args) => {
    try {
      //things u can directly access in an interaction!
      const {
        member,
      } = message;
      const {
        guild
      } = member;
      client.settings.set(guild.id, !client.settings.get(guild.id, "autoresume"), "autoresume");
      return message.reply({
        embeds: [
          new MessageEmbed()
          .setColor(ee.color)
          .setFooter(ee.footertext, ee.footericon)
          .setTitle(`${client.allEmojis.check_mark} **The Autoresume got __\`${client.settings.get(guild.id, "autoresume") ? "Enabled" : "Disabled"}\`__!**`)
        ],
      })
    } catch (e) {
      console.log(String(e.stack).bgRed)
    }
  }
}
/**
 * @INFO
 * Bot Coded by Xzendercage | https://github.com/xzendercage/lybav2
 * @INFO
 * Cage Council
 * @INFO
 * Please mention Him / Xzendercage Development, when using this Code!
 * @INFO
 */