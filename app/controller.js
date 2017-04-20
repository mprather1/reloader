import Marionette from 'marionette'
import Models from './collections/Models'
import ModelsView from './views/ModelsView'

const socket = require('socket.io-client')('http://shintech.ninja:55460')

const Controller = Marionette.Object.extend({
  initialize: function (options) {
    const models = new Models()
    
    models.fetch({
      success: (data) => {
        console.log('successfully fetched models...')
      },
      failure: (err) => {
        console.log(err)
      }
    })
    
    this.app = options.app
    this.app.view.showChildView('main', new ModelsView({ 
      collection: models,
      socket: socket
    }))

    
    socket.on('connect', () => {
      console.log('connected')
    })
  }
})

export default Controller