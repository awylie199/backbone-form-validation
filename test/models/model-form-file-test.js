/* eslint no-unused-expressions: 0 */

'use strict';

const Model = require('../../src/models/model-form-file');

let fileModel = {};

describe('ModelFormFile', function() {

    before(function() {

        fileModel = new Model();

    });

    it('should be a Backbone Model', function() {

        chai.expect(fileModel).to.be.instanceof(global.Backbone.Model);

    });

    it('should have the correct model attribute values', function() {

        chai.expect(fileModel.attributes).to.have.property('type', 'file');
        chai.expect(fileModel.attributes).to.have.property('uploadedFileCount', 0);
        chai.expect(fileModel.attributes).to.have.property('requiredFileCount', 1);

    });

    it('should not validate against model criteria', function() {

        chai.expect(fileModel.validate()).to.be.false;

    });

    it('should validate the number of files already uploaded', function() {

        fileModel.set('uploadedFileCount', 5);
        chai.expect(fileModel.validate()).to.be.true;

    });

});
