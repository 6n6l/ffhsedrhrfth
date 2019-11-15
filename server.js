const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://rust-houseboat.glitch.me/`);
}, 280000);
 
// كل البكجات الي ممكن تحتجها في اي بوت
const { Client, RichEmbed } = require("discord.js");
const { Attachment } = require('discord.js');
var { Util } = require('discord.js');
const client = new Client({ disableEveryone: true})
const ytdl = require("ytdl-core");
const Discord = require('discord.js');
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const botversion = require('./package.json').version;
const simpleytapi = require('simple-youtube-api')
const moment = require("moment");
const fs = require('fs');
const util = require("util")
const gif = require("gif-search");
const opus = require("node-opus");
const nodemon = require('nodemon');
const ms = require("ms");
const jimp = require("jimp");
const { get } = require('snekfetch');
const guild = require('guild');
const dateFormat = require('dateformat');//npm i dateformat
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login("NjQ0OTA3ODk5NzU5NDkzMTU1.Xc7eEQ.HzTIJYqqbA5NJ6nPWRNFFR-4hPA");
const queue = new Map();
var table = require('table').table
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 








const { resolve, join } = require("path");

const fetch = require("node-fetch");

const fsn = require('fs-nextra');

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message',async message=> {
  var prefix = '##'
if (message.content.startsWith(prefix + 'admincut')) {

  
  try {
    const buffer = await cutt(message);
    const filename = `cutt-${message.author.id}.jpg`;
    const attachment = new Attachment(buffer, filename);
    await message.channel.send(attachment);
    
  } catch (error) {
    client.logger.error(error.stack);
    return message.channel.send(`An error ocurred: **${error.message}**`);
  }
};

async function cutt(message) {
  const member = message.member;
  try {
    const imageUrlRegex = /\?size=2048$/g;
    const result = await fetch(member.user.displayAvatarURL.replace(imageUrlRegex, '?size=128'));
    if (!result.ok) throw new Error('Failed to get the avatar!');
    const avatar = await result.buffer();
    const args = message.content.split(" ").slice(1).join(" ")
    const name = member.displayName.length > 10 ? member.displayName.substring(0, 10) + '...'
      : member.displayName;
    const image = await fsn.readFile('./assets/cutt.png');
    return new Canvas(596, 429)
      .addImage(image, 0, 0, 596, 429)
      .addStrokeRect(0, 0, 596, 429)
      .addCircularImage(avatar, 558, 32.9, 26)
      .setTextFont('20px Impact')
      .setTextAlign('right')
      .setColor('#FFFFFF')
      .addText(name, 527.2, 28)
      .setTextFont('18px Impact')
      .setColor('#000000')
      .addText(args, 520, 105)
      .toBuffer();
  } catch (error) {
    await message.channel.send(`An error occurred: **${error.message}**`);
  }
  }
});




//Created by TheBeatz#5170

