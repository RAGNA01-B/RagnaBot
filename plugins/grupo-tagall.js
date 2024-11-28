let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*𝓜𝓔𝓝𝓢𝓐𝓙𝓔:* ${pesan}`
let teks = `*𝓐𝓒𝓣𝓘𝓥𝓔𝓝𝓢𝓔 𝓐𝓛𝓥 𝓜𝓞𝓒𝓗𝓞𝓢 𝓘𝓝𝓢𝓔𝓡𝓥𝓘𝓑𝓛𝓔𝓢\n${oi}\n\n*𝓑𝓞𝓣𝓢*\n`
for (let mem of participants) {
teks += `🔥 @${mem.id.split('@')[0]}\n`}
teks += `𝑅𝒜𝒢𝒩𝒜𝐵𝒪𝒯`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) } )
}
handler.command = /^(tagall|invocar|t|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true
export default handler
