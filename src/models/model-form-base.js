'use strict';

const Backbone = require('Backbone');

module.exports = Backbone.Model.extend({
    idAttribute: 'id',
    defaults: {
        name: '',
        label: '',
        value: '',
        errorMessages: [],
        errorDisplayMsg: 'Please complete the form input.',
        required: false
    },
    /**
     * Return Value of Form Component
     * @return {mixed}                  Form Input Value
     */
    getValue() {

        return this.get('value');

    },
    /**
     * Set Error Message for Input
     * @param {string} message          Error message
     * @return {void}
     */
    setError(message) {

        let messages = this.get('errorMessages');

        messages.push(message);
        this.set('errorMessages', messages);

    }
});
