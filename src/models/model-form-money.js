'use strict';

const _ = require('underscore'),
    FormBaseModel = require('./model-form-input');

module.exports = FormBaseModel.extend({
    idAttribute: 'id',
    defaults: {
        min: 1,
        max: 2000,
        currencySymbol: '$'
    },
    initialize() {

        _.bindAll(this, 'stripMoney');

        this.on('change:value', this.stripMoney);

        FormBaseModel.prototype.initialize.apply(this, arguments);

    },
    /**
     * Money Value can be stored with prefixed dollar signs.
     *
     * We only want decimal values recorded for validation purposes
     *
     * @return {void}
     */
    stripMoney() {

        let currencySymbol = this.get('currencySymbol'),
            value = String(this.get('value')),
            parsedValue = parseFloat(value);

        if (Number.isNaN(parsedValue)) {

            let newValue = '';

            // Catch a Currency Prefix
            if (value.charAt(0) === currencySymbol) {

                newValue = parseFloat(value.slice(1));

                if (Number.isNaN(newValue)) {

                    newValue = '';

                } else {

                    newValue = Math.min(newValue, this.model.get('max'));

                }

            }

            this.set('value', +newValue);

        }

    }
});
