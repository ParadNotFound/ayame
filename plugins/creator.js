function handler(m) {
  // Ini cuma contoh, jgn di uncomment -_-
  // F this.sendContact(m.chat, '62815158600891', 'Nurutomo', m)
  this.sendContact(m.chat, '62895704217116', 'ParadNotFound, m)
}
//handler.help = ['owner', 'creator']
//handler.tags = ['info']
handler.command = /^(owner|creator)$/i
handler.register = true

module.exports = handler
