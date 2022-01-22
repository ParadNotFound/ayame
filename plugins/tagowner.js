let handler = async (m, { conn, text }) => {
    let name = ('62895704217116@s.whatsapp.net')
    let panggil = `
    @${name.replace(/@.+/, '')} Sedang Sibuk, Jangan ganggu :v
    `.trim()
    let mentionedJid = [name]
  conn.reply(m.chat, panggil, m, { contextInfo: { mentionedJid }})

}
handler.customPrefix = /(P|p)arad/i
handler.command = new RegExp

module.exports = handler
