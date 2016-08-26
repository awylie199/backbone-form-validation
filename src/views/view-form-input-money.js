'use strict';

const _ = require('underscore'),
    InputModel = require('../models/model-form-input'),
    inputModel = new InputModel(),
    InputView = require('./view-form-input')(inputModel);

module.exports = function(model) {

    return InputView.extend({
        model: model,
        events: {
            change: 'moneyChange'
        },
        initialize() {

            _.bindAll(this, 'formatPrice', 'moneyChange');
            InputView.prototype.initialize.apply(this, arguments);

        },
        /**
         * Override Default Setting of Value on Model
         *
         * We want to store number value on model, but display
         * a dollar sign.
         *
         * @param {Object}  ev          Change Event
         * @return {void}
         */
        moneyChange(ev) {

            if (ev.currentTarget.value !== '') {

                let value = this.formatPrice.call(this, this.$el.val()),
                    currencySymbol = this.model.get('currencySymbol');

                this.model.set('value', value);

                if (value && String(value).charAt(0) !== currencySymbol) {

                    this.$el.val(
                        `${currencySymbol}${parseFloat(value).toFixed(2)}`
                    );

                } else {

                    this.$el.val(value);

                }

            } else {

                this.model.set('value', '');
                this.$el.val('');

            }

        },
        /**
         * Format Price for Dollars and Decimals
         * @param  {string}  value     Current input value
         * @return {number}            Cleaned Model Value
         */
        formatPrice(value) {

            let price = value,
                formattedPrice = parseFloat(price),
                maxPrice = this.model.get('max'),
                currencySymbol = this.model.get('currencySymbol');

            // Try simple check for $ sign at start
            if (Number.isNaN(formattedPrice)) {

                if (String(value).charAt(0) === currencySymbol) {

                    formattedPrice = Math.min(
                        maxPrice,
                        parseFloat(String(price).slice(1))
                    );
                    formattedPrice = formattedPrice.toFixed(2);

                } else {

                    formattedPrice = '';

                }

            }

            formattedPrice = Math.min(formattedPrice, maxPrice);

            return formattedPrice;

        }
    });

};
