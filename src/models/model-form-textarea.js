'use strict';

const FormBaseInputModel = require('./model-form-input');

module.exports = FormBaseInputModel.extend({
    idAttribute: 'id',
    defaults: {
        value: '',
        rows: 2,
        min: 0
    }
});
