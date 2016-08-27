'use strict';

let _ = require('underscore'),
    Backbone = require('Backbone');

module.exports = function(model) {

    return Backbone.View.extend({
        model: model,
        tagName: 'select',
        initialize() {

            _.bindAll(this, 'optionChange');
            this.listenToOnce(this.model, 'remove', this.remove);

        },
        events: {
            change: 'optionChange'
        },
        /**
         * Handler for When the Select Model's Change Event is Triggered
         * @return {void}
         */
        optionChange() {

            this.model.set('value', this.$el.val());

        }
    });

};
