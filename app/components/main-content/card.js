import Component from '@ember/component';
import {computed} from '@ember/object';
import {equal} from '@ember/object/computed';

export default Component.extend({
  classNames: ['card'],
  isSaved: false,
  isLoaded: true,
  // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
  options: ['description', 'image', 'videocam', 'picture_as_pdf', 'gif', 'link'],
  isArticle: equal('advert.type', 5),

  displayedTags: computed('advert.tags.[]', function(){
    let tags = this.get('advert.tags');
    let maxAllowedTagsWidth = 15;
    let displayedTagsWidth = 0;

    return tags.filter((item) => {
      displayedTagsWidth += item.length + 1;
      return maxAllowedTagsWidth > displayedTagsWidth;
    })
  }),

  nonDisplayedTags: computed('displayedTags', function(){
    let tags = this.get('advert.tags');

    return tags.filter((item) => {
      return !this.displayedTags.includes(item);
    })
  }),

  actions: {
    markSaved() {
      return this.toggleProperty('isSaved');
    }
  }
});
