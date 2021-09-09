import Event from '@ioc:Adonis/Core/Event'
const Pusher = require('pusher')
import Env from '@ioc:Adonis/Core/Env'

let pusher = new Pusher({
  appId: Env.get('PUSHER_APP_ID', ''),
  key: Env.get('PUSHER_KEY', ''),
  secret: Env.get('PUSHER_SECRET', ''),
  cluster: Env.get('PUSHER_CLUSTER'),
  useTLS: true,
})

Event.on('todo.created', async (todo) => {
  pusher.trigger('adonis-channel', 'todo.created', {
    todo,
  })
})
