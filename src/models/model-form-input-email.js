'use strict';

const _ = require('underscore'),
    FormInputModel = require('./model-form-input');

module.exports = FormInputModel.extend({
    initialize() {

        FormInputModel.prototype.initialize.apply(this, arguments);

    },
    defaults: _.extend({}, FormInputModel.prototype.defaults, {
        type: 'email',
        min: 3,
        pattern: '\\S+@\\S'
    }),
    /**
     * Validates Model's Requirements
     * @return {bool}      True if Model is Valid
     */
    validate() {

        this.set('errorMessages', []);

        let result = false,
            parentModel = Object.getPrototypeOf(this);

        parentModel.validateLength.call(this);

        this.validateEmail();

        if (!this.get('errorMessages').length) {

            result = true;

        }

        return result;

    },
    /**
     * Validate Email against Model's Criteria for a Email Input and Set
     * Error Messages
     * @return {void}
     */
    validateEmail() {

        let pattern = this.get('pattern'),
            value = String(this.get('value')),
            regexPattern = new RegExp(pattern, 'i'),
            result = regexPattern.test(value);

        if (!result) {

            // Empty other error messages, as this supersedes (e.g. length)
            this.set('errorMessages', []);
            this.setError.call(this, 'Please enter a valid email address.');

        }

    }
});
