// Rapihin Sendiri Ajg

require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const crypto = require('crypto')
const { exec, spawn, execSync } = require('child_process')
const axios = require('axios')
const path = require('path')
const os = require('os')
const hxz = require('hxz-api')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const yts = require('yt-search')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const ms = require('parse-ms')
const toMs = require('ms')
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./Lib/myfunc')
const { pinterest } = require('./Lib/scraper')
const _sewa = require('./Lib/sewa')
const { color, bgcolor } = require('./Lib/color')
const { toAudio, toPTT, toVideo } = require('./Lib/converter')
const { checkPetualangUser, addInventori, addBesi, sellBesi, getBesi, addDm, sellDm, getDm, addEmas, sellEmas, getEmas, addFish, sellFish, getFish } = require('./Lib/rpg')
const { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require('./Lib/level')
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require('./Lib/limit')

const tebaklagu = JSON.parse(fs.readFileSync('./Database/tebaklagu.json'))
const kuismath = JSON.parse(fs.readFileSync('./Database/math.json'))
const tebakgambar = JSON.parse(fs.readFileSync('./Database/tebakgambar.json'))
const tebakkata = JSON.parse(fs.readFileSync('./Database/tebakkata.json'))
const caklontong = JSON.parse(fs.readFileSync('./Database/lontong.json'))
const caklontong_desk = JSON.parse(fs.readFileSync('./Database/lontong_desk.json'))
const tebakkalimat = JSON.parse(fs.readFileSync('./Database/kalimat.json'))
const tebaklirik = JSON.parse(fs.readFileSync('./Database/lirik.json'))
const tebaktebakan = JSON.parse(fs.readFileSync('./Database/tebakan.json'))

const sewa = JSON.parse(fs.readFileSync('./Database/sewa.json'))
const _level = JSON.parse(fs.readFileSync('./Database/leveluser.json'))
const _petualang = JSON.parse(fs.readFileSync('./Database/inventori.json'))
const balance = JSON.parse(fs.readFileSync('./Database/balance.json'))
const autosticker = JSON.parse(fs.readFileSync('./Database/autosticker.json'))
const prem = JSON.parse(fs.readFileSync('./Database/premium.json'))


module.exports = kirbotz = async (kirbotz, m, chatUpdate, store) => {
try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        var content = JSON.stringify(m.message)
        const { tampilan } = require('./Lib/isinya')
        const { type, quotedMsg, mentioned, now, fromMe } = m
        const isCmd = body.startsWith(prefix)
        const from = m.key.remoteJid
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await kirbotz.decodeJid(kirbotz.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
		let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
		const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
		const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')   
        const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')  
        const isMedia = /image|video|sticker|audio/.test(mime)
        const charger = `${charging ? 'Charging' : 'Discharging'}`
	    
	    const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const groupMetadata = m.isGroup ? await kirbotz.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const groupMembers = m.isGroup ? groupMetadata.participants : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
        const isPrem = prem.includes(sender)
        const isPetualang = checkPetualangUser(sender)
        const isSewa = _sewa.checkSewaGroup(from, sewa)
        const floc = {key : {participant : '0@s.whatsapp.net'},message: {locationMessage: {name: `I’m From Indonesia 🇮🇩`,jpegThumbnail: thumb}}}
        
const { fgame, fpulsa, fewallet, flistrik } = require('./Lib/format')
const { bsewa } = require('./Lib/sewabot')
const { bshare } = require('./Lib/jasashare')
const { pqris, pdana, pgopay, povo, pshopee, pbank, palfa, pindo, } = require('./Lib/payment')
const { japost } = require('./Lib/jasapost')
const { jaber } = require('./Lib/jasaber')
const { ttoken } = require('./Lib/topuptokenlistrik')
const { ttsel, tind, taxs, tthr, txl, tsmrt } = require('./Lib/topuppulsa')
const { tdana, tgopay, tovo, tlinkaja, tshopee } = require('./Lib/topupewallet')
const { tff, tml, tpubg, taov, tcod, thig, tgen, tval, tsau } = require('./Lib/topupgame')

var levelRole = getLevelingLevel(sender, _level)
var role = 'Warrior III'
if (levelRole <= 5) {
role = 'Warrior II'
} else if (levelRole <= 10) {
role = 'Warrior I'
} else if (levelRole <= 15) {
role = 'Elite III'
} else if (levelRole <= 20) {
role = 'Elite II'
} else if (levelRole <= 25) {
role = 'Elite I'
} else if (levelRole <= 30) {
role = 'Master III'
} else if (levelRole <= 35) {
role = 'Master II'
} else if (levelRole <= 40) {
role = 'Master I'
} else if (levelRole <= 45) {
role = 'GrandMaster III'
} else if (levelRole <= 50) {
role = 'GrandMaster II'
} else if (levelRole <= 55) {
role = 'GrandMaster I'
} else if (levelRole <= 60) {
role = 'Epic III'
} else if (levelRole <= 65) {
role = 'Epic II'
} else if (levelRole <= 70) {
role = 'Epic I'
} else if (levelRole <= 75) {
role = 'Legend III'
} else if (levelRole <= 80) {
role = 'Legend II'
} else if (levelRole <= 85) {
role = 'Legend I'
} else if (levelRole <= 90) {
role = 'Mythic'
} else if (levelRole <= 95) {
role = 'Mythical Glory'
} else if (levelRole >= 100) {
role = 'Immortal'
} 

var ikan = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐡','🐙']
var hewan = ['🐔','🦃','🦆','🐐','🐏','🐖','🐑','🐎']
var burung = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']        
var petnya = ['😾','🐺','🦊','🐶','🐰']
var makan = ['🌭','🌮','🌯','🍙','🍝','🍕','🍘','🍟','🍞','🍖','🍡']
var buahan = ['🍇','🍎','🍏','🍐','🍒','🍊','🍋','🍑','🍓']

var elit = 'Petualang Biasa'
if (isPrem)
{
elit = 'Petualang Pro'
}
if (isCreator)
{
elit = 'Admin Game'
}

try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
           
} catch (err) {
console.error(err)
}

            if (!kirbotz.public) {
            if (!m.key.fromMe) return
            }

		if (!m.isGroup && isCmd && !fromMe) {
			addBalance(sender, randomNomor(20), balance)
			console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix + command} [${args.length}]`), 'from', color(pushname))
		}
		if (m.isGroup && isCmd && !fromMe) {
			addBalance(sender, randomNomor(20), balance)
			console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(m.messageTimestamp *1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix + command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
		}
		
		if (m.sender.startsWith('212')) return kirbotz.updateBlockStatus(m.sender, 'block')

	    kirbotz.sendReadReceipt(from, sender, [m.key.id])
		kirbotz.sendPresenceUpdate('available', from)

        const isFoVid = (type === 'imageMessage' || type === 'videoMessage')
        const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isSticker = (type == 'stickerMessage')
		const isQuotedMsg = (type == 'extendedTextMessage')
		const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
		const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
		const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
		const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
		const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false

        const sendFileFromUrl = async (from, url, caption, m, men) => {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            if (mime.split("/")[1] === "gif") {
                return kirbotz.sendMessage(from, { video: await getBuffer(url), caption: caption, gifPlayback: true, mentions: men ? men : [], mimetype: 'video/mp4'}, {quoted: m})
                }
            let type = mime.split("/")[0]+"Message"
            if(mime === "application/pdf"){
                return kirbotz.sendMessage(m.chat, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, mentions: men ? men : []}, {quoted: m })
            }
            if(mime.split("/")[0] === "image"){
                return kirbotz.sendMessage(m.chat, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
            }
            if(mime.split("/")[0] === "video"){
                return kirbotz.sendMessage(m.chat, { video: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'video/mp4'}, {quoted: m })
            }
            if(mime.split("/")[0] === "audio"){
                return kirbotz.sendMessage(m.chat, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg'}, {quoted: m })
            }
        }
	        
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: kirbotz.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, kirbotz.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        kirbotz.ev.emit('messages.upsert', msg)
        }
		
		const reply = (teks) => {
        kirbotz.sendMessage(from, { text : teks, thumbnail: thumb, sendEphemeral: true, contextInfo: { externalAdReply : { title: "I'm From Indonesia 🇲🇨", mediaType: 3, renderLargerThumbnail: true, showAdAttribution: true, body: "Owner Bot", previewType: "PHOTO", thumbnail: thumb, sourceUrl: "https://wa.me/qr/SJFA2RHAJWE7P1"}}}, { quoted: floc })
        }
	
		const createSerial = (size) => {
        return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
        
        const sticWait = (hehe) => {
			ano = fs.readFileSync('./Kir/JANGANDIUBAH/wait.webp')
			kirbotz.sendMessage(hehe, { sticker: ano, contextInfo: {"externalAdReply": { title: "I'm From Indonesia 🇲🇨", mediaType: 3, renderLargerThumbnail: true, showAdAttribution: true, body: "Website Owner", jpegThumbnail: thumb, sourceUrl: `${webkir}`}}}, { quoted: floc })
		}

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await kirbotz.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, kirbotz.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await kirbotz.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, kirbotz.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await kirbotz.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, kirbotz.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await kirbotz.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, kirbotz.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await kirbotz.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, kirbotz.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await kirbotz.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, kirbotz.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await kirbotz.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, kirbotz.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

_sewa.expiredCheck(kirbotz, sewa)

function randomNomor(min, max = null) {
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}
}
function monospace(string) {
return '```' + string + '```'
}  

const fakekirbotz = {
  key: {
    fromMe: false,
    participant: '0@s.whatsapp.net',
    remoteJid: 'status@broadcast'
  },
  message: {
    imageMessage: {
      mimetype: 'image/jpeg',
      caption: 'Created By KirBotz',
      jpegThumbnail: thumb,
      viewOnce: true
    }
  }
}

const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
"orderMessage": {
"orderId": orid, 
"thumbnail": img, 
"itemCount": itcount, 
"status": "INQUIRY", 
"surface": "CATALOG", 
"orderTitle": title, 
"message": text, 
"sellerJid": sellers, 
"token": tokens, 
"totalAmount1000": ammount, 
"totalCurrencyCode": "IDR", 
}
}), { userJid: jid })
kirbotz.relayMessage(jid, order.message, { messageId: order.key.id})
}
        
        if (m.isGroup && !m.key.fromMe &&  db.data.chats[m.chat].antilink && !isCreator && !isGroupAdmins){
        if (budy.match(`https://chat.whatsapp.com`)) {
        kirbotz.sendMessage(m.chat, {text: `*Antilink Group Terdeteksi*\n\nKamu Akan Dikeluarkan Dari Group ${groupMetadata.subject}`}, {quoted:m})
	    kirbotz.groupParticipantsUpdate(m.chat, [sender], 'remove')
		}
	    }
	    
	    if (m.isGroup && !m.key.fromMe &&  db.data.chats[m.chat].antiwame && !isGroupAdmins){
        if (budy.match(`wa.me`)) {
        kirbotz.sendMessage(m.chat, {text: `*Antiwame Group Terdeteksi*\n\nKamu Akan Dikeluarkan Dari Group ${groupMetadata.subject}`}, {quoted:m})
	    kirbotz.groupParticipantsUpdate(m.chat, [sender], 'remove')
		}
	    }
	    
        async function sendPlay(from, query) {
        var url = await yts(query)
        url = url.videos[0].url
        hxz.youtube(url).then(async(data) => {
        var button = [
		{ urlButton: { displayText: `❃ S O U R C E V I D I O ❃`, url : ` https://youtu.be/${data.id}` } },
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `🎥 Video (${data.size})`, id: `${prefix}ytmp4 ${url}` } },
		{ quickReplyButton: { displayText: `🎵 Audio (${data.size_mp3})`, id: `${prefix}ytmp3 ${url}` } },
		{ quickReplyButton: { displayText: `🔍 Search ${data.title}`, id: `${prefix}ytsearch https://youtu.be/${data.id}` } }
		]
        var hg = `*⚐︎ Title :* ${data.title}\n*⚐︎ Quality :* ${data.quality}`
        kirbotz.sendMessage(from, { caption: hg, location: { jpegThumbnail: await getBuffer(data.thumb) }, templateButtons: button, footer: `Pilih Salah Satu Button Dibawah⬇️`, mentions: [sender] })
        }).catch((e) => {
        kirbotz.sendMessage(from, { text: mess.error }, { quoted: m })
        ownerNumber.map( i => kirbotz.sendMessage(from, { text: `Send Play Error : ${e}` }))
        })
        }
        
        async function sendButLoc(from) {
        reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
        var button = [
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
		{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
		]
        var hg = `📍 𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗣𝗹𝗮𝘆𝗲𝗿
 • Nama : ${pushname}
 • Rank : ${role}
 • Status : ${elit}
 • Uang : $${(getBalance(sender, balance))}
 • Xp : ${getLevelingXp(sender)}/${reqXp}
 • Level : ${getLevelingLevel(sender)}
 
🎒 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝗶 :
 • Uang : $${(getBalance(sender, balance))}
 • Emas : ${getEmas(sender)}
 • Besi : ${getBesi(sender)}
 • Ikan : ${getFish(sender)}
 • Berlian : ${getDm(sender)}

🏔️ 𝗠𝗲𝗻𝘂 𝗥𝗣𝗚
 × ${prefix}joinrpg
 × ${prefix}quest 
 × ${prefix}mining
 × ${prefix}mancing
 × ${prefix}luckyday
 × ${prefix}luckytime
 × ${prefix}adventure
 × ${prefix}inventori
 
⚔️ 𝗙𝗮𝗿𝗺𝗶𝗻𝗴 𝗥𝗣𝗚
 × ${prefix}killslime
 × ${prefix}killgoblin
 × ${prefix}killdevil
 × ${prefix}killbehemoth
 × ${prefix}killdemon
 × ${prefix}killdemonking 
 
🛒 𝗦𝗲𝗹𝗹 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝘆
 × ${prefix}sellikan
 × ${prefix}sellbesi
 × ${prefix}sellemas
 × ${prefix}selldiamond`
        kirbotz.sendMessage(from, { caption: hg, location: { jpegThumbnail: thumbrpg }, templateButtons: button, footer: `Rpg Game By KirBotz`, mentions: [sender] })
        .catch ((err) => reply(err))
        }
        
        async function sendButJoin(from, query) {
        reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
        _petualang.push(sender)
        fs.writeFileSync('./Database/inventori.json', JSON.stringify(_petualang))        
        addInventori(sender)
        addLevelingId(sender) 
        var name = args[0]
        var serialUser = createSerial(14)
        reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
        var button = [
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `Rpg Menu`, id: `${prefix}rpgmenu` } },
		{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
		]
        var hg = `〘 SUKSES JOIN RPG 〙
        
「 PROFILE 」
 • Nama : ${name}
 • Level : ${getLevelingLevel(sender)}
 • Status : ${elit}
 • Xp :  ${getLevelingXp(sender)}/${reqXp}
「 RPG GAME 」`
        kirbotz.sendMessage(from, { caption: hg, location: { jpegThumbnail: imgjoinrpg }, templateButtons: button, footer: `Rpg Game By KirBotz`, mentions: [sender] })
        .catch ((err) => reply(err))
        }
        
        async function sendButslime(from) {
ez = Math.ceil(Math.random() * 400)
addLevelingXp(sender, ez)
a = randomNomor(55)
b = randomNomor(400)
c = randomNomor(80)
d = randomNomor(3)
addLevelingXp(sender, ez)
addBalance(sender, b, balance)
addEmas(sender, a)
addBesi(sender, c)
addDm(sender, d)
        var button = [
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
		{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
		]
        var hg = `☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗦𝗹𝗶𝗺𝗲️\n\n🎁 Hadiah Membunuh Slime\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`
        kirbotz.sendMessage(from, { caption: hg, location: { jpegThumbnail: imgslime }, templateButtons: button, footer: `Rpg Game By KirBotz`, mentions: [sender] })
        .catch ((err) => reply(err))
        }
        
async function sendButgoblin(from) {
ez = Math.ceil(Math.random() * 500)
addLevelingXp(sender, ez)
a = randomNomor(65)
b = randomNomor(500)
c = randomNomor(90)
d = randomNomor(5)
addLevelingXp(sender, ez)
addBalance(sender, b, balance)
addEmas(sender, a)
addBesi(sender, c)
addDm(sender, d)
var button = [
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
		{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
		]
var hg = `☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗚𝗼𝗯𝗹𝗶𝗻\n\n🎁 Hadiah Membunuh Goblin\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`
kirbotz.sendMessage(from, { caption: hg, location: { jpegThumbnail: imggoblin }, templateButtons: button, footer: `Rpg Game By KirBotz`, mentions: [sender] })
        .catch ((err) => reply(err))
        }
        
async function sendButdevil(from) {
ez = Math.ceil(Math.random() * 600)
addLevelingXp(sender, ez)
a = randomNomor(70)
b = randomNomor(600)
c = randomNomor(95)
d = randomNomor(6)
addLevelingXp(sender, ez)
addBalance(sender, b, balance)
addEmas(sender, a)
addBesi(sender, c)
addDm(sender, d)
var button = [
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
		{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
		]
var hg = `☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗗𝗲𝘃𝗶𝗹️\n\n🎁 Hadiah Membunuh Devil\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`
kirbotz.sendMessage(from, { caption: hg, location: { jpegThumbnail: imgdevil }, templateButtons: button, footer: `Rpg Game By KirBotz`, mentions: [sender] })
        .catch ((err) => reply(err))
        }
        
async function sendButbehemoth(from) {
ez = Math.ceil(Math.random() * 700)
addLevelingXp(sender, ez)
a = randomNomor(75)
b = randomNomor(600)
c = randomNomor(100)
d = randomNomor(7)
addLevelingXp(sender, ez)
addBalance(sender, b, balance)
addEmas(sender, a)
addBesi(sender, c)
addDm(sender, d)
var button = [
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
		{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
		]
var hg = `☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗕𝗲𝗵𝗲𝗺𝗼𝘁𝗵️\n\n🎁 Hadiah Membunuh Behemoth\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`
kirbotz.sendMessage(from, { caption: hg, location: { jpegThumbnail: imgbehemoth }, templateButtons: button, footer: `Rpg Game By KirBotz`, mentions: [sender] })
        .catch ((err) => reply(err))
        }
        
async function sendButdemon(from) {
ez = Math.ceil(Math.random() * 850)
addLevelingXp(sender, ez)
a = randomNomor(90)
b = randomNomor(900)
c = randomNomor(120)
d = randomNomor(10)
addLevelingXp(sender, ez)
addBalance(sender, b, balance)
addEmas(sender, a)
addBesi(sender, c)
addDm(sender, d)
var button = [
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
		{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
		]
var hg = `☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗗𝗲𝗺𝗼𝗻️\n\n🎁 Hadiah Membunuh Demond\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`
kirbotz.sendMessage(from, { caption: hg, location: { jpegThumbnail: imgdemon }, templateButtons: button, footer: `Rpg Game By KirBotz`, mentions: [sender] })
        .catch ((err) => reply(err))
        }
        
async function sendButdemonking(from) {
ez = Math.ceil(Math.random() * 1000)
addLevelingXp(sender, ez)
addLevelingXp(sender, ez)
addBalance(sender, 1999, balance)
addEmas(sender, 99)
addBesi(sender, 99)
addDm(sender, 99)
var button = [
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
		{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
		]
var hg = `☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗗𝗲𝗺𝗼𝗻𝗞𝗶𝗻𝗴\n\n🎁 Hadiah Membunuh DemonKing\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`
kirbotz.sendMessage(from, { caption: hg, location: { jpegThumbnail: imgdemonking }, templateButtons: button, footer: `Rpg Game By KirBotz`, mentions: [sender] })
        .catch ((err) => reply(err))
        }
        
async function replyTemplate(teks) {
                       const buttonsDefault = [
	             		{ urlButton: { displayText: `WA OWNER`, url : `${wame}` } },
	             		{ quickReplyButton: { displayText: `RULES`, id : 'rules'}}
                                        	  ]                 
                       const buttonMessage = { 
                                    text: teks, 
                                    footer: "Bot By Emerald Store", 
                                    templateButtons: buttonsDefault, 
                                    image: {url: thumb}                                   
                                               }
                       return kirbotz.sendMessage(from, buttonMessage)
                }

async function replyOwnerr(teks) {
                       const buttonsDefault = [
	             		{ urlButton: { displayText: `YouTube`, url : `${yt}` } }
                                        	  ]                 
                       const buttonMessage = { 
                                    text: teks, 
                                    footer: "Bot By Emerald Store", 
                                    templateButtons: buttonsDefault, 
                                    image: {url: thumb}                                   
                                               }
                       return kirbotz.sendMessage(from, buttonMessage)
                }

async function replyNya(teks) {
                       const buttonsDefault = [
	             		{ urlButton: { displayText: `MyOwner`, url : `${wame}` } }
                                        	  ]                 
                       const buttonMessage = { 
                                    text: teks, 
                                    footer: "Bot By Emerald Store", 
                                    templateButtons: buttonsDefault, 
                                    image: {url: thumb}                                   
                                               }
                       return kirbotz.sendMessage(from, buttonMessage)
                }

async function replyPremium(teks) {
                       const buttonsDefault = [
	             		{ urlButton: { displayText: `MyOwner`, url : `${wame}` } },
	             		{ quickReplyButton: { displayText : `Buy Premium`, id : `buypremium` } }
                                        	  ]                 
                       const buttonMessage = { 
                                    text: teks, 
                                    footer: "Bot By Emerald Store", 
                                    templateButtons: buttonsDefault, 
                                    image: {url: thumb}                                   
                                               }
                       return kirbotz.sendMessage(from, buttonMessage)
                }
                
async function sendBut5nya(teks) {
var button = [
{"urlButton": {"displayText": "MyOwner🔥","url": `https://wa.me/6287705048235`}},
{"quickReplyButton": {"displayText": "Sewabot","id": 'sewabot'}},
{"quickReplyButton": {"displayText": "Donasi","id": 'donasi'}},
{"quickReplyButton": {"displayText": "Status Bot KirBotz","id": 'ping'}}
		]
kirbotz.sendMessage(from, { caption: teks, location: { jpegThumbnail: thumb }, templateButtons: button, footer: `Created By KirBotz`, mentions: [sender] })
        .catch ((err) => reply(err))
        }
        
if (m.isGroup && isAutoSticker) {
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await kirbotz.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replyNya('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await kirbotz.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
}
}

switch (command) {
case 'format':
const secmya = [
{
"title": `Format Order 1`,
 rows: [
{
"title": `FORMAT ORDER TOPUP GAME`,
"rowId": `${prefix}formatgame`
}
]
}
, 
{
"title": `Format Order 2`,
 rows: [
{
"title": `FORMAT ORDER PULSA`,
"rowId": `${prefix}formatpulsa`
}
]
}
, 
{
"title": `Format Order 3`,
 rows: [
{
"title": `FORMAT ORDER EWALLET`,
"rowId": `${prefix}formatewallet`
}
]
}
, 
{
"title": `Format Order 4`,
 rows: [
{
"title": `FORMAT ORDER TOKEN LISTRIK`,
"rowId": `${prefix}formatlistrik`
}
]
}
]
kirbotz.sendList(m.chat, `Haii *${pushname}*`, `Silahkan Pilih Menu Di Bawah`, "CLICK", "Format Order By Emerald Store", secmya, { quoted: fakekirbotz })
break	
case 'formatgame': {
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/kirbotz.jpg') }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: fgame(pushname),
hydratedFooterText: 'Created By Emerald Store',
hydratedButtons: [{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6282228462822'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'formatpulsa': {
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/kirbotz.jpg') }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: fpulsa(pushname),
hydratedFooterText: 'Created By Emerald Store',
hydratedButtons: [{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6282228462822'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'formatewallet': {
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/kirbotz.jpg') }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: fewallet(pushname),
hydratedFooterText: 'Created By Emerald Store',
hydratedButtons: [{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6282228462822'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'formatlistrik': {
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/kirbotz.jpg') }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: flistrik(pushname),
hydratedFooterText: 'Created By Emerald Store',
hydratedButtons: [{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6282228462822'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'payment':
const seckon = [
{
"title": `-> PAYMENT 1`,
 rows: [
{
"title": `QRIS`,
"rowId": `${prefix}payqris`
}
]
}
,
{
"title": `-> PAYMENT 2`,
 rows: [
{
"title": `DANA`,
"rowId": `${prefix}paydana`
}
]
}
,
{
"title": `-> PAYMENT 3`,
 rows: [
{
"title": `GOPAY`,
"rowId": `${prefix}paygopay`
}
]
}
,
{
"title": `-> PAYMENT 4`,
 rows: [
{
"title": `OVO`,
"rowId": `${prefix}payovo`
}
]
}
, 
{
"title": `-> PAYMENT 5`,
 rows: [
{
"title": `SHOPEEPAY`,
"rowId": `${prefix}payshopee`
}
]
}
, 
{
"title": `-> PAYMENT 6`,
 rows: [
{
"title": `TRANSFER BANK`,
"rowId": `${prefix}paybank`
}
]
}
, 
{
"title": `-> PAYMENT 7`,
 rows: [
{
"title": `ALFAMART`,
"rowId": `${prefix}payalfa`
}
]
}
, 
{
"title": `-> PAYMENT 8`,
 rows: [
{
"title": `INDOMARET`,
"rowId": `${prefix}payindo`
}
]
}
]
kirbotz.sendList(m.chat, `Haii *${pushname}*`, `Silahkan Pilih Menu Di Bawah`, "CLICK", "List Pembayaran By Emerald Store", seckon, { quoted: fakekirbotz })
break
case 'payqris': {
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/qr.jpg') }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pqris(pushname),
hydratedFooterText: 'Created By Emerald Store',
hydratedButtons: [{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6282228462822'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'paydana': {
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/qrdana.jpg') }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pdana(pushname),
hydratedFooterText: 'Created By Emerald Store',
hydratedButtons: [{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6282228462822'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'paygopay': {
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/qrgopay.jpg') }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pgopay(pushname),
hydratedFooterText: 'Created By Emerald Store',
hydratedButtons: [{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6282228462822'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'payovo': {
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/qrovo.jpg') }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: povo(pushname),
hydratedFooterText: 'Created By Emerald Store',
hydratedButtons: [{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6282228462822'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'payshopee': {
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/qrshopee.jpg') }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pshopee(pushname),
hydratedFooterText: 'Created By Emerald Store',
hydratedButtons: [{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6282228462822'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'paybank': {
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/kirbotz.jpg') }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pbank(pushname),
hydratedFooterText: 'Created By Emerald Store',
hydratedButtons: [{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6282228462822'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'payalfa': {
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/kirbotz.jpg') }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: palfa(pushname),
hydratedFooterText: 'Created By Emerald Store',
hydratedButtons: [{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6282228462822'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'payindo': {
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/kirbotz.jpg') }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pindo(pushname),
hydratedFooterText: 'Created By Emerald Store',
hydratedButtons: [{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6282228462822'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'topup':
const secnya = [
{
"title": `-> MENU STORE 1`,
 rows: [
{
"title": `ISI ULANG PULSA`,
"rowId": `${prefix}topuppulsa`
}
]
}
,
{
"title": `-> MENU STORE 2`,
 rows: [
{
"title": `TOP UP GAME`,
"rowId": `${prefix}topupgame`
}
]
}
,
{
"title": `-> MENU STORE 3`,
 rows: [
{
"title": `TOP UP E WALLET`,
"rowId": `${prefix}topupewallet`
}
]
}
,
{
"title": `-> MENU STORE 4`,
 rows: [
{
"title": `TOKEN LISTRIK`,
"rowId": `${prefix}topuptokenlistrik`
}
]
}
, 
{
"title": `-> MENU STORE 6`,
 rows: [
{
"title": `JASA REKBER`,
"rowId": `${prefix}jasaber`
}
]
}
]
kirbotz.sendList(m.chat, `Haii *${pushname}*`, `Silahkan Pilih Menu Di Bawah`, "CLICK", "Menu Store By Emerald Store", secnya, { quoted: fakekirbotz })
break
case 'topuppulsa':
const sectod = [
{
"title": `LIST ISI ULANG PULSA`,
 rows: [
{
"title": `PULSA TELKOMSEL`,
"rowId": `${prefix}pulsatelkomsel`
}
,
{
"title": `PULSA INDOSAT`,
"rowId": `${prefix}pulsaindosat`
}
,
{
"title": `PULSA AXIS`,
"rowId": `${prefix}pulsaaxis`
}
,
{
"title": `PULSA THREE`,
"rowId": `${prefix}pulsathree`
}
,
{
"title": `PULSA XL`,
"rowId": `${prefix}pulsaxl`
}
,
{
"title": `PULSA SMARTFREN`,
"rowId": `${prefix}pulsasmartfren`
}
]
}
]
kirbotz.sendList(m.chat, `Haii *${pushname}*`, `Silahkan Pilih Menu Di Bawah`, "CLICK", "List Isi Ulang Pulsa By Emerald Store", sectod, { quoted: fakekirbotz })
break
case 'pulsatelkomsel': {
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/telkomsel.jpg') }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: ttsel(pushname),
hydratedFooterText: 'Created By Emerald Store',
hydratedButtons: [{
quickReplyButton: {
displayText: 'FORMAT ORDER',
id: 'format'
}
},
{
quickReplyButton: {
displayText: 'PEMBAYARAN',
id: 'payment'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'pulsaindosat': {
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/indosat.jpg') }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: tind(pushname),
hydratedFooterText: 'Created By Emerald Store',
hydratedButtons: [{
quickReplyButton: {
displayText: 'FORMAT ORDER',
id: 'format'
}
},
{
quickReplyButton: {
displayText: 'PEMBAYARAN',
id: 'payment'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'pulsaaxis': {
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/axis.jpg') }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: taxs(pushname),
hydratedFooterText: 'Created By Emerald Store',
hydratedButtons: [{
quickReplyButton: {
displayText: 'FORMAT ORDER',
id: 'format'
}
},
{
quickReplyButton: {
displayText: 'PEMBAYARAN',
id: 'payment'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'pulsathree': {
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/three.jpg') }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: tthr(pushname),
hydratedFooterText: 'Created By Emerald Store',
hydratedButtons: [{
quickReplyButton: {
displayText: 'FORMAT ORDER',
id: 'format'
}
},
{
quickReplyButton: {
displayText: 'PEMBAYARAN',
id: 'payment'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'pulsaxl': {
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/xl.jpg') }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: txl(pushname),
hydratedFooterText: 'Created By Emerald Store',
hydratedButtons: [{
quickReplyButton: {
displayText: 'FORMAT ORDER',
id: 'format'
}
},
{
quickReplyButton: {
displayText: 'PEMBAYARAN',
id: 'payment'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'pulsasmartfren': {
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/smartfren.jpg') }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: tsmrt(pushname),
hydratedFooterText: 'Created By Emerald Store',
hydratedButtons: [{
quickReplyButton: {
displayText: 'FORMAT ORDER',
id: 'format'
}
},
{
quickReplyButton: {
displayText: 'PEMBAYARAN',
id: 'payment'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'topupgame':
const sectid = [
{
"title": `LIST TOP UP GAME`,
 rows: [
{
"title": `FREE FIRE`,
"rowId": `${prefix}topupff`
}
,
{
"title": `MOBILE LEGENDS`,
"rowId": `${prefix}topupml`
}
,
{
"title": `PUBG MOBILE`,
"rowId": `${prefix}topuppubg`
}
,
{
"title": `ARENA OF VALOR`,
"rowId": `${prefix}topupaov`
}
,
{
"title": `CALL OF DUTY`,
"rowId": `${prefix}topupcod`
}
,
{
"title": `HIGGS DOMINO`,
"rowId": `${prefix}topuphiggs`
}
,
{
"title": `GENSHIN IMPACT`,
"rowId": `${prefix}topupghensin`
}
,
{
"title": `VALORANT`,
"rowId": `${prefix}topupvalorant`
}
,
{
"title": `SAUSAGE MAN`,
"rowId": `${prefix}topupsausage`
}
]
}
]
kirbotz.sendList(m.chat, `Haii *${pushname}*`, `Silahkan Pilih Menu Di Bawah`, "CLICK", "List TopUp Game By Emerald Store", sectid, { quoted: fakekirbotz })
break
case 'topupsausage': {
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/sausageman.jpg') }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: tsau(pushname),
hydratedFooterText: 'Created By Emerald Store',
hydratedButtons: [{
quickReplyButton: {
displayText: 'FORMAT ORDER',
id: 'format'
}
},
{
quickReplyButton: {
displayText: 'PEMBAYARAN',
id: 'payment'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'topupvalorant': {
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/valorant.jpg') }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: tval(pushname),
hydratedFooterText: 'Created By Emerald Store',
hydratedButtons: [{
quickReplyButton: {
displayText: 'FORMAT ORDER',
id: 'format'
}
},
{
quickReplyButton: {
displayText: 'PEMBAYARAN',
id: 'payment'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'topupghensin': {
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/genshin.jpg') }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: tgen(pushname),
hydratedFooterText: 'Created By Emerald Store',
hydratedButtons: [{
quickReplyButton: {
displayText: 'FORMAT ORDER',
id: 'format'
}
},
{
quickReplyButton: {
displayText: 'PEMBAYARAN',
id: 'payment'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'topuphiggs': {
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/chip.jpg') }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: thig(pushname),
hydratedFooterText: 'Created By Emerald Store',
hydratedButtons: [{
quickReplyButton: {
displayText: 'FORMAT ORDER',
id: 'format'
}
},
{
quickReplyButton: {
displayText: 'PEMBAYARAN',
id: 'payment'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'topupff': {
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/freefire.jpg') }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: tff(pushname),
hydratedFooterText: 'Created By Emerald Store',
hydratedButtons: [{
quickReplyButton: {
displayText: 'FORMAT ORDER',
id: 'format'
}
},
{
quickReplyButton: {
displayText: 'PEMBAYARAN',
id: 'payment'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'topupml': {
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/ml.jpg') }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: tml(pushname),
hydratedFooterText: 'Created By Emerald Store',
hydratedButtons: [{
quickReplyButton: {
displayText: 'FORMAT ORDER',
id: 'format'
}
},
{
quickReplyButton: {
displayText: 'PEMBAYARAN',
id: 'payment'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'topuppubg': {
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/pubg.jpg') }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: tpubg(pushname),
hydratedFooterText: 'Created By Emerald Store',
hydratedButtons: [{
quickReplyButton: {
displayText: 'FORMAT ORDER',
id: 'format'
}
},
{
quickReplyButton: {
displayText: 'PEMBAYARAN',
id: 'payment'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'topupaov': {
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/aov.jpg') }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: taov(pushname),
hydratedFooterText: 'Created By Emerald Store',
hydratedButtons: [{
quickReplyButton: {
displayText: 'FORMAT ORDER',
id: 'format'
}
},
{
quickReplyButton: {
displayText: 'PEMBAYARAN',
id: 'payment'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'topupcod': {
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/codm.jpg') }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: tcod(pushname),
hydratedFooterText: 'Created By Emerald Store',
hydratedButtons: [{
quickReplyButton: {
displayText: 'FORMAT ORDER',
id: 'format'
}
},
{
quickReplyButton: {
displayText: 'PEMBAYARAN',
id: 'payment'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'topupewallet':
const sectfe = [
{
"title": `LIST TOP UP E WALLET`,
 rows: [
{
"title": `SALDO DANA`,
"rowId": `${prefix}topupdana`
}
,
{
"title": `SALDO GOPAY`,
"rowId": `${prefix}topupgopay`
}
,
{
"title": `SALDO OVO`,
"rowId": `${prefix}topupovo`
}
,
{
"title": `SALDO LINKAJA`,
"rowId": `${prefix}topuplinkaja`
}
,
{
"title": `SALDO SHOPEEPAY`,
"rowId": `${prefix}topupshopee`
}
]
}
]
kirbotz.sendList(m.chat, `Haii *${pushname}*`, `Silahkan Pilih Menu Di Bawah`, "CLICK", "List TopUp Ewallet By Emerald Store", sectfe, { quoted: fakekirbotz })
break
case 'topupdana': {
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/dana.jpg') }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: tdana(pushname),
hydratedFooterText: 'Created By Emerald Store',
hydratedButtons: [{
quickReplyButton: {
displayText: 'FORMAT ORDER',
id: 'format'
}
},
{
quickReplyButton: {
displayText: 'PEMBAYARAN',
id: 'payment'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'topupgopay': {
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/gopay.jpg') }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: tgopay(pushname),
hydratedFooterText: 'Created By Emerald Store',
hydratedButtons: [{
quickReplyButton: {
displayText: 'FORMAT ORDER',
id: 'format'
}
},
{
quickReplyButton: {
displayText: 'PEMBAYARAN',
id: 'payment'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'topupovo': {
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/ovo.png') }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: tovo(pushname),
hydratedFooterText: 'Created By Emerald Store',
hydratedButtons: [{
quickReplyButton: {
displayText: 'FORMAT ORDER',
id: 'format'
}
},
{
quickReplyButton: {
displayText: 'PEMBAYARAN',
id: 'payment'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'topuplinkaja': {
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/linkaja.jpg') }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: tlinkaja(pushname),
hydratedFooterText: 'Created By Emerald Store',
hydratedButtons: [{
quickReplyButton: {
displayText: 'FORMAT ORDER',
id: 'format'
}
},
{
quickReplyButton: {
displayText: 'PEMBAYARAN',
id: 'payment'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'topupshopee': {
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/shopeepay.jpg') }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: tshopee(pushname),
hydratedFooterText: 'Created By Emerald Store',
hydratedButtons: [{
quickReplyButton: {
displayText: 'FORMAT ORDER',
id: 'format'
}
},
{
quickReplyButton: {
displayText: 'PEMBAYARAN',
id: 'payment'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'zippysearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www51.zippyshare.com/v/5W0TOBz1/file.html`)
                    reply(mess.wait)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/zippyshare?apikey=${lolkey}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_txt = `File Name : ${ini_url.name_file}\n`
                    ini_txt += `Size : ${ini_url.size}\n`
                    ini_txt += `Date Upload : ${ini_url.date_upload}\n`
                    ini_txt += `Download Url : ${ini_url.download_url}`
                    replyNya(ini_txt)
                    break
case 'smeme': case 'stickermeme': case 'stickmeme': {
if (!text) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (text.includes('|')) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
m.reply(mess.wait)
arg = args.join(' ')
mee = await kirbotz.downloadAndSaveMediaMessage(quoted)
const { TelegraPh } = require('./Lib/uploader')
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${arg}.png?background=${mem}`
memek = await kirbotz.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
case 'sewa':
if (!m.key.fromMe && !isCreator) return replyNya(mess.owner)
if (!m.isGroup) return replyNya(mess.group)
if (!q) return replyNya(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
if (args[0].toLowerCase() === 'add'){
_sewa.addSewaGroup(from, args[1], sewa)
replyNya(mess.success)
} else if (args[0].toLowerCase() === 'del'){
sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
fs.writeFileSync('./Database/sewa.json', JSON.stringify(sewa))
replyNya(mess.success)
} else {
replyNya(`Penggunaan :\n*${prefix}sewa* add/del waktu`)}
break
case 'listsewa':
if (!m.isGroup) return replyNya(mess.group)
let txtnyee = `List Sewa\nJumlah : ${sewa.length}\n\n`
for (let i of sewa){
let cekvippsewa = ms(i.expired - Date.now())
txtnyee += `*ID :* ${i.id} \n*Expire :* ${cekvippsewa.days} day(s) ${cekvippsewa.hours} hour(s) ${cekvippsewa.minutes} minute(s) ${cekvippsewa.seconds} second(s)\n\n`
}
replyNya(txtnyee)
break
case 'ceksewa': 
if (!m.isGroup) return replyNya(mess.group)
if (!isSewa) return replyNya(`Group Ini Tidak Terdaftar Dalam List Sewabot. Ketik ${prefix}sewabot Untuk Info Lebih Lanjut`)
let cekvipsewa = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
let sewanya = `*「 SEWA EXPIRE 」*\n\n➸ *ID*: ${from}\n➸ *Expired :* ${cekvipsewa.days} day(s) ${cekvipsewa.hours} hour(s) ${cekvipsewa.minutes} minute(s) ${cekvipsewa.seconds} second(s)`
reply(sewanya)
break
case 'tebak': {
if (!isPrem) return replyPremium(mess.premium)
            	if (!m.isGroup) return replyNya(mess.group)
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await kirbotz.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    kirbotz.sendText(m.chat, `Judul Lagu Nya Apa??\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    kirbotz.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, kirbotz.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    kirbotz.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    kirbotz.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, kirbotz.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    kirbotz.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    kirbotz.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, kirbotz.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    kirbotz.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    kirbotz.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, kirbotz.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    kirbotz.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    kirbotz.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, kirbotz.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    kirbotz.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    kirbotz.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, kirbotz.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
		
                    }
                }
            }
            break
case 'kuismath': case 'math': {
if (!isPrem) return replyPremium(mess.premium)
            	if (!m.isGroup) return reply(mess.group)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./Lib/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix+command} medium`
                let result = await genMath(text.toLowerCase())
                kirbotz.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
case 'lirik':
if (!isPrem) return replyPremium(mess.premium)
if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
query = args.join(" ")
nanih = await fetchJson(`https://api.lolhuman.xyz/api/lirik?apikey=${lolkey}&query=${query}`)
replyNya(nanih.result)
break
case 'darkjokes':{
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
nyenye = fs.readFileSync('./Lib/darkjokes.js');
jsonData = JSON.parse(nyenye);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
hasil = await getBuffer(randKey.result)
let message = await prepareWAMessageMedia({ image: hasil }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: `Gelap Bos:v`,
hydratedFooterText: 'Created By KirBotz',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/KirBotz'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6287705048235'
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix+command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'meme':{
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
nyaa = fs.readFileSync('./Lib/meme.js');
                 jsonData = JSON.parse(nyaa);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 memeall = await getBuffer(randKey.result)
let message = await prepareWAMessageMedia({ image: memeall }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: `Gelap Bos:v`,
hydratedFooterText: 'Created By KirBotz',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/KirBotz'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6287705048235'
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix+command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'hsdxd':{
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
kntlll = fs.readFileSync('./Lib/highschooldxd.js');
                 jsonData = JSON.parse(kntlll);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 highschooldxd = await getBuffer(randKey.result)
let message = await prepareWAMessageMedia({ image: highschooldxd }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: `Gelap Bos:v`,
hydratedFooterText: 'Created By KirBotz',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/KirBotz'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6287705048235'
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix+command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'sao':{
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
kntll = fs.readFileSync('./Lib/swortartonline.js');
                 jsonData = JSON.parse(kntll);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 swordartonline = await getBuffer(randKey.result)
let message = await prepareWAMessageMedia({ image: swordartonline }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: `Gelap Bos:v`,
hydratedFooterText: 'Created By KirBotz',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/KirBotz'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6287705048235'
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix+command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'lovelive':{
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
kntl = fs.readFileSync('./Lib/lovelive.js');
                 jsonData = JSON.parse(kntl);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 lovelive = await getBuffer(randKey.result)
let message = await prepareWAMessageMedia({ image: lovelive }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: `Gelap Bos:v`,
hydratedFooterText: 'Created By KirBotz',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/KirBotz'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6287705048235'
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix+command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'listpremium':
if (!m.key.fromMe && !isCreator) return replyNya(mess.owner)
teks = '*List Premium*\n\n'
for (let kirbotz of prem) {
teks += `- ${kirbotz}\n`
}
teks += `\n*Total : ${prem.length}*`
kirbotz.sendMessage(from, { text: teks.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": prem } })
break
case 'addprem':
if (!m.isGroup) return replyNya(mess.group)
if (!m.key.fromMe && !isCreator) return replyNya(mess.owner)
bnnd = `${args[0].replace('@', '')}@s.whatsapp.net`
prem.push(bnnd)
fs.writeFileSync('./Database/premium.json', JSON.stringify(prem))
reply(`Nomor ${bnnd} Telah Menjadi Premium!`)
break
case 'delprem':
if (!m.isGroup) return replyNya(mess.group)
if (!m.key.fromMe && !isCreator) return replyNya(mess.owner)
ya = `${args[0].replace('@', '')}@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync('./Database/premium.json', JSON.stringify(prem))
reply(`Nomor ${ya} Telah Di Hapus Premium!`)
break
case 'sound1':case 'sound2':
case 'sound3':case 'sound4':case 'sound5':case 'sound6':
case 'sound7':case 'sound8':case 'sound9':case 'sound10':
case 'sound11':case 'sound12':case 'sound13':case 'sound14':
case 'sound15':case 'sound16':case 'sound17':case 'sound18':
case 'sound19':case 'sound20':case 'sound21':case 'sound22':
case 'sound23':case 'sound24':case 'sound25':case 'sound26':
case 'sound27':case 'sound28':case 'sound29':case 'sound30':
case 'sound31':case 'sound32':case 'sound33':case 'sound34':
case 'sound35':case 'sound36':case 'sound37':case 'sound38':
case 'sound39':case 'sound40':case 'sound41':case 'sound42':
case 'sound43':case 'sound44':case 'sound45':case 'sound46':
case 'sound47':case 'sound48':case 'sound49':case 'sound50':
case 'sound51':case 'sound52':case 'sound53':case 'sound54':
case 'sound55':case 'sound56':case 'sound57':case 'sound58':
case 'sound59':case 'sound60':case 'sound61':case 'sound62':
case 'sound63':case 'sound64':case 'sound65':case 'sound66':
case 'sound67':case 'sound68':case 'sound69':case 'sound70':
case 'sound71':case 'sound72':case 'sound73':case 'sound74':
if (!isPrem) return replyPremium(mess.premium)
inicdd = await getBuffer(`https://github.com/saipulanuar/Api-Github/raw/main/sound/${command}.mp3`)
kirbotz.sendMessage(m.chat, {audio: inicdd, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
break
case 'scriptbot': case 'sc': case 'script': case 'esce':{
await replyNya(`Chat Owner Di Bawah`)
}
break
case 'creator': case 'owner': {
let vcard = `BEGIN:VCARD\n`
+ `VERSION:3.0\n`
+ `N:;${namaownernya}.;;;`
+ `FN:${namaownernya}.\n`
+ `ORG:${namaownernya};\n`
+ `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
+ `item1.X-ABLabel:♕ Creator\n`
+ `item4.X-ABLabel:⚐︎ Indonesia\n`
+ `item5.X-ABLabel:⚔ KirBotz\n`
+ `END:VCARD`
let kir = await kirbotz.sendMessage(m.chat, { contacts: { displayName: `${namaownernya}`, contacts: [{ vcard }] } }, { quoted: m })
await replyOwnerr(`Ituh Ownerku Kak
Dan Ini Informasi Owner
Website ${webkir}
YouTube ${yt}
Github ${githubkir}`)
}
break
case 'credits':
const sokl = "6287705048235@s.whatsapp.net"
const sokd = "6281259121031@s.whatsapp.net"
const soka = "62881038149808@s.whatsapp.net"
const sokr = "6283127014833@s.whatsapp.net"
const sokt = "62881036690566@s.whatsapp.net"
const soky = "628871746203@s.whatsapp.net"
const soki = "6281523940672@s.whatsapp.net"
const sokf = "62895379169488@s.whatsapp.net"
teksits = `「 *Thanks To* 」
♕ Akira @${sokl.split("@")[0]}
♕ Dinata @${sokd.split("@")[0]}
♕ Ardy @${soka.split("@")[0]}
♕ Kahfz @${sokr.split("@")[0]}
♕ Zakky @${sokt.split("@")[0]}
♕ FXdev @${soky.split("@")[0]}
♕ Fardan @${soki.split("@")[0]}
♕ Fadly @${sokf.split("@")[0]}`
kirbotz.sendMessage(m.chat, { image: thumb, caption: teksits, contextInfo: {"mentionedJid": [sokl, sokd, soka, sokr, sokt, soky, soki, sokf]} }, { quoted: fakekirbotz })
break
case 'quest':
if (!isPrem) return replyPremium(mess.premium)
let sectionnya= [
{
"title": `MISI KE 1`,
 rows: [
{
"title": `Membunuh Slime`,
"description": `Berburu Slime Untuk Mendapatkan Hadiah`,
"rowId": `${prefix}slime`
}
]
}
,
{
"title": `MISI KE 2`,
 rows: [
{
"title": `Membunuh Goblin`,
"description": `Berburu Globin Untuk Mendapatkan Hadiah`,
"rowId": `${prefix}goblin`
}
]
}
,
{
"title": `MISI KE 3`,
 rows: [
{
"title": `Membunuh Devil`,
"description": `Berburu Devil Untuk Mendapatkan Hadiah`,
"rowId": `${prefix}devil`
}
]
}
,
{
"title": `MISI KE 4`,
 rows: [
{
"title": `Membunuh Behemoth`,
"description": `Berburu Behemoth Untuk Mendapatkan Hadiah`,
"rowId": `${prefix}behemoth`
}
]
}
,
{
"title": `MISI KE 5`,
 rows: [
{
"title": `Membunuh Demon`,
"description": `Berburu Demon Untuk Mendapatkan Hadiah`,
"rowId": `${prefix}demon`
}
]
}
,
{
"title": `MISI KE 6`,
 rows: [
{
"title": `Membunuh DemonKing`,
"description": `Berburu DemonKing Untuk Mendapatkan Hadiah`,
"rowId": `${prefix}demonking`
}
]
}
]
kirbotz.sendList(m.chat, `Haii *${pushname}*`, `Silahkan Pilih Di Bawah`, "CLICK", "Rpg Game By KirBotz ", sectionnya, { quoted: fakekirbotz})
break
case 'slime':
case 'killslime':
if (!isPrem) return replyPremium(mess.premium)
if (!m.isGroup) return replyNya(mess.group) 
if (!isPetualang) return replyNya(mess.noPetualang)
await sendButslime(from)
break
case 'goblin':
case 'killgoblin':
if (!isPrem) return replyPremium(mess.premium)
if (!m.isGroup) return replyNya(mess.group) 
if (!isPetualang) return replyNya(mess.noPetualang)
await sendButgoblin(from)
break
case 'devil':
case 'killdevil':
if (!isPrem) return replyPremium(mess.premium)
if (!m.isGroup) return replyNya(mess.group) 
if (!isPetualang) return replyNya(mess.noPetualang)
await sendButdevil(from)
break
case 'behemoth':
case 'killbehemoth':
if (!isPrem) return replyPremium(mess.premium)
if (!m.isGroup) return replyNya(mess.group) 
if (!isPetualang) return replyNya(mess.noPetualang)
await sendButbehemoth(from)
break
case 'demon':
case 'killdemon':
if (!isPrem) return replyPremium(mess.premium)
if (!m.isGroup) return replyNya(mess.group) 
if (!isPetualang) return replyNya(mess.noPetualang)
await sendButdemon(from)
break
case 'demonking':
case 'killdemonking':
if (!isPrem) return replyPremium(mess.premium)
if (!m.isGroup) return replyNya(mess.group) 
if (!isPetualang) return replyNya(mess.noPetualang)
await sendButdemonking(from)
break
case 'welcome': {
if (!m.isGroup) return
await replyTemplate(`Welcome Kak\nSemoga Betah Yaa\nJangan Lupa Baca Deskripsi!!!`)
}
break
case 'bye': {
if (!m.isGroup) return
await replyTemplate(`Jangan Balik Lagi Ya Tod🗿`)
}
break
case 'groupkirbotz': {
await replyTemplate(`${gckirbotz}\nGak Join Awas Di Ban Kau`)
}
break
case 'topuptokenlistrik': {
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/listrik.png') }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: ttoken(pushname),
hydratedFooterText: 'Created By KirBotz',
hydratedButtons: [{
quickReplyButton: {
displayText: 'FORMAT ORDER',
id: 'format'
}
},
{
quickReplyButton: {
displayText: 'PEMBAYARAN',
id: 'payment'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'jasaber': {
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/kirbotz.jpg') }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: jaber(pushname),
hydratedFooterText: 'Created By KirBotz',
hydratedButtons: [{
quickReplyButton: {
displayText: 'PEMBAYARAN',
id: 'payment'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'jabot': {
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/kirbotz.jpg') }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: bsewa(pushname),
hydratedFooterText: 'Created By Emerald Store',
hydratedButtons: [{
quickReplyButton: {
displayText: 'PEMBAYARAN',
id: 'payment'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'jashare': {
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/kirbotz.jpg') }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: bshare(pushname),
hydratedFooterText: 'Created By Emerald Store',
hydratedButtons: [{
quickReplyButton: {
displayText: 'PEMBAYARAN',
id: 'payment'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'menu':{
let timestamp = speed()
let latensi = speed() - timestamp
await kirbotz.send5ButGif(from, tampilan(ya, pushname, sender, isPrem, role, elit, namaownernya, namabotnya, runtime, tanggal, wib, wit, wita) , 
`I’m From Indonesia 🇲🇨`, [
{"quickReplyButton": {"displayText": "🛒 STORE 🛒","id": 'topup'}}] )
}
break
case 'allmenu':{
var Yy = 0
await sendBut5nya(`──────〇『 ${ya}Info User${ya} 』
➥ ${ya}Nama User${ya} : ${pushname}
➥ ${ya}Nomor User${ya} : ${sender.split("@")[0]}
➥ ${ya}User Premium${ya} : ${isPrem ? 'I͎y͎a͎' : 'T͎i͎d͎a͎k͎'}
➥ ${ya}Rank${ya} : ${role}
➥ ${ya}Status${ya} : ${elit}
─〇

┌──『 ${ya}Owner Menu${ya} 』
│ ${ya}${Yy+=1} $ [EXE]${ya}
│ ${ya}${Yy+=1} > [EVAL]${ya}
│ ${ya}${Yy+=1} => [ASYNC]${ya}
│ ${ya}${Yy+=1} ${prefix}sewa add waktu${ya}
│ ${ya}${Yy+=1} ${prefix}sewa del${ya}
│ ${ya}${Yy+=1} ${prefix}listsewa${ya}
│ ${ya}${Yy+=1} ${prefix}ceksewa${ya}
│ ${ya}${Yy+=1} ${prefix}join${ya}
│ ${ya}${Yy+=1} ${prefix}public${ya}
│ ${ya}${Yy+=1} ${prefix}self${ya}
│ ${ya}${Yy+=1} ${prefix}out${ya}
│ ${ya}${Yy+=1} ${prefix}addprem${ya}
│ ${ya}${Yy+=1} ${prefix}delprem${ya}
│ ${ya}${Yy+=1} ${prefix}block${ya}
│ ${ya}${Yy+=1} ${prefix}unblock${ya}
│ ${ya}${Yy+=1} ${prefix}bcall${ya}
│ ${ya}${Yy+=1} ${prefix}bcaudio${ya}
│ ${ya}${Yy+=1} ${prefix}bcvidio${ya}
│ ${ya}${Yy+=1} ${prefix}bcimg${ya}
└──────
┌──『 ${ya}Store Menu${ya} 』
│ ${ya}${Yy+=1} ${prefix}topup${ya}
│ ${ya}${Yy+=1} ${prefix}topuppulsa${ya}
│ ${ya}${Yy+=1} ${prefix}topupgame${ya}
│ ${ya}${Yy+=1} ${prefix}topupewallet${ya}
│ ${ya}${Yy+=1} ${prefix}topuptokenlistrik${ya}
└──────
┌──『 ${ya}Other Menu${ya} 』
│ ${ya}${Yy+=1} ${prefix}owner${ya}
│ ${ya}${Yy+=1} ${prefix}credits${ya}
│ ${ya}${Yy+=1} ${prefix}groupkirbotz${ya}
│ ${ya}${Yy+=1} ${prefix}rules${ya}
│ ${ya}${Yy+=1} ${prefix}donasi${ya}
│ ${ya}${Yy+=1} ${prefix}sewabot${ya}
│ ${ya}${Yy+=1} ${prefix}scriptbot${ya}
│ ${ya}${Yy+=1} ${prefix}sticker${ya}
│ ${ya}${Yy+=1} ${prefix}smeme${ya}
│ ${ya}${Yy+=1} ${prefix}attp${ya}
│ ${ya}${Yy+=1} ${prefix}ttp${ya}
│ ${ya}${Yy+=1} ${prefix}toimg${ya}
│ ${ya}${Yy+=1} ${prefix}tovideo${ya}
│ ${ya}${Yy+=1} ${prefix}tovn${ya}
│ ${ya}${Yy+=1} ${prefix}tomp3${ya}
│ ${ya}${Yy+=1} ${prefix}ssweb${ya}
│ ${ya}${Yy+=1} ${prefix}emojimix${ya}
│ ${ya}${Yy+=1} ${prefix}emoji${ya}
│ ${ya}${Yy+=1} ${prefix}lirik${ya}
│ ${ya}${Yy+=1} ${prefix}translate${ya}
│ ${ya}${Yy+=1} ${prefix}namapeople${ya}
│ ${ya}${Yy+=1} ${prefix}cerpen${ya}
│ ${ya}${Yy+=1} ${prefix}ceritahoror${ya}
│ ${ya}${Yy+=1} ${prefix}faktaunik${ya}
│ ${ya}${Yy+=1} ${prefix}katabijak${ya}
│ ${ya}${Yy+=1} ${prefix}pantun${ya}
│ ${ya}${Yy+=1} ${prefix}bucin${ya}
│ ${ya}${Yy+=1} ${prefix}randomnama${ya}
│ ${ya}${Yy+=1} ${prefix}halah${ya}
│ ${ya}${Yy+=1} ${prefix}hilih${ya}
│ ${ya}${Yy+=1} ${prefix}huluh${ya}
│ ${ya}${Yy+=1} ${prefix}heleh${ya}
│ ${ya}${Yy+=1} ${prefix}holoh${ya}
│ ${ya}${Yy+=1} ${prefix}cry${ya}
│ ${ya}${Yy+=1} ${prefix}kill${ya}
│ ${ya}${Yy+=1} ${prefix}hug${ya}
│ ${ya}${Yy+=1} ${prefix}pat${ya}
│ ${ya}${Yy+=1} ${prefix}lick${ya}
│ ${ya}${Yy+=1} ${prefix}kiss${ya}
│ ${ya}${Yy+=1} ${prefix}bite${ya}
│ ${ya}${Yy+=1} ${prefix}yeet${ya}
│ ${ya}${Yy+=1} ${prefix}bully${ya}
│ ${ya}${Yy+=1} ${prefix}bonk${ya}
│ ${ya}${Yy+=1} ${prefix}wink${ya}
│ ${ya}${Yy+=1} ${prefix}poke${ya}
│ ${ya}${Yy+=1} ${prefix}nom${ya}
│ ${ya}${Yy+=1} ${prefix}slap${ya}
│ ${ya}${Yy+=1} ${prefix}smile${ya}
│ ${ya}${Yy+=1} ${prefix}wave${ya}
│ ${ya}${Yy+=1} ${prefix}awoo${ya}
│ ${ya}${Yy+=1} ${prefix}blush${ya}
│ ${ya}${Yy+=1} ${prefix}smug${ya}
│ ${ya}${Yy+=1} ${prefix}glomp${ya}
│ ${ya}${Yy+=1} ${prefix}happy${ya}
│ ${ya}${Yy+=1} ${prefix}dance${ya}
│ ${ya}${Yy+=1} ${prefix}cringe${ya}
│ ${ya}${Yy+=1} ${prefix}cuddle${ya}
│ ${ya}${Yy+=1} ${prefix}highfive${ya}
│ ${ya}${Yy+=1} ${prefix}handhold${ya}
│ ${ya}${Yy+=1} ${prefix}dadu${ya}
│ ${ya}${Yy+=1} ${prefix}patrick${ya}
│ ${ya}${Yy+=1} ${prefix}amongus${ya}
│ ${ya}${Yy+=1} ${prefix}gawrgura${ya}
│ ${ya}${Yy+=1} ${prefix}anjing${ya}
│ ${ya}${Yy+=1} ${prefix}bucinstick${ya}
└──────
┌──『 ${ya}Wibu Menu${ya} 』
│ ${ya}${Yy+=1} ${prefix}anime${ya}
│ ${ya}${Yy+=1} ${prefix}nhentai${ya}
│ ${ya}${Yy+=1} ${prefix}nekopoisearch${ya}
│ ${ya}${Yy+=1} ${prefix}nekopoi${ya}
│ ${ya}${Yy+=1} ${prefix}kusonime${ya}
│ ${ya}${Yy+=1} ${prefix}lk21${ya}
│ ${ya}${Yy+=1} ${prefix}character${ya}
│ ${ya}${Yy+=1} ${prefix}manga${ya}
│ ${ya}${Yy+=1} ${prefix}gimage${ya}
│ ${ya}${Yy+=1} ${prefix}pinterest${ya}
│ ${ya}${Yy+=1} ${prefix}pinterest2${ya}
└──────
┌──『 ${ya}Group Menu${ya} 』
│ ${ya}${Yy+=1} ${prefix}linkgroup${ya}
│ ${ya}${Yy+=1} ${prefix}antilink <on>${ya}
│ ${ya}${Yy+=1} ${prefix}antilink <off>${ya}
│ ${ya}${Yy+=1} ${prefix}antiwame <on>${ya}
│ ${ya}${Yy+=1} ${prefix}antiwame <off>${ya}
│ ${ya}${Yy+=1} ${prefix}autosticker <1>${ya}
│ ${ya}${Yy+=1} ${prefix}autosticker <0>${ya}
│ ${ya}${Yy+=1} ${prefix}group <open>${ya}
│ ${ya}${Yy+=1} ${prefix}group <close>${ya}
│ ${ya}${Yy+=1} ${prefix}add 628××××${ya}
│ ${ya}${Yy+=1} ${prefix}kick @tag${ya}
│ ${ya}${Yy+=1} ${prefix}tagall <teks>${ya}
│ ${ya}${Yy+=1} ${prefix}hidetag <teks>${ya}
│ ${ya}${Yy+=1} ${prefix}promote @tag${ya}
│ ${ya}${Yy+=1} ${prefix}demote @tag${ya}
│ ${ya}${Yy+=1} ${prefix}setppgc <reply foto>${ya}
│ ${ya}${Yy+=1} ${prefix}setname <name>${ya}
│ ${ya}${Yy+=1} ${prefix}setdesc <teks>${ya}
│ ${ya}${Yy+=1} ${prefix}listgc${ya}
└──────
┌──『 ${ya}Game Menu${ya} 』
│ ${ya}${Yy+=1} ${prefix}goblokcek${ya} 
│ ${ya}${Yy+=1} ${prefix}jelekcek${ya} 
│ ${ya}${Yy+=1} ${prefix}gaycek${ya}
│ ${ya}${Yy+=1} ${prefix}lesbicek${ya}
│ ${ya}${Yy+=1} ${prefix}gantengcek${ya} 
│ ${ya}${Yy+=1} ${prefix}cantikcek${ya}
│ ${ya}${Yy+=1} ${prefix}begocek${ya} 
│ ${ya}${Yy+=1} ${prefix}suhucek${ya}
│ ${ya}${Yy+=1} ${prefix}pintercek${ya}
│ ${ya}${Yy+=1} ${prefix}jagocek${ya}
│ ${ya}${Yy+=1} ${prefix}nolepcek${ya}
│ ${ya}${Yy+=1} ${prefix}babicek${ya}
│ ${ya}${Yy+=1} ${prefix}bebancek${ya}
│ ${ya}${Yy+=1} ${prefix}baikcek${ya}
│ ${ya}${Yy+=1} ${prefix}jahatcek${ya}
│ ${ya}${Yy+=1} ${prefix}anjingcek${ya}
│ ${ya}${Yy+=1} ${prefix}haramcek${ya}
│ ${ya}${Yy+=1} ${prefix}pakboycek${ya}
│ ${ya}${Yy+=1} ${prefix}pakgirlcek${ya}
│ ${ya}${Yy+=1} ${prefix}sangecek${ya} 
│ ${ya}${Yy+=1} ${prefix}bapercek${ya}
│ ${ya}${Yy+=1} ${prefix}fakboycek${ya}
│ ${ya}${Yy+=1} ${prefix}alimcek${ya}
│ ${ya}${Yy+=1} ${prefix}suhucek${ya}
│ ${ya}${Yy+=1} ${prefix}fakgirlcek${ya}
│ ${ya}${Yy+=1} ${prefix}kerencek${ya}
│ ${ya}${Yy+=1} ${prefix}wibucek${ya}
│ ${ya}${Yy+=1} ${prefix}pasarkascek${ya}
│ ${ya}${Yy+=1} ${prefix}jadian${ya}
│ ${ya}${Yy+=1} ${prefix}apakah${ya}
│ ${ya}${Yy+=1} ${prefix}rate${ya}
│ ${ya}${Yy+=1} ${prefix}kapankah${ya}
│ ${ya}${Yy+=1} ${prefix}bisakah${ya}
│ ${ya}${Yy+=1} ${prefix}kuismath${ya}
│ ${ya}${Yy+=1} ${prefix}tebak lagu${ya}
│ ${ya}${Yy+=1} ${prefix}tebak gambar${ya}
│ ${ya}${Yy+=1} ${prefix}tebak kata${ya}
│ ${ya}${Yy+=1} ${prefix}tebak kalimat${ya}
│ ${ya}${Yy+=1} ${prefix}tebak lirik${ya}
│ ${ya}${Yy+=1} ${prefix}tebak lontong${ya}
└──────
┌──『 ${ya}Download Menu${ya} 』
│ ${ya}${Yy+=1} ${prefix}ytsearch <query>${ya}
│ ${ya}${Yy+=1} ${prefix}play <query>${ya}
│ ${ya}${Yy+=1} ${prefix}ytmp4 <link>${ya}
│ ${ya}${Yy+=1} ${prefix}ytmp3 <link>${ya}
│ ${ya}${Yy+=1} ${prefix}tiktoknowm <link>${ya}
│ ${ya}${Yy+=1} ${prefix}tiktokaudio <link>${ya}
│ ${ya}${Yy+=1} ${prefix}mediafire <link>${ya}
│ ${ya}${Yy+=1} ${prefix}xnxxsearch <query>${ya}
│ ${ya}${Yy+=1} ${prefix}xnxxvideo <link>${ya}
│ ${ya}${Yy+=1} ${prefix}spotify <link>${ya}
│ ${ya}${Yy+=1} ${prefix}spotifysearch <query>${ya}
│ ${ya}${Yy+=1} ${prefix}jooxplay <query>${ya}
│ ${ya}${Yy+=1} ${prefix}zippysearch <link>${ya}
│ ${ya}${Yy+=1} ${prefix}tiktokstalk <nama tiktok>${ya}
│ ${ya}${Yy+=1} ${prefix}githubstalk <nama github>${ya}
│ ${ya}${Yy+=1} ${prefix}igstalk <nama ig>${ya}
│ ${ya}${Yy+=1} ${prefix}ytstalk <nama yt>${ya}
└──────
┌──『 ${ya}Islam Menu${ya} 』
│ ${ya}${Yy+=1} ${prefix}asmaulhusna${ya}
│ ${ya}${Yy+=1} ${prefix}iqra${ya}
│ ${ya}${Yy+=1} ${prefix}hadist${ya}
│ ${ya}${Yy+=1} ${prefix}juzamma${ya}
│ ${ya}${Yy+=1} ${prefix}listsurah${ya}
│ ${ya}${Yy+=1} ${prefix}jadwalsholat${ya}
│ ${ya}${Yy+=1} ${prefix}kisahnabi${ya}
│ ${ya}${Yy+=1} ${prefix}tafsirsurah${ya}
└──────
┌──『 ${ya}Sound Menu${ya} 』
│ ${ya}${Yy+=1} ${prefix}sound1${ya}
│ ${ya}${Yy+=1} ${prefix}sound2${ya}
│ ${ya}${Yy+=1} ${prefix}sound3${ya}
│ ${ya}${Yy+=1} ${prefix}sound4${ya}
│ ${ya}${Yy+=1} ${prefix}sound5${ya}
│ ${ya}${Yy+=1} ${prefix}sound6${ya}
│ ${ya}${Yy+=1} ${prefix}sound7${ya}
│ ${ya}${Yy+=1} ${prefix}sound8${ya}
│ ${ya}${Yy+=1} ${prefix}sound9${ya}
│ ${ya}${Yy+=1} ${prefix}sound10${ya}
│ ${ya}${Yy+=1} ${prefix}sound11${ya}
│ ${ya}${Yy+=1} ${prefix}sound12${ya}
│ ${ya}${Yy+=1} ${prefix}sound13${ya}
│ ${ya}${Yy+=1} ${prefix}sound14${ya}
│ ${ya}${Yy+=1} ${prefix}sound15${ya}
│ ${ya}${Yy+=1} ${prefix}sound16${ya}
│ ${ya}${Yy+=1} ${prefix}sound17${ya}
│ ${ya}${Yy+=1} ${prefix}sound18${ya}
│ ${ya}${Yy+=1} ${prefix}sound19${ya}
│ ${ya}${Yy+=1} ${prefix}sound20${ya}
│ ${ya}${Yy+=1} ${prefix}sound21${ya}
│ ${ya}${Yy+=1} ${prefix}sound22${ya}
│ ${ya}${Yy+=1} ${prefix}sound23${ya}
│ ${ya}${Yy+=1} ${prefix}sound24${ya}
│ ${ya}${Yy+=1} ${prefix}sound25${ya}
│ ${ya}${Yy+=1} ${prefix}sound26${ya}
│ ${ya}${Yy+=1} ${prefix}sound27${ya}
│ ${ya}${Yy+=1} ${prefix}sound28${ya}
│ ${ya}${Yy+=1} ${prefix}sound29${ya}
│ ${ya}${Yy+=1} ${prefix}sound30${ya}
│ ${ya}${Yy+=1} ${prefix}sound31${ya}
│ ${ya}${Yy+=1} ${prefix}sound32${ya}
│ ${ya}${Yy+=1} ${prefix}sound33${ya}
│ ${ya}${Yy+=1} ${prefix}sound34${ya}
│ ${ya}${Yy+=1} ${prefix}sound35${ya}
│ ${ya}${Yy+=1} ${prefix}sound36${ya}
│ ${ya}${Yy+=1} ${prefix}sound37${ya}
│ ${ya}${Yy+=1} ${prefix}sound38${ya}
│ ${ya}${Yy+=1} ${prefix}sound39${ya}
│ ${ya}${Yy+=1} ${prefix}sound40${ya}
│ ${ya}${Yy+=1} ${prefix}sound41${ya}
│ ${ya}${Yy+=1} ${prefix}sound42${ya}
│ ${ya}${Yy+=1} ${prefix}sound43${ya}
│ ${ya}${Yy+=1} ${prefix}sound44${ya}
│ ${ya}${Yy+=1} ${prefix}sound45${ya}
│ ${ya}${Yy+=1} ${prefix}sound46${ya}
│ ${ya}${Yy+=1} ${prefix}sound47${ya}
│ ${ya}${Yy+=1} ${prefix}sound48${ya}
│ ${ya}${Yy+=1} ${prefix}sound49${ya}
│ ${ya}${Yy+=1} ${prefix}sound50${ya}
│ ${ya}${Yy+=1} ${prefix}sound51${ya}
│ ${ya}${Yy+=1} ${prefix}sound52${ya}
│ ${ya}${Yy+=1} ${prefix}sound53${ya}
│ ${ya}${Yy+=1} ${prefix}sound54${ya}
│ ${ya}${Yy+=1} ${prefix}sound55${ya}
│ ${ya}${Yy+=1} ${prefix}sound56${ya}
│ ${ya}${Yy+=1} ${prefix}sound57${ya}
│ ${ya}${Yy+=1} ${prefix}sound58${ya}
│ ${ya}${Yy+=1} ${prefix}sound59${ya}
│ ${ya}${Yy+=1} ${prefix}sound60${ya}
│ ${ya}${Yy+=1} ${prefix}sound61${ya}
│ ${ya}${Yy+=1} ${prefix}sound62${ya}
│ ${ya}${Yy+=1} ${prefix}sound63${ya}
│ ${ya}${Yy+=1} ${prefix}sound64${ya}
│ ${ya}${Yy+=1} ${prefix}sound65${ya}
│ ${ya}${Yy+=1} ${prefix}sound66${ya}
│ ${ya}${Yy+=1} ${prefix}sound67${ya}
│ ${ya}${Yy+=1} ${prefix}sound68${ya}
│ ${ya}${Yy+=1} ${prefix}sound69${ya}
│ ${ya}${Yy+=1} ${prefix}sound70${ya}
│ ${ya}${Yy+=1} ${prefix}sound71${ya}
│ ${ya}${Yy+=1} ${prefix}sound72${ya}
│ ${ya}${Yy+=1} ${prefix}sound73${ya}
│ ${ya}${Yy+=1} ${prefix}sound74${ya}
└──────
┌──『 ${ya}Logo Menu${ya} 』
│ ${ya}${Yy+=1} ${prefix}tololserti${ya}
│ ${ya}${Yy+=1} ${prefix}shadow${ya}
│ ${ya}${Yy+=1} ${prefix}cup${ya}
│ ${ya}${Yy+=1} ${prefix}cup1${ya}
│ ${ya}${Yy+=1} ${prefix}romance${ya}
│ ${ya}${Yy+=1} ${prefix}smoke${ya}
│ ${ya}${Yy+=1} ${prefix}burnpaper${ya}
│ ${ya}${Yy+=1} ${prefix}lovemessage${ya}
│ ${ya}${Yy+=1} ${prefix}undergrass${ya}
│ ${ya}${Yy+=1} ${prefix}love${ya}
│ ${ya}${Yy+=1} ${prefix}coffe${ya}
│ ${ya}${Yy+=1} ${prefix}woodheart${ya}
│ ${ya}${Yy+=1} ${prefix}woodenboard${ya}
│ ${ya}${Yy+=1} ${prefix}summer3d${ya}
│ ${ya}${Yy+=1} ${prefix}wolfmetal${ya}
│ ${ya}${Yy+=1} ${prefix}nature3d${ya}
│ ${ya}${Yy+=1} ${prefix}underwater${ya}
│ ${ya}${Yy+=1} ${prefix}golderrose${ya}
│ ${ya}${Yy+=1} ${prefix}summernature${ya}
│ ${ya}${Yy+=1} ${prefix}letterleaves${ya}
│ ${ya}${Yy+=1} ${prefix}glowingneon${ya}
│ ${ya}${Yy+=1} ${prefix}fallleaves${ya}
│ ${ya}${Yy+=1} ${prefix}flamming${ya}
│ ${ya}${Yy+=1} ${prefix}harrypotter${ya}
│ ${ya}${Yy+=1} ${prefix}carvedwood${ya}
│ ${ya}${Yy+=1} ${prefix}tiktokmaker${ya}
│ ${ya}${Yy+=1} ${prefix}ktpmaker${ya}
│ ${ya}${Yy+=1} ${prefix}arcade8bit${ya}
│ ${ya}${Yy+=1} ${prefix}battlefield4${ya}
│ ${ya}${Yy+=1} ${prefix}pubg${ya}
│ ${ya}${Yy+=1} ${prefix}pornhub${ya}
│ ${ya}${Yy+=1} ${prefix}glitch${ya}
│ ${ya}${Yy+=1} ${prefix}avenger${ya}
│ ${ya}${Yy+=1} ${prefix}space${ya}
│ ${ya}${Yy+=1} ${prefix}ninjalogo${ya}
│ ${ya}${Yy+=1} ${prefix}marvelstudio${ya}
│ ${ya}${Yy+=1} ${prefix}lionlogo${ya}
│ ${ya}${Yy+=1} ${prefix}wolflogo${ya}
│ ${ya}${Yy+=1} ${prefix}steel3d${ya}
│ ${ya}${Yy+=1} ${prefix}wallgravity${ya}
│ ${ya}${Yy+=1} ${prefix}coolgravity${ya}
│ ${ya}${Yy+=1} ${prefix}wetglass${ya}
│ ${ya}${Yy+=1} ${prefix}multicolor3d${ya}
│ ${ya}${Yy+=1} ${prefix}watercolor${ya}
│ ${ya}${Yy+=1} ${prefix}luxurygold${ya}
│ ${ya}${Yy+=1} ${prefix}galaxywallpaper${ya}
│ ${ya}${Yy+=1} ${prefix}lighttext${ya}
│ ${ya}${Yy+=1} ${prefix}beautifulflower${ya}
│ ${ya}${Yy+=1} ${prefix}puppycute${ya}
│ ${ya}${Yy+=1} ${prefix}royaltext${ya}
│ ${ya}${Yy+=1} ${prefix}heartshaped${ya}
│ ${ya}${Yy+=1} ${prefix}birthdaycake${ya}
│ ${ya}${Yy+=1} ${prefix}galaxystyle${ya}
│ ${ya}${Yy+=1} ${prefix}hologram3d${ya}
│ ${ya}${Yy+=1} ${prefix}greenneon${ya}
│ ${ya}${Yy+=1} ${prefix}glossychrome${ya}
│ ${ya}${Yy+=1} ${prefix}greenbush${ya}
│ ${ya}${Yy+=1} ${prefix}metallogo${ya}
│ ${ya}${Yy+=1} ${prefix}noeltext${ya}
│ ${ya}${Yy+=1} ${prefix}glittergold${ya}
│ ${ya}${Yy+=1} ${prefix}textcake${ya}
│ ${ya}${Yy+=1} ${prefix}starsnight${ya}
│ ${ya}${Yy+=1} ${prefix}wooden3d${ya}
│ ${ya}${Yy+=1} ${prefix}textbyname${ya}
│ ${ya}${Yy+=1} ${prefix}writegalacy${ya}
│ ${ya}${Yy+=1} ${prefix}galaxybat${ya}
│ ${ya}${Yy+=1} ${prefix}snow3d${ya}
│ ${ya}${Yy+=1} ${prefix}birthdayday${ya}
│ ${ya}${Yy+=1} ${prefix}goldplaybutton${ya}
│ ${ya}${Yy+=1} ${prefix}silverplaybutton${ya}
│ ${ya}${Yy+=1} ${prefix}freefire${ya}
│ ${ya}${Yy+=1} ${prefix}blackpink${ya}
│ ${ya}${Yy+=1} ${prefix}neon${ya}
│ ${ya}${Yy+=1} ${prefix}greenneon${ya}
│ ${ya}${Yy+=1} ${prefix}advanceglow${ya}
│ ${ya}${Yy+=1} ${prefix}futureneon${ya}
│ ${ya}${Yy+=1} ${prefix}sandwriting${ya}
│ ${ya}${Yy+=1} ${prefix}sandsummer${ya}
│ ${ya}${Yy+=1} ${prefix}sandengraved${ya}
│ ${ya}${Yy+=1} ${prefix}metaldark${ya}
│ ${ya}${Yy+=1} ${prefix}neonlight${ya}
│ ${ya}${Yy+=1} ${prefix}holographic${ya}
│ ${ya}${Yy+=1} ${prefix}text1917${ya}
│ ${ya}${Yy+=1} ${prefix}minion${ya}
│ ${ya}${Yy+=1} ${prefix}deluxesilver${ya}
│ ${ya}${Yy+=1} ${prefix}newyearcard${ya}
│ ${ya}${Yy+=1} ${prefix}bloodfrosted${ya}
│ ${ya}${Yy+=1} ${prefix}halloween${ya}
│ ${ya}${Yy+=1} ${prefix}jokerlogo${ya}
│ ${ya}${Yy+=1} ${prefix}fireworksparkle${ya}
│ ${ya}${Yy+=1} ${prefix}natureleaves${ya}
│ ${ya}${Yy+=1} ${prefix}bokeh${ya}
│ ${ya}${Yy+=1} ${prefix}toxic${ya}
│ ${ya}${Yy+=1} ${prefix}strawberry${ya}
│ ${ya}${Yy+=1} ${prefix}box3d${ya}
│ ${ya}${Yy+=1} ${prefix}roadwarning${ya}
│ ${ya}${Yy+=1} ${prefix}breakwall${ya}
│ ${ya}${Yy+=1} ${prefix}icecold${ya}
│ ${ya}${Yy+=1} ${prefix}luxury${ya}
│ ${ya}${Yy+=1} ${prefix}cloud${ya}
│ ${ya}${Yy+=1} ${prefix}summersand${ya}
│ ${ya}${Yy+=1} ${prefix}horrorblood${ya}
│ ${ya}${Yy+=1} ${prefix}thunder${ya}
└──────
┌──『 ${ya}Random Foto${ya} 』
│ ${ya}${Yy+=1} ${prefix}hentai${ya}
│ ${ya}${Yy+=1} ${prefix}ahegao${ya}
│ ${ya}${Yy+=1} ${prefix}ass${ya}
│ ${ya}${Yy+=1} ${prefix}bdsm${ya}
│ ${ya}${Yy+=1} ${prefix}cuckold${ya}
│ ${ya}${Yy+=1} ${prefix}cum${ya}
│ ${ya}${Yy+=1} ${prefix}ero${ya}
│ ${ya}${Yy+=1} ${prefix}femdom${ya}
│ ${ya}${Yy+=1} ${prefix}foot${ya}
│ ${ya}${Yy+=1} ${prefix}gangbang${ya}
│ ${ya}${Yy+=1} ${prefix}glasses${ya}
│ ${ya}${Yy+=1} ${prefix}jahy${ya}
│ ${ya}${Yy+=1} ${prefix}masturbation${ya}
│ ${ya}${Yy+=1} ${prefix}orgy${ya}
│ ${ya}${Yy+=1} ${prefix}panties${ya}
│ ${ya}${Yy+=1} ${prefix}pussy${ya}
│ ${ya}${Yy+=1} ${prefix}thighs${ya}
│ ${ya}${Yy+=1} ${prefix}yuri${ya}
│ ${ya}${Yy+=1} ${prefix}wallpaper${ya}
│ ${ya}${Yy+=1} ${prefix}wallpapermeme${ya}
│ ${ya}${Yy+=1} ${prefix}wallpaperprogamer${ya}
│ ${ya}${Yy+=1} ${prefix}wallpapergamer${ya}
│ ${ya}${Yy+=1} ${prefix}wallpaperanime${ya}
│ ${ya}${Yy+=1} ${prefix}wallpaperteknologi${ya}
│ ${ya}${Yy+=1} ${prefix}wallpapercyber${ya}
│ ${ya}${Yy+=1} ${prefix}wallpaperinori${ya}
│ ${ya}${Yy+=1} ${prefix}wallpaperislami${ya}
│ ${ya}${Yy+=1} ${prefix}darkjokes${ya}
│ ${ya}${Yy+=1} ${prefix}meme${ya}
│ ${ya}${Yy+=1} ${prefix}hsdxd${ya}
│ ${ya}${Yy+=1} ${prefix}sao${ya}
│ ${ya}${Yy+=1} ${prefix}lovelive${ya}
│ ${ya}${Yy+=1} ${prefix}translate${ya}
│ ${ya}${Yy+=1} ${prefix}pinterest${ya}
│ ${ya}${Yy+=1} ${prefix}ppcouple${ya}
│ ${ya}${Yy+=1} ${prefix}hijaber${ya}
│ ${ya}${Yy+=1} ${prefix}cecan${ya}
│ ${ya}${Yy+=1} ${prefix}cecan2${ya}
│ ${ya}${Yy+=1} ${prefix}cogan${ya}
│ ${ya}${Yy+=1} ${prefix}waifu${ya}
│ ${ya}${Yy+=1} ${prefix}loli${ya}
│ ${ya}${Yy+=1} ${prefix}husbu${ya}
│ ${ya}${Yy+=1} ${prefix}milf${ya}
│ ${ya}${Yy+=1} ${prefix}cosplay${ya}
│ ${ya}${Yy+=1} ${prefix}wallml${ya}
│ ${ya}${Yy+=1} ${prefix}art${ya}
│ ${ya}${Yy+=1} ${prefix}bts${ya}
│ ${ya}${Yy+=1} ${prefix}exo${ya}
│ ${ya}${Yy+=1} ${prefix}elf${ya}
│ ${ya}${Yy+=1} ${prefix}neko${ya}
│ ${ya}${Yy+=1} ${prefix}shota${ya}
│ ${ya}${Yy+=1} ${prefix}sagiri${ya}
│ ${ya}${Yy+=1} ${prefix}shinobu${ya}
│ ${ya}${Yy+=1} ${prefix}megumin${ya}
│ ${ya}${Yy+=1} ${prefix}wallnime${ya}
│ ${ya}${Yy+=1} ${prefix}chiisaihentai${ya}
│ ${ya}${Yy+=1} ${prefix}trap${ya}
│ ${ya}${Yy+=1} ${prefix}blowjob${ya}
│ ${ya}${Yy+=1} ${prefix}yaoi${ya}
│ ${ya}${Yy+=1} ${prefix}ecchi${ya}
│ ${ya}${Yy+=1} ${prefix}ahegao${ya}
│ ${ya}${Yy+=1} ${prefix}hololewd${ya}
│ ${ya}${Yy+=1} ${prefix}sideoppai${ya}
│ ${ya}${Yy+=1} ${prefix}animefeets${ya}
│ ${ya}${Yy+=1} ${prefix}animebooty${ya}
│ ${ya}${Yy+=1} ${prefix}animethighss${ya}
│ ${ya}${Yy+=1} ${prefix}hentaiparadise${ya}
│ ${ya}${Yy+=1} ${prefix}animearmpits${ya}
│ ${ya}${Yy+=1} ${prefix}hentaifemdom${ya}
│ ${ya}${Yy+=1} ${prefix}lewdanimegirls${ya}
│ ${ya}${Yy+=1} ${prefix}biganimetiddies${ya}
│ ${ya}${Yy+=1} ${prefix}animebellybutton${ya}
│ ${ya}${Yy+=1} ${prefix}hentai4everyone${ya}
└──────
┌──『 ${ya}Random Video${ya} 』
│ ${ya}${Yy+=1} ${prefix}storyanime${ya}
│ ${ya}${Yy+=1} ${prefix}asupan${ya}
│ ${ya}${Yy+=1} ${prefix}asupan2${ya}
│ ${ya}${Yy+=1} ${prefix}asupan3${ya}
│ ${ya}${Yy+=1} ${prefix}bokep${ya}
│ ${ya}${Yy+=1} ${prefix}bocil${ya}
│ ${ya}${Yy+=1} ${prefix}santuy${ya}
│ ${ya}${Yy+=1} ${prefix}ukhty${ya}
└──────`)}
break
case 'tes':{
let btn = [{
urlButton: {
displayText: 'Group Bot',
url: `${gckirbotz}`
}
}
,
{
quickReplyButton: {
displayText: 'M E N U',
id: `${prefix}menu`
}
}]
kirbotz.send5Loc(m.chat, `On Kak Silahkan Pencet Button Di Bawah\nJika Button Tidak Kelihatan Ketik ${prefix}menu`, `Created By KirBotz`, global.thumb, btn)
}
break
case 'Assalamualaikum': case 'assalamualaikum':{
replyNya(`Waalaikumsalam Kak *${pushname}*`)
}
break
case 'userkirbotz':{
replyNya(`*${Object.keys(global.db.data.users).length} User*`)
}
break
case 'rules': {
ules = `${ucapanWaktu} 𝐊𝐚𝐤 *${pushname}*
*RULES!!!*
- NO SHARE LINK GC LAIN
- NO SHARE LINK YG BERBAU 4NO
- NO SHARE LINK PHISING
- NO SHARE VIRTEX
*MELANGGAR? ULTI CHOU*

*NOTE*: JIKA KE RIPP TIDAK PAKE ADMIN SINI JANGAN KOAR�*

𒍮 𝑶𝒘𝒏𝒆𝒓 𝑩𝒐𝒕𝒛 ↓↓
_*https://wa.me/6282228462822*_`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/kirbotz.jpg') }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: ules,
hydratedFooterText: 'Jika Kamu Menemukan Semacam Bug Atau Kesalahan Mohon Dimaklumi Dulu Yaa, Lapor Owner Jika Perlu Atau Mendesak 🙏',
hydratedButtons: [{
urlButton: {
displayText: 'Owner Bot',
url: `${wame}`
}
},
{
urlButton: {
displayText: 'Script Bot',
url: `https://youtube.com/channel/UC7NslQroUqQYzo2wDFBOUMg`
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'listpc': {
            	if (!m.key.fromMe && !isCreator) return replyNya(mess.owner)
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 kirbotz.sendTextWithMentions(m.chat, teks, m)
             }
             break
case 'block': {
		if (!isCreator) return replyNya(mess.owner)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await kirbotz.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
break
case 'unblock': {
		if (!isCreator) return replyNya(mess.owner)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await kirbotz.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
case 'bcimg': case 'bcvidio': case 'bcaudio': {
if (!isCreator) return replyNya(mess.owner)
if (!/video/.test(mime) && !/image/.test(mime) && !/audio/.test(mime)) return replyNya(`Kirim/Reply Video/Audio/Image Yang Ingin Di Broadcast Dengan Caption ${prefix + command}`)
let anu = await store.chats.all().map(v => v.id)
replyNya(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
let butoon = [{
urlButton: {
displayText: `Owner Bot`,
url: `${wame}`
}
},
{
quickReplyButton: {
displayText: 'List Menu',
id: 'menu'
}
}]
let media = await kirbotz.downloadAndSaveMediaMessage(quoted)
let buffer = fs.readFileSync(media)
if (/webp/.test(mime)) {
kirbotz.sendMessage(i, { sticker: { url: media } }, { quoted: m })
} else if (/image/.test(mime)) {
let junn = `*_BROADCAST IMAGE_*${text ? '\n\n' + text : ''}`
kirbotz.send5ButImg(i, junn, `Created By KirBotz`, buffer, butoon)
} else if (/video/.test(mime)) {
let junn = `*_BROADCAST VIDIO_*${text ? '\n\n' + text : ''}`
kirbotz.send5Vid(i, junn, `Created By KirBotz`, buffer, butoon)
} else if (/audio/.test(mime)) {
kirbotz.sendMessage(i, {audio: buffer, mimetype: 'audio/mpeg'}, { quoted : m })
} else {
replyNya(`Kirim/Reply Video/Audio/Image Yang Ingin Di Broadcast Dengan Caption ${prefix + command}`)
}
await fs.unlinkSync(media)
}
replyNya(`Sukses Mengirim Broadcast Ke ${anu.length} Chats`)
}
break
case 'bcall': {
                if (!isCreator) return replyNya(mess.owner)
                if (!text) return replyNya(`Text mana?\n\nExample : ${prefix + command} fatih-san`)
                let anu = await store.chats.all().map(v => v.id)
                replyNya(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'Group Bot',
                                    url: `${gckirbotz}`
                                }
                            }, {
                                callButton: {
                                    displayText: 'Nomor Owner',
                                    phoneNumber: '6287705048235'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      kirbotz.send5ButImg(yoi, txt, kirbotz.user.name, global.thumb, btn)
		}
		replyNya('Sukses Broadcast')
            }
            break
case 'asupan': case 'asupan2':{
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
hasilnya = await getBuffer(`https://api.zacros.my.id/asupan/random`)
let btn = [{
                                urlButton: {
                                    displayText: 'Group Bot',
                                    url: `${gckirbotz}`
                                }
                            },
                            {
                                quickReplyButton: {
                                    displayText: 'Next',
                                    id: `${prefix+command}`
                                }  
                            }]
                      kirbotz.send5Vid(m.chat, `Nih Kak`, kirbotz.user.name, hasilnya, btn)
                      }
                      break
case 'chiisaihentai':
case 'trap':
case 'blowjob':
case 'yaoi':
case 'ecchi':
case 'ahegao':
case 'hololewd':
case 'sideoppai':
case 'animefeets':
case 'animebooty':
case 'animethighss':
case 'hentaiparadise':
case 'animearmpits':
case 'hentaifemdom':
case 'lewdanimegirls':
case 'biganimetiddies':
case 'animebellybutton':
case 'hentai4everyone':{
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
hasil = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lolkey}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: hasil }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'Created By KirBotz',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/KirBotz'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6287705048235'
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix+command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'asupan3':{
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
hasiltod = await fetchJson(`https://api.lolhuman.xyz/api/asupan?apikey=${lolkey}`)
kirbotz.sendMessage(m.chat, { video: { url: hasiltod.result }, mimetype: 'video/mp4', fileName: `asupan.mp4`, caption: `Nih Asupan Nya` }, { quoted: fakekirbotz })
}
break
case 'ukhty':{
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
hasily = await fetchJson(`https://spybot-api.herokuapp.com/api/asupan/ukty?apikey=SpyBotApi`)
kirbotz.sendMessage(m.chat, { video: { url: hasily.result.url }, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Asupan Nya` }, { quoted: fakekirbotz })
}
break
case 'santuy':{
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
hasily = await fetchJson(`https://raku-web.herokuapp.com/api/asupan/santuy?apikey=RakuKeyTod`)
kirbotz.sendMessage(m.chat, { video: { url: hasily.result.url }, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Asupan Nya` }, { quoted: fakekirbotz })
}
break
case 'bocil':{
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
hasily = await fetchJson(`https://spybot-api.herokuapp.com/api/asupan/bocil?apikey=SpyBotApi`)
kirbotz.sendMessage(m.chat, { video: { url: hasily.result.url }, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Asupan Nya` }, { quoted: fakekirbotz })
}
break
case 'bokep':{
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
dwhe = await getBuffer(`https://raku-web.herokuapp.com/api/bokep?apikey=RakuKeyTod`)
kirbotz.sendMessage(m.chat, { video: dwhe, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Bokep Nya` }, { quoted: fakekirbotz })
}
break
case 'storyanime':{
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
hasiltod = await fetchJson(`https://api.lolhuman.xyz/api/storynime?apikey=${lolkey}`)
kirbotz.sendMessage(m.chat, { video: { url: hasiltod.result }, mimetype: 'video/mp4', fileName: `storyanime.mp4`, caption: `Nih Story Animenya` }, { quoted: fakekirbotz })
}
break
case 'out':{
if (!isCreator) return replyNya(mess.owner)
kirbotz.groupLeave(from)
}
break
case 'public': {
if (!isCreator) return replyNya(mess.owner)
kirbotz.public = true
replyNya('Sukses Kak')
}
break
case 'self': {
if (!isCreator) return replyNya(mess.owner)
kirbotz.public = false
replyNya('Sukses Kak')
}
break
case 'toimg': {
if (!quoted) return replyNya('Reply Image')
if (!/webp/.test(mime)) return replyNya(`balas stiker dengan caption *${prefix + command}*`)
sticWait(from)
let media = await kirbotz.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
kirbotz.sendMessage(m.chat, { image: buffer }, { quoted: fakekirbotz })
fs.unlinkSync(ran)
})
}
break
case 'cry':
case 'kill':
case 'hug':
case 'pat':
case 'lick':
case 'kiss':
case 'bite':
case 'yeet':
case 'bully':
case 'bonk':
case 'wink':
case 'poke':
case 'nom':
case 'slap':
case 'smile':
case 'wave':
case 'awoo':
case 'blush':
case 'smug':
case 'glomp':
case 'happy':
case 'dance':
case 'cringe':
case 'cuddle':
case 'highfive':
case 'handhold':
if (!isPrem) return replyPremium(mess.premium)
axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
kirbotz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
break
case 'attp':
if (args.length == 0) return replyNya(`Contoh: ${prefix + command} Hai`)
gehdhe = await getBuffer(`https://api.xteam.xyz/${command}?file&text=${encodeURI(q)}`)
kirbotz.sendMessage(m.chat, { sticker: gehdhe }, { quoted: fakekirbotz })
break
case 'ttp':
if (args.length == 0) return replyNya(`Contoh: ${prefix + command} Hai`)
veireuue = await getBuffer(`https://api.lolhuman.xyz/api/ttp?apikey=${lolkey}&text=${encodeURI(q)}`)
kirbotz.sendMessage(m.chat, { sticker: veireuue }, { quoted: fakekirbotz })
break
case 'tovideo': {
                if (!quoted) throw 'Reply sticker'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                sticWait(from)
		        let { webp2mp4File } = require('./Lib/uploader')
                let media = await kirbotz.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await kirbotz.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
case 'tovn':{
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            sticWait(from)
            let media = await quoted.download()
            let audio = await toPTT(media, 'mp4')
            kirbotz.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
case 'tomp3': {
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            sticWait(from)
            let media = await quoted.download()
            let audio = await toAudio(media, 'mp4')
            kirbotz.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${kirbotz.user.name}.mp3`}, { quoted : m })
            }
            break
case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (!quoted) replyNya(`Balas Video/Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await kirbotz.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replyNya('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await kirbotz.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
replyNya (`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
case 'emojimix': {
if (!isPrem) return replyPremium(mess.premium)
if (!text) return replyNya(`Example : ${prefix + command} 😅+🤔`)
let [emoji1, emoji2] = text.split`+`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await kirbotz.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
case 'emoji':
if (!isPrem) return replyPremium(mess.premium)
if (args.length == 0) return replyNya(`Contoh: ${prefix + command} 🗿`)
titor = await getBuffer(`https://api.lolhuman.xyz/api/smoji/${encodeURI(q)}?apikey=${lolkey}`)
let encmedia = await kirbotz.sendImageAsSticker(m.chat, titor, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
break
case 'dadu':
case 'patrick':
case 'amongus':
case 'gawrgura':
case 'anjing':
case 'bucinstick':
if (!isPrem) return replyPremium(mess.premium)
let buffer = await getBuffer(`https://api.lolhuman.xyz/api/sticker/${command}?apikey=${lolkey}`)
kirbotz.sendMessage(m.chat, { sticker: buffer }, { quoted: fakekirbotz })
break
case 'faktaunik': 
case 'katabijak': 
case 'pantun': 
case 'bucin': {
if (!isPrem) return replyPremium(mess.premium)
kohg = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: kohg.result,
footerText: 'Pencet Button Untuk Next',
buttons: buttons,
headerType: 2
}
kirbotz.sendMessage(m.chat, buttonMessage, { quoted: fakekirbotz })
}
break
case 'tafsirsurah': {
if (!isPrem) return replyPremium(mess.premium)
if (!args[0]) return replyNya(`Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`)
if (!args[1]) return replyNya(`Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`)
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
let txt = `「 *Tafsir Surah* 」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
replyNya(txt)
}
break
case 'cerpen':{
if (!isPrem) return replyPremium(mess.premium)
kohp = await fetchJson(`https://api.lolhuman.xyz/api/cerpen?apikey=${lolkey}`)
kohz = kohp.result
ini_txt = `Title : ${kohz.title}\n`
ini_txt += `Creator : ${kohz.creator}\n`
ini_txt += `Story :\n${kohz.cerpen}`
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: ini_txt,
footerText: 'Pencet Button Untuk Next',
buttons: buttons,
headerType: 2
}
kirbotz.sendMessage(m.chat, buttonMessage, { quoted: fakekirbotz })
}
break
case 'namapeople':{
if (!isPrem) return replyPremium(mess.premium)
kohc = await fetchJson(`https://api.lolhuman.xyz/api/random/people?apikey=${lolkey}`)
kohx = kohc.result
ini_txt = `Nama : ${kohx.name.title} ${kohx.name.first} ${kohx.name.last}\n`
ini_txt += `Gender : ${kohx.gender}\n`
ini_txt += `Location Number : ${kohx.location.street.number}\n`
ini_txt += `Location Name : ${kohx.location.street.name}\n`
ini_txt += `Location City : ${kohx.location.city}\n`
ini_txt += `Location State : ${kohx.location.state}\n`
ini_txt += `Location Country : ${kohx.location.country}\n`
ini_txt += `Location PostCode : ${kohx.location.postcode}\n`
ini_txt += `Location Latitude : ${kohx.location.coordinates.latitude}\n`
ini_txt += `Location Longitude : ${kohx.location.coordinates.longitude}\n`
ini_txt += `Location Timeone : ${kohx.location.timezone.offset}\n`
ini_txt += `Deskripsi : ${kohx.location.timezone.description}\n`
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: ini_txt,
footerText: 'Pencet Button Untuk Next',
buttons: buttons,
headerType: 2
}
kirbotz.sendMessage(m.chat, buttonMessage, { quoted: fakekirbotz })
}
break
case 'asmaulhusna': {
if (!isPrem) return replyPremium(mess.premium)
kohj = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${lolkey}`)
kghw = kohj.result
ini_txt = `No : ${kghw.index}\n`
ini_txt += `Latin: ${kghw.latin}\n`
ini_txt += `Arab : ${kghw.ar}\n`
ini_txt += `Indonesia : ${kghw.id}\n`
ini_txt += `English : ${kghw.en}`
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: ini_txt,
footerText: 'Pencet Button Untuk Next',
buttons: buttons,
headerType: 2
}
kirbotz.sendMessage(m.chat, buttonMessage, { quoted: fakekirbotz })
}
break
case 'kisahnabi':
if (!isPrem) return replyPremium(mess.premium)
if (args.length == 0) return replyNya(`Example: ${prefix + command} Muhammad`)
query = args.join(" ")
wdwo = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${lolkey}`)
wdwp = wdwo.result
ini_txt = `Name : ${wdwp.name}\n`
ini_txt += `Lahir : ${wdwp.thn_kelahiran}\n`
ini_txt += `Umur : ${wdwp.age}\n`
ini_txt += `Tempat : ${wdwp.place}\n`
ini_txt += `Story : \n${wdwp.story}`
replyNya(ini_txt)
break
case 'jadwalsholat':	
if (!isPrem) return replyPremium(mess.premium)
if (args.length == 0) return replyNya(`Example: ${prefix + command} Yogyakarta`)
daerah = args.join(" ")
wdza = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${lolkey}`)
wdzs = wdza.result
ini_txt = `Wilayah : ${wdzs.wilayah}\n`
ini_txt += `Tanggal : ${wdzs.tanggal}\n`
ini_txt += `Sahur : ${wdzs.sahur}\n`
ini_txt += `Imsak : ${wdzs.imsak}\n`
ini_txt += `Subuh : ${wdzs.subuh}\n`
ini_txt += `Terbit : ${wdzs.terbit}\n`
ini_txt += `Dhuha : ${wdzs.dhuha}\n`
ini_txt += `Dzuhur : ${wdzs.dzuhur}\n`
ini_txt += `Ashar : ${wdzs.ashar}\n`
ini_txt += `Maghrib : ${wdzs.imsak}\n`
ini_txt += `Isya : ${wdzs.isya}`
replyNya(ini_txt)
break
case 'listsurah':
if (!isPrem) return replyPremium(mess.premium)
whqg = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${lolkey}`)
whqa = whqg.result
ini_txt = 'List Surah:\n'
for (var x in whqa) {
ini_txt += `${x}. ${whqa[x]}\n`
}
replyNya(ini_txt)
break
case 'mediafire':{
if (!isPrem) return replyPremium(mess.premium)
oh = `Example : ${prefix + command} link`
if (!text) throw oh
sticWait(from)
kfeh = await fetchJson(`https://api.lolhuman.xyz/api/mediafire?apikey=${lolkey}&url=${text}`)
mnya = await getBuffer(kfeh.result.link)
kirbotz.sendMessage(m.chat, {document: mnya, mimetype: 'application/zip', fileName: `${kfeh.result.filename}.zip`}, {quoted:fakekirbotz}).catch ((err) => reply(oh))
}
break
case 'iqra': {
if (!isPrem) return replyPremium(mess.premium)
oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
if (!text) throw oh
sticWait(from)
yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
kirbotz.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:fakekirbotz}).catch ((err) => reply(oh))
}
break
case 'hadis': case 'hadist': {
if (!isPrem) return replyPremium(mess.premium)
if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan Tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
if (!args[1]) throw `Hadis Yang Ke Berapa?\n\nContoh:\n${prefix + command} muslim 1`
try {
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
let { number, arab, id } = res.find(v => v.number == args[1])
replyNya(`No. ${number}

${arab}

${id}`)
} catch (e) {
replyNya(`Hadis tidak ditemukan !`)
}
}
break
case 'juzamma': {
if (!isPrem) return replyPremium(mess.premium)
if (args[0] === 'pdf') {
sticWait(from)
kirbotz.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:fakekirbotz})
} else if (args[0] === 'docx') {
sticWait(from)
kirbotz.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:fakekirbotz})
} else if (args[0] === 'pptx') {
sticWait(from)
kirbotz.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:fakekirbotz})
} else if (args[0] === 'xlsx') {
sticWait(from)
kirbotz.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:fakekirbotz})
} else {
replyNya(`Mau Format Apa ? Example : ${prefix + command} pdf

Format Yang Tersedia : pdf, docx, pptx, xlsx`)
}
}
break
case 'translate':
if (!isPrem) return replyPremium(mess.premium)
if (args.length < 1) return replay(`Text Nya Mana Kak?\nContoh\n${prefix + command} Who am I`)
sticWait(from)
tes = await fetchJson(`https://megayaa.herokuapp.com/api/translate?to=id&kata=${q}`)
Infoo = tes.info
Detek = tes.translate
replyNya(`👷Translate : ${Detek}\n🔎Hasil : ${Infoo}`)
break
case 'nekopoisearch':
if (!isPrem) return replyPremium(mess.premium)
              if (args.length == 0) return replyNya(`Example: ${prefix + command} Isekai Harem`)
              query = args.join(" ")
              pqsh = await fetchJson(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=${lolkey}&query=${query}`)
              fekfw = pqsh.result
              ini_txt = ""
              for (var x of fekfw) {
              ini_txt += `\`\`\`🐥 Title : ${x.title}\`\`\`\n`
              ini_txt += `\`\`\`🐥 Link : ${x.link}\`\`\`\n`
              ini_txt += `\`\`\`🐥 Thumbnail : ${x.thumbnail}\`\`\`\n\n`
}
              replyNya(ini_txt)
              break
case 'nekopoi':{
if (!isPrem) return replyPremium(mess.premium)
              if (args.length == 0) return replyNya(`Example: ${prefix + command} https://nekopoi.care/isekai-harem-monogatari-episode-4-subtitle-indonesia/`)
              ini_url = args[0]
sticWait(from)
              geof = await fetchJson(`https://api.lolhuman.xyz/api/nekopoi?apikey=${lolkey}&url=${ini_url}`)
              skdl = geof.result
              ini_txt = `\`\`\`🐥 Title : ${skdl.anime}\`\`\`\n`
              ini_txt += `\`\`\`🐥 Porducers : ${skdl.producers}\`\`\`\n`
              ini_txt += `\`\`\`🐥 Duration : ${skdl.duration}\`\`\`\n`
              ini_txt += `\`\`\`🐥 Size : ${skdl.size}\`\`\`\n`
              ini_txt += `\`\`\`🐥 Sinopsis : ${skdl.sinopsis}\`\`\`\n`
              link = skdl.link
              for (var x in link) {
              ini_txt += `\n${link[x].name}\n`
              link_dl = link[x].link
              for (var y in link_dl) {
              ini_txt += `${y} - ${link_dl[y]}\n`
}
}
              buff = await getBuffer(skdl.thumb)
let message = await prepareWAMessageMedia({ image: buff }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: ini_txt,
hydratedFooterText: 'Created By KirBotz',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/KirBotz'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6287705048235'
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `${prefix}menu`}}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}             
         break
case 'lk21':
if (!isPrem) return replyPremium(mess.premium)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Transformer`)
                    sticWait(from)
                    query = args.join(" ")
                    fejfw = await fetchJson(`https://api.lolhuman.xyz/api/lk21?apikey=${lolkey}&query=${query}`)
                    fejfwd = fejfw.result
                    ini_txt = `Title : ${fejfwd.title}\n`
                    ini_txt += `Link : ${fejfwd.link}\n`
                    ini_txt += `Genre : ${fejfwd.genre}\n`
                    ini_txt += `Views : ${fejfwd.views}\n`
                    ini_txt += `Duration : ${fejfwd.duration}\n`
                    ini_txt += `Tahun : ${fejfwd.tahun}\n`
                    ini_txt += `Rating : ${fejfwd.rating}\n`
                    ini_txt += `Desc : ${fejfwd.desc}\n`
                    ini_txt += `Actors : ${fejfwd.actors.join(", ")}\n`
                    ini_txt += `Location : ${fejfwd.location}\n`
                    ini_txt += `Date Release : ${fejfwd.date_release}\n`
                    ini_txt += `Language : ${fejfwd.language}\n`
                    ini_txt += `Link Download : ${fejfwd.link_dl}`
                    eahdw = await getBuffer(fejfwd.thumbnail)
                    await kirbotz.sendMessage(m.chat, { image: eahdw, caption: ini_txt }, { quoted: fakekirbotz})                  
                    break
case 'gimage':{
if (!isPrem) return replyPremium(mess.premium)
if (args.length == 0) return reply(`Nama Yg Mau Dicari Mana Tod\nContoh: ${prefix + command} Eren`)
query = args.join(" ")
sticWait(from)
let kwjde = await getBuffer(`https://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=${query}`)
let message = await prepareWAMessageMedia({ image: kwjde }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: `Nih Kak`,
hydratedFooterText: 'Created By KirBotz',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/KirBotz'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6287705048235'
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `${prefix}menu`}}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'pinterest':
if (!isPrem) return replyPremium(mess.premium)
if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
sticWait(from)
                    query = args.join(" ")
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=${lolkey}&query=${query}`)
                    ini_url = ini_url.result
                    ini_buffer = await getBuffer(ini_url)
                    await kirbotz.sendMessage(m.chat, { image: ini_buffer, caption: '*PINTEREST IMAGE*' }, { quoted: fakekirbotz})                  
                    break
case 'pinterest2':
if (!isPrem) return replyPremium(mess.premium)
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    sticWait(from)
                    query = args.join(" ")
                    dwxwdw = await fetchJson(`https://api.lolhuman.xyz/api/pinterest2?apikey=${lolkey}&query=${query}`)
                    vdcdns = dwxwdw.result
                    for (var x = 0; x <= 5; x++) {
                        var ini_buffer = await getBuffer(vdcdns[x])
                        await await kirbotz.sendMessage(m.chat, { image: ini_buffer, caption: '*PINTEREST IMAGE*' }, { quoted: fakekirbotz})                  
                    }
                    break
case 'character':
if (!isPrem) return replyPremium(mess.premium)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Miku Nakano`)
sticWait(from)
                    query = args.join(" ")
                    fjwje = await fetchJson(`https://api.lolhuman.xyz/api/character?apikey=${lolkey}&query=${query}`)
                    fejfqds = fjwje.result
                    ini_txt = `Id : ${fejfqds.id}\n`
                    ini_txt += `Name : ${fejfqds.name.full}\n`
                    ini_txt += `Native : ${fejfqds.name.native}\n`
                    ini_txt += `Favorites : ${fejfqds.favourites}\n`
                    ini_txt += `Media : \n`
                    ini_media = fejfqds.media.nodes
                    for (var x of ini_media) {
                        ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
                    }
                    ini_txt += `\nDescription : \n${fejfqds.description.replace(/__/g, "_")}`
                    gnejws = await getBuffer(fejfqds.image.large)
                    await kirbotz.sendMessage(m.chat, { image: gnejws, caption: ini_txt }, { quoted: fakekirbotz})                  
                    break
case 'manga':
if (!isPrem) return replyPremium(mess.premium)
if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
sticWait(from)
                    query = args.join(" ")
                    mcndn = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=${lolkey}&query=${query}`)
                    vendks = mcndn.result
                    ini_txt = `Id : ${vendks.id}\n`
                    ini_txt += `Id MAL : ${vendks.idMal}\n`
                    ini_txt += `Title : ${vendks.title.romaji}\n`
                    ini_txt += `English : ${vendks.title.english}\n`
                    ini_txt += `Native : ${vendks.title.native}\n`
                    ini_txt += `Format : ${vendks.format}\n`
                    ini_txt += `Chapters : ${vendks.chapters}\n`
                    ini_txt += `Volume : ${vendks.volumes}\n`
                    ini_txt += `Status : ${vendks.status}\n`
                    ini_txt += `Source : ${vendks.source}\n`
                    ini_txt += `Start Date : ${vendks.startDate.day} - ${vendks.startDate.month} - ${vendks.startDate.year}\n`
                    ini_txt += `End Date : ${vendks.endDate.day} - ${vendks.endDate.month} - ${vendks.endDate.year}\n`
                    ini_txt += `Genre : ${vendks.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${vendks.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${vendks.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = vendks.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${vendks.description}`
                    cehdhw = await getBuffer(vendks.coverImage.large)
                    await kirbotz.sendMessage(m.chat, { image: cehdhw, caption: ini_txt }, { quoted: fakekirbotz})                  
                    break
case 'kusonime':{
if (!isPrem) return replyPremium(mess.premium)
             if (args.length == 0) return replyNya(`Example: ${prefix + command} Gotoubun No Hanayome`)
sticWait(from)
             query = args.join(" ")
             fwjf = await fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=${lolkey}&query=${query}`)
             fsdj = fwjf.result
             ini_txt = `Title : ${fsdj.title}\n`
             ini_txt += `Japanese : ${fsdj.japanese}\n`
             ini_txt += `Genre : ${fsdj.genre}\n`
             ini_txt += `Seasons : ${fsdj.seasons}\n`
             ini_txt += `Producers : ${fsdj.producers}\n`
             ini_txt += `Type : ${fsdj.type}\n`
             ini_txt += `Status : ${fsdj.status}\n`
             ini_txt += `Total Episode : ${fsdj.total_episode}\n`
             ini_txt += `Score : ${fsdj.score}\n`
             ini_txt += `Duration : ${fsdj.duration}\n`
             ini_txt += `Released On : ${fsdj.released_on}\n`
             ini_txt += `Desc : ${fsdj.desc}\n`
             link_dl = fsdj.link_dl
             for (var x in link_dl) {
             ini_txt += `\n${x}\n`
             for (var y in link_dl[x]) {
             ini_txt += `${y} - ${link_dl[x][y]}\n`
}
}
             ini_buffer = await getBuffer(fsdj.thumbnail)
let message = await prepareWAMessageMedia({ image: ini_buffer }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: ini_txt,
hydratedFooterText: 'Created By KirBotz',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/KirBotz'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6287705048235'
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `${prefix}menu`}}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}             
         break
case 'nhentai':
if (!isPrem) return replyPremium(mess.premium)
if (args.length == 0) return replyNya(`Example: ${prefix + command} 344253`)
sticWait(from)
              henid = args[0]
              gsjd = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${lolkey}`)
              kdlwj = gsjd.result
              ini_txt = `Title Romaji : ${kdlwj.title_romaji}\n`
              ini_txt += `Title Native : ${kdlwj.title_native}\n`
              ini_txt += `Read Online : ${kdlwj.read}\n`
              get_info = kdlwj.info
              ini_txt += `Parodies : ${get_info.parodies}\n`
              ini_txt += `Character : ${get_info.characters.join(", ")}\n`
              ini_txt += `Tags : ${get_info.tags.join(", ")}\n`
              ini_txt += `Artist : ${get_info.artists}\n`
              ini_txt += `Group : ${get_info.groups}\n`
              ini_txt += `Languager : ${get_info.languages.join(", ")}\n`
              ini_txt += `Categories : ${get_info.categories}\n`
              ini_txt += `Pages : ${get_info.pages}\n`
              ini_txt += `Uploaded : ${get_info.uploaded}\n`
              replyNya(ini_txt)
              break
case 'anime':{
if (!isPrem) return replyPremium(mess.premium)
             if (args.length == 0) return replyNya(`Example: ${prefix + command} Gotoubun No Hanayome`)
sticWait(from)
             query = args.join(" ")
             zcem = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${lolkey}&query=${query}`)
             zcez = zcem.result
             ini_txt = `Id : ${zcez.id}\n`
             ini_txt += `Id MAL : ${zcez.idMal}\n`
             ini_txt += `Title : ${zcez.title.romaji}\n`
             ini_txt += `English : ${zcez.title.english}\n`
             ini_txt += `Native : ${zcez.title.native}\n`
             ini_txt += `Format : ${zcez.format}\n`
             ini_txt += `Episodes : ${zcez.episodes}\n`
             ini_txt += `Duration : ${zcez.duration} mins.\n`
             ini_txt += `Status : ${zcez.status}\n`
             ini_txt += `Season : ${zcez.season}\n`
             ini_txt += `Season Year : ${zcez.seasonYear}\n`
             ini_txt += `Source : ${zcez.source}\n`
             ini_txt += `Start Date : ${zcez.startDate.day} - ${zcez.startDate.month} - ${zcez.startDate.year}\n`
             ini_txt += `End Date : ${zcez.endDate.day} - ${zcez.endDate.month} - ${zcez.endDate.year}\n`
             ini_txt += `Genre : ${zcez.genres.join(", ")}\n`
             ini_txt += `Synonyms : ${zcez.synonyms.join(", ")}\n`
             ini_txt += `Score : ${zcez.averageScore}%\n`
             ini_txt += `Characters : \n`
             ini_character = zcez.characters.nodes
             for (var x of ini_character) {
             ini_txt += `- ${x.name.full} (${x.name.native})\n`
 }
             ini_txt += `\nDescription : ${zcez.description}`
             mvn = await getBuffer(zcez.coverImage.large)
             let message = await prepareWAMessageMedia({ image: mvn }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: ini_txt,
hydratedFooterText: 'Created By KirBotz',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/KirBotz'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6287705048235'
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `${prefix}menu`}}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}             
break
case 'ceritahoror':{
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
pqdnw = await fetchJson(`https://api.lolhuman.xyz/api/ceritahoror?apikey=${lolkey}`)
csksw = pqdnw.result
ini_txt = `Title : ${csksw.title}\n`
ini_txt += `Desc : ${csksw.desc}\n`
ini_txt += `Story :\n${csksw.story}\n`
buff = await getBuffer(csksw.thumbnail)
let message = await prepareWAMessageMedia({ image: buff }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: ini_txt,
hydratedFooterText: 'Created By KirBotz',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/KirBotz'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6287705048235'
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix+command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'wetglass':
case 'multicolor3d':
case 'watercolor':
case 'luxurygold':
case 'galaxywallpaper':
case 'lighttext':
case 'beautifulflower':
case 'puppycute':
case 'royaltext':
case 'heartshaped':
case 'birthdaycake':
case 'galaxystyle':
case 'hologram3d':
case 'greenneon':
case 'glossychrome':
case 'greenbush':
case 'metallogo':
case 'noeltext':
case 'glittergold':
case 'textcake':
case 'starsnight':
case 'wooden3d':
case 'textbyname':
case 'writegalacy':
case 'galaxybat':
case 'snow3d':
case 'birthdayday':
case 'goldplaybutton':
case 'silverplaybutton':
case 'freefire':{
if (!isPrem) return replyPremium(mess.premium)
if (args.length == 0) return replyNya(`Example: ${prefix + command} teks`)
sticWait(from)
ini_txt = args.join(" ")
imagenya = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolkey}&text=${ini_txt}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: imagenya }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'Created By KirBotz',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/KirBotz'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6287705048235'
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `${prefix}menu`}}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'blackpink':
case 'neon':
case 'greenneon':
case 'advanceglow':
case 'futureneon':
case 'sandwriting':
case 'sandsummer':
case 'sandengraved':
case 'metaldark':
case 'neonlight':
case 'holographic':
case 'text1917':
case 'minion':
case 'deluxesilver':
case 'newyearcard':
case 'bloodfrosted':
case 'halloween':
case 'jokerlogo':
case 'fireworksparkle':
case 'natureleaves':
case 'bokeh':
case 'toxic':
case 'strawberry':
case 'box3d':
case 'roadwarning':
case 'breakwall':
case 'icecold':
case 'luxury':
case 'cloud':
case 'summersand':
case 'horrorblood':
case 'thunder':{
if (!isPrem) return replyPremium(mess.premium)
if (args.length == 0) return replyNya(`Example: ${prefix + command} Akira`)
sticWait(from)
ini_txt = args.join(" ")
imagenya = await getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolkey}&text=${ini_txt}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: imagenya }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'Created By KirBotz',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/KirBotz'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6287705048235'
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `${prefix}menu`}}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'shadow':
case 'cup':
case 'cup1':
case 'romance':
case 'smoke':
case 'burnpaper':
case 'lovemessage':
case 'undergrass':
case 'love':
case 'coffe':
case 'woodheart':
case 'woodenboard':
case 'summer3d':
case 'wolfmetal':
case 'nature3d':
case 'underwater':
case 'golderrose':
case 'summernature':
case 'letterleaves':
case 'glowingneon':
case 'fallleaves':
case 'flamming':
case 'harrypotter':
case 'carvedwood':{
if (!isPrem) return replyPremium(mess.premium)
if (args.length == 0) return replyNya(`Contoh: ${prefix + command} teks`)
sticWait(from)
txt1 = args[0]
imagenya = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lolkey}&text=${txt1}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: imagenya }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'Created By KirBotz',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/KirBotz'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6287705048235'
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `${prefix}menu`}}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'pornhub':
case 'glitch':
case 'avenger':
case 'space':
case 'ninjalogo':
case 'marvelstudio':
case 'lionlogo':
case 'wolflogo':
case 'steel3d':
case 'wallgravity':
case 'coolgravity':{
if (!isPrem) return replyPremium(mess.premium)
if (args.length == 0) return replyNya(`Example: ${prefix + command} Akira Botz`)
sticWait(from)
txt1 = args[0]
txt2 = args[1]
imagenya = await getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: imagenya }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'Created By KirBotz',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/KirBotz'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6287705048235'
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `${prefix}menu`}}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'ktpmaker':
if (!isPrem) return replyPremium(mess.premium)
if (args.length == 0) return replyNya(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nExample: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|LoL Human|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
sticWait(from)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ktpmaker?apikey=${lolkey}&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`)
                    kirbotz.sendMessage(m.chat, { image: ini_buffer, caption: `*KTP MAKER*` }, { quoted: fakekirbotz})
                    break
case 'tiktokmaker':{
if (!isPrem) return replyPremium(mess.premium)
if (args.length == 0) return replyNya(`Contoh: ${prefix + command} teks1 teks2`)
sticWait(from)
txt1 = args[0]
txt2 = args[1]
imagenya = await getBuffer(`https://api.lolhuman.xyz/api/photooxy2/tiktok?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: imagenya }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'Created By KirBotz',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/KirBotz'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6287705048235'
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `${prefix}menu`}}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'arcade8bit':
case 'battlefield4':
case 'pubg':{
if (!isPrem) return replyPremium(mess.premium)
if (args.length == 0) return replyNya(`Contoh: ${prefix + command} teks1 teks2`)
sticWait(from)
txt1 = args[0]
txt2 = args[1]
imagenya = await getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: imagenya }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'Created By KirBotz',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/KirBotz'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6287705048235'
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `${prefix}menu`}}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break

case 'art':
case 'bts':
case 'exo':
case 'elf':
case 'neko':
case 'shota':
case 'sagiri':
case 'shinobu':
case 'megumin':
case 'wallnime':{
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
hasil = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: hasil }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'Created By KirBotz',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/KirBotz'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6287705048235'
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix + command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'rpgmenu':
case 'profile':
if (!isPrem) return replyPremium(mess.premium)
if (!m.isGroup) return replyNya(mess.group) 
if (!isPetualang) return replyNya(mess.noPetualang)
await sendButLoc(from)
break
case 'joinrpg':
if (!isPrem) return replyPremium(mess.premium)
if (!m.isGroup) return replyNya(mess.group)  
if (isPetualang) return replyNya('Kamu Sudah Menjadi Petualang')
if (args.length < 1) return replyNya(`Kirim perintah ${prefix + command} nama`)
await sendButJoin(from, q)
break
case 'mining':
if (!isPrem) return replyPremium(mess.premium)
if (!m.isGroup) return replyNya(mess.group) 
if (!isPetualang) return replyNya(mess.noPetualang)
pp = randomNomor(75)
emas = randomNomor(15)
dm = randomNomor(3)
besi = randomNomor(50)
addBalance(sender, pp, balance)
addBesi(sender, besi)
addEmas(sender, emas)
addDm(sender, dm)
mining = ('Waitt Sedang Menguli . . .')
setTimeout( () => {
buttons = [
{ buttonId: 'mining', buttonText: { displayText: 'Mining' }, type: 1 }
]
kirbotz.sendButtonText(m.chat, buttons, `Selesai Mining🚧\nlist hasil :\nEmas : ${emas}🪙\nUang : $${pp}💰\nBesi : ${besi}⛓️\nBerlian : ${dm}💎`, kirbotz.user.name, m)
}, 9000) // 1000 = 1s,
setTimeout( () => {
kirbotz.sendMessage(from, { text: '🚧 Selesai Menguli . . .🪙👷' }, { quoted: fakekirbotz })
}, 7000) // 1000 = 1s,
setTimeout( () => {
kirbotz.sendMessage(from, { text: '🚧 Menemukan Emas . . .⚒️🏔️️️' }, { quoted: fakekirbotz })
}, 4000) // 1000 = 1s,
setTimeout( () => {
kirbotz.sendMessage(from, { text: '🚧 Mulai Menambang . . .⚒️🏔️️' }, { quoted: fakekirbotz })
}, 1500) // 1000 = 1s,
setTimeout( () => {
kirbotz.sendMessage(from, { text: mining }, {quoted: fakekirbotz}) 
}, 0) // 1000 = 1s,
break
case 'inventori':
if (!isPrem) return replyPremium(mess.premium)
if (!m.isGroup) return replyNya(mess.group) 
if (!isPetualang) return replyNya(mess.noPetualang)
var reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
buttons = [
{ buttonId: 'adventure', buttonText: { displayText: 'Adventure' }, type: 1 }
]
kirbotz.sendButtonText(m.chat, buttons, `📍 𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗣𝗹𝗮𝘆𝗲𝗿\n • Nama : ${pushname}\n • Rank : ${role}\n • Status : ${elit}\n • Xp : ${getLevelingXp(sender)}/${reqXp}\n • Level : ${getLevelingLevel(sender)}\n🎒 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝗶 :\n • Emas : ${getEmas(sender)}🪙\n • Uang : $${(getBalance(sender, balance))}💰\n • Besi : ${getBesi(sender)}⛓️\n • Berlian : ${getDm(sender)}💎\n • Ikan : ${getFish(sender)}🎣`, kirbotz.user.name, m)
break
case 'sellikan':
if (!isPrem) return replyPremium(mess.premium)
if (!m.isGroup) return replyNya(mess.group) 
if (!isPetualang) return replyNya(mess.noPetualang)
if (args.length < 1) return replyNya(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)
jmlh = body.slice(10)
rp = 5 * jmlh
if (getFish(sender) < jmlh) return replyNya(`Ikan Kamu Tidak Cukup`)
sellFish(sender, jmlh, balance)
addBalance(sender, rp, balance) 
buttons = [
{ buttonId: 'inventori', buttonText: { displayText: 'Inventori' }, type: 1 }
]
kirbotz.sendButtonText(m.chat, buttons, `🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Ikan : 5\n • Status : Sukses\n • Sisa Ikan : ${getFish(sender)}\n • Hasil Penjualan : $${rp}`,  kirbotz.user.name, m)
break
case 'sellbesi':
if (!isPrem) return replyPremium(mess.premium)
if (!m.isGroup) return replyNya(mess.group) 
if (!isPetualang) return replyNya(mess.noPetualang)
if (args.length < 1) return replyNya(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)
jmlh = body.slice(10)
rp = 10 * jmlh
if (getBesi(sender) < jmlh) return replyNya(`Besi Kamu Tidak Cukup`)
sellBesi(sender, jmlh, balance)
addBalance(sender, rp, balance) 
buttons = [
{ buttonId: 'inventori', buttonText: { displayText: 'Inventori' }, type: 1 }
]
kirbotz.sendButtonText(m.chat, buttons, `🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Besi : 10\n • Status : Sukses\n • Sisa Besi : ${getBesi(sender)}\n • Hasil Penjualan : $${rp}`, kirbotz.user.name, m)
break
case 'sellemas':
if (!isPrem) return replyPremium(mess.premium)
if (!m.isGroup) return replyNya(mess.group) 
if (!isPetualang) return replyNya(mess.noPetualang)
if (args.length < 1) return replyNya(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)
jmlh = body.slice(10)
rp = 25 * jmlh
if (getEmas(sender) < jmlh) return replyNya(`Emas Kamu Tidak Cukup`)
sellEmas(sender, jmlh, balance)
addBalance(sender, rp, balance) 
buttons = [
{ buttonId: 'inventori', buttonText: { displayText: 'Inventori' }, type: 1 }
]
kirbotz.sendButtonText(m.chat, buttons, `🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Emas : 25\n • Status : Sukses\n • Sisa Emas : ${getEmas(sender)}\n • Hasil Penjualan : $${rp}`, kirbotz.user.name, m)
break 
case 'selldiamond':
if (!isPrem) return replyPremium(mess.premium)
if (!m.isGroup) return replyNya(mess.group) 
if (!isPetualang) return replyNya(mess.noPetualang)
if (args.length < 1) return replyNya(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)
ttl = body.slice(13)
var etoo = 75 * ttl
if (getDm(sender) < ttl) return replyNya(`Besi Kamu Tidak Cukup`)
sellDm(sender, ttl)
addBalance(sender, etoo, balance) 
buttons = [
{ buttonId: 'inventori', buttonText: { displayText: 'Inventori' }, type: 1 }
]
kirbotz.sendButtonText(m.chat, buttons, `🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Dm : 75\n • Status : Sukses\n • Sisa Diamond : ${getDm(sender)}\n • Hasil Penjualan : $${etoo}`, kirbotz.user.name, m)
break 
case 'mancing':
if (!isPrem) return replyPremium(mess.premium)
if (!m.isGroup) return replyNya(mess.group) 
if (!isPetualang) return replyNya(mess.noPetualang)
ikannya = ikan[Math.floor(Math.random() * ikan.length)]
xp = Math.ceil(Math.random() * 350)
coin = randomNomor(50)	    
ditangkap = Math.ceil(Math.random() * 50)
cing = await getBuffer(`https://telegra.ph/file/d9b15de4f661808dfd0b9.jpg`)
setTimeout( () => {
var button = [
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
		{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
		]
        var hg = `「 Memancing 」\n\n • Tangkapan : ${ikannya}\n • Total Dapat : ${ditangkap} Ikan\n • MONEY : $${coin}\n • EXP : ${xp}Xp`
        kirbotz.sendMessage(from, { caption: hg, location: { jpegThumbnail: cing }, templateButtons: button, footer: `Rpg Game By KirBotz`, mentions: [sender] })
        .catch ((err) => reply(mess.error))
}, 6000)
setTimeout( () => {
kirbotz.sendMessage(from, { text: 'Berhasil Mendapatkan Ikan . . .' }, { quoted: fakekirbotz })
}, 5000) // 1000 = 1s,
setTimeout( () => {
kirbotz.sendMessage(from, { text: '🎣 Menarik Kail. . .' }, { quoted: fakekirbotz })
}, 3000) // 1000 = 1s,
setTimeout( () => {
kirbotz.sendMessage(from, { text: '🎣 Mulai Memancing . . .' }, { quoted: fakekirbotz })
}, 1500) // 1000 = 1s,
addFish(sender, ditangkap)
addLevelingXp(sender, xp)
addBalance(sender, coin, balance) 
break
case 'adventure':
if (!isPrem) return replyPremium(mess.premium)
if (!m.isGroup) return replyNya(mess.group) 
if (!isPetualang) return replyNya(mess.noPetualang)
ngab = ['Longsor','Letusan Gunung','Tsunami','Gempa Bumi','Meteor','Demon']
var sesuatu = ngab[Math.floor(Math.random() * ngab.length)]
var dungeon =['Whetstone','Willow Field','Rodeo','Verdant Blufs','Bull Holland','Fallen Tree','Dellnort','Verona Lush','Leafy Hollow','Chilliad Dome','Garcia','Pine Valley','Santa Florals','Guvero East','Cranbarry','Junever','Aldea Malvada','Green Palms','Green Oasis','Fort Carson','Prickel Pine','Pilson Meadow','Boca Roca','Rocksore East','Camel Toe','Hanky Panky','Fern Ridge','Montgomerry','Flint Yankton','Vespucci','fortress city', 'ravines valley', 'horizon valley', 'cyber city', 'end city', 'templar city', 'pochinki', 'peak','Vertical Zone','Sentainel Country','Night City','Flush City','Royals Canyon','Blackburn','Peterborough','Tarnstead','Jarren’s','Outpost','Landow','Nearon','Kincardine','Aysgarth','Veritas','Openshaw','Bredwardine','Berkton','Wolford','Norwich','Kald','Solaris','Kilead','Pitmerden','Acomb','Eldham','Warcester','Lingmell','Kilead','Cromerth','Wingston','Garmsby','Kingcardine','Perthlochry','Frostford','Hillford','Hardersfield','Tarrin','Holmfirth','Caerleon','Elisyum','Ballaeter','Penshaw','Bradford','Wigston','Accreton','Kameeraska','Ferncombe','Kilerth','Erostey','Carran','Jongvale','Larnwick','Queenstown','Whaelrdrake','Baerney','Wingston','Arkney','Strongfair','Lowestoft','Beggar’s Hole','Shepshed','Perthlochry','Ironforge','Tywardreath','Pontheugh','Foolshope','Hull','Dalmerlington','Aucteraden','Woodpine','Millstone','Windermere','Lancaster','Kirkwall','Rotherhithe','Astrakhan','Watford','Ritherhithe','Krosstoen','Pella’s','Wish','Grimsby','Ayrith','Ampleforth','Skystead','Eanverness','Penshaw','Peatsland','Astrakane','Pontybridge','Caershire','Snowbush','Sutton','Northwich','Hogsfeet','Claethorpes','Sudbury','Cherrytown','Blue Field','Orrinshire','Aempleforth','Garrigill','Jedburgh','Eastbourne','Taedmorden','Venzor','Grasmere','Ubbin','Falls','Violl’s Garden','Glanchester','Bailymena','Arkkukari','Skargness','Cardend','Llanybydder','Faversham','Yellowseed','Carlisle','Cirencester','Aramoor','Furness','Kincardine','Rotherham','Emelle','Boroughton','Carran','Ffestiniog','Mansfield','Huthwaite','Marclesfield','Pavv','Squall’s End','Glenarm','Dragontail','Moressley','Hardersfield','Gilramore','Aria','Ecrin','Clare View Point','Blackburn','Oakheart','Doonatel','Broughton','Carlisle','Murlayfield','Nuxvar']
anu = fs.readFileSync('./Lib/dungeon.js');
var ad = dungeon[Math.floor(Math.random() * dungeon.length)]
jsonData = JSON.parse(anu);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
hasm = await getBuffer(randKey.result)  
var adven = Math.ceil(Math.random() * 1000)
var money = Math.ceil(Math.random() * 300)
setTimeout( () => {		
var button = [
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
		{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
		]
        var hg = `「 DEATH 」\n\n • Tempat  ${ad}\n • MONEY : $${money}\n • EXP : ${adven}Xp`
        kirbotz.sendMessage(from, { caption: hg, location: { jpegThumbnail: hasm }, templateButtons: button, footer: `Rpg Game By KirBotz`, mentions: [sender] })
        .catch ((err) => reply(mess.error))
}, 7000)
setTimeout( () => {
kirbotz.sendMessage(from, { text: `Awass` }, { quoted: fakekirbotz })
}, 5000) // 1000 = 1s,
setTimeout( () => {
kirbotz.sendMessage(from, { text: `Tiba Tiba Ada ${sesuatu}` }, { quoted: fakekirbotz })
}, 3000) // 1000 = 1s,
setTimeout( () => {
kirbotz.sendMessage(from, { text: `${pushname} Sedang Bertualang` }, { quoted: fakekirbotz })
}, 1500) // 1000 = 1s,
addLevelingXp(sender, adven)
addBalance(sender, money, balance)
break
case 'luckyday':
case 'luckytime':
if (!isPrem) return replyPremium(mess.premium)
if (!m.isGroup) return replyNya(mess.group) 
if (!isPetualang) return replyNya(mess.noPetualang)
{
ez = Math.ceil(Math.random() * 450)
a = randomNomor(99)
b = randomNomor(500)
c = randomNomor(150)
addBalance(sender, b, balance)
addLevelingXp(sender, ez)
addEmas(sender, a)
addBesi(sender, c)
buttons = [
{ buttonId: `${command}`, buttonText: { displayText: `Next Lucky` }, type: 1 }
]
kirbotz.sendButtonText(m.chat, buttons, `🎰 Lucky\n• Uang : $${b}\n• Emas : ${a}\n• Besi : ${c}\n• Xp : ${ez}`, kirbotz.user.name, m)
}
break
case 'cecan2':{
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
imgd = await fetchJson('https://spybot-api.herokuapp.com/api/asupan/cecan?apikey=SpyBotApi')
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: { url: imgd.result.url } }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'Created By KirBotz',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/KirBotz'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6287705048235'
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix + command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'hijaber':{
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
imgd = await fetchJson('https://spybot-api.herokuapp.com/api/asupan/hijaber?apikey=SpyBotApi')
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: { url: imgd.result.url } }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'Created By KirBotz',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/KirBotz'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6287705048235'
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix + command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'cecan':
case 'cogan':{
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
imagenya = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: imagenya }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'Created By KirBotz',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/KirBotz'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6287705048235'
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix + command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'buypremium': case 'sewabot': {
sewbot = `Hai *${pushname}*

List Sewabot
7k/Minggu
14k/Bulan
30k/Manent
Note : *Keuntungan Sewabot?*
Bisa Masukin Bot Ke Group

List Premium
10k/Minggu
20k/Bulan
40k/Manent
Note : *Keuntungan Premium?*
Bisa Gunain Fitur Premium Tanpa Batas

List Sewabot & Premium
17k/Minggu
34k/Bulan
50k/Manent
Note : *Keuntungan Sewabot & Premium?*
Bisa Masukin Bot Ke Group & Bisa Gunain Fitur Premium Tanpa Batas

List Payment
GOPAY : Scan Qr Di Atas
OVO : 0877-0504-8235
QRIS ALL : https://bit.ly/3iD9XSJ

Note : MAU SEWABOT APA MAU LIAT DOANG ANJING
${ya}Jika Sudah Membayar Silahkan Kirim Bukti Screenshot Ke Button Url Di Bawah${ya}`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/gopaykir.jpg') }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: sewbot,
hydratedFooterText: 'Created By KirBotz',
hydratedButtons: [
{
urlButton: {
displayText: 'Owner KirBotz',
url: 'https://wa.me/6287705048235'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'join': {
if (!isCreator) throw mess.owner
if (!text) throw 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
sticWait(from)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await kirbotz.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'linkgroup': case 'linkgc': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
let response = await kirbotz.groupInviteCode(m.chat)
kirbotz.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'antilink':
if (!m.isGroup) return replyNya(mess.group)
if (!isGroupAdmins && !isCreator) return replyNya(mess.admin)
if (!isBotAdmins) return replyNya(mess.botAdmin)
if (args[0] === "on") {
if (global.db.data.chats[m.chat].antilink) return replyNya('Sudah Aktif Sebelumnya')
global.db.data.chats[m.chat].antilink = true
replyNya(`Antilink Berhasil Di Aktifkan !`)
} else if (args[0] === "off") {
if (!global.db.data.chats[m.chat].antilink) return replyNya('Sudah Nonaktif Sebelumnya')
global.db.data.chats[m.chat].antilink = false
replyNya(`Antilink Berhasil Di Nonaktifkan !`)
} else {
let buttons = [
{ buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
]
await kirbotz.sendButtonText(m.chat, buttons, `Mode Antilink`, kirbotz.user.name, m)
}
break
case 'antiwame':
if (!m.isGroup) return replyNya(mess.group)
if (!isGroupAdmins && !isCreator) return replyNya(mess.admin)
if (!isBotAdmins) return replyNya(mess.botAdmin)
if (args[0] === "on") {
if (global.db.data.chats[m.chat].antiwame) return replyNya('Sudah Aktif Sebelumnya')
global.db.data.chats[m.chat].antiwame = true
replyNya(`Antilink Berhasil Di Aktifkan !`)
} else if (args[0] === "off") {
if (!global.db.data.chats[m.chat].antiwame) return replyNya('Sudah Nonaktif Sebelumnya')
global.db.data.chats[m.chat].antiwame = false
replyNya(`Antilink Berhasil Di Nonaktifkan !`)
} else {
let buttons = [
{ buttonId: 'antiwame on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: 'antiwame off', buttonText: { displayText: 'Off' }, type: 1 }
]
await kirbotz.sendButtonText(m.chat, buttons, `Mode Antilink`, kirbotz.user.name, m)
}
break
case 'listgc': {
if (!m.isGroup) return replyNya(mess.group)
let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let teks = `     「 List Group Chat 」\n\nThere are ${anu.length} users using bot in group chat`
for (let i of anu) {
 let metadata = await kirbotz.groupMetadata(i)
 if (metadata.owner === "undefined") {
 loldd = false
 } else {
 loldd = metadata.owner
 }
 teks += `\n\nName : ${metadata.subject ? metadata.subject : "undefined"}\nOwner : ${loldd ? '@' + loldd.split("@")[0] : "undefined"}\nID : ${metadata.id ? metadata.id : "undefined"}\nDibuat : ${metadata.creation ? moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') : "undefined"}\nMember : ${metadata.participants.length ? metadata.participants.length : "undefined"}`
}
kirbotz.sendTextWithMentions(m.chat, teks, m)
}
break
case 'autosticker':
if (!m.isGroup) return replyNya(mess.group)
if (!isGroupAdmins && !isCreator) return replyNya(mess.admin)
if (!isBotAdmins) return replyNya(mess.botAdmin)
					if (args[0] === '1') {
					if (isAutoSticker) return replyNya('Sudah Aktif Sebelumnya')
					autosticker.push(from)
					fs.writeFileSync('./Database/autosticker.json', JSON.stringify(autosticker))
replyNya(`Autosticker Berhasil Di Aktifkan !`)
					} else if (args[0] === '0') {
					autosticker.splice(from, 1)
						fs.writeFileSync('./Database/autosticker.json', JSON.stringify(autosticker))
replyNya(`Autosticker Berhasil Di Nonaktifkan !`)
					} else {
let buttons = [
{ buttonId: 'autosticker 1', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: 'autosticker 0', buttonText: { displayText: 'Off' }, type: 1 }
]
await kirbotz.sendButtonText(m.chat, buttons, `Mode Autosticker`, kirbotz.user.name, m)
}
					break
case 'group': case 'grup': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === 'close'){
await kirbotz.groupSettingUpdate(m.chat, 'announcement').then((res) => replyNya(`Sukses Menutup Group`)).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'open'){
await kirbotz.groupSettingUpdate(m.chat, 'not_announcement').then((res) => replyNya(`Sukses Membuka Group`)).catch((err) => reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
{ buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
]
await kirbotz.sendButtonText(m.chat, buttons, `Mode Group`, kirbotz.user.name, m)
}
}
break
case 'apakah':{
if (!m.isGroup) throw mess.group
if (args.length < 1) return replyNya(`Contoh : ${prefix}apakah aku jelek`)
query = args.join(" ")
naon = ['Iya','Tidak','Mungkin']
random = naon[Math.floor(Math.random() * (naon.length))]
tz = `Pertanyaan = ${command} ${query}
Jawaban = ${random}`
replyNya(tz)
}
break
case 'goblokcek': case 'jelekcek': case 'gaycek':
case 'lesbicek':case 'gantengcek': case 'cantikcek':case 'begocek': case 'suhucek':case 'pintercek':
case 'jagocek':case 'nolepcek':case 'babicek':case 'bebancek':case 'baikcek':
case 'jahatcek':case 'anjingcek':case 'haramcek':case 'pakboycek':
case 'pakgirlcek':case 'sangecek': case 'bapercek':case 'fakboycek':case 'alimcek':case 'suhucek':
case 'fakgirlcek':case 'kerencek':case 'wibucek':case 'pasarkascek':
if (args.length < 1) return replyNya(`Contoh : ${prefix + command} KirBotz`)
cantik = body.slice(1)
const eyy =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const yn = eyy[Math.floor(Math.random() * eyy.length)]
kirbotz.sendMessage(m.chat, { text: `${yn}%` }, { quoted: fakekirbotz })
break
case 'jadian': {
if (!m.isGroup) throw mess.group
let member = participants.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `Ciee Yang Jadian💖 Jangan Lupa Pajak Jadiannya Yaa🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let menst = [orang, jodoh]
let buttons = [
{ buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
]
await kirbotz.sendButtonText(m.chat, buttons, jawab, kirbotz.user.name, m, {mentions: menst})
}
break
case 'bisakah':
if (!m.isGroup) throw mess.group
if (args.length < 1) return replyNya(`Contoh : ${prefix}bisakah aku terbang`)
query = args.join(" ")
naon = ['Iya','Tidak','Mungkin']
random = naon[Math.floor(Math.random() * (naon.length))]
tt = `Pertanyaan = ${command} ${query}
Jawaban : ${random}`
replyNya(tt)
break
case 'kapankah':
if (!m.isGroup) throw mess.group
if (args.length < 1) return replyNya(`Contoh : ${prefix}kapankah aku menikah`)
query = args.join(" ")
no = `${Math.floor(Math.random() * 100)}`
naon = ['Jam lagi','Hari lagi','Minggu lagi','Bulan lagi','Tahun lagi']
random = naon[Math.floor(Math.random() * (naon.length))]
kapan = `Pertanyaan = ${command} ${query}
Jawaban : ${no} ${random}`
replyNya(kapan)
break      	   
case 'rate':
if (!m.isGroup) throw mess.group
if (args.length < 1) return replyNya(`Contoh : ${prefix}rate aku ganteng`)
random = `${Math.floor(Math.random() * 100)}`
rating = `Persentase : ${random}%`
replyNya(rating)
break
case 'setppgc': {
if (!m.isGroup) throw mess.group
if (!isAdmins) throw mess.admin
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
let media = await kirbotz.downloadAndSaveMediaMessage(quoted)
await kirbotz.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
replyNya(mess.success)
}
break
case 'setname': case 'setsubject': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) throw 'Text ?'
await kirbotz.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
}
break
case 'setdesc': case 'setdesk': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) throw 'Text ?'
await kirbotz.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
}
break
case 'add': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await kirbotz.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'kick': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await kirbotz.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'tagall': {
if (!m.isGroup) throw mess.group
if (!q) throw `Teks?`
let teks = `══✪〘 *👥 Tag All* 〙✪══\n\n${q ? q : ''}\n`
for (let mem of participants) {
teks += `➲ @${mem.id.split('@')[0]}\n`
}
kirbotz.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: fakekirbotz })
}
break
case 'hidetag': {
if (!m.isGroup) throw mess.group
if (!isAdmins) throw mess.admin
kirbotz.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: fakekirbotz })
}
break
case 'promote': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await kirbotz.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'demote': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await kirbotz.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
if (!m.quoted && !text) throw `Kirim/Reply Teks Dengan Caption ${prefix + command}`
ter = command[1].toLowerCase()
tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
replyNya(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
break
case 'jooxplay':
if (!isPrem) return replyPremium(mess.premium)
if (args.length == 0) return replyNya(`Example: ${prefix + command} Melukis Senja`)
sticWait(from)
                    query = args.join(" ")
                    ina = await fetchJson(`https://api.lolhuman.xyz/api/jooxplay?apikey=${lolkey}&query=${query}`)
                    ani = ina.result
                    ini_txt = `Title : ${ani.info.song}\n`
                    ini_txt += `Artists : ${ani.info.singer}\n`
                    ini_txt += `Duration : ${ani.info.duration}\n`
                    ini_txt += `Album : ${ani.info.album}\n`
                    ini_txt += `Uploaded : ${ani.info.date}\n`
                    ini_txt += `Lirik :\n ${ani.lirik}\n`
                    fol = await getBuffer(ani.image)
                    kirbotz.sendMessage(m.chat, { image: fol, caption: ini_txt }, { quoted: fakekirbotz})                  
                    get_audio = await getBuffer(ani.audio[0].link)
                    kirbotz.sendMessage(m.chat, {audio: get_audio, mimetype: 'audio/mpeg', fileName: `${ani.title}.mp3`}, { quoted : fakekirbotz })
                    break
case 'play':
if (!isPrem) return replyPremium(mess.premium)
if (args.length < 1) return replyNya(`Kirim perintah ${command} query\nContoh : ${command} dj sad`)
sticWait(from)
await sendPlay(from, q)
break
case 'ytmp4': case 'ytvideo': {
if (!isPrem) return replyPremium(mess.premium)
let { ytv } = require('./Lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
let quality = args[1] ? args[1] : '360p'
let media = await ytv(text, quality)
if (media.filesize >= 100000) return replyNya('File Melebihi Batas '+util.format(media))
kirbotz.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `✇ Title : ${media.title}\n✇ File Size : ${media.filesizeF}\n✇ Url : ${isUrl(text)}\n✇ Ext : MP4\n✇ Resolusi : ${args[1] || '360p'}` }, { quoted: fakekirbotz })
}
break
case 'ytmp3': case 'ytaudio': {
if (!isPrem) return replyPremium(mess.premium)
let { yta } = require('./Lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(text, quality)
if (media.filesize >= 100000) return replyNya('File Melebihi Batas '+util.format(media))
kirbotz.sendImage(m.chat, media.thumb, `✇ Title : ${media.title}\n✇ File Size : ${media.filesizeF}\n✇ Url : ${isUrl(text)}\n✇ Ext : MP3\n✇ Resolusi : ${args[1] || '128kbps'}`, m)
kirbotz.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: fakekirbotz })
}
break
case 'speed':{
let timestamp = speed()
let latensi = speed() - timestamp
await sendBut5nya(`${latensi.toFixed(4)} _Detik_`)
}
break
case 'runtime':{
await sendBut5nya(`${runtime(process.uptime())}`)
}
break
case 'ping': case 'botstatus': case 'statusbot': {
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Detik_ \n ${oldd - neww} _Miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
replyNya(respon)
}
break
case 'ssweb':
if (!q) throw `Link Nya?`
sticWait(from)
kirbotz.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/ssweb?apikey=${lolkey}&url=${q}`}})
break
case 'xnxxsearch':
if (!isPrem) return replyPremium(mess.premium)
                    if (args.length == 0) return replyNya(`Example: ${prefix + command} Japanese`)
                    sticWait(from)
                    query = args.join(" ")
                    csksyu = await fetchJson(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=${lolkey}&query=${query}`)
                    csksyz = csksyu.result
                    ini_txt = ""
                    for (var x of csksyz) {
                        ini_txt = `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Uploader : ${x.uploader}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
anu = `${ini_txt}───────────────\n\n┌ ◪ *DOWNLOAD*
└ ${prefix}xnxxvideo [link]`
kirbotz.sendMessage(from, { text: anu }, { quoted: fakekirbotz })
break
              case 'spotifysearch':
              if (!isPrem) return replyPremium(mess.premium)
                    if (args.length == 0) return replyNya(`Example: ${prefix + command} Melukis Senja`)
                    sticWait(from)
                    query = args.join(" ")
                    kirt = await fetchJson(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkey}&query=${query}`)
                    haye = kirt.result
                    ini_txt = ""
                    for (var x of haye) {
                        ini_txt = `Title : ${x.title}\n`
                        ini_txt += `Artists : ${x.artists}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Preview : ${x.preview_url}\n`
                    }
                    replyNya(ini_txt)
                    break
case 'xnxxvideo':
if (!isPrem) return replyPremium(mess.premium)
if (args.length == 0) return replyNya(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
sticWait(from)
                    query = args.join(" ")
                    kohr = await fetchJson(`https://api.lolhuman.xyz/api/xnxx?apikey=${lolkey}&url=${query}`)
                    kohl = kohr.result
                    ini_txt = `Title : ${kohl.title}\n`
                    ini_txt += `Duration : ${kohl.duration}\n`
                    ini_txt += `View : ${kohl.view}\n`
                    ini_txt += `Rating : ${kohl.rating}\n`
                    ini_txt += `Like : ${kohl.like}\n`
                    ini_txt += `Dislike : ${kohl.dislike}\n`
                    ini_txt += `Comment : ${kohl.comment}\n`
                    ini_txt += `Tag : ${kohl.tag.join(", ")}\n`
                    ini_txt += `Description : ${kohl.description}\n`
                    ini_txt += "Link : \n"
                    ini_link = kohl.link
                    for (var x of ini_link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    fott = await getBuffer(kohl.thumbnail)
                    await kirbotz.sendMessage(m.chat, { image: fott, caption: ini_txt }, { quoted: fakekirbotz})                  
                    break
case 'tiktokmp3': case 'tiktokaudio': {
if (!isPrem) return replyPremium(mess.premium)
                if (!text) throw 'Masukkan Query Link!'
                let anu = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${lolkey}&url=${text}`)
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await kirbotz.sendMessage(m.chat, buttonMessage, { quoted: fakekirbotz })
                kirbotz.sendMessage(m.chat, { audio: anu, mimetype: 'audio/mpeg'}, { quoted: msg })
            }
break
case 'tiktok': case 'tiktoknowm': {
if (!isPrem) return replyPremium(mess.premium)
if (!text) throw 'Masukkan Query Link!'
sticWait(from)
anu = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${lolkey}&url=${text}`)
let message = await prepareWAMessageMedia({ video : { url: anu.result.link } }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
videoMessage: message.videoMessage,
hydratedContentText: `Download From ${text}`,
hydratedFooterText: `Klik Button Di Bawah`,
hydratedButtons: [{ urlButton: { displayText: 'Source Video', url: `${text}` } },
{ quickReplyButton: { displayText: '⇄   ◃◃   ⅠⅠ   ▹▹   ↻', id: `${prefix}tiktokaudio ${text}` } }]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'yts': case 'ytsearch':
if (!isPrem) return replyPremium(mess.premium)
if (args.length < 1) return replyNya(`Contoh:\n${command} bukti Virgoun`)
let list_rows = [];
let yts = require("yt-search")
const data = await yts(q);
for(let a of data.all) {
list_rows.push({
title: a.title, description: `Channel: ${a.author.name} | Durasi: ${a.duration}`, rowId: `${prefix}play ${a.url}`
})
}
    const button = {
        title: `Hasil Pencarian Dari ${q}`,
        description: "Silahkan Tap Tombol Dibawah!",
        footerText: `Create by KirBotz`,
        buttonText: 'Tap Disini!',
        listType: 'SINGLE_SELECT',
        sections: [
            {
                title: "Hasil Pencarian", 
                rows: list_rows
            }
        ]
        }
        const templateList = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ "listMessage": button }), {});
        kirbotz.relayMessage(m.chat, templateList.message, { messageId: templateList.key.id });
break
case 'hentai':
case 'ahegao':
case 'ass':
case 'bdsm':
case 'cuckold':
case 'cum':
case 'ero':
case 'femdom':
case 'foot':
case 'gangbang':
case 'glasses':
case 'jahy':
case 'masturbation':
case 'orgy':
case 'panties':
case 'pussy':
case 'thighs':
case 'yuri':{
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
let cndn = await fetchJson(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/${command}.json`)
let random = cndn[Math.floor(Math.random() * cndn.length)]
kirbotz.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: fakekirbotz })
}
break
case 'wallpaperislami':{
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
let kcle = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/Islamic.json`)
let random = kcle[Math.floor(Math.random() * kcle.length)]
kirbotz.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: fakekirbotz })
}
break
case 'wallpaperinori':{
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
let kuxe = await fetchJson(`https://raw.githubusercontent.com/qisyana/senku/main/storages/inori-pic.json`)
let random = kuxe[Math.floor(Math.random() * kuxe.length)]
kirbotz.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: fakekirbotz })
}
break
case 'wallpapercyber':{
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
let xpwl = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/CyberSpace.json`)
let random = xpwl[Math.floor(Math.random() * xpwl.length)]
kirbotz.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: fakekirbotz })
}
break
case 'waifu':
case 'loli':
case 'husbu':
case 'milf':
case 'cosplay':
case 'wallml':{
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
let eek = await fetchJson(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)
let random = eek[Math.floor(Math.random() * eek.length)]
kirbotz.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: fakekirbotz })
}
break
case 'wallpaperteknologi':{
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
let toth = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/Technology.json`)
let random = toth[Math.floor(Math.random() * toth.length)]
kirbotz.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: fakekirbotz })
}
break
case 'wallpaperanime':{
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
let tozs = await fetchJson(`https://raw.githubusercontent.com/qisyana/senku/main/storages/anime-wallpaper-pic.json`)
let random = tozs[Math.floor(Math.random() * tozs.length)]
kirbotz.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: fakekirbotz })
}
break
case 'wallpapergamer':{
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
let toew = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/GameWallp.json`)
let random = toew[Math.floor(Math.random() * toew.length)]
kirbotz.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: fakekirbotz })
}
break
case 'wallpaperprogamer':{
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
let xeke = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/Programming.json`)
let random = xeke[Math.floor(Math.random() * xeke.length)]
kirbotz.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: fakekirbotz })
}
break
case 'wallpapermeme':{
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
let crkr = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/meme.json`)
let random = crkr[Math.floor(Math.random() * crkr.length)]
kirbotz.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: fakekirbotz })
}
break
case 'wallpaper':{
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
let crpe = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/Mountain.json`)
let random = crpe[Math.floor(Math.random() * crpe.length)]
kirbotz.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: fakekirbotz })
}
break
case 'ppcouple': {
if (!isPrem) return replyPremium(mess.premium)
sticWait(from)
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
kirbotz.sendMessage(m.chat, { image: { url: random.male }, caption: `Foto Couple Male` }, { quoted: fakekirbotz })
kirbotz.sendMessage(m.chat, { image: { url: random.female }, caption: `Fofo Couple Female` }, { quoted: fakekirbotz })
}
break
case 'tiktokstalk':{
if (!isPrem) return replyPremium(mess.premium)
if (args.length == 0) return replyNya(`Example: ${prefix + command} namatt`)
sticWait(from)
ttk = args.join(" ")
csksyb = await fetchJson(`http://api.lolhuman.xyz/api/stalktiktok/${ttk}?apikey=${lolkey}`)
csksyl = csksyb.result
txt = `Username : ${csksyl.username}\n`
txt += `Nickname : ${csksyl.nickname}\n`
txt += `Bio : ${csksyl.bio}\n`
txt += `Followers : ${csksyl.followers}\n`
txt += `Following : ${csksyl.followings}\n`
txt += `Likes : ${csksyl.likes}\n`
txt += `Vidio : ${csksyl.video}\n`
buffer = await getBuffer(csksyl.user_picture)
let message = await prepareWAMessageMedia({ image: buffer }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: txt,
hydratedFooterText: 'Created By KirBotz',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/KirBotz'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6287705048235'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'githubstalk':{
if (!isPrem) return replyPremium(mess.premium)
if (args.length == 0) return replyNya(`Example: ${prefix + command} namagh`)
sticWait(from)
ghk = args.join(" ")
csksdke = await fetchJson(`http://api.lolhuman.xyz/api/github/${ghk}?apikey=${lolkey}`)
csksdah = csksdke.result
txt = `Full : ${csksdah.name}\n`
txt += `Followers : ${csksdah.followers}\n`
txt += `Following : ${csksdah.following}\n`
txt += `Publick : ${csksdah.public_repos}\n`
txt += `Public Gits : ${csksdah.public_gists}\n`
txt += `User : ${csksdah.user}\n`
txt += `Compi : ${csksdah.company}\n`
txt += `Lokasi : ${csksdah.location}\n`
txt += `Email : ${csksdah.email}\n`
txt += `Bio : ${csksdah.bio}\n`
buffer = await getBuffer(csksdah.avatar)
let message = await prepareWAMessageMedia({ image: buffer }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: txt,
hydratedFooterText: 'Created By KirBotz',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/KirBotz'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6287705048235'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'igstalk':{
if (!isPrem) return replyPremium(mess.premium)
if (args.length == 0) return replyNya(`Example: ${prefix + command} namaig`)
sticWait(from)
igk = args.join(" ")
deshd = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${igk}?apikey=${lolkey}`)
deshxs = deshd.result
txt = `Link : https://www.instagram.com/${deshxs.username}\n`
txt += `Full : ${deshxs.fullname}\n`
txt += `Post : ${deshxs.posts}\n`
txt += `Followers : ${deshxs.followers}\n`
txt += `Following : ${deshxs.following}\n`
txt += `Bio : ${deshxs.bio}\n`
buffer = await getBuffer(deshxs.photo_profile)
let message = await prepareWAMessageMedia({ image: buffer }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: txt,
hydratedFooterText: 'Created By KirBotz',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/KirBotz'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6287705048235'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'ytstalk':
if (!isPrem) return replyPremium(mess.premium)
if (args.length == 0) return replyNya(`Example: ${prefix + command} namachannel`)
sticWait(from)
ytk = args.join(" ")
anu = await fetchJson(`http://api.lolhuman.xyz/api/ytchannel?apikey=${lolkey}&query=${ytk}`)
cari = '↻↻↻↻↻\n'
for (let search of anu.result) {
cari += `Chanel : ${search.channel_name}\nTentang : ${search.channel_about}\nCreated : ${search.channel_created}\nLink : https://youtu.com/channel/${search.channel_id}\n•••••••••••••••••\n`
}
replyNya(cari.trim())
break
case 'spotify':
if (!isPrem) return replyPremium(mess.premium)
                    if (args.length == 0) return replyNya(`Example: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
                    sticWait(from)
                    url = args[0]
                    let get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotify?apikey=${lolkey}&url=${url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Artists : ${get_result.artists}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Popularity : ${get_result.popularity}\n`
                    ini_txt += `Preview : ${get_result.preview_url}\n`
let thumbnail = await getBuffer(get_result.thumbnail)
kirbotz.sendMessage(m.chat, { image: thumbnail, caption: ini_txt }, { quoted: fakekirbotz})
break
case 'pacarserti':{
if (!isPrem) return replyPremium(mess.premium)
if (args.length == 0) return reply(`Contoh: ${prefix + command} Nama1 Nama2`)
sticWait(from)
txt1 = args[0]
txt2 = args[1]
wehw = await getBuffer(`https://api.lolhuman.xyz/api/pacarserti?apikey=${lolkey}&name1=${txt1}&name2=${txt2}`)
let message = await prepareWAMessageMedia({ image: wehw }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: `Nih Kak`,
hydratedFooterText: 'Created By KirBotz',
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/KirBotz'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6287705048235'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'randomnama':
if (!isPrem) return replyPremium(mess.premium)
anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=${lolkey}`)
replyNya(anu.result)
break
default:
}

if (budy.startsWith('=>')) {
if (!isCreator) return reply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))
}
}

if (budy.startsWith('>')){
console.log('Eval Owner>_<', 'green')
if (!isCreator) return reply(mess.owner)
try {
return kirbotz.sendMessage(from, { text: JSON.stringify(eval(budy.slice(2)),null,'\t') }, { quoted: m })
} catch(err) {
e = String(err)
reply(e)
}
}

if (budy.startsWith('$')){
if (!isCreator) return reply(mess.owner)
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}

} catch (err) {
m.reply(util.format(err))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})