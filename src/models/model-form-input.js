'use strict';

const _ = require('underscore'),
    FormBaseModel = require('./model-form-base');

module.exports = FormBaseModel.extend({
    initialize() {

        FormBaseModel.prototype.initialize.apply(this, arguments);

    },
    defaults: _.extend({}, FormBaseModel.prototype.defaults, {
        value: '',
        type: 'text',
        min: 1
    }),
    idAttribute: 'id',
    /**
     * Validate Form Input Model Criteria
     * @return {bool}               True if no error messages form form input
     */
    validate() {

        let result = false;

        this.set('errorMessages', []);
        this.validateLength();

        if (!this.get('errorMessages').length) {

            result = true;

        }

        return result;

    },
    /**
     * Validates Length of Form Input
     * @return {void}
     */
    validateLength() {

        let value = this.getValue().toString(),
            min = +this.get('min'),
            max = +this.get('max');

        if (max && value.length > max) {

            this.setError.call(
                this,
                `Please enter a value less than ${max} characters long.`
            );

        }

        if (min && value.length < min) {

            this.setError.call(
                this,
                `Please enter a value more than ${min} characters long.`
            );

        }

    }
});
