const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


global.thumb = fs.readFileSync('./lib/bugs/venom.jpg')
const BOTNAME = 'VAJIRA-MD|-WA-BOT™';
const FOOTERNAME = '> ＶＡＪＩＲＡ -  ＭＤ - Ｖ4';
global.owner = process.env.OWNER_NUMBER  || '923278974102' ;  // ADD YOUR NUMBER WITHOUT +
    
module.exports = {
SESSION_ID: process.env.SESSION_ID || '' ,
travaSend: process.env.TRAVA_SEND || '25' ,   
MODERATORS : process.env.MODERATORS === undefined ? "94772801923,94787820101" : process.env.MODERATORS ,    
MAX_SIZE: process.env.MAX_SIZE === undefined ? '1536': process.env.MAX_SIZE,/*add this in megabytes*/    
OWNER_NAME: process.env.OWNER_NAME || '𝓗𝓘𝓩𝓑𝓤𝓛𝓛𝓐𝓗' ,
COMMAND_TYPE: process.env.COMMAND_TYPE || 'button' ,
LOGO: process.env.LOGO || `https://telegra.ph/file/ab0ea6ad90e2eb98090d9.jpg` ,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgresql://bot_1fnp_user:fS6UZCjBGOIGAOyTkkz0C29U667QQwCK@dpg-cqieqcij1k6c739dedg0-a.oregon-postgres.render.com/bot_1fnp' : process.env.POSTGRESQL_URL,
FOOTER: process.env.FOOTER || '‌👨‍💻 ＶＡＪＩＲＡ -  ＭＤ - Ｖ5 👨‍💻',    
PREFIX: process.env.PREFIX || '.' ,
LANG:  process.env.LANG || 'SI' ,
ANTI_BAD: process.env.ANTI_BAD || false  ,
AUTO_REACT:  process.env.AUTO_REACT  || false  ,    
AUTO_TYPING:  process.env.AUTO_TYPING  || true  ,
AUTO_RECORDING:  process.env.AUTO_RECORDING  || false  ,
AUTO_READ:  process.env.AUTO_READ  || false  ,
AUTO_BIO:  process.env.AUTO_BIO  || false  ,       
ALWAYS_ONLINE:  process.env.ALWAYS_ONLINE  || false  ,
WORK_TYPE: process.env.WORK_TYPE || 'private' ,
HEROKU_API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,    
HEROKU_APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME,        
INBOX_USER: process.env.INBOX_USER === undefined ? '' : process.env.INBOX_USER,
BANNED_USER: process.env.BANNED_USER === undefined ? '' : process.env.BANNED_USER ,    
AI_MODE: process.env.AI_MODE === undefined ? 'true' : process.env.AI_MODE,
ANTI_LINK: process.env.ANTI_LINK || false  ,
BOT_DETECT: process.env.BOT_DETECT === undefined ? 'false' : process.env.BOT_DETECT,    
ANTI_BOT: process.env.ANTI_BOT || false  ,
ANTI_CALL: process.env.ANTI_CALL || false  ,
ALIVE: process.env.ALIVE || `default`,     
AUTO_STATUS_READ:  process.env.AUTO_STATUS_READ  || true  ,    
AUTO_VOICE:  process.env.AUTO_VOICE  || false  ,
AUTO_STICKER: process.env.AUTO_STICKER || true  ,
WELCOME:  process.env.WELCOME  || false ,
ANTI_DELETE : process.env.ANTI_DELETE || false ,
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO    
};
