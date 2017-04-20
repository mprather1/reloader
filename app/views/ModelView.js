const ModelView = Backbone.Marionette.View.extend({
  template: require('../templates/model-view-template.html'),
  tagName: 'li',
})

export default ModelView