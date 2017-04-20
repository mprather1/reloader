import ModelView from './ModelView'
import Model from '../models/Model'

const ModelsView = Backbone.Marionette.CollectionView.extend({
  initialize: function (options) {
    const {socket} = options
    
    socket.on('post', (data) => {
      this.collection.add(new Model({ name: data.name, attribute: data.attribute }))
    })
  },
  tagName: 'ul',
  childView: ModelView
})

export default ModelsView