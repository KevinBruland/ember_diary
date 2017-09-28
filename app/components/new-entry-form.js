import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['new-entry-container'],
    //Give component access to store to create new record on form submission.
    store: Ember.inject.service(),
    init() {
        this._super(...arguments);
        //Initializes the ember-paper date picker value with a date in the required YYYY-MM-DD format.
        var newDate = new Date();
        var yyyy = newDate.getFullYear();
        var mm = newDate.getMonth() + 1;
        var dd = newDate.getDate();
        var formattedDate =
            yyyy +
            '-' +
            (mm <= 9 ? '0' : '') + mm +
            '-' +
            (dd <= 9 ? '0' : '') + dd;
        this.set('entryDate', formattedDate);
        
        //Set default mood to 'happy' for radio inputs.
        this.set('mood', 'sentiment-very-satisfied');        
    },
    actions: {
        submitEntry() {            
            let newEntry = this.get('store').createRecord('entry', {
                title: this.get('title'),
                body: this.get('body'),
                //Testing against length of > 150. The trim-string helper trims at > 100. This is to prevent awkward cases of trimming small amounts of text, like a couple letters at the end of a body post.
                expandable: this.get('body').length > 150 ? true : false,
                dateStr: this.get('entryDate'),
                mood: this.get('mood')
            });
            newEntry.save();            
            this.set('body', '');
            this.set('title', '');
        }
    }
});
