'use strict';

const _ = require('underscore'),
    FormBaseModel = require('./model-form-base');

module.exports = FormBaseModel.extend({
    initialize() {

        FormBaseModel.prototype.initialize.apply(this, arguments);

    },
    defaults: _.extend({}, FormBaseModel.prototype.defaults, {
        errorDisplayMsg: 'Please select an option.'
    }),
    idAttribute: 'id',
    /**
     * Validate Form Select Model Critiera
     * @return {bool}               True if no error messages form form input
     */
    validate() {

        let result = false;

        this.set('errorMessages', []);
        this.validateSelected();

        if (!this.get('errorMessages').length) {

            result = true;

        }

        return result;

    },
    /**
     * Validate that a Option has Been Selected And it Has Form Value
     * @return {void}
     */
    validateSelected() {

        let selectedValue = this.get('value');

        if (typeof selectedValue !== 'string' || selectedValue.length === 0) {

            this.setError.call(this, this.model.get('errorDisplayMsg'));

        }

    }
});
