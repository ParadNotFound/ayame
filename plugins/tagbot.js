let handler  = async (m, { conn, isOwner }) => {
if (!isOwner) throw false
let name = conn.getName(m.sender)
let me = conn.user.name
let teks = `
${pickRandom([` _Saya disini Bos_`, ` _Hadir bos_`, ` _Apakah Bos mencari saya??_`, ` _Yapp Bos`])}
`.trim()
conn.fakeReply(m.chat, teks, '0@s.whatsapp.net', `${me}  Love  B o s s`, 'status@broadcast')
}
handler.customPrefix = /6287711437007/
handler.command = new RegExp

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
