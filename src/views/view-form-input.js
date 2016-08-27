'use strict';

const _ = require('underscore'),
    Backbone = require('Backbone');

module.exports = function(model) {

    return Backbone.View.extend({
        model: model,
        tagName: 'input',
        initialize() {

            _.bindAll(this, 'changeValue');
            this.listenToOnce(this.model, 'remove', this.remove);

        },
        events: {
            change: 'changeValue',
            keyup: 'changeValue'
        },
        /**
         * On change, update the Input's value
         * @return {void}
         */
        changeValue() {

            this.model.set('value', this.$el.val());

        }
    });

};
