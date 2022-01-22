let handler = async m => m.reply(`
┏ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇       *「 DONASI💰 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ❖    XL=0877-1143-7007
┃ ❖   TRI=0895-7042-17116
┃ 
┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
`.trim()) // Tambah sendiri kalo mau
//handler.help = ['donasi']
//handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
