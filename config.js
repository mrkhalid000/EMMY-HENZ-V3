//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Calabar, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Calabar";
global.github = process.env.GITHUB || "https://github.com/EMMYHENZ-TECH";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/9tbm4c.jpg";
global.devs = "https://t.me/EmmyHenz";
global.sudo = process.env.SUDO || "2348023898600";
global.owner = process.env.OWNER_NUMBER || "2348023898600";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/9tbm4c.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "2349121785627,2349125042727";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0FjNVo3RFg0cEFoVGowTXFtcUFWWHN4dXF4eE9zNEl6ZlI5bDBFWWhrST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicVQ1QVNZQjFNbWRadGtKL0tpQTE0NzJpdUIvaTI1dWFhbWhUZm53dW1CRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNSHVxc1E0TWZuWWRKSzlZdEhua0VReWpHZ2tzdDZxU2NtMzJWU1lyT2tBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJERTY5cDQyK3B6OTBGN3NLSEF1cDNTKzFVa3RBL09LZi9UK2NmOHliNFhnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhQNUM1dlZ6K1d6WWJoWG9FRHFzY0lyR0dwTm9VM1BGMjRDWEs1TlhWMjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhhaTN1aHRoa2hkRnVzL3RQSzIrdVpjSGJvYkdHdkhrVlVncis1RUZBSDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU9JOTFVZ1h6amdocU5ORzMxM0FFUGFhdDlYd09SbEFIaTU3dnJ4N3gzRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0V2cEgwMGdiN2ZJR2pMMlIyTHZRWFRKaDFma1V5WkRGOTZNNjN0YTNCWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNUNnUwNWVyYkwva2pRaFRpRkJxRDZBRzY4U1dhTlJod2lwaEp4MVhUVEU4R1pKWHhaMG15cktzelAzTUNSeWc5WThZUTFsMHRybjNBTGkvOVVQdWl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIyLCJhZHZTZWNyZXRLZXkiOiI1OS84R1c2TkwvcUZtcURUcjRYb0ZiWXBYSmRZYWl2d1BKZ28vYUxOL01vPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI0dGhGNVdkbFJTLXpicmVjMGNfbTlBIiwicGhvbmVJZCI6IjU3ZjE3NGZiLWI2MTctNGE3YS04YzljLTUzM2VlM2UzNWM4MiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyRnFEY2F0TEVIdFA3RWZBTTF4d2hUd29McDg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidC9yaDh4YlYvaVVSdHBTWXFCaVVnTjhFUVJRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjlaNEs0QkxOIiwibWUiOnsiaWQiOiIyMzQ3MDczNzI4MTgyOjIyQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKVzAzODhIRVBMMi83Y0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJabFY0L09LUUVRNFFNK1hiTWJhMG5ndlNMR0dMd2lpeXJ0SjQybHkwMGlrPSIsImFjY291bnRTaWduYXR1cmUiOiI2RWhPZGMxaTU3bllRYko1T3JtZ3NjTlFja0JheWR2WFlyN09NN0dZa0gwUkM1STk2THZ6TzdLNHMzeFdqZEpGeXJVQzk0dFRvOWVwMGNsNzdBdDZBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiN2U5dXhLa2pQNm9SRTV3MDcyVUhIUmtUOXNOaTlERDhTZERhTVlRckVmTVArdDRodTRNbDdPU0tVN3c3cmFyd2VLS0FRQWxTN054VjlXOGpxWFRGanc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDczNzI4MTgyOjIyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldaVmVQemlrQkVPRURQbDJ6RzJ0SjRMMGl4aGk4SW9zcTdTZU5wY3ROSXAifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjgwNTIwOTZ9"
module.exports = {
  menu: process.env.MENU || "3",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "3.0.0",
  caption: process.env.CAPTION || "`king khalis™`",
  author: process.env.PACK_AUTHER || "khalid md",
  packname: process.env.PACK_NAME || "king khalid",
  botname: process.env.BOT_NAME || "khalid md",
  ownername: process.env.OWNER_NAME || "king khalid",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "E M M Y").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
