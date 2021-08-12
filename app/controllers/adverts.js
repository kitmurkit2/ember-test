import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['sort_by'],
  sort_by: null,
  results: null,

  actions: {
    filterByParams(param) {
      this.set('sort_by', 'used-total-count');

      if (param.length) {
        return this.store.query('advert', { filter: param, sort_by: this.sort_by });
      } else {
        return this.store.query('advert', { sort_by: this.sort_by });
      }
    },

    importantAction() {
      alert('Good job!');
    }
  }
});
