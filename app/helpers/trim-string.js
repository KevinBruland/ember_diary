import Ember from 'ember';

export function trimString(string) {
    if (string[0].length > 100) {
        var trimmed = string[0].substring(0, 100) + '...';
        return trimmed;
    }
    return string[0];
}

export default Ember.Helper.helper(trimString);
