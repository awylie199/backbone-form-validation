'use strict';

const _ = require('underscore'),
    BaseModel = require('./model-form-base');

module.exports = BaseModel.extend({
    initialize() {

        BaseModel.prototype.initialize.apply(this, arguments);

    },
    defaults: _.extend({}, BaseModel.prototype.defaults, {
            type: 'file',
            uploadedFileCount: 0,
            requiredFileCount: 1
    }),
    idAttribute: 'id',
    /**
     * Validates Model's Requirements
     * @return {bool}      True if Model is Valid
     */
    validate() {

        let result = false;

        this.set('errorMessages', []);
        this.validateFileCount();

        if (!this.get('errorMessages').length) {

            result = true;

        }

        return result;

    },
    /**
     * Validates Number of Successfully Uploaded Files Against Required Amount
     * @return {void}
     */
    validateFileCount() {

        let uploadedFiles = +this.get('uploadedFileCount'),
            requiredFiles = +this.get('requiredFileCount'),
            count = uploadedFiles === 1 ? 'file' : 'files';

        if (uploadedFiles < requiredFiles) {

            this.setError.call(this, `Please upload at least ${requiredFiles} ${count}`);

        }

    }
});
