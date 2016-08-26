'use strict';

const _ = require('underscore'),
    FormBaseModel = require('./model-form-base');

module.exports = FormBaseModel.extend({
    initialize() {

        FormBaseModel.prototype.initialize.apply(this, arguments);

    },
    defaults: _.extend({}, FormBaseModel.prototype.defaults, {
        // Required number of radio selections
        requiredNumber: 0,
        checkedOptions: []
    }),
    idAttribute: 'id',
    /**
     * Validates Model's Requirements
     * @return {bool}      True if Model is Valid
     */
    validate() {

        let result = false;

        this.set('errorMessages', []);
        this.validateOptionCount();

        if (!this.get('errorMessages').length) {

            result = true;

        }

        return result;

    },
    /**
     * Validate Radio against Required Number of Options
     * @return {void}
     */
    validateOptionCount() {

        let radioCount = this.get('checkedOptions').toArray()
            .some(function($option) {

                return $option.is(':checked');

            }),
            requiredNumber = this.get('requiredNumber'),
            errorMessage = 'options';

        if (+requiredNumber === 1) {

            errorMessage = 'option';

        }

        if (radioCount < this.get('requiredNumber')) {

            this.setError.call(
                this,
                `Please select at least ${requiredNumber} ${errorMessage}`
            );

        }

    }
});
