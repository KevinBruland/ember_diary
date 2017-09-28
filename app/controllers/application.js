import Ember from 'ember';

export default Ember.Controller.extend({
    //Sorting dateStr with YYYY-MM-DD format
    sortProps: ['dateStr:desc'],
    sortedEntries: Ember.computed.sort('model', 'sortProps')
});
