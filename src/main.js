'use strict';

if (typeof global.BackboneModelForms === 'undefined') {

    global.BackboneFormValidation = {
        form: require('./collections/collection-form'),
        models: {
            file: require('./models/model-form-file'),
            input: require('./models/model-form-input'),
            inputEmail: require('./models/model-form-input-email'),
            inputPassword: require('./models/model-form-password'),
            money: require('./models/model-form-money'),
            radioCheckbox: require('./models/model-form-radio-checkbox'),
            recaptcha: require('./models/model-form-recaptcha'),
            select: require('./models/model-form-select'),
            textarea: require('./models/model-form-textarea')
        },
        views: {
            input: require('./views/view-form-input'),
            inputMoney: require('./views/view-form-input-money'),
            select: require('./views/view-form-select')
        }
    };

} else {

    throw new Error('BackboneModelForms is already defined in the global scope.');

}
