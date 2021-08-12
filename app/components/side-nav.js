import Component from '@ember/component';

export default Component.extend({
  tagName: 'nav',
  classNames: ['side-bar__container'],
  selection: null,
  // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
  options: [{name: 'Template', icon: 'description', id: 0},
    {name: 'Image', icon: 'image', id: 1},
    {name: 'Video', icon: 'videocam', id: 2},
    {name: 'PDF', icon: 'picture_as_pdf', id: 3},
    {name: 'GIF', icon: 'gif', id: 4},
    {name: 'Article', icon: 'link', id: 5}],

  init() {
    this._super(...arguments);
    this.filter([]).then((results) => this.set('results', results));
  },

  _map_to_ids(items) {
    return items.map(i => i.id);
  },

  actions: {
    updateSelection(newSelection /*, value, operation*/) {
      let values_ids = this._map_to_ids(newSelection);
      this.filter(values_ids).then((results) => this.set('results', results));
    },

    check_cb(newValue, context) {
      context.set('value', newValue);
    }
  }
});
