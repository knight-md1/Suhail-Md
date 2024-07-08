const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263789622747";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_22_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzksXG4gICAgICAgIDQxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDY1LFxuICAgICAgICA0MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDY5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDQyLFxuICAgICAgICA0MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNixcbiAgICAgICAgODksXG4gICAgICAgIDE3NCxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDIxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDU2LFxuICAgICAgICA2OSxcbiAgICAgICAgMjI1LFxuICAgICAgICA4NixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTU4LFxuICAgICAgICA4NixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMixcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDQ4LFxuICAgICAgICA5MixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTkyLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTU2LFxuICAgICAgICA5NixcbiAgICAgICAgNTksXG4gICAgICAgIDg3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwMixcbiAgICAgICAgODIsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzksXG4gICAgICAgIDk1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTM1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA5LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDY3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTU5LFxuICAgICAgICAxODYsXG4gICAgICAgIDgwLFxuICAgICAgICA3LFxuICAgICAgICAxODksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTM4LFxuICAgICAgICA1MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDM2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwNixcbiAgICAgICAgNTgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMSxcbiAgICAgICAgMjA1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDExLFxuICAgICAgICAyNCxcbiAgICAgICAgMjI2LFxuICAgICAgICA1MixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJDOC9nSkpwbWl2aG5lVkxqdVBOTFBCai9TdHVwWkJ3K29nZ0RURHUzMC9VPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJmQ2NvYkVxZlJEYXV1dDFMQ242bURBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjY4NzQ3ZDA1LTAxZjEtNGM1Ni04MGU5LTdhYmQxOWU3NDdlN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTUsXG4gICAgICAxOTcsXG4gICAgICAyMixcbiAgICAgIDIzNyxcbiAgICAgIDEwNCxcbiAgICAgIDgxLFxuICAgICAgNzQsXG4gICAgICAxMjksXG4gICAgICAyNDksXG4gICAgICAxODgsXG4gICAgICAxMDQsXG4gICAgICAxOTIsXG4gICAgICAxOSxcbiAgICAgIDE0OSxcbiAgICAgIDE2OSxcbiAgICAgIDMwLFxuICAgICAgMjUyLFxuICAgICAgOSxcbiAgICAgIDIyMCxcbiAgICAgIDI1M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODEsXG4gICAgICAxMTUsXG4gICAgICAxOTYsXG4gICAgICA2MCxcbiAgICAgIDQ5LFxuICAgICAgMzIsXG4gICAgICA5OCxcbiAgICAgIDEzLFxuICAgICAgMTQ1LFxuICAgICAgNTIsXG4gICAgICAyNTAsXG4gICAgICA5MSxcbiAgICAgIDcyLFxuICAgICAgNzgsXG4gICAgICA1NSxcbiAgICAgIDk3LFxuICAgICAgMjAyLFxuICAgICAgMSxcbiAgICAgIDE3MyxcbiAgICAgIDExM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4VFEzVlJMU1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzg5NjIyNzQ3OjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDQ1ODI2MzAyMDc2ODc6MTlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS25lK2JJQkVNN2ZyclFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJQRVVQTlhCSTlucUJXejNwOG5KWDRNUEZhWUErNVBnZXVYdFpNVzZiSEJjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIitNNmlnWDdvT0ZVV2FMbVRKRmlsMEo2Z0xVeGwvZmpsdC9ZbExnQy9oZWFEdzZMQVVueldGNWFPOWFNcmIrakVxUHZvd0czaHByVFpJNlpUZHhyckR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjNidWZMVFZqVG04eWhVMGFYaFlReVFMZDlkTGRFWXVIS09oeVFWM21OL1hmZVpMb2VwZ0hCamJ5czA5QVRGcU5DNjBGOVhrdDZrc21VS0orTXB3L2hnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2Mzc4OTYyMjc0NzoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA0MzA1NDUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJaXBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlpcC5qc29uIjogIntcImtleURhdGFcIjpcIjZySFJaUnFyeUw3VVlrS25vYlRsZGFGTVFpeTVMUlFJNDEzZjhGSFk1Q2s9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Mzc1Mjg3NTkzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA0MzA1NDg4ODNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || ""watson md bot"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "watsonxd",
  ownername:process.env.OWNER_NAME|| "knight",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
