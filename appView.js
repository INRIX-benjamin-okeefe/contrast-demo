define(function (require) {
    'use strict';

    const
        ModuleView = require('common/platform/ModuleView'),
        TextView = require('common/ui/TextView'),
        Button = require('common/ui/Button'),
        Pane = require('common/ui/Pane');

    return class extends ModuleView {
        beforeStart () {
            return super.beforeStart().then(() => {
                const pane = new Pane({ id: 'home-view-pane' });
                const contrastTextView = new TextView({ id: 'contrast-text-view' });
                const viewInChamberButton = new Button({
                    text: 'View in Chamber',
                    click: () => {
                        this.goto('contrast-chamber');                        
                    }
                });

                this.getContrast().then(response => {
                    contrastTextView.setText(response);
                });

                pane.addChild(contrastTextView);
                pane.addChild(viewInChamberButton);
                pane.render(this.getView());
            });
        }
    };
});
