class Patterns extends Backbone.Collection
  constructor: (options) ->
    super options

    @model = PatternModel

  initialize: ->
    @url = '#/blacklist'