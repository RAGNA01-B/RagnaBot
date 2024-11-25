let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, isMods, isOwner }) => {
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_, code] = link.match(linkRegex) || []

if (!code) throw `${mg}🙌 𝘿𝙀𝘽𝙀 𝙄𝙉𝙂𝙍𝙀𝙎𝘼𝙍 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 | 𝙔𝙊𝙐 𝙈𝙐𝙎𝙏 𝙀𝙉𝙏𝙀𝙍 𝘼 𝙇𝙄𝙉𝙆\n😼 *Ingrese el enlace de un grupo.*\n*Enter the link of a group.*\n\n*𝙀𝙅𝙀𝙈𝙋𝙇𝙊 | 𝙀𝙓𝘼𝙈𝙋𝙇𝙀*\n*#unete ${nn}*\n\n*#join ${nnn}*`

if ( isMods || isOwner || m.fromMe) {
m.reply(`*RAGNABOT 𝙎𝙀 𝙃𝘼 𝙐𝙉𝙄𝘿𝙊 𝘼𝙇 𝙂𝙍𝙐𝙋𝙊!! ✅*

*RAGNABOT 𝙃𝘼𝙎 𝙅𝙊𝙄𝙉𝙀𝘿 𝙏𝙃𝙀 𝙂𝙍𝙊𝙐𝙋!! ✅*

‼️ 𝙎𝙄 𝘿𝙀 𝙇𝙊 𝘾𝙊𝙉𝙏𝙍𝘼𝙍𝙄𝙊 𝙉𝙊 𝙎𝙀 𝘼 𝙐𝙉𝙄𝘿𝙊 𝘼 𝙏𝙐 𝙂𝙍𝙐𝙋𝙊, 𝙑𝙀𝙍𝙄𝙁𝙄𝘾𝘼 𝙌𝙐𝙀 𝙉𝙊 𝙎𝙀 𝙃𝘼𝙇𝙇𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝘿𝙊 𝙊 𝙎𝘼𝙇𝙄𝘿𝙊 𝙍𝙀𝘾𝙄𝙀𝙉𝙏𝙀𝙈𝙀𝙉𝙏𝙀 𝙀𝙇 𝘽𝙊𝙏

‼️ 𝙄𝙁 𝙊𝙏𝙃𝙀𝙍𝙒𝙄𝙎𝙀 𝙃𝙀 𝙃𝘼𝙎 𝙉𝙊𝙏 𝙅𝙊𝙄𝙉𝙀𝘿 𝙔𝙊𝙐𝙍 𝙂𝙍𝙊𝙐𝙋, 𝙑𝙀𝙍𝙄𝙁𝙔 𝙏𝙃𝘼𝙏 𝙃𝙀 𝙃𝘼𝙎 𝙉𝙊𝙏 𝘽𝙀𝙀𝙉 𝘿𝙀𝙇𝙀𝙏𝙀𝘿 𝙊𝙍 𝙇𝙀𝙁𝙏 𝙁𝙍𝙊𝙈 𝙏𝙃𝙀 𝙂𝙍𝙊𝙐𝙋.`)
await delay(5 * 5000)
let res = await conn.groupAcceptInvite(code)
} else {
const data = global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)

await delay(5 * 5000)
for (let jid of data.map(([id]) => [id] + '@s.whatsapp.net').filter(v => v != conn.user.jid)) m.reply(`${iig}╭══•───────────────•══╮\n┃ 📧 *𝙎𝙊𝙇𝙄𝘾𝙄𝙏𝙐𝘿 𝙋𝘼𝙍𝘼 𝙐𝙉 𝙂𝙍𝙐𝙋𝙊*\n┃ 📧 *𝙂𝙍𝙊𝙐𝙋 𝙍𝙀𝙌𝙐𝙀𝙎𝙏*\n╰══•───────────────•══╯\n\n*👤 𝙎𝙊𝙇𝙄𝘾𝙄𝙏𝘼𝙉𝙏𝙀 | 𝘼𝙋𝙋𝙇𝙄𝘾𝘼𝙉𝙏*\n` + ' wa.me/' + m.sender.split('@')[0] + '\n\n*🔮 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 | 𝙂𝙍𝙊𝙐𝙋 𝙇𝙄𝙉𝙆*\n ' + link, jid)

m.reply(`${ag}*✅ TU ENLACE SE ENVIO A MI PROPIETARIO*\n*✅ YOUR LINK WAS SENT TO MY OWNER*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n⚠️ *SU GRUPO SERÁ EVALUADO Y QUEDARÁ A DE MI PROPIETARIO SI ${gt} SE UNE A TU GRUPO*\n\n⚠️ *YOUR GROUP WILL BE EVALUATED AND OWNED BY MY OWNER IF ${gt} JOINS YOUR GROUP*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n *❕ES POSIBLE QUE SU SOLICITUD DE UNIR AL BOT A TU GRUPO SEA RECHAZADA POR LAS SIGUIENTES CAUSAS:*\n\n*❕IT IS POSSIBLE THAT YOUR REQUEST TO JOIN THE BOT INTO YOUR GROUP WILL BE REJECTED FOR THE FOLLOWING CAUSES:*\n*1️⃣ El Bot está Saturado.*\n*The Bot is Saturated.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n2️⃣ *El Bot fue eliminado del Grupo.*\n*The Bot was removed from the Group.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n3️⃣ *El Grupo no cumple con las Normativas de ${gt}*\n*The Group does not comply with the Regulations of ${gt}*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n4️⃣ *El enlace del grupo se restableció.*\n*The group link was restored.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n5️⃣ *No se agrega a Grupos según Mi Propietario(a).*\n*Not added to Groups by My Owner*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n💌 *La solicitud puede tardar Horas en ser Respondida. Por favor Tener Paciencia. Gracias*\n*The request may take hours to be answered. Please be patient. Thank you*`)}}

handler.help = ['join [chat.whatsapp.com]']
handler.tags = ['owner']
handler.command = /^unete|join|nuevogrupo|unir|unite|unirse|entra|entrar$/i 
handler.register = true
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
