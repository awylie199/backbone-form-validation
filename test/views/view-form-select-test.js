/* eslint no-multi-str: 0 */

'use strict';

const Backbone = require('Backbone'),
    Model = require('../../src/models/model-form-select'),
    model = new Model(),
    View = require('../../src/views/view-form-select')(model),
    view = new View();

describe('SelectView', function() {

    it('should be a Backbone View', function() {

        chai.expect(view).to.be.instanceof(Backbone.View);

    });

    it('should use a Select Backbone Model', function() {

        chai.expect(view.model).to.be.instanceof(Model);

    });

    it('should change it\'s model value on change of option', function() {

        view.$el.append(
            '<option value="apple" selected="selected"></option>'
        );
        view.$el.append(
            '<option value="orange"></option>'
        );


        view.$el.val('orange');
        view.$el.trigger('change');
        chai.expect(model.get('value')).to.equal('orange');

    });

});
