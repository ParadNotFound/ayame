let handler = async (m, { conn, text }) => {
  let name = ('62895704217116@s.whatsapp.net')
  let panggil = `
  Jangan Tag Dia\n\nDia Sedang Sibuk :v
  `.trim()
  let mentionedJid = [name]
 conn.reply(m.chat, panggil, m, { contextInfo: { mentionedJid }})
  
}
handler.customPrefix = /62895704217116/i
handler.command = new RegExp

module.exports = handler
