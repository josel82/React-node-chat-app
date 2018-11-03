const moment = require('moment');


module.exports = () => {
    return {
        getTimestamp: () => { return moment().format()}
    }
}