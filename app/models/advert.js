import DS from 'ember-data';
const { Model, attr } = DS;

export default Model.extend({
  // title: attr(),
  // owner: attr(),
  // city: attr(),
  // category: attr(),
  // image: attr(),
  // bedrooms: attr(),
  // description: attr()


  type: attr(),
  title: attr(),
  'used-total-count': attr(),
  'created-at': attr(),
  description: attr(),
  tags: attr(),
  'preview-image': attr(),
  'external-link': attr(),
  'original-file-src': attr(),
});
