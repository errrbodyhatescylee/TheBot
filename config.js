//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaqGmzIFsn0iKZkhUL2c";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaqGmzIFsn0iKZkhUL2c";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/2s7ety.jpg";
global.devs = "27615045572";
global.sudo = process.env.SUDO || "27693798048,27615045572";
global.owner = process.env.OWNER_NUMBER || "263786430238";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/7t7ciq.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0E0bzJNRmtNWDZ4WFI2YzVaamhySzN1YmxER2x6TzJVcDY1aTdyTG9HOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTmVBRlJCVXFBekJwOCtSWVJSWHhLQkI3QzFHT3hER25GQ3BvdGdJU3V4TT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjRjFLMmlaVzBaREI2d0dKd1E1NGhkcnlaVVM2TEFxdmZIc053UnVaNjE4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuUXJxdWo4bGwzYm4xVkgvSmRIWGk0WkZNSGVHbUpOc1prZ2pzMStrS2tRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9KcG84ekVWM3NlNjJpMGV2eVFTR2lHUVkzbFpDcWZYaEVQcXhEM0VIbVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJubWtPaThoYkVBT0RkRUNRb1BpamRjVE9sbkRVOGFHczA2VVBXdEVQM2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUVTSjdFdnc1UnozWEpHYUc0SzhsREUxa2d1OFB5bnhJVFBXVXdWb2FtYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQi9VQlc5Yjk1aDZsU0dMeGVjVTJ1ckxlV0gxS3c0alR5WDVVVU5nekdYbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNHSmx6NlhIclJIWVdBUlBQUHl5ZS8xTG9ockRZdkcyZGZyeWZmWXhPV2w2V1J1aStVaGNLaWIyTERLaU1zTDZkNWdwbmFzLzlpYnBWakJ4aDNxZERBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMyLCJhZHZTZWNyZXRLZXkiOiJOR05wSGdqTHJoQWc1QzR1STFOUmZLeWxkQU8xSUxqSUM3bXRzeGovVFhBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJoY2NwYlNnNlFlU1g1UEZFd1ZQekRnIiwicGhvbmVJZCI6IjAwZGExYTMwLTVkMWEtNGRlMC1iMGFiLTRjZTI4OTRlODUwMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWTnVEUlJGNGI2RE10Vno1VG9JY2kzN3A1cUU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWGlVTkVwTGRNU0xEWlFEWThqVTNLQ005Yy8wPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkVCOVpYVkU0IiwibWUiOnsiaWQiOiIyNjM3ODY0MzAyMzg6OUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTDNNM09VSEVKRGJucmtHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWHdYZGxBV1JJMjVuV0FCVzhWbU5XUmZmZE5QRmpoa3Z1ZERLYUFhdmpqcz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiOHhleDg3VHNnZGpzTm51eXFUbUpYRVZlaDFrZWcwRG9CaklJV0FXMlBseEllVGhhcVVrZjh3Y0o4eWk1RmZlWVdHbFgrYnVpQ2d4RXlORDJYQUVwQVE9PSIsImRldmljZVNpZ25hdHVyZSI6InQ3T25nZThZendsU1M5Y283UjB0VmoxRldrMVpDWnd0L3ozNU5MWkt3Yk16YlBQc1BBRUJwQzhWMVB4UzBqeHl4UkRaelBCa1JtSTZsWTRzcThnSUJBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzg2NDMwMjM4OjlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVjhGM1pRRmtTTnVaMWdBVnZGWmpWa1gzM1RUeFk0Wkw3blF5bWdHcjQ0NyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMDY1MzU5OCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNbGUifQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`chuckyXcylee❤️🧸™`",
  author: process.env.PACK_AUTHER || "chucky",
  packname: process.env.PACK_NAME || "Sir Cylee ❤️🧸",
  botname: process.env.BOT_NAME || "cyleeXchucky❤️🧸",
  ownername: process.env.OWNER_NAME || "Shawn Legend 🍃🌙",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
