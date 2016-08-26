/* eslint no-console: 0 */

'use strict';

const serializer = require('form-serialize'),
    Backbone = require('Backbone'),
    _ = require('underscore');

const $ = global.jQuery ? global.jQuery :
    (console.log('jQuery is not defined in the global scope.'), {});

module.exports = function(Model) {

    return Backbone.Collection.extend({
        model: Model,
        initialize() {

            _.bindAll(
                this,
                'validateClient',
                'getRawValidationErrors',
                'getValidationErrorsHtml',
                'appendValidationErrors',
                'clearValidationErrors'
            );
            this.validated = false;

        },
        /**
         * Validate Form Values on Client
         * @return {void}
         */
        validateClient() {

            let validity = this.models.map(model => {

                return model.validate();

            });

            return validity.every(valid => {

                return valid;

            });

        },
        /**
         * Return All Current Form Input Model Validation Errors
         * @return {Object[]}      Input Model Elem with Error Messages Array
         */
        getRawValidationErrors() {

            return this.models.reduce(function(prev, inputModel) {

                let inputModelErrors = inputModel.get('errorMessages'),
                    $inputModel = $(`#${inputModel.get('id')}`);

                if (inputModelErrors.length) {

                    prev.push({
                        $input: $inputModel,
                        errors: inputModelErrors
                    });

                }

                return prev;

            }, []);

        },
        /**
         * Get Form Validation Errors Wrapped in Unordered List HTML
         * @return {Object[]}     HTML Unordered List of Latest Validation Errors
         *                        with Corresponding jQuery Form Input Element
         */
        getValidationErrorsHtml() {

            return this.getRawValidationErrors()
                .reduce(function(prev, modelErrors) {

                    // Turn error strings into HTML
                    let errorHTML = modelErrors.errors
                        .reduce(function(prevError, validationErrors) {

                            prevError += `<li>${_.escape(validationErrors)}</li>`;
                            return prevError;

                    }, '');

                    modelErrors.errorsHTML = `<ul class="validation-error list-unstyled">${errorHTML}</ul>`;
                    prev.push(modelErrors);
                    return prev;

            }, []);

        },
        /**
         * Clear All Existing Validation Errors for Collections Form Input Models
         * @return {void}
         */
        clearValidationErrors() {

            this.models.forEach(function(validationModel) {

                let $model = $(`#${validationModel.get('id')}`);
                $model.siblings('.validation-error').remove();

            });

        },
        /**
         * Append Validation Error HTML to Corresponding Form Input
         * @return {void}
         */
        appendValidationErrors() {

            this.clearValidationErrors();
            this.getValidationErrorsHtml().forEach(function(errorInfo) {

                errorInfo.$input.after(errorInfo.errorsHTML);

            });

        },
        /**
         * Combine Signup and Immersion Forms for Submission
         * @param {string}  formId   Form Element Id
         * @return {Object}          Serialized Form Input
         */
        getSerializedData(formId) {

            return serializer(document.getElementById(formId), {
                hash: true,
                disabled: true,
                empty: false
            });

        }
    });

};
