define(require => {
    const ListChamber = require('common/platform/chamber/ListChamber');
    
    return class extends ListChamber {
        data () {
            return [
                { text: this.getContrast() }
            ];
        }
    }
});