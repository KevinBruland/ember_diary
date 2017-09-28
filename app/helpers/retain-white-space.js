import Ember from 'ember';

export function retainWhiteSpace(string) {
    //Replace new lines with <br/> elements to retain the spaces for entries.
    return string[0].replace(/\n/g, "<br />");
}

export default Ember.Helper.helper(retainWhiteSpace);
