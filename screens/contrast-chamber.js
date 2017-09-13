define(require => {
    const ListChamber = require('common/platform/chamber/ListChamber');
    
    return class extends ListChamber {
        data () {
            const getContrastPromises = [
                this.moduleView.getContrast(),
                this.controller.getContrast(),
                this.getContrast()
            ];

            return new Promise((resolve, reject) => {
                Promise.all(getContrastPromises).then(values => {
                    resolve([
                        { text: `${values[0]} - from the ModuleView` },
                        { text: `${values[1]} - from the ModuleController` },
                        { text: `${values[2]} - from the Chamber` },
                    ]);
                });
            });
        }
    }
});