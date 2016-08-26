/* eslint no-undef: 0 */

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
        min: 0,
        errorDisplayMsg: 'Please complete the reCAPTCHA.'
    }),
    idAttribute: 'id',
    /**
     * Validate Form Input Model Criteria
     * @return {bool}               True if no error messages form form input
     */
    validate() {

        let result = false;

        this.set('errorMessages', []);
        this.validateRecaptcha();

        if (!this.get('errorMessages').length) {

            result = true;

        }

        return result;

    },
    /**
     * Validate Google Recaptcha on Client Side
     * @return {void}
     */
    validateRecaptcha() {

        let recaptchaId = window.recaptchaIds[this.get('id')];

        if (typeof grecaptcha === 'object') {

            if (!grecaptcha.getResponse(recaptchaId).length) {

                this.setError.call(this, this.get('errorDisplayMsg'));

            }

        }

    }
});
