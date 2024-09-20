//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "dechrisdesignz@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya"
global.gurl = process.env.GURL || "https://wa.me/2347046363976"
global.website = process.env.GURL || "https://wa.me+2347046363976";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/b065f0f673cae5452c358.jpg";
global.devs = "2347046363976";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2347046363976";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/b065f0f673cae5452c358.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "2347046363976";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU1uSkMxaWxtaXpOZ3JvSW5TN1FncENuQzR2VS8zQlhtTWh4VWdheHExZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSnhOUnl0eDhmbC9vRUF0dXU3b2FXYUNlTzBXbWtpWklUenY0RGFud28wdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5RzNnUDJJQUVkUnZaSzF6SzhaVWFvcENXazZremw1YjhnVThxSXpIOVdZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEWU5KazlwSFU2L1liZm5NY3dBbVJjZVh3T0tucHgzd2NITjRTbnA5MlNNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1OQUUvYVhDY3orWGkwUHFNS0ZDZXdmN3k2cU1EeUNNaWhQVnBZZWNoMG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkYvOWFkcXlmZDJqS1MrdTRqTzkrY2dacGM3UTBnMnNOVHZacGVqbkRkU3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0VERGpBTFpCeWRPdlhYcXVJTmlGdXVZc0pyanlDYVpUNlBUUkprV0tsdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUllY00yVUxhTzNPMTFvNHlXYUdjMU4zeHpQWXI5UVl6cVA1SldMeXd3QT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5LVDR2TlVjYUFPZWtLZlFJY3phVDhHQ3lMbUhYSWRLZTN0UEFVY25UeHk0SzR5SnlwOWlQRE5CeXJ1bTFPSU5NRStpQkhJMWpvbDFBUDY0ODNOUGpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMsImFkdlNlY3JldEtleSI6Ik1RS29JVjhPOGFVSnU0ZGdBb09yRVlVanhzb1YwR0U2dDJ5elErb1c2UTg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzA0NjM2Mzk3NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1ODIzNkM1NDRBMjI3MjdCOTQ5NDREMjg5RjYyMDU0MCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI2ODczMDMzfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJXN0llcWRlZVFmLWc2V3pzLWtka0FRIiwicGhvbmVJZCI6IjAzZDQ3ZDllLTdmNTctNDVhNi1iZGQ5LWI3M2NlNzQ3ZDY0NCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiS0ptbTNaSDBab3lRUXk4bW5hbVV0My84aTA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN1FOTGdWQW45TlNGVGJEUlE2NTZiSlVtajBVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkI1UkRCWDVYIiwibWUiOnsiaWQiOiIyMzQ3MDQ2MzYzOTc2OjQ1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkRlY2hyaXMgRGVzaWduWiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUGVsaElBQ0VMajd0N2NHR0FZZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiM2c3cGFNRXRDYTJKK3I3ZGovVmJjRUd1YUhVQ0hwTjJUNG1wNWRUTk9SUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiYVNmaUtwQ1hnU21GR3FiNWVlWldIdzFlQzZFOFROQjBnMXV0M2o0M0ppano1NkMrYkswVmVxU2VsVXorYzZmZWpQZkVCb1YvTHNMTjREWnMrVnhZQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6IjNoQitrUlV2dHgxTUZ5MUMvZ2Jyb2g1WjZ4RWkrenl5bk1iMHZJVkttZ28wZWs0cXdtK1FvOW1DQUhxZ0QrVzBmalFFM1BwOUxwMlJLb3lWZk9vQWdBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0NzA0NjM2Mzk3Njo0NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkNE82V2pCTFFtdGlmcSszWS8xVzNCQnJtaDFBaDZUZGsrSnFlWFV6VGtVIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI2ODczMDMwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQVBrdiJ9=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`DECHRIS BOT™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "DECHRIS_BOT",
  ownername: process.env.OWNER_NAME || "DECHRIS",
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
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
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
