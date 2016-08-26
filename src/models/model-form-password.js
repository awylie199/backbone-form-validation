'use strict';

const FormInputModel = require('./model-form-input');

module.exports = FormInputModel.extend({
    defaults: {
        type: 'password',
        min: 6,
        value: ''
    }
});
