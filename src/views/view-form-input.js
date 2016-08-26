'use strict';

const _ = require('underscore'),
    Backbone = require('Backbone');

module.exports = function(model) {

    return Backbone.View.extend({
        model: model,
        tagName: 'input',
        initialize() {

            _.bindAll(this, 'keydown');
            this.listenToOnce(this.model, 'remove', this.remove);

        },
        events: {
            change: 'keydown',
            keyup: 'keydown'
        },
        /**
         * On change, update the Input's value
         * @return {void}
         */
        keydown() {

            this.model.set('value', this.$el.val());

        }
    });

};
