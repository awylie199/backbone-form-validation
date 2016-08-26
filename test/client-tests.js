'use strict';

global.$ = global.jQuery = require('jquery');
global._ = require('underscore');
global.Backbone = require('Backbone');
global.Backbone.$ = global.jQuery;
global.chai = require('chai');
global.expect = global.chai.expect;
global.describe = require('mocha').describe;

require('../src/utility/get-attributes');

require('./utility/get-attributes-test.js');

require('./collections/collection-form-test.js');

require('./models/model-form-base-test.js');
require('./models/model-form-file-test.js');
require('./models/model-form-input-email-test.js');
require('./models/model-form-input-test.js');
require('./models/model-form-money-test.js');
require('./models/model-form-password-test.js');
require('./models/model-form-radio-checkbox-test.js');
require('./models/model-form-recaptcha-test.js');
require('./models/model-form-select-test.js');
require('./models/model-form-textarea-test.js');

require('./views/view-form-input-money-test.js');
require('./views/view-form-input-test.js');
require('./views/view-form-select-test.js');
