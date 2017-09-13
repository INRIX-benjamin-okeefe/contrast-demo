define(function (require) {
    'use strict';

    const
        ModuleView = require('common/platform/ModuleView'),
        TextView = require('common/ui/TextView'),
        Button = require('common/ui/Button'),
        Pane = require('common/ui/Pane');

    return class extends ModuleView {
        init () {
            return super.init().then(() => {
                this.goto('contrast-chamber');
            });
        }
    };
});
