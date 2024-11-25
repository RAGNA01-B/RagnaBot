// Función creada por Katashi Fukushima. Está a libre edición de videos para el envío del saludo

let handler = async (m, { conn, usedPrefix, command}) => {
let pp = ['https://qu.ax/Tvpv.mp4', 'https://qu.ax/Tvpv.mp4','https://qu.ax/Tvpv.mp4']
//let pp2 = 'https://tinyurl.com/294oahv9'
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '😸 *Etiqueta al usuario que quieres saludar.* 👋\nEjemplo:\n.saludar @RagnaBot'
let name2 = conn.getName(who)
let name = conn.getName(m.sender)

await conn.sendMessage(m.chat, { video: { url: pp.getRandom() }, gifPlayback: true, caption: `*${name}*` + ' está saludando a' + ` *${name2}*` + ' 🙌', contextInfo: fakeChannel }, { quoted: m })
}
handler.help = ['saludar <@user>']
handler.tags = ['fun']
handler.command = ['saludar', 'hola']
export default handler
