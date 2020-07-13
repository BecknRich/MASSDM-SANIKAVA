const Discord = require("discord.js")
const { client, config } = require("../index.js")

client.on("ready", () => {

    console.log("|\n|    SANIKAVA's MassDM\n|   Made by SANIKAVA#2751\n|\n| Last Update: 13.7.2020\n|")

    client.user.setActivity(`Sanikava System =>${config.version}`, { type: "PLAYING" }).catch(console.error);

})
