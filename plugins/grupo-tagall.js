let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*MENSAJE:* ${pesan}`
let teks = `*ACTIVENSE RAGNABOT LOS INVOCA*\n${oi}\n\n*INSERVIBLES*\n`
for (let mem of participants) {
teks += `🔥 @${mem.id.split('@')[0]}\n`}
teks += `RagnaBot`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) } )
}
handler.command = /^(|t|todos|inv)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true
export default handler
